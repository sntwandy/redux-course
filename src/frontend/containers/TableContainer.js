import React from 'react';

// Styles
import '../assets/styles/containers/TableContainer.scss';

const TableContainer = props => {
  return(
    <>
      <h2>Users:</h2>
      <table className="table table-container">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Website</th>
          </tr>
        </thead>
        <tbody>
          { props.children }
        </tbody>
      </table>
    </>
  );
};

export default TableContainer;