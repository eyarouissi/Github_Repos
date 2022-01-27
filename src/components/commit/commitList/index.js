import React from 'react';
import { Query} from 'react-apollo';
import { GET_COMMITS_OF_REPOSITORY } from './queries';
import CommitItem from '../commitItem';
import Loading from '../../Loading';
import ErrorMessage from '../../Error';
import FetchMore from '../../FetchMore';
import './style.css';



const updateQuery = (previousResult, { fetchMoreResult }) => {
  if (!fetchMoreResult) {
    return previousResult;
  }

  return {
    ...previousResult,
    repository: {
      ...previousResult.repository,
      commits: {
        ...previousResult.repository.commits,
        ...fetchMoreResult.repository.commits,
        edges: [
          ...previousResult.repository.commits.edges,
          ...fetchMoreResult.repository.commits.edges,
        ],
      },
    },
  };
};



const Commits = ({
  repositoryOwner,
  repositoryName,
}) => (
  <div className="Commits">
      <Query
        query={GET_COMMITS_OF_REPOSITORY}
        variables={{
          repositoryOwner,
          repositoryName,
        }}
        notifyOnNetworkStatusChange={true}
      >
        {({ data, loading, error, fetchMore }) => {
          if (error) {
            return <ErrorMessage error={error} />;
          }

          const { repository } = data;

          if (loading && !repository) {
            return <Loading />;
          }

          if (repository.ref && repository.ref.target.length===0) {
            return <div className="CommitList">No Commits ...</div>;
          }

          return ( 
            repository.ref&&
            <CommitList 
              commits={ repository.ref.target }
              loading={loading}
              repositoryOwner={repositoryOwner}
              repositoryName={repositoryName}
              //fetchMore={fetchMore}
            />
          );
        }}
      </Query>
  
  </div>
);


const CommitList = ({
  commits,
  loading,
  repositoryOwner,
  repositoryName,
  fetchMore,
}) => (
  <div className="CommitList">
    {commits && commits.history.edges && commits.history.edges.map(({ node }) => (
      <CommitItem
        key={node.oid}
        commit={node}
        repositoryOwner={repositoryOwner}
        repositoryName={repositoryName}
      />
      
    ))}
        <FetchMore
      loading={loading}
      hasNextPage={commits.history.pageInfo.hasNextPage}
      variables={{
        cursor: commits.history.pageInfo.endCursor,
        repositoryOwner,
        repositoryName,
      }}
      updateQuery={updateQuery}
      fetchMore={fetchMore}
    >
      Commits
    </FetchMore>

    
  </div>
);

export default Commits
