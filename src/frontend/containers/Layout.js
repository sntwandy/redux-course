import React from 'react';

// Components
import Menu from '../components/Menu';

const Layout = props => {
  return(
    <>
      <Menu />
      { props.children }
    </>
  );
};

export default Layout;