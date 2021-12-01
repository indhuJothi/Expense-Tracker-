import React, { useState, Fragment } from "react";
import './App.css';
import data from "./mock-data.json";


function Table() {
  const [Details, setDetails] = useState(data);
  return (
    <div className="app-container">
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
        </tr>
        </thead>
        <tbody>
          {Details.map((data)=>(
            <Fragment>
              <tr>
             <td>{data["Employee Name"]}</td>
              <td>{data.Department}</td>
              <td>{data.Role}</td>
              <td>{data.Email}</td>
              <td>{data.Username}</td>
              <td>{data.Password}</td>
              <td><button>Send</button></td>
          </tr>
              </Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;


