import React from 'react';
import { connect } from 'react-redux';

// styles
import '../assets/styles/containers/CommentsContainer.scss';

// Components
import Comment from '../components/Comments';

const CommentsContainer = ({ id, comments }) => {

  return(
    <div className="comments-container">
      <h3>Comments:</h3>
      {
        comments.map(comment => (comment.postId == id) && <Comment key={comment.id} name={comment.name} email={comment.email} body={comment.body} />)
      }
    </div>
  );
};

const mapStateToProps = state => {
  return {
    comments: state.comments,
  }
};

export default connect(mapStateToProps, null)(CommentsContainer);