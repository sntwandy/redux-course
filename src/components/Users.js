import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getUsers } from '../actions';
// import db_users from '../db_users.json';

// Components
import TableUsers from './TableUsers';
import TableContainer from './TableContainer'
import Loading from './Loading';

// Styles
import '../assets/styles/components/App.scss';

const Users = (props) => {

  useEffect( () => {
    props.getUsers();
  }, []);

  return(
    <>
    {
      (props.loading) ?
        <div className="loading-container">
          <Loading />
        </div>
        :
        <div className="margin">
          <TableContainer>
              {
                (props.error) ? <h2>Error: {props.error}</h2> : props.users.map( ({ id, name, email, website }) =>
                  <TableUsers key={id} name={name} email={email} website={website} />)
              }
          </TableContainer>
        </div>
    }
    </>
  );
};

const mapStateToProps = state => {
  return {
    users: state.users,
    loading: state.loading,
    error: state.error,
  };
};

const mapDispatchToProps = {
  getUsers,
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);