import React from 'react';

const TableUsers = ({ name, email, website }) => {
  return(
    <tr>
      <td>{name}</td>
      <td>{email}</td>
      <td>{website}</td>
    </tr>
  );
};

export default TableUsers;