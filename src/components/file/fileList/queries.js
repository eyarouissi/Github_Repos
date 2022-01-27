import gql from 'graphql-tag';

export const GET_FILES_OF_REPOSITORY = gql`
  query(
    $repositoryOwner: String!
    $repositoryName: String!
    
  ) {
    repository(name: $repositoryName, owner: $repositoryOwner) {

      object(expression: "master:test_file.yml") {
        ... on Blob {
          text
        }
      }
    }
  }
`;
