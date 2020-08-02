import axios from 'axios';

export const setUsers = payload => ({
  type: 'SET_USERS',
  payload,
});

export const getUsers = () => {
  return (dispatch) => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(users => dispatch(setUsers(users.data)))
      .catch(err => console.error(err));
  };
};