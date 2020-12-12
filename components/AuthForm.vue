<template>
    <div class="signup-card rounded">
        <ValidationObserver ref="observer">
            <form class="bg-white p-8 rounded" action="">
                <h2 class="text-center text-lg pt-4 font-roboto font-bold text-4xl">
                    {{ registrationForm ? "Register an Account" : "Login" }}
                </h2>
                <div class="input-field mt-8">
                    <label class="block">
                        <span class="text-gray-700 text-xs font-nunito">Username</span>
                        <ValidationProvider v-slot="{ errors }" rules="required">
                            <input
                                type="text"
                                class="form-input bg-green-100 text-sm font-nunito focus:ring-2 focus:ring-green-100 outline-none focus:bg-green-200 mt-1 block w-full px-0 py-2 pl-2 border-box"
                                placeholder="Username"
                                v-model="form.username"
                                @focus="error = ''"
                            />
                            <span v-if="errors[0]" class="text-red-500 font-nunito text-xs mt-2">
                                {{ "❌ " + errors[0] }}
                            </span>
                        </ValidationProvider>
                    </label>
                </div>
                <div v-if="registrationForm" class="input-field mt-2">
                    <label class="block">
                        <span class="text-gray-700 text-xs font-nunito">Email</span>
                        <ValidationProvider v-slot="{ errors }" rules="required">
                            <input
                                type="email"
                                class="form-input bg-green-100 text-sm font-nunito focus:ring-2 focus:ring-green-100 outline-none focus:bg-green-200 mt-1 px-0 py-2 pl-2 block w-full border-box"
                                placeholder="Email"
                                v-model="form.email"
                                @focus="error = ''"
                            />
                            <span v-if="errors[0]" class="text-red-500 font-nunito text-xs mt-2">
                                {{ "❌ " + errors[0] }}
                            </span>
                        </ValidationProvider>
                    </label>
                </div>
                <div class="input-field mt-2">
                    <label class="block">
                        <span class="text-gray-700 text-xs font-nunito">Password</span>
                        <ValidationProvider v-slot="{ errors }" rules="required">
                            <input
                                type="password"
                                class="form-input bg-green-100 text-sm font-nunito focus:ring-2 focus:ring-green-100 outline-none focus:bg-green-200 mt-1 px-0 py-2 pl-2 block w-full border-box"
                                placeholder="Password"
                                v-model="form.password"
                                @focus="error = ''"
                            />
                            <span v-if="errors[0]" class="text-red-500 font-nunito text-xs mt-2">
                                {{ "❌ " + errors[0] }}
                            </span>
                        </ValidationProvider>
                    </label>
                </div>
                <div v-if="registrationForm" class="input-field mt-2">
                    <label class="block">
                        <span class="text-gray-700 text-xs font-nunito">Repeat password</span>
                        <ValidationProvider v-slot="{ errors }" rules="required">
                            <input
                                type="password"
                                class="form-input bg-green-100 text-sm font-nunito focus:ring-2 focus:ring-green-100 outline-none focus:bg-green-200 mt-1 px-0 py-2 pl-2 block w-full border-box"
                                placeholder="Repeat password"
                                v-model="form.retypedPassword"
                                @focus="error = ''"
                            />
                            <span v-if="errors[0]" class="text-red-500 font-nunito text-xs mt-2">
                                {{ "❌ " + errors[0] }}
                            </span>
                        </ValidationProvider>
                    </label>
                </div>
                <div class="flex items-center">
                    <button
                        @click="submit"
                        type="submit"
                        class="font-roboto signup-card__submit mt-6 bg-green-200 hover:bg-green-300 hover:text-black focus:outline-none focus:shadow-none py-2 px-4 rounded text-gray-600 shadow-lg"
                    >
                        Submit
                    </button>
                    <transition name="fade">
                        <Loader v-if="loading" class="ml-4 mb-16" />
                    </transition>
                    <transition name="fade">
                        <p v-if="error" class="font-nunito bg-red-200 py-2 px-4 text-red-600 rounded mt-6 ml-8 shadow-lg">
                            {{ "❌ " + error }}
                        </p>
                    </transition>
                </div>
            </form>
        </ValidationObserver>
    </div>
</template>

<script lang="ts">
import { ValidationObserver, ValidationProvider } from "vee-validate";
import { Vue, Component, Prop, namespace } from "nuxt-property-decorator";
import Loader from "@/components/Loader.vue";
import { RegistrationForm, LoginForm, HTMLForm, User } from "../models/models";

const api = namespace("api");
const user = namespace("user");

@Component({
    components: {
        ValidationProvider,
        ValidationObserver,
        Loader,
    },
})
export default class Auth extends Vue {
    @Prop({ default: false })
    readonly registrationForm!: boolean;

    @api.Action
    public REGISTER_USER!: (data: RegistrationForm) => any;
    @api.Action
    public LOGIN_USER!: (data: LoginForm) => any;
    @user.Action
    public UPDATE_USER_INFO!: (data: User & { token: string }) => void;

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

            console.log({ res });

            if (!this.registrationForm) this.UPDATE_USER_INFO(res.data.data.logIn);
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
    box-shadow: 0px 0px 23px -1px rgba(13, 255, 73, 0.2);
    border: 1px solid $orange;
}
</style>
