import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Components
import Menu from '../components/Menu';
import Users from './Users';
import Home from './Home';

const App = () => {
  return(
    <BrowserRouter>
      <Menu>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/users" component={Users} />
        </Switch>
      </Menu>
    </BrowserRouter>
  );
};

export default App;