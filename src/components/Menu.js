import React from 'react';
import { Link } from 'react-router-dom';

// Styles
import '../assets/styles/components/Menu.scss'

const Menu = () => {
  return(
    <header>
      <nav id="menu">
        <Link to='/'>Home</Link>
        <Link to='users'>Users</Link>
        <Link to='/tasks'>Tasks</Link>
      </nav>
    </header>
  );
};

export default Menu;