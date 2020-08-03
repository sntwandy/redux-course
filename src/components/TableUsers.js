import React from 'react';
import { Link } from 'react-router-dom';

// Styles
import '../assets/styles/components/TableUsers.scss';

const TableUsers = ({ id, name, email, website }) => {
  return(
    <tr>
      <td>{name}</td>
      <td>{email}</td>
      <td>{website}</td>
      <td>
        <Link to={`/posts/${id}`}>
          <div className="eye-solid icon"></div>
        </Link>
      </td>
    </tr>
  );
};

export default TableUsers;