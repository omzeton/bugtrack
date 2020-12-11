import { ApolloServer, gql } from "apollo-server-express";
import { MongoClient } from "mongodb";
import resolvers from "../apollo/resolvers";
import typeDefs from "../apollo/typeDefs";
import express from "express";

const startServer = async (): Promise<void> => {
    const app = express();

    // Apollo
    const server = new ApolloServer({
        typeDefs,
        resolvers,
    });
    server.applyMiddleware({ app });

    // MongoDB
    const client = new MongoClient(process.env.MONGODB_URI as string, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
    });
    await client.connect();

    const databaseList = await client
        .db()
        .admin()
        .listDatabases();

    console.log("Databases:");
    for (let db of databaseList.databases) {
        console.log(` - ${db.name}`);
    }

    app.listen({ port: 7000 }, () => {
        console.log(`Server ready at http://localhost:7000${server.graphqlPath}`);
    });
};

startServer();
