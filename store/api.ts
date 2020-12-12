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
            const result = await axios({
                url: "http://localhost:4000/graphql",
                method: "post",
                data: {
                    query: `
                        mutation register {
                            registerUser(username: ${username}, password: ${password}, email: ${email})
                        }
                  `,
                },
            });
            console.log({ result });
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
