import { Module, VuexModule, Action, Mutation } from "vuex-module-decorators";
import Cookies from "js-cookie";
import axios from "axios";

interface Task {
    name: string;
    category: string;
    description: string;
    status: string;
}

@Module({
    stateFactory: true,
    namespaced: true,
})
export default class Api extends VuexModule {
    @Action({ rawError: true })
    public async ADD_NEW_TASK({ name, category, description, status }: Task) {
        try {
            const cookieId = JSON.parse(Cookies.get("logged-user-id"));
            const res = await axios.post("http://localhost:4000/graphql", {
                query: `
                    mutation addANewTask($_id:ID!, $name:String!, $category:String!, $description:String!, $status:Int!) {
                        addNewTask(_id:$_id, name:$name, category:$category, description:$description, status:$status) {
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
            return res;
        } catch (error) {
            throw error;
        }
    }
}
