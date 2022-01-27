import gql from 'graphql-tag';
export const GET_COMMITS_OF_REPOSITORY = gql`
  query(
    $repositoryOwner: String!
    $repositoryName: String!
  ) {
    repository(name: $repositoryName, owner: $repositoryOwner) {

      ref(qualifiedName: "master") {
        target {
            ... on Commit {
              id
              history(first: 100) {
                pageInfo {
                  hasNextPage
                  endCursor
                }
                edges {
                  node {
                    oid
                    message
                    author {
                      name
                      date
                    }
                    
                  }
                }
                }
              }
            }
      }
    }
  }
`;
