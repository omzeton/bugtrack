<template>
    <div class="signup-card accent-shadow">
        <ValidationObserver ref="observer">
            <form class="p-8" action="">
                <h2 class="text-white text-lg pt-4 font-roboto font-bold text-4xl">
                    {{ registrationForm ? "Register an Account" : "Login" }}
                </h2>
                <div class="input-field mt-8 mb-6">
                    <label class="block">
                        <span class="text-form text-xs font-nunito">Username</span>
                        <ValidationProvider v-slot="{ errors }" rules="required">
                            <input
                                type="text"
                                class="form-input accent-shadow-focus text-sm font-nunito mt-1 block w-full px-0 py-2 pl-2 border-box"
                                placeholder="Username"
                                v-model="form.username"
                                @focus="error = ''"
                                autofocus
                                ref="firstInput"
                            />
                            <transition name="fade">
                                <span v-if="errors[0]" class="input-error text-red-500 font-nunito text-xs mt-2">
                                    {{ errors[0] }}
                                </span>
                            </transition>
                        </ValidationProvider>
                    </label>
                </div>
                <div v-if="registrationForm" class="input-field mt-2 mb-6">
                    <label class="block">
                        <span class="text-form text-xs font-nunito">Email</span>
                        <ValidationProvider v-slot="{ errors }" rules="required">
                            <input
                                type="email"
                                class="form-input accent-shadow-focus text-sm font-nunito mt-1 px-0 py-2 pl-2 block w-full border-box"
                                placeholder="Email"
                                v-model="form.email"
                                @focus="error = ''"
                            />
                            <transition name="fade">
                                <span v-if="errors[0]" class="input-error text-red-500 font-nunito text-xs mt-2">
                                    {{ errors[0] }}
                                </span>
                            </transition>
                        </ValidationProvider>
                    </label>
                </div>
                <div class="input-field mt-2 mb-6">
                    <label class="block">
                        <span class="text-form text-xs font-nunito">Password</span>
                        <ValidationProvider v-slot="{ errors }" rules="required">
                            <input
                                type="password"
                                class="form-input accent-shadow-focus text-sm font-nunito mt-1 px-0 py-2 pl-2 block w-full border-box"
                                placeholder="Password"
                                v-model="form.password"
                                @focus="error = ''"
                            />
                            <transition name="fade">
                                <span v-if="errors[0]" class="input-error text-red-500 font-nunito text-xs mt-2">
                                    {{ errors[0] }}
                                </span>
                            </transition>
                        </ValidationProvider>
                    </label>
                </div>
                <div v-if="registrationForm" class="input-field mt-2">
                    <label class="block">
                        <span class="text-form text-xs font-nunito">Repeat password</span>
                        <ValidationProvider v-slot="{ errors }" rules="required">
                            <input
                                type="password"
                                class="form-input accent-shadow-focus text-sm font-nunito mt-1 px-0 py-2 pl-2 block w-full border-box"
                                placeholder="Repeat password"
                                v-model="form.retypedPassword"
                                @focus="error = ''"
                            />
                            <transition name="fade">
                                <span v-if="errors[0]" class="input-error text-red-500 font-nunito text-xs mt-2">
                                    {{ errors[0] }}
                                </span>
                            </transition>
                        </ValidationProvider>
                    </label>
                </div>
                <div class="flex items-center mt-12 mb-4">
                    <Button :callback="submit" :isLoading="loading" type="submit">
                        Submit
                    </Button>
                    <transition name="fade">
                        <p v-if="error" class="font-nunito bg-red-600 text-white text-xs py-2 px-4 rounded ml-8 shadow-lg error-shadow">{{ error }}!</p>
                    </transition>
                </div>
                <nuxt-link class="form-link text-xs font-nunito" v-if="registrationForm" to="/login">
                    Switch to login form >
                </nuxt-link>
                <nuxt-link class="form-link text-xs font-nunito" v-else to="/register">
                    Switch to registration form >
                </nuxt-link>
            </form>
        </ValidationObserver>
    </div>
</template>

<script lang="ts">
import { ValidationObserver, ValidationProvider } from "vee-validate";
import { Vue, Component, Prop, namespace } from "nuxt-property-decorator";
import Loader from "@/components/Loader.vue";
import Button from "@/components/Button.vue";
import { RegistrationForm, LoginForm, HTMLForm, User } from "@/models";

const auth = namespace("auth");
const user = namespace("user");

@Component({
    components: {
        ValidationProvider,
        ValidationObserver,
        Loader,
        Button,
    },
})
export default class Auth extends Vue {
    @Prop({ default: false })
    readonly registrationForm!: boolean;

    @auth.Action
    public REGISTER_USER!: (data: RegistrationForm) => RegistrationForm;
    @auth.Action
    public LOGIN_USER!: (data: LoginForm) => LoginForm;
    @user.Mutation
    public updateUserInfo!: (data: User & { token: string }) => void;

    form: HTMLForm = {
        username: "",
        email: "",
        password: "",
        retypedPassword: "",
    };
    loading: boolean = false;
    error: string = "";

    get observer(): Vue & { validate: () => boolean } {
        return this.$refs.observer as Vue & { validate: () => boolean };
    }

    async submit(e: Event): Promise<void> {
        try {
            e.preventDefault();
            this.error = "";
            this.loading = true;

            const isValid = await this.observer.validate();
            if (!isValid) {
                this.loading = false;
                this.error = "Please fill all the fields";
                return;
            }

            const { username, email, password, retypedPassword } = this.form;
            if (this.registrationForm && password !== retypedPassword) {
                this.loading = false;
                this.error = "Passwords do not match";
                return;
            }

            const route = this.registrationForm ? "/login" : "/board";

            let res;
            if (this.registrationForm) {
                res = await this.REGISTER_USER({ username, email, password });
            } else {
                res = await this.LOGIN_USER({ username, password });
            }

            if (res.data.errors) {
                this.error = res.data.errors[0].message;
                this.loading = false;
                return;
            }

            if (!this.registrationForm) this.updateUserInfo(res.data.data.logIn);
            this.$router.push(route);
        } catch (e) {
            console.log({ e });
            throw e;
        }
    }
}
</script>

<style lang="scss" scoped>
.signup-card {
    width: 450px;
    height: auto;
    position: absolute;
    left: 50%;
    top: 150px;
    transform: translateX(-50%);
    border: 1px solid $accent;
    background-color: $black3;
    border-radius: 6px;
}
.form-input {
    background-color: transparent;
    color: $accent;
    border: 1px solid $formWhite;
    border-radius: 3px;
    outline: none;
    &:focus {
        border-color: $accent;
    }
}
.form-link {
    color: $accent;
    text-decoration: underline;
}
.input-error {
    position: absolute;
}
</style>
