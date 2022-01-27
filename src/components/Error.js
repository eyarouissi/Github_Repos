import React from 'react';

const ErrorMessage = ({ error }) => (
  <div className="ErrorMessage" style={{margin: "20px",display: "flex",justifyContent: "center"}}>
    <small>{error.toString()}</small>
  </div>
);

export default ErrorMessage;
