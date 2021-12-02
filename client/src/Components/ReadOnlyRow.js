import React from "react";

const ReadOnlyRow = ({ contact}) => {
  return (
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
        <button type="button" onClick={() => "#"}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;
