import React from "react";
import "../Components/Admin/Emp-Table.css"

const ReadOnlyRow = ({ contact}) => {
  return (
  
    <tbody>
    <tr>
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
          onClick={(event) => "#"}
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
    
  );
};

export default ReadOnlyRow;
