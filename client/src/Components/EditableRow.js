import React from "react";
import { Link } from "react-router-dom";
import data from '../mock-data.json'
import './EditableRow.css'


class EditableRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Eid: "",
      Ename: "",
      Uname: "",
      Email: "",
      password: "",
      department: "",
      role: ""
    }

  }
  render() {
    let datas=JSON.parse(localStorage.getItem("Users"))
    return (
      <div className="app-container">

        <form onSubmit="#">
          <table>
            <thead>
              <tr>
                <th>EmployeeId</th>
                <th>Employee Name</th>
                <th>Department</th>
                <th>Role</th>
                <th>Email</th>
                <th>Username</th>
                <th>Password</th>
                <th>Save</th>
              </tr>
            </thead>
            {datas.map((data) =>

              <tbody >
                <tr >
                  <td >
                    <input
                      className="Emp-Id"
                      type="text"
                      required="required"
                      defaultValue={data.EmployeeId}
                      placeholder="EmployeeId"
                    /></td>
                  <td>
                    <input
                      type="text"
                      name='Ename'
                      required="required"
                      defaultValue={data.EmployeeName}
                      placeholder="Employee Name"

                    />
                  </td>
                  <td>
                    <select id="department" >
                      <option defaultValue={data.Department}>{data.Department}</option>
                      <option value="development">Development</option>
                      <option value="testing">Testing</option>
                      <option value="infrastructure">Infrastructure</option>
                    </select>
                  </td>
                  <td>
                    <select id="role"
                      

                    >
                      <option defaultValue={data.Role}>{data.Role}</option>
                      <option value="employee">employee</option>
                      <option value="Manager">Manager</option>
                      <option value="Admin">Admin</option>
                    </select>
                  </td>
                  <td>
                    <input
                      type="email"
                      name='Email'
                      required="required"
                      defaultValue={data.Email}
                      placeholder="sample@domain.com"
                    // onChange={(event) => this.setState({ Email: event.target.value })}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      name='Uname'
                      required="required"
                      placeholder="User Name"
                      defaultValue={data.Username}
                      onChange={(event) => this.setState({ Uname: event.target.value })}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      name='password'
                      required="required"
                      placeholder="password"
                      defaultValue={data.Password}
                      onChange={(event) => this.setState({ password: event.target.value })}
                    />

                  </td>
                  <td><button>Save</button></td>
                </tr>
              </tbody>


            )}
          </table>
        </form>
        <table>
          {localStorage.getItem("EmpDetails") !== null ? <tbody>
            <tr>
              <td>
                <input type="text"
                  name="Eid"
                  defaultValue={JSON.parse(localStorage.getItem("EmpDetails"))[0]}
                  // onChange={(e) => { this.setState({ Eid: e.target.value }) }} 
                  />
              </td>
              <td>
                <input type="text"
                  name="Ename"
                  defaultValue={JSON.parse(localStorage.getItem("EmpDetails"))[1]}
                  onChange={(e) => { this.setState({ Ename: e.target.value }) }}
                />
              </td>
              <td>
                <select id="department" defaultValue={data.Department}>
                  <option value="">{JSON.parse(localStorage.getItem("EmpDetails"))[2]}</option>
                  <option value="development">Development</option>
                  <option value="testing">Testing</option>
                  <option value="infrastructure">Infrastructure</option>
                </select>
              </td>
              <td>
                <select id="role"
                  defaultValue={data.Role}

                >
                  <option value="option" >{JSON.parse(localStorage.getItem("EmpDetails"))[3]}</option>
                  <option value="employee">employee</option>
                  <option value="Manager">Manager</option>
                  <option value="Admin">Admin</option>
                </select>
              </td>
              <td>
                <input type="text"
                  name="Email"
                  defaultValue={JSON.parse(localStorage.getItem("EmpDetails"))[4]}
                  onchange={(e) => { this.setState({ Email: e.target.value }) }} /></td>
              <td>
                <input type="text"
                  name="Uname"
                  defaultValue={JSON.parse(localStorage.getItem("EmpDetails"))[5]}
                  onchange={(e) => { this.setState({ Uname: e.target.value }) }}
                /></td>
              <td>
                <input type="text"
                  name="password"
                  defaultValue={JSON.parse(localStorage.getItem("EmpDetails"))[6]}
                  onchange={(e) => { this.setState({ password: e.target.value }) }} /></td>
              <td>
                <button
                >
                  Save
                </button>
              </td>

            </tr>

          </tbody> : console.log("true")}</table>
      </div>
    )
  }

}

export default EditableRow