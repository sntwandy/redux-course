import React from 'react';
import users from '../users.json';

// Components
import TableUsers from '../components/TableUsers';

// Styles
import '../assets/styles/containers/App.scss';

const App = () => {
  return(
    <div className="margin">
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Link</th>
          </tr>
        </thead>
        <tbody>
          {
            users.map( ({ id, name, email, website }) => <TableUsers key={id} name={name} email={email} website={website} />)
          }
        </tbody>
      </table>
    </div>
  );
};

export default App;