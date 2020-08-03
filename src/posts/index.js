import React from 'react';

const Posts = props => {
  return(
    <h2>Posts Section: {props.match.params.id}</h2>
  );
};

export default Posts;