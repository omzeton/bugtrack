import { getMongoClient } from "../api/mongo";

export default {
    Query: {
        async users() {
            const client = getMongoClient();
            const db = client.db("bugtracker");
            const result: any = await db
                .collection("users")
                .find()
                .toArray();
            return result;
        },
    },
};
