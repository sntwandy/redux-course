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

export const getUsers = () => {
  return (dispatch) => {
    dispatch(setLoading());
    axios.get('https://jsonplaceholder.typicode.com/userss')
      .then(users => dispatch(setUsers(users.data)))
      .catch(err => dispatch(setError(err.message)));
  };
};