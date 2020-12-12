import { Module, VuexModule, Action } from "vuex-module-decorators";
import { RegistrationForm, LoginForm } from "../models/models";
import axios from "axios";

@Module({
    stateFactory: true,
    namespaced: true,
})
export default class Api extends VuexModule {
    @Action({ rawError: true })
    public async REGISTER_USER({ username, email, password }: RegistrationForm, redirect: () => void) {
        try {
            await axios.post("http://localhost:4000/graphql", {
                query: `
                    mutation registration($username:String!, $password:String!, $email:String!) {
                        registerUser(username:$username, password:$password, email:$email) {
                            username
                            email
                        }
                    }
                `,
                variables: {
                    username,
                    email,
                    password,
                },
            });
            redirect();
        } catch (error) {
            throw error;
        }
    }
    @Action({ rawError: true })
    public async LOGIN_USER({ username, password }: LoginForm, redirect: () => void) {
        try {
            const res = await axios.post("http://localhost:4000/graphql", {
                query: `
                    query($username:String!, $password:String!) {
                        logIn(username:$username, password:$password)
                    }
                `,
                variables: {
                    username,
                    password,
                },
            });
            if (res.data.data.logIn) redirect();
        } catch (error) {
            throw error;
        }
    }
}
