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
            const payload: RegistrationForm = {
                username,
                email,
                password,
            };
            console.log({ payload });
            const response = await axios.get("http://localhost:3000/");
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
            const response = await axios.get("http://localhost:3000/");
        } catch (error) {
            throw error;
        }
    }
}
