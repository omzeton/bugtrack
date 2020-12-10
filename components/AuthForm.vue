<template>
    <div class="signup-card rounded">
        <form class="bg-white p-8" action="">
            <h2 class="text-center text-lg font-bold pt-8">
                {{ registrationForm ? "Register an account" : "Login" }}
            </h2>
            <div class="input-field mt-8">
                <label class="block">
                    <span class="text-gray-700">{{
                        registrationForm ? "Username" : "Username or Email"
                    }}</span>
                    <input
                        type="text"
                        class="form-input focus:ring-2 focus:ring-green-100 outline-none focus:bg-green-100 mt-1 block w-full px-0 py-2 pl-2 border-box"
                        placeholder="Username"
                        v-model="form.username"
                    />
                </label>
            </div>
            <div v-if="registrationForm" class="input-field mt-4">
                <label class="block">
                    <span class="text-gray-700">Email</span>
                    <input
                        type="email"
                        class="form-input focus:ring-2 focus:ring-green-100 outline-none focus:bg-green-100 mt-1 block w-full border-box"
                        placeholder="Email"
                        v-model="form.email"
                    />
                </label>
            </div>
            <div class="input-field mt-4">
                <label class="block">
                    <span class="text-gray-700">Password</span>
                    <input
                        type="password"
                        class="form-input focus:ring-2 focus:ring-green-100 outline-none focus:bg-green-100 mt-1 block w-full border-box"
                        placeholder="Password"
                        v-model="form.email"
                    />
                </label>
            </div>
            <div v-if="registrationForm" class="input-field mt-4">
                <label class="block">
                    <span class="text-gray-700">Repeat password</span>
                    <input
                        type="password"
                        class="form-input focus:ring-2 focus:ring-green-100 outline-none focus:bg-green-100 mt-1 block w-full border-box"
                        placeholder="Repeat password"
                        v-model="form.retypedPassword"
                    />
                </label>
            </div>
            <button
                @click="submit"
                type="submit"
                class="signup-card__submit mt-8 bg-green-200 hover:bg-green-300 hover:text-black focus:outline-none py-2 px-4 rounded text-gray-600"
            >
                Submit
            </button>
        </form>
        <p :style="loading ? 'display: block;' : 'display: none;'">
            Loading...
        </p>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, namespace } from "nuxt-property-decorator";
const api = namespace("api");

interface Form {
    username: string;
    email: string;
    password: string;
    retypedPassword: string;
}

@Component
export default class Auth extends Vue {
    @Prop({ default: false })
    readonly registrationForm!: boolean;

    @api.Action
    public sendRequest!: (data: Form) => void;

    form: Form = {
        username: "",
        email: "",
        password: "",
        retypedPassword: "",
    };
    loading: boolean = false;

    submit(e: Event): void {
        this.loading = true;
        e.preventDefault();
        this.sendRequest(this.form);
        setTimeout(() => {
            this.loading = false;
        }, 1000);
        return;
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
