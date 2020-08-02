import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
// import db_users from '../db_users.json';

// Components
import TableUsers from '../components/TableUsers';

// Styles
import '../assets/styles/containers/App.scss';

const Users = (props) => {
  const [users, setUsers] = useState(props.users);

  // Get data users and Set State
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(user => setUsers(user.data))
      .catch(err => console.error(err));
  });

  return(
    <div className="margin">
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Website</th>
          </tr>
        </thead>
        <tbody>
          {
            users.map( ({ id, name, email, website }) => <TableUsers key={id} name={name} email={email} website={website} />)
          }
        </tbody>
      </table>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    users: state.users,
  };
};

export default connect(mapStateToProps, null)(Users);