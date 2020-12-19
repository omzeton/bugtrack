import { Module, VuexModule, Mutation, Action } from "vuex-module-decorators";
import * as models from "@/models";
import Cookies from "js-cookie";
import axios from "axios";

@Module({
    stateFactory: true,
    namespaced: true,
})
export default class User extends VuexModule {
    userInfo: models.User = {
        _id: "",
        email: "",
        password: "",
        username: "",
        tasks: [],
    };
    loggedIn: boolean = false;

    get isLoggedIn(): boolean {
        return this.loggedIn;
    }
    get GET_USER_DATA(): models.User {
        return this.userInfo;
    }
    get GET_USER_TASKS(): models.Task[] {
        return this.userInfo.tasks;
    }

    @Action({ rawError: true })
    LOGOUT() {
        Cookies.remove("logged-user-id");
        this.context.commit("updateLoggedStatus", false);
    }
    @Action({ rawError: true })
    async FETCH_USER_DATA(): Promise<models.User> {
        try {
            const cookieId = JSON.parse(Cookies.get("logged-user-id"));
            const res = await axios.post("http://localhost:4000/graphql", {
                query: `
                    query($_id:ID!) {
                        userData(_id: $_id) {
                            username
                            password
                            email
                            tasks {
                                _id
                                name
                                category
                                description
                                status
                            }
                        }
                    }
                `,
                variables: {
                    _id: cookieId,
                },
            });
            this.context.commit("updateUserInfo", res.data.data.userData);
            return res.data.data.userData;
        } catch (error) {
            throw error;
        }
    }

    @Mutation
    updateUserInfo(payload: models.User) {
        this.userInfo = { ...payload };
    }
    @Mutation
    updateLoggedStatus(payload: boolean) {
        this.loggedIn = payload;
    }
    @Mutation
    pushNewTaskToArr(payload: models.Task) {
        this.userInfo.tasks.push(payload);
        console.log(this.userInfo.tasks);
    }
}
