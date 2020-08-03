import React from 'react';

// Styles
import '../assets/styles/components/Error404.scss'

const Error404 = ({ error }) => {
  return(
    <div className="error-404-container">
    <h2>Opps!: { error }</h2>
      <img src="https://i.imgur.com/ZFzV6Ht.png" alt="Error 404"/>
    </div>
  );
};

export default Error404;