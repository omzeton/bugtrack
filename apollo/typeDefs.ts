import { gql } from "apollo-server-express";

export default gql`
    type User {
        _id: ID!
        username: String!
        password: String!
        email: String!
    }

    type LogInResult {
        user: User
        token: String
    }

    type Query {
        users: [User]
        logIn(username: String!, password: String!): LogInResult
        userData(_id: ID!): User
    }

    type Mutation {
        registerUser(username: String!, password: String!, email: String!): User
    }
`;
