// eslint-disable-next-line import/no-extraneous-dependencies
import gql from 'graphql-tag';

export const projectsQuery = gql`
  query Projects {
    projects(first: 6, orderBy: dateOfCreation_DESC) {
      id
      category {
        title
      }
      title
      shortDescription
      dateOfCreation
      image {
        url
      }
    }
  }
`;

export const projectQuery = gql`
  query Project($id: ID) {
    project(where: { id: $id }) {
      id
      category {
        title
      }
      assets {
        url
      }
      title
      shortDescription
      sourceControlUrl
      projectUrl
      youtubeEmbedLink
      longDescription {
        html
      }
      footerContent {
        html
      }
      dateOfCreation
      image {
        url
      }
    }
  }
`;

export const projectsCategoryQuery = gql`
  query Projects($categoryId: ID) {
    projects(
      first: 6
      where: { category_some: { id: $categoryId } }
      orderBy: dateOfCreation_DESC
    ) {
      id
      category {
        title
      }
      title
      shortDescription
      dateOfCreation
      image {
        url
      }
    }
  }
`;
