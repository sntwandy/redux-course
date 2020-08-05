import React, { useState } from 'react';
import { connect } from 'react-redux';

// Styles
import '../assets/styles/components/Posts.scss';

// Components
import CommentsContainer from '../containers/CommentsContainer';

const Posts = ({ title, body }) => {

  const [open, setOpen] = useState(false);

  const openTitle = ['Open Comments', 'Close Comments'];

  return(
    <div className="post-container">
        <h2> { title } </h2>
        <p> { body } </p>
        <button onClick={() => setOpen(!open)}>{ !open ? openTitle[0] : openTitle[1] }</button>
        {
          (open) && <CommentsContainer />
        }
    </div>
  );
};

const mapStateToProps = state => {
  return {
    comments: state.comments,
  }
};

export default connect(mapStateToProps, null)(Posts);