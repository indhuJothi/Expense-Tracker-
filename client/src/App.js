import React, { useState, Fragment } from "react";
import './App.css';
import data from "./mock-data.json";
import ReadOnlyRow from "./Components/ReadOnlyRow";


function Table() {
  const [Details, setDetails] = useState(data);
  return (
    <div className="app-container">
      <form onSubmit="#">
        <table>
          <thead>
            <tr>
              <th>Employee Name</th>
              <th>Department</th>
              <th>Role</th>
              <th>Email</th>
              <th>Username</th>
              <th>Password</th>
              <th>Send</th>
              <th>Edit/Delete</th>
            </tr>
          </thead>
         
            {Details.map((data) => (
              //  <tbody>
              // <Fragment>
              //   <tr>
              //     <td>{data.EmployeeName}</td>
              //     <td>{data.Department}</td>
              //     <td>{data.Role}</td>
              //     <td>{data.Email}</td>
              //     <td>{data.Username}</td>
              //     <td>{data.Password}</td>
              //     <td><button>Send</button></td>
              //   </tr>
              // </Fragment>
              // </tbody>
              <ReadOnlyRow
              contact={data}
              />
            ))}
         
        </table>
      </form>

      <h2 className="title">Add Employee</h2>
      <form onSubmit="#" className="addEmpForm">
        <input
          type="text"
          name='Ename'
          required="required"
          placeholder="Employee Name"
          onChange="#"
        />
        <select id="department">
          <option value="option">option</option>
          <option value="development">Development</option>
          <option value="testing">Testing</option>
          <option value="infra">Infrastructure</option>
        </select>
        <select id="role">
          <option value="option">option</option>
          <option value="employee">employee</option>
          <option value="Manager">Manager</option>
          <option value="Admin">Admin</option>
        </select>
        <input
          type="email"
          name='Email'
          required="required"
          placeholder="sample@domain.com"
          onChange="#"
        />
        <input
          type="text"
          name='Username'
          required="required"
          placeholder="User Name"
          onChange="#"
        />    
         <input
          type="password"
          name='password'
          required="required"
          placeholder="password"
          onChange="#"
        />
        
        <input type="button"
          value="submit"/>


      </form>
    </div>
  );
}

export default Table;


