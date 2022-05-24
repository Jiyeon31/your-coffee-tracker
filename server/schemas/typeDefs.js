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
    userName: String
    ratedProductCount: Int
    email: String
    ratedProducts: [Product]
    
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
    userName: String
    userId: String
  }

  
  
  type Query {
    me: User
    users: [User]
    user(userName: String!): User
    categories: [Category]
    products(category: ID, name: String): [Product]
    product(_id: ID!): Product
    reviews(firstName: String): [Review]
    review(_id: ID!): Review
    order(_id: ID!): Order
    checkout(products: [ID]!): Checkout
    findReviews(_id: ID!): Review
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!, userName: String!): Auth
    addOrder(products: [ID]!): Order
    updateUser(firstName: String, lastName: String, email: String, password: String, userName: String): User
    updateProduct(_id: ID!, quantity: Int!): Product
    login(email: String!, password: String!): Auth
    addReview(productId: ID!, reviewBody: String!): Product
    addRatedProduct(productId: ID!): Product
  }
`;

module.exports = typeDefs;
