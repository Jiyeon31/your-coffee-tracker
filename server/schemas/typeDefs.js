const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    
  }

  type Coffee {
    _id: ID
    name: String
    roast: String
    brand: String
    ratings: [Rating]
    reviews: [Review]
  }

  type Rating {
    _id: ID
    rating: Int
    username: String
  }

  type Review {
    _id: ID
    review: String
    username: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    users: [User]
    user(username: String!): User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addRaing(coffeeId: ID!, raing: Int!): Rating
    addReview(coffeeId: ID!, review: String!): Review
  }
`;

module.exports = typeDefs;
