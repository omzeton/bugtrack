<template>
    <div class="signup-card rounded">
        <ValidationObserver>
            <form class="bg-white p-8" action="">
                <h2 class="text-center text-lg pt-4 font-roboto font-bold text-4xl">
                    {{ registrationForm ? "Register an account" : "Login" }}
                </h2>
                <div class="input-field mt-8">
                    <label class="block">
                        <span class="text-gray-700 font-nunito">Username</span>
                        <ValidationProvider v-slot="{ errors }" rules="required">
                            <input
                                type="text"
                                class="form-input text-sm font-nunito focus:ring-2 focus:ring-green-100 outline-none focus:bg-green-100 mt-1 block w-full px-0 py-2 pl-2 border-box"
                                placeholder="Username"
                                v-model="form.username"
                            />
                            <span class="text-red-400 font-nunito text-sm mt-2">
                                {{ errors[0] }}
                            </span>
                        </ValidationProvider>
                    </label>
                </div>
                <div v-if="registrationForm" class="input-field mt-4">
                    <label class="block">
                        <span class="text-gray-700 font-nunito">Email</span>
                        <ValidationProvider v-slot="{ errors }" rules="required|email">
                            <input
                                type="email"
                                class="form-input text-sm font-nunito focus:ring-2 focus:ring-green-100 outline-none focus:bg-green-100 mt-1 block w-full border-box"
                                placeholder="Email"
                                v-model="form.email"
                            />
                            <span class="text-red-400 font-nunito text-sm mt-2">
                                {{ errors[0] }}
                            </span>
                        </ValidationProvider>
                    </label>
                </div>
                <div class="input-field mt-4">
                    <label class="block">
                        <span class="text-gray-700 font-nunito">Password</span>
                        <ValidationProvider v-slot="{ errors }" rules="required">
                            <input
                                type="password"
                                class="form-input text-sm font-nunito focus:ring-2 focus:ring-green-100 outline-none focus:bg-green-100 mt-1 block w-full border-box"
                                placeholder="Password"
                                v-model="form.password"
                            />
                            <span class="text-red-400 font-nunito text-sm mt-2">
                                {{ errors[0] }}
                            </span>
                        </ValidationProvider>
                    </label>
                </div>
                <div v-if="registrationForm" class="input-field mt-4">
                    <label class="block">
                        <span class="text-gray-700 font-nunito">Repeat password</span>
                        <ValidationProvider v-slot="{ errors }" rules="required">
                            <input
                                type="password"
                                class="form-input text-sm font-nunito focus:ring-2 focus:ring-green-100 outline-none focus:bg-green-100 mt-1 block w-full border-box"
                                placeholder="Repeat password"
                                v-model="form.retypedPassword"
                            />
                            <span class="text-red-400 font-nunito text-sm mt-2">
                                {{ errors[0] }}
                            </span>
                        </ValidationProvider>
                    </label>
                </div>
                <button
                    @click="submit"
                    type="submit"
                    class="font-roboto signup-card__submit mt-6 bg-green-200 hover:bg-green-300 hover:text-black focus:outline-none py-2 px-4 rounded text-gray-600"
                >
                    Submit
                </button>
                <p v-if="loading" class="font-nunito mt-4">
                    Loading...
                </p>
                <p v-if="passwordsError" class="font-nunito text-red-400 mt-4">
                    Passwords do not match
                </p>
            </form>
        </ValidationObserver>
    </div>
</template>

<script lang="ts">
import { ValidationObserver, ValidationProvider } from "vee-validate";
import { Vue, Component, Prop, namespace } from "nuxt-property-decorator";
import { RegistrationForm, LoginForm, HTMLForm } from "../models/models";

const api = namespace("api");

@Component({
    components: {
        ValidationProvider,
        ValidationObserver,
    },
})
export default class Auth extends Vue {
    @Prop({ default: false })
    readonly registrationForm!: boolean;

    @api.Action
    public REGISTER_USER!: (data: RegistrationForm) => void;
    public LOGIN_USER!: (data: LoginForm) => void;

    form: HTMLForm = {
        username: "",
        email: "",
        password: "",
        retypedPassword: "",
    };
    loading: boolean = false;
    passwordsError: boolean = false;

    submit(e: Event): void {
        e.preventDefault();

        this.passwordsError = false;
        this.loading = true;

        if (this.form.password === this.form.retypedPassword) {
            const { username, email, password } = this.form;
            if (this.registrationForm) {
                this.REGISTER_USER({ username, email, password });
            } else {
                this.LOGIN_USER({ email, password });
            }
            return;
        }
        this.passwordsError = true;
        this.loading = false;
    }
}
</script>

<style lang="scss" scoped>
.signup-card {
    width: 400px;
    height: auto;
    position: absolute;
    left: 50%;
    top: 150px;
    transform: translateX(-50%);
    box-shadow: 0px 0px 23px -1px rgba(13, 255, 73, 0.1);
}
</style>
