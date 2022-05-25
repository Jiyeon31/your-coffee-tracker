import { gql } from '@apollo/client';

export const QUERY_PRODUCTS = gql`
  query getProducts($category: ID) {
    products(category: $category) {
      _id
      name
      description
      image
      reviews {
        _id
        createdAt
        reviewBody
        firstName
        userName
      }
      category {
        _id
      }
    }
  }
`;

export const QUERY_CHECKOUT = gql`
  query getCheckout($products: [ID]!) {
    checkout(products: $products) {
      session
    }
  }
`;

export const QUERY_ALL_PRODUCTS = gql`
  {
    products {
      _id
      name
      description
      category {
        name
      }
    }
  }
`;

export const QUERY_CATEGORIES = gql`
  {
    categories {
      _id
      name
    }
  }
`;

export const QUERY_USER = gql`
query user($userName: String!) {
  user(userName: $userName) {
    user {
      _id
    }
    products {
      _id
      name
      image
    }
  }
}
`

export const QUERY_ME = gql`
  {
    me {
      _id
      firstNname
      email
      reviews {
        _id
        reviewBody
        createdAt
      }
    }
  }
`;

export const QUERY_ME_BASIC = gql`
  {
    me {
      _id
      firstNname
      email
    }
  }
`;

