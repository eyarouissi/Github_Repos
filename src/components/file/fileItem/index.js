import React from 'react';


const FileItem = ({
  file
}) => (
  <div className="FileItem" style={{marginBottom: "10px",display: "flex",alignItems:"baseline"}}>
    <div className="FileItem-content" style={{marginLeft:"10px",paddingLeft: "10px",borderLeft: "1px"}}> 
      <div><b style={{fontWeight: "bold"}}>file content: </b> {file.object.text }</div>
      
      
    </div>
  </div>
);

export default FileItem