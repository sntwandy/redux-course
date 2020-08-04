import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import { setError } from '../actions';

// Components
import PostUser from '../components/PostUser';
import Error404 from '../components/Error404';

const Posts = props => {
  const [user, setUser] = useState({});

  useEffect(() => {
    props.users.map(user => (user.id == props.match.params.id) && setUser(user));
    (user.name === undefined) ? props.setError('User not found :(') : props.setError('');
  });

  return(
    <>
      {
        (props.error.length === 0) ?  <PostUser key={user.id} name={user.name} /> :  <Error404 history={props.history} error={props.error} />
      }
    </>
  );
};

const mapStateToProps = state =>{
  return {
    users: state.users,
    error: state.error,
  }
};

const mapDispatchToProps = {
  setError,
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts);