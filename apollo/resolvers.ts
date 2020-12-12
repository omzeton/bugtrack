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
        logIn: async (_root: undefined, { username, password }: { username: string; password: string }): Promise<boolean> => {
            try {
                const db = getDB();
                const user = await db.collection("users").find({ username, password });

                if (!user) {
                    const error = new Error("User not found.");
                    error["code"] = 401;
                    throw error;
                }

                return !!user;
            } catch (e) {
                throw e;
            }
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
