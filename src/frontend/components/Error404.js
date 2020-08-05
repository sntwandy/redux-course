import React, { useEffect } from 'react';
import { setError } from '../actions';
import { connect } from 'react-redux';

// Styles
import '../assets/styles/components/Error404.scss';

const Error404 = props => {

  const handlingGoHome = () => {
    props.setError('');
    props.history.push('/');
  };

  useEffect( () => {
    props.setError(props.errorMsg);
    // (props.error.length && !(props.errors.length)) && props.setError(props.error);
  }, []);

  return(
    <div className="error-404-container">
    <h3>Opps!: { props.errorMsg }</h3>
      <img src="https://i.imgur.com/ZFzV6Ht.png" alt="Error 404"/>
        <button onClick={handlingGoHome}>Go Home</button>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    error: state.error,
  }
};

const mapDispatchToProps = {
  setError,
};

export default connect(mapStateToProps, mapDispatchToProps)(Error404);