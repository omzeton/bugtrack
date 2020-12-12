import { Module, VuexModule, Action } from "vuex-module-decorators";
import { RegistrationForm, LoginForm } from "../models/models";
import axios from "axios";

@Module({
    stateFactory: true,
    namespaced: true,
})
export default class Api extends VuexModule {
    @Action({ rawError: true })
    public async REGISTER_USER({ username, email, password }: RegistrationForm) {
        try {
            const res = await axios.post("http://localhost:4000/graphql", {
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
            console.log({ res });
        } catch (error) {
            throw error;
        }
    }
    public async LOGIN_USER({ email, password }: LoginForm) {
        try {
            const payload: LoginForm = {
                email,
                password,
            };
            console.log({ payload });
            const response = await axios.post("http://localhost:7000/graphql", payload);
        } catch (error) {
            throw error;
        }
    }
}
