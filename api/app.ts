const { ApolloServer, gql } = require("apollo-server-express");
const { MongoClient } = require("mongodb");
const express = require("express");

const client = new MongoClient(process.env.MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
});

const app = express();

const typeDefs = gql`
    type Query {
        hello: String!
    }
`;
const resolvers = {
    Query: {
        hello: () => "hello",
    },
};

const server = new ApolloServer({
    typeDefs,
    resolvers,
});

server.applyMiddleware({ app });

async function listDatabases(client: typeof MongoClient) {
    const databaseList = await client
        .db()
        .admin()
        .listDatabases();

    console.log("Databases:");
    for (let db of databaseList.databases) {
        console.log(` - ${db.name}`);
    }
}

async function main() {
    try {
        await client.connect();
        await listDatabases(client);
    } catch (e) {
        console.log(e);
    } finally {
        await client.close();
    }
}

main().catch(console.error);
// app.listen({ port: 4000 }, () => {
//     console.log(`Server ready at http://localhost:4000${server.graphqlPath}`);
// });
