import { Module, VuexModule, Action, Mutation } from "vuex-module-decorators";
import { RegistrationForm, LoginForm } from "../models/models";
import Cookies from "js-cookie";
import axios from "axios";

@Module({
    stateFactory: true,
    namespaced: true,
})
export default class Api extends VuexModule {
    public userInformation: any = {};

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
            return res;
        } catch (error) {
            throw error;
        }
    }
    @Action({ rawError: true })
    public async LOGIN_USER({ username, password }: LoginForm) {
        try {
            const res = await axios.post("http://localhost:4000/graphql", {
                query: `
                    query($username:String!, $password:String!) {
                        logIn(username:$username, password:$password) {
                            user {
                                _id
                            }
                        }
                    }
                `,
                variables: {
                    username,
                    password,
                },
            });
            Cookies.set("logged-user-id", JSON.stringify(res.data.data.logIn.user._id));
            this.context.commit("user/updateLoggedStatus", true, { root: true });
            return res;
        } catch (error) {
            throw error;
        }
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
                        }
                    }
                `,
                variables: {
                    _id: cookieId,
                },
            });
            this.context.commit("updateUserInformation", res.data.data.userData);
            return res;
        } catch (error) {
            throw error;
        }
    }
    @Mutation
    public updateUserInformation(data: any) {
        this.userInformation = data;
    }

    get GET_USER_DATA() {
        return this.userInformation;
    }
}
