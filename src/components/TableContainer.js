import React from 'react';

const TableContainer = props => {
  return(
    <table className="table">
      <thead>
        <h2>Users:</h2>
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
  );
};

export default TableContainer;