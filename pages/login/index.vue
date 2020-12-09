<template>
    <div class="signup-page">
        <div class="signup-card">
            <form action="">
                <h2>Register an account</h2>
                <div class="input-field">
                    <p>Username</p>
                    <input v-model="form.username" type="text" />
                </div>
                <div class="input-field">
                    <p>Email</p>
                    <input v-model="form.email" type="text" />
                </div>
                <div class="input-field">
                    <p>Password</p>
                    <input v-model="form.password" type="text" />
                </div>
                <div class="input-field" style="margin-bottom:24px">
                    <p>Retype password</p>
                    <input v-model="form.retypedPassword" type="text" />
                </div>
                <button @click="submit" type="submit">Submit</button>
            </form>
            <p :style="loading ? 'display: block;' : 'display: none;'">Loading...</p>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";

interface Form {
    username: string;
    email: string;
    password: string;
    retypedPassword: string;
}

@Component
export default class Auth extends Vue {
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
        console.log(this.form);
        setTimeout(() => {
            this.loading = false;
        }, 1000);
        return;
    }
}
</script>

<style lang="scss">
.signup-card {
    width: 500px;
    height: auto;
    background-color: $white1;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 150px;
    padding: 32px;
    box-sizing: border-box;
    border-radius: 8px;
    box-shadow: 0px 0px 23px -1px rgba(255, 127, 17, 0.1);
}
</style>
