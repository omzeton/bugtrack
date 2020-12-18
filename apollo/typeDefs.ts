import { gql } from "apollo-server-express";

export default gql`
    type Task {
        name: String
        category: String
        description: String
        status: Int
    }

    type User {
        _id: ID!
        username: String!
        password: String!
        email: String!
        tasks: [Task]
    }

    type LogInResult {
        user: User
        token: String
    }

    type TaskAndUserID {
        _id: ID!
        name: String
        category: String
        description: String
    }

    type Query {
        users: [User]
        logIn(username: String!, password: String!): LogInResult
        userData(_id: ID!): User
    }

    type Mutation {
        registerUser(username: String!, password: String!, email: String!): User
        addNewTask(_id: ID!, name: String!, category: String, description: String): TaskAndUserID
    }
`;
