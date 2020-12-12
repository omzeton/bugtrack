import { Module, VuexModule, Mutation, Action } from "vuex-module-decorators";

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
    public isLoggedIn: boolean = false;
    public userInfo: TestUserData = {
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
    @Mutation
    public updateUserInfo(data: TestUserData) {
        this.userInfo = { ...data };
    }
}
