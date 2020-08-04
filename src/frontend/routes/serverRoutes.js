import Home from '../containers/Home';
import Users from '../components/Users';
import Posts from '../components/Posts';
import Tasks from '../components/Tasks';

const routes =[
  {
    exact: true,
    path: '/',
    component: Home,
  },
  {
    exact: true,
    path: '/users',
    component: Users,
  },
  {
    exact: true,
    path: '/posts/:id',
    component: Posts,
  },
  {
    exact: true,
    path: '/tasks',
    component: Tasks,
  }
];

export default routes;