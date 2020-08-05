import React, { useState, useEffect } from 'react';

// Styles
import '../assets/styles/components/Posts.scss';

// Components
import CommentsContainer from '../containers/CommentsContainer';

const Posts = ({ id, title, body }) => {

  const [open, setOpen] = useState(false);


  useEffect( () => {
    const $comment = document.getElementById(`${id}`);
    (open) ? $comment.classList.add('underComment') : $comment.classList.remove('underComment');
  });

  const openTitle = ['Open Comments', 'Close Comments'];

  return(
    <div id={`${id}`} className="post-container">
        <h2> { title } </h2>
        <p> { body } </p>
        <button onClick={() => setOpen(!open)}>{ !open ? openTitle[0] : openTitle[1] }</button>
        {
          (open) && <CommentsContainer key={id} id={id} isOpen={open}/>
        }
    </div>
  );
};

export default (Posts);