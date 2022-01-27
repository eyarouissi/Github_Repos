import Files from './fileList';
import React, { useState } from 'react';
import useCollapse from 'react-collapsed';

function Fileslist(repositoryName,repositoryOwner) {

    const [ isExpanded, setExpanded ] = useState(false);
    const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });
    function handleOnClick() {
        setExpanded(!isExpanded);}
      
      return (
        <div className="collapsible">
            <div className="header" {...getToggleProps({onClick: handleOnClick})}>
            <span style={{fontWeight: "bold"}}>  {isExpanded ? 'Hide file content' : 'Show file content'}</span>
            </div>
            <div {...getCollapseProps()}>
                <div className="content">
                <Files
                  {...repositoryName}
                  {...repositoryOwner}
                   />
                </div>
            </div>
        </div>
    );
}



export default Fileslist;
