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


  type User {
    _id: ID
    firstName: String
    lastName: String
    userName: String
    ratedProductCount: Int
    email: String
    ratedProducts: [Product]
    
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

  type queryUser {
    user: User
    products: [Product]
  }

  
  
  type Query {
    me: User
    users: [User]
    user(userName: String!): queryUser
    categories: [Category]
    products(category: ID, name: String): [Product]
    product(_id: ID!): Product
    reviews(firstName: String): [Review]
    review(_id: ID!): Review
    findReviews(_id: ID!): Review
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!, userName: String!): Auth
    updateUser(firstName: String, lastName: String, email: String, password: String, userName: String): User
    login(email: String!, password: String!): Auth
    addReview(productId: ID!, reviewBody: String!): Product
    addRatedProduct(productId: ID!): User
  }
`;

module.exports = typeDefs;
