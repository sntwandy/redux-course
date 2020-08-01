import React from 'react';
import { Link } from 'react-router-dom';

// Styles
import '../assets/styles/components/Menu.scss'

const Menu = props => {
  return(
    <>
      <header>
        <nav id="menu">
          <Link to='/'>Home</Link>
          <Link to='/users'>Users</Link>
        </nav>
      </header>
      { props.children }
    </>
  );
};

export default Menu;