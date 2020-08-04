import React from 'react';

// Assets
import blogimg from '../assets/static/blog-landing.png';

// Styles
import '../assets/styles/containers/Home.scss';

const Home = () => {
  return(
    <>
    <div className="home-container">
      <h2>Welcome to the Blog!</h2>
      <div className="blogimg-container">
        <img src={blogimg} alt="Blog"/>
      </div>
    </div>
    </>
  );
};

export default Home;