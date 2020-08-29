import gql from 'graphql-tag';

export const projectsQuery = gql`
  query Projects {
    projects(first:6, orderBy: dateOfCreation_DESC) {
      category{
        title
      }
      title
      shortDescription
      dateOfCreation
      image{
        url
      }
    }
  }
`;
