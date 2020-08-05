import React from 'react';

// Styles
import '../assets/styles/components/Posts.scss';

const Posts = ({ title, body }) => {
  return(
    <div className="post-container">
        <h2> { title } </h2>
        <p> { body } </p>
    </div>
  );
};

export default Posts;