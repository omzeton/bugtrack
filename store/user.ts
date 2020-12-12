import { Module, VuexModule } from "vuex-module-decorators";
import * as models from "~/models/models";

@Module({
    stateFactory: true,
    namespaced: true,
})
export default class User extends VuexModule {
    public isLoggedIn: boolean = false;
    public userInfo: models.User = {
        _id: "",
        email: "",
        password: "",
        username: "",
    };

    get IS_LOGGED_IN(): boolean {
        return this.isLoggedIn;
    }
}
