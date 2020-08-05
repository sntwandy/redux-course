import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Components
import Layout from '../containers/Layout';
import Home from '../containers/Home';
import Users from '../components/Users';
import Tasks from '../containers/TasksContainer';
import Posts from '../posts';

const App = () => {
  return(
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/users" component={Users} />
          <Route exact path="/posts/:id" component={Posts} />
          <Route exact path="/tasks" component={Tasks} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default App;