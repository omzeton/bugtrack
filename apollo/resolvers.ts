import { User } from "../models/models";
import { getDB } from "../api/mongo";

export default {
    Query: {
        users: async () => {
            const db = getDB();
            const result: any = await db
                .collection("users")
                .find()
                .toArray();
            return result;
        },
    },
    Mutation: {
        registerUser: async (_root: undefined, { username, password, email }: { username: string; password: string; email: string }): Promise<User> => {
            try {
                const db = getDB();
                const newUser = await db.collection("users").insertOne({ username, password, email });
                return newUser.ops[0];
            } catch (e) {
                throw e;
            }
        },
    },
};
