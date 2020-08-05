import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getPosts } from '../actions';

// Components
import Posts from './Posts';

// Styles
import '../assets/styles/components/PostUser.scss';

const PostUser = (props) => {

  useEffect( () => {
    (!props.posts.length) && getPosts();
  }, []);

  return(
    <div className="post-user-container">
      <h2>Posts: <span>{ props.name }</span></h2>
        {
          props.posts.map(post => (post.userId == props.id) &&
            <Posts key={post.id} id={post.id} title={post.title} body={post.body} />
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

const mapDispatchToProps = {
  getPosts,
};

export default connect(mapStateToProps, mapDispatchToProps)(PostUser);