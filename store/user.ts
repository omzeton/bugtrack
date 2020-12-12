import { Module, VuexModule, Mutation, Action } from "vuex-module-decorators";
import * as models from "~/models/models";

@Module({
    stateFactory: true,
    namespaced: true,
})
export default class User extends VuexModule {
    public isLoggedIn: boolean = false;
    public userInfo: models.User & { token: string } = {
        _id: "",
        email: "",
        password: "",
        username: "",
        token: "",
    };

    get IS_LOGGED_IN(): boolean {
        return this.isLoggedIn;
    }

    // Just for testing purposes
    @Action({ rawError: true })
    UPDATE_USER_INFO(data: models.User & { token: string }): void {
        console.log({ this: this });
        this.context.state.userInfo = { ...data };
    }
}
