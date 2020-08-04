import React from 'react';

const TableContainer = props => {
  return(
    <>
      <h2>Users:</h2>
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
    </>
  );
};

export default TableContainer;