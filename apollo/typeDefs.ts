import { gql } from "apollo-server-express";

export default gql`
    type User {
        _id: ID!
        username: String!
        password: String!
        email: String!
    }

    type Query {
        users: [User]
    }

    type Mutation {
        registerUser(username: String!, password: String!, email: String!): User
    }
`;
