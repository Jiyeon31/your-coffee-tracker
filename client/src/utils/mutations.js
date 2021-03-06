import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_ORDER = gql`
  mutation addOrder($products: [ID]!) {
    addOrder(products: $products) {
      purchaseDate
      products {
        _id
        name
        description
        category {
          name
        }
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser(
    $userName: String!
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
  ) {
    addUser(
      firstName: $firstName
      lastName: $lastName
      userName: $userName
      email: $email
      password: $password
    ) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_REVIEW = gql`
  mutation addReview($productId: ID!, $reviewBody: String!) {
    addReview(productId: $productId, reviewBody: $reviewBody) {
      _id
      reviews {
        _id
        reviewBody
        createdAt
        firstName
        userName
        userId
      }
    }
  }
`;

export const ADD_RATED_PRODUCT = gql`
  mutation addRatedProduct($id: ID!) {
    addRatedProduct(productId: $id) {
      _id
      ratedProductCount
      ratedProducts {
        _id
        
        
      }
    }
  }
`;

