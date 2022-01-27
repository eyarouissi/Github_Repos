import React from 'react';
import { Query} from 'react-apollo';
import { GET_FILES_OF_REPOSITORY } from './queries';
import FileItem from '../fileItem';
import Loading from '../../Loading';
import ErrorMessage from '../../Error';
import './style.css';
import {FaRegGrinWink} from "react-icons/fa";


const Files = ({
  repositoryOwner,
  repositoryName,
}) => (
  <div className="Files">
      <Query
        query={GET_FILES_OF_REPOSITORY}
        variables={{
          repositoryOwner,
          repositoryName,
        }}
        notifyOnNetworkStatusChange={true}
      >
        {({ data, loading, error}) => {
          if (error) {
            return <ErrorMessage error={error} />;
          }

          const { repository } = data;

          if (loading && !repository) {
            return <Loading />;
          }

          if (!repository.object ) {
            return <div className="FileList">This repository does not contain a test_file <FaRegGrinWink/></div>;
          }

          return ( 
            repository &&
            <FileList 
              file={ repository}
              loading={loading}
              repositoryOwner={repositoryOwner}
              repositoryName={repositoryName}
              
            />
          );
        }}
      </Query>
  
  </div>
);


const FileList = ({
  file,
  repositoryOwner,
  repositoryName,
}) => (
  <div className="FileList">
      <FileItem
        file={file}
        repositoryOwner={repositoryOwner}
        repositoryName={repositoryName}
      />
    
  </div>
);

export default Files
