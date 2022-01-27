import React from 'react';


const CommitItem = ({
  commit
}) => (
  <div className="CommitItem" style={{marginBottom: "10px",display: "flex",alignItems:"baseline"}}>
    <div className="CommitItem-content" style={{marginLeft:"10px",paddingLeft: "10px",borderLeft: "1px"}}>
      <h6 className="purple-text darken-1" style={{fontWeight: "bold"}}>Commit data: </h6>
      <div><b style={{fontWeight: "bold"}}>Commit message: </b> {commit.message }</div>
      <div><b style={{fontWeight: "bold"}}>Commit on: </b>{commit.author.date }</div>
      <div><b style={{fontWeight: "bold"}}>Commit by: </b>{commit.author.name }</div>
      
    </div>
  </div>
);

export default CommitItem