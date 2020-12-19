import { Module, VuexModule, Action, Mutation } from "vuex-module-decorators";
import { TaskToSend } from "@/models";
import Cookies from "js-cookie";
import axios from "axios";

@Module({
    stateFactory: true,
    namespaced: true,
})
export default class Api extends VuexModule {
    @Action({ rawError: true })
    public async ADD_NEW_TASK({ name, category, description, status }: TaskToSend) {
        try {
            const cookieId = JSON.parse(Cookies.get("logged-user-id"));
            console.log({ status: parseInt(status) });
            const res = await axios.post("http://localhost:4000/graphql", {
                query: `
                    mutation addANewTask($_id:ID!, $name:String!, $category:String!, $description:String!, $status:Int!) {
                        addNewTask(_id:$_id, name:$name, category:$category, description:$description, status:$status) {
                            _id
                            name
                            category
                            description
                            status
                        }
                    }
                `,
                variables: {
                    _id: cookieId,
                    name,
                    category,
                    description,
                    status: parseInt(status),
                },
            });
            this.context.commit(
                "user/pushNewTaskToArr",
                {
                    _id: res.data.data.addNewTask._id,
                    name,
                    category,
                    description,
                    status,
                },
                { root: true }
            );
            return res;
        } catch (error) {
            throw error;
        }
    }
}
