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
    reviewCount: Int
    reviews: [Review]
  }

  type Order {
    _id: ID
    purchaseDate: String
    products: [Product]
  }

  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    orders: [Order]
    reviews: [Review]
  }

  type Checkout {
    session: ID
  }

  type Auth {
    token: ID
    user: User
  }

  type Review {
    _id: ID
    reviewBody: String
    createdAt: String
    firstName: String
    userId: String
  }
  
  type Query {
    me: User
    users: [User]
    user(firstName: String!): User
    categories: [Category]
    products(category: ID, name: String): [Product]
    product(_id: ID!): Product
    reviews(firstName: String): [Review]
    review(_id: ID!): Review
    order(_id: ID!): Order
    checkout(products: [ID]!): Checkout
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    addOrder(products: [ID]!): Order
    updateUser(firstName: String, lastName: String, email: String, password: String): User
    updateProduct(_id: ID!, quantity: Int!): Product
    login(email: String!, password: String!): Auth
    addReview(productId: ID!, reviewBody: String!): Product
  }
`;

module.exports = typeDefs;
