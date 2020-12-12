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
        logIn: async (_root: undefined, { username, password }: { username: string; password: string }): Promise<boolean | string> => {
            try {
                const db = getDB();

                // Find if user with this username and password exists in the database
                const user = await db.collection("users").findOne({ username, password });

                if (!user) throw new Error("Username or password is incorrect");
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
                if (userWithUsername) throw new Error("Username already taken");

                // Find if user with this email already exists
                const userWithEmail = await db.collection("users").findOne({ email });
                if (userWithEmail) throw new Error("Email already registered");

                // If username and email are unique create a new user
                const newUser = await db.collection("users").insertOne({ username, password, email });
                return newUser.ops[0];
            } catch (e) {
                throw e;
            }
        },
    },
};
