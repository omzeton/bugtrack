import { Module, VuexModule, Action } from "vuex-module-decorators";
import axios from "axios";

interface Payload {
    username: string;
    email: string;
    password: string;
    retypedPassword: string;
}

@Module({
    stateFactory: true,
    namespaced: true,
})
export default class Api extends VuexModule {
    @Action({ rawError: true })
    public async sendRequest(data: Payload) {
        try {
            console.log(data);
            const response = await axios.get("http://localhost:3000/");
            console.log({ response });
        } catch (error) {
            throw error;
        }
    }
}
