const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Category {
    _id: ID
    name: String
  }

  type Product {
    _id: ID
    name: String
    description: String
    image: String
    category: Category
  }

  type User {
    _id: ID
    username: String
    email: String
    followCount: Int
    reviews: [Review]
    follow: [User]
  }

  type Review {
    _id: ID
    reviewtext: String
    createdAt: String
    username: String
    commentCount: Int
    comments: [Comment]
  }

  type Comment {
    _id: ID
    commentBody: String
    createdAt: String
    username: String
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    categories: [Category]
    products(category: ID, name: String): [Product]
    product(_id: ID!): Product
    user: User

  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    updateUser(usename: String, email: String, password: String): User
    updateProduct(_id: ID!, quantity: Int!): Product
    login(email: String!, password: String!): Auth
    addReview(reviewText: String!): Review
    addComment(reviewId: ID!, commentBody: String!): Review
    addFollow(followId: ID!): User
    removeFollow(followId: ID!): User
  }
`;

module.exports = typeDefs;
