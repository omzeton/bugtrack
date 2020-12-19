import { User, LogInResult } from "@/models";
import { getDB } from "../api/mongo";
import { ObjectId } from "mongodb";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

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
        logIn: async (_root: undefined, { username, password }: { username: string; password: string }): Promise<LogInResult> => {
            try {
                const db = getDB();

                // If username is not corresponding to any username in db throw error
                const user = await db.collection("users").findOne({ username });
                if (!user) throw new Error("Username or password is incorrect");

                // If bcrypt can't compare password from input and user password throw error
                const passwordsAreEqual = await bcrypt.compare(password, user.password);
                if (!passwordsAreEqual) throw new Error("Username or password is incorrect");

                // If everything is alright assign a new jwt to the user session
                const token = jwt.sign(
                    {
                        userId: user._id.toString(),
                        username: user.username,
                    },
                    ("" + process.env.JWT_SECRET) as string,
                    {
                        expiresIn: "1d",
                    }
                );

                return {
                    user,
                    token,
                };
            } catch (e) {
                throw e;
            }
        },
        userData: async (_root: undefined, { _id }: { _id: string }): Promise<User> => {
            try {
                const db = getDB();
                const idFromObject = new ObjectId(_id);
                const user = await db.collection("users").findOne({ _id: idFromObject });
                if (!user) throw new Error("User with this _id could not be found");

                return user;
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
                const hashedPassword = await bcrypt.hash(password, 12);
                const newUser = await db.collection("users").insertOne({ username, password: hashedPassword, email });
                return newUser.ops[0];
            } catch (e) {
                throw e;
            }
        },
        addNewTask: async (_root: undefined, { _id, name, category, description, status }: { _id: string; name: string; category: string; description: string; status: number }): Promise<any> => {
            try {
                const db = getDB();
                const userId = new ObjectId(_id);
                console.log({
                    name,
                    category,
                    description,
                    status,
                });
                const result = await db.collection("users").updateOne(
                    { _id: userId },
                    {
                        $push: {
                            tasks: {
                                name,
                                category,
                                description,
                                status,
                            },
                        },
                    }
                );
                return result;
            } catch (e) {
                throw e;
            }
        },
    },
};
