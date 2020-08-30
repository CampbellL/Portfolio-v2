import gql from 'graphql-tag';

export const categoriesQuery = gql`
  query Categories {
    categories {
      id
      title
    }
  }`;
