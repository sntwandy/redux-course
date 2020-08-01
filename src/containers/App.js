import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Components
import Layout from './Layout';
import Home from './Home';
import Users from '../components/Users';
import Tasks from '../components/Tasks';

const App = () => {
  return(
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/users" component={Users} />
          <Route exact path="/tasks" component={Tasks} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default App;