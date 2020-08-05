import axios from 'axios';

export const setUsers = payload => ({
  type: 'SET_USERS',
  payload,
});

export const setLoading = () => ({
  type: 'LOADING',
});

export const setError = payload => ({
  type: 'ERROR',
  payload,
});

export const setPosts = payload => ({
  type: 'SET_POSTS',
  payload,
});

export const setComments = payload => ({
  type: 'SET_COMMENTS',
  payload,
});

export const setTasks = payload => ({
  type: 'SET_TASKS',
  payload,
});

export const getUsers = () => {
  return (dispatch) => {
    dispatch(setLoading());
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(users => dispatch(setUsers(users.data)))
      .catch(err => dispatch(setError(err.message)));
  };
};

export const getPosts = () => {
  return (dispatch) => {
    axios.get('http://jsonplaceholder.typicode.com/posts')
      .then(posts => dispatch(setPosts(posts.data)))
      .catch(err => dispatch(setError(err.message)));
  };
};

export const getComments = () => {
  return (dispatch) => {
    axios.get('https://jsonplaceholder.typicode.com/comments')
      .then(comments => dispatch(setComments(comments.data)));
  };
};

export const getTasks = () => {
  return (dispatch) => {
    axios.get('https://jsonplaceholder.typicode.com/todos')
      .then(tasks => dispatch(setTasks(tasks.data)))
      .catch(err => dispatch(setError(err.message)));
  }
}