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
                const user = await db.collection("users").findOne({ username, password });

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
        registerUser: async (_root: undefined, { username, password, email }: { username: string; password: string; email: string }): Promise<User | string> => {
            try {
                const db = getDB();

                // Find if user with this username already exists
                const userWithUsername = await db.collection("users").findOne({ username });
                if (userWithUsername) return "Username already taken";

                // Find if user with this email already exists
                const userWithEmail = await db.collection("users").findOne({ email });
                if (userWithEmail) return "Email already registered";

                // If username and email are unique create a new user
                const newUser = await db.collection("users").insertOne({ username, password, email });
                return newUser.ops[0];
            } catch (e) {
                throw e;
            }
        },
    },
};
