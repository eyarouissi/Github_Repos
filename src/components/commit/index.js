import Commits from './commitList';
import React, { useState } from 'react';
import useCollapse from 'react-collapsed';

function Commitslist(repositoryName,repositoryOwner) {

    const [ isExpanded, setExpanded ] = useState(false);
    const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });
    function handleOnClick() {
        setExpanded(!isExpanded);}
      
      return (
        <div className="collapsible">
            <div className="header" {...getToggleProps({onClick: handleOnClick})}>
            <span style={{fontWeight: "bold"}}>  {isExpanded ? 'Hide commits' : 'Show commits'}</span>
            </div>
            <div {...getCollapseProps()}>
                <div className="content">
                <Commits
                  {...repositoryName}
                  {...repositoryOwner}
                   />
                </div>
            </div>
        </div>
    );
}



export default Commitslist;
