import { Module, VuexModule, Mutation, Action } from "vuex-module-decorators";
import Cookies from "js-cookie";

interface TestUserData {
    _id: string;
    email: string;
    password: string;
    username: string;
    token: string;
}

@Module({
    stateFactory: true,
    namespaced: true,
})
export default class User extends VuexModule {
    public userInfo: TestUserData = {
        _id: "",
        email: "",
        password: "",
        username: "",
        token: "",
    };
    public userIsLoggedIn: boolean = false;

    get isLoggedIn(): boolean {
        return this.userIsLoggedIn;
    }

    @Action({ rawError: true })
    LOGOUT() {
        Cookies.remove("logged-user-id");
        this.context.commit("updateLoggedStatus", false);
    }

    // Just for testing purposes
    @Mutation
    public updateUserInfo(payload: TestUserData) {
        this.userInfo = { ...payload };
    }

    @Mutation
    public updateLoggedStatus(payload: boolean) {
        this.userIsLoggedIn = payload;
    }
}
