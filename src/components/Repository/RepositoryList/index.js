import React, { Fragment } from 'react';
import FetchMore from '../../FetchMore';
import RepositoryItem from '../RepositoryItem';
import Issues from '../../Issue';
import { Grid } from "@material-ui/core";
import Commitslist from '../../commit';
import Fileslist from '../../file';

const getUpdateQuery = entry => (
  previousResult,
  { fetchMoreResult },
) => {
  if (!fetchMoreResult) {
    return previousResult;
  }

  return {
    ...previousResult,
    [entry]: {
      ...previousResult[entry],
      repositories: {
        ...previousResult[entry].repositories,
        ...fetchMoreResult[entry].repositories,
        edges: [
          ...previousResult[entry].repositories.edges,
          ...fetchMoreResult[entry].repositories.edges,
        ],
      },
    },
  };
};

const RepositoryList = ({
  repositories,
  loading,
  fetchMore,
  entry,
}) => (
  
  <Fragment>
    {repositories.edges.map(({ node }) => (
      
      <Grid key={node.id} className="RepositoryItem">
        <RepositoryItem {...node} />
        
        <Commitslist
          repositoryName={node.name}
          repositoryOwner={node.owner.login}
        />
        <Fileslist
          repositoryName={node.name}
          repositoryOwner={node.owner.login}
        />
        <Issues
          repositoryName={node.name}
          repositoryOwner={node.owner.login}
        />
       
      </Grid>
    ))}

    <FetchMore
      loading={loading}
      hasNextPage={repositories.pageInfo.hasNextPage}
      variables={{
        cursor: repositories.pageInfo.endCursor,
      }}
      updateQuery={getUpdateQuery(entry)}
      fetchMore={fetchMore}
    >
      Repositories
    </FetchMore>
  </Fragment>
);

export default RepositoryList;
