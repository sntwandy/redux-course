import React from 'react';
import { setError } from '../actions';
import { connect } from 'react-redux';

// Styles
import '../assets/styles/components/Error404.scss';

const Error404 = props => {

  const handlingGoHome = () => {
    props.setError('');
    props.history.push('/');
  };

  return(
    <div className="error-404-container">
    <h3>Opps!: { props.error }</h3>
      <img src="https://i.imgur.com/ZFzV6Ht.png" alt="Error 404"/>
        <button onClick={handlingGoHome}>Go Home</button>
    </div>
  );
};

const mapDispatchToProps = {
  setError,
};

export default connect(null, mapDispatchToProps)(Error404);