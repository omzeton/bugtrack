import { Module, VuexModule, Mutation, Action } from "vuex-module-decorators";
import * as models from "@/models";
import Cookies from "js-cookie";
import axios from "axios";

@Module({
    stateFactory: true,
    namespaced: true,
})
export default class User extends VuexModule {
    public userInfo: models.User = {
        _id: "",
        email: "",
        password: "",
        username: "",
        tasks: [],
    };
    public loggedIn: boolean = false;

    get isLoggedIn(): boolean {
        return this.loggedIn;
    }
    get GET_USER_DATA() {
        return this.userInfo;
    }

    @Action({ rawError: true })
    LOGOUT() {
        Cookies.remove("logged-user-id");
        this.context.commit("updateLoggedStatus", false);
    }
    @Action({ rawError: true })
    public async FETCH_USER_DATA(_id: any) {
        try {
            const cookieId = _id ? _id._id : JSON.parse(Cookies.get("logged-user-id"));
            const res = await axios.post("http://localhost:4000/graphql", {
                query: `
                    query($_id:ID!) {
                        userData(_id: $_id) {
                            username
                            password
                            email
                            tasks {
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
            return res;
        } catch (error) {
            throw error;
        }
    }

    @Mutation
    public updateUserInfo(payload: models.User) {
        this.userInfo = { ...payload };
    }

    @Mutation
    public updateLoggedStatus(payload: boolean) {
        this.loggedIn = payload;
    }
}
