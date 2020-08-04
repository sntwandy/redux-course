import React from 'react';

const Posts = ({ title, body }) => {
  return(
    <div>
        <p>Title: { title }</p>
        <p>Body: { body }</p>
    </div>
  );
};

export default Posts;