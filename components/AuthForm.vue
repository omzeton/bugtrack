<template>
    <div class="signup-card">
        <form action="">
            <h2>
                {{ registrationForm ? "Register an account" : "Login" }}
            </h2>
            <div class="input-field">
                <p>
                    {{ registrationForm ? "Username" : "Username or Email" }}
                </p>
                <input v-model="form.username" type="text" />
            </div>
            <div v-if="registrationForm" class="input-field">
                <p>Email</p>
                <input v-model="form.email" type="text" />
            </div>
            <div class="input-field">
                <p>Password</p>
                <input v-model="form.password" type="text" />
            </div>
            <div v-if="registrationForm" class="input-field">
                <p>Retype password</p>
                <input v-model="form.retypedPassword" type="text" />
            </div>
            <button @click="submit" type="submit" class="signup-card__submit">
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
    width: 300px;
    height: auto;
    background-color: $white1;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 150px;
    padding: 32px;
    box-sizing: border-box;
    box-shadow: 0px 0px 23px -1px rgba(255, 127, 17, 0.1);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    &__submit {
        margin-top: 32px;
    }
}
</style>
