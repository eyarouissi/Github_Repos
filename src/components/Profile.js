import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import {Link} from 'react-router-dom';
import RepositoryList, { REPOSITORY_FRAGMENT } from './Repository';
import Loading from './Loading';
import ErrorMessage from './Error';
import { Grid } from "@material-ui/core";
import {FaGithub} from "react-icons/fa";
import * as routes from './routes';
import Typography from '@material-ui/core/Typography'

const GET_REPOSITORIES_OF_CURRENT_USER = gql`
  query($cursor: String) {
    viewer {
      repositories(
        first: 5
        orderBy: { direction: DESC, field: STARGAZERS }
        after: $cursor
      ) {
        edges {
          node {
            ...repository
          }
        }
        pageInfo {
          endCursor
          hasNextPage
        }
      }
    }
  }

  ${REPOSITORY_FRAGMENT}
`;

const Profile = () => (
  <Query
    query={GET_REPOSITORIES_OF_CURRENT_USER}
    notifyOnNetworkStatusChange={true}
  >
    {({ data, loading, error, fetchMore }) => {
      const { viewer } = data;

      if (loading && !viewer) {
        return <Loading isCenter={true} />;
      }

      if (error) {
        return <ErrorMessage error={error} />;
      }

      return (
     <Grid>             
       <div className="row">
         <Typography className="center "  variant='h2'>
          <span className="purple-text darken-1"> Git</span> Repos <FaGithub/> : </Typography></div> 
              <div><Link to={routes.MAIN} className="right btn btn-large waves-effect white black-text text-darken-3" style={{margin: 1}}>
                  <i className="" > Home Page </i></Link></div>
                      <Grid id="home" className="container">
                         <div className=" center-align"></div>
                            <RepositoryList
                            loading={loading}
                            repositories={viewer.repositories}
                            fetchMore={fetchMore}
                            entry={'viewer'}
                            /></Grid></Grid>
      );
    }}
  </Query>
);

export default Profile;
