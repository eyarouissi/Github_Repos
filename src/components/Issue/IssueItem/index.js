import React from 'react';
import { withState } from 'recompose';

import Button from '../../Button';
import Comments from '../../Comment';
import Link from '../../Link';


const IssueItem = ({
  issue,
  repositoryOwner,
  repositoryName,
  isShowComments,
  onShowComments,
}) => (
  <div className="IssueItem" style={{marginBottom: "10px",display: "flex",alignItems:"baseline"}}>
    <Button onClick={() => onShowComments(!isShowComments)}>
      {isShowComments ? '-' : '+'}
    </Button>

    <div className="IssueItem-content" style={{marginLeft:"10px",paddingLeft: "10px",borderLeft: "1px"}}>
      <h3>
        <Link href={issue.url}>{issue.title}</Link>
      </h3>
      <div dangerouslySetInnerHTML={{ __html: issue.bodyHTML }} />

      {isShowComments && (
        <Comments
          repositoryOwner={repositoryOwner}
          repositoryName={repositoryName}
          issue={issue}
        />
      )}
    </div>
  </div>
);

export default withState('isShowComments', 'onShowComments', false)(
  IssueItem,
);
