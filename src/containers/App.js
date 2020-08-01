import React from 'react';

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
          <tr>
            <td>Megan</td>
            <td>hrramegan@gmail.com</td>
            <td>meganherrera.com</td>
          </tr>
          <tr>
            <td>Wandy</td>
            <td>sntwandy@gmail.com</td>
            <td>sntwandy.com</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default App;