import React from "react";
import "../Components/Admin/Emp_Table.css"
import {Link} from 'react-router-dom'

class ReadOnlyRow extends React.Component {
  render(){
  let contact = this.props.contact


  return (
  <>
    {/* <tbody> */}
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
        <Link to={{pathname:"/edit/"+contact.EmployeeId}}>
          Edit
        </Link>
        </td>
        <td>
        <button type="button" onClick={() => "#"}>
          Delete
        </button>
      </td>
    </tr>
    {/* </tbody> */}
    </>
  );
  }
};

export default ReadOnlyRow;
