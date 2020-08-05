import React from 'react';

const Comments = ({ name, email, body }) => {
  return (
    <div>
      <h4>{ name }</h4>
      <h6>{ email }</h6>
      <p>{ body }</p>
    </div>
  );
};

export default Comments;