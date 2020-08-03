import React from 'react';

const TableContainer = props => {
  return(
    <table className="table">
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
  );
};

export default TableContainer;