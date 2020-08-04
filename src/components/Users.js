import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getUsers, getPosts } from '../actions';
// import db_users from '../db_users.json';

// Components
import TableUsers from './TableUsers';
import TableContainer from './TableContainer'
import Loading from './Loading';
import Error404 from './Error404';

// Styles
import '../assets/styles/components/App.scss';

const Users = (props) => {

  useEffect( () => {
    props.getUsers();
    props.getPosts();
  }, []);

  return(
    <>
      {
        (props.loading) ?
          <div className="loading-container">
            <Loading />
          </div>
          :
            (props.error) ? <Error404 error={props.error} />
              :
              <div className="margin">
                <TableContainer>
                  {props.users.map( ({ id, name, email, website } ) =>
                    <TableUsers key={id} id={id} name={name} email={email} website={website} />)
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
  getPosts,
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);