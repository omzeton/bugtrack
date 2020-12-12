import express from "express";
import { ApolloServer } from "apollo-server-express";
import resolvers from "../apollo/resolvers";
import typeDefs from "../apollo/typeDefs";
import { connectToMongoDB } from "./mongo";

const app = express();
const server = new ApolloServer({
    typeDefs,
    resolvers,
});
server.applyMiddleware({ app });
connectToMongoDB(() => {
    app.listen({ port: 4000 }, () => {
        console.log(`Server ready at http://localhost:4000${server.graphqlPath}`);
    });
});
