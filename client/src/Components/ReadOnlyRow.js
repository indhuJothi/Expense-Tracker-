import React from "react";
import "../Components/Admin/Emp_Table.css"
import {Link} from 'react-router-dom'

const ReadOnlyRow = ({ contact,handleEditClick}) => {
  return (
  <>
    <tbody>
    <tr>
      <td>{contact.EmployeeId}</td>
      <td>{contact.EmployeeName}</td>
      <td>{contact.Department}</td>
      <td>{contact.Role}</td>
      <td>{contact.Email}</td>
      <td>{contact.Username}</td>
      <td>{contact.Password}</td>
      <td> <button>Send</button>
      </td>
      <td>
        <button
          type="button"
          onClick={<Link to="/edit"></Link>}
        >
          Edit
        </button>
        </td>
        <td>
        <button type="button" onClick={() => "#"}>
          Delete
        </button>
      </td>
    </tr>
    </tbody>
    </>
  );
};

export default ReadOnlyRow;
