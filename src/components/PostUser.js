import React from 'react';
import { connect } from 'react-redux';

// Components
import Posts from './Posts';

const PostUser = (props) => {

  return(
    <div>
      <h2>Post: { props.name }</h2>
    {
      props.posts.map(post => (post.userId == props.id) &&
      <>
        <Posts key={post.id} title={post.title} body={post.body} />
      </>
      )
    }
    </div>
  );
};

const mapStateToProps = state => {
  return {
    posts: state.posts,
  }
};

export default connect(mapStateToProps, null)(PostUser);