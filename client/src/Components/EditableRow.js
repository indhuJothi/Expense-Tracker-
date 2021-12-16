import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import './EditableRow.css'


function EditableRow(props) {
  let [Eid, setEid] = useState("")
  let [Ename, setEname] = useState("")
  let [Uname, setUname] = useState("")
  let [Email, setEmail] = useState("")
  let [password, setpassword] = useState("")
  let [department, setdepartment] = useState("")
  let [role, setrole] = useState("")
  let datas = JSON.parse(localStorage.getItem("Users"))

  let navigate = useNavigate()
  let { id } = useParams()
  let EditedValue
  console.log(datas)

  datas.map(data => {

    return parseInt(id) === parseInt(data.EmployeeId) &&
      localStorage.setItem("EditedValue", JSON.stringify(data))
  })

  localStorage.getItem("NewEditedValues") === null ?
    EditedValue = JSON.parse(localStorage.getItem("EditedValue")) :
    EditedValue = JSON.parse(localStorage.getItem("NewEditedValues"))

  // console.log(EditedValue)
  return (
    <div className="app-container">
      <form onSubmit={() => {
        let NewEditedValues = {
          EmployeeId: Eid === "" ? EditedValue.EmployeeId : Eid,
          EmployeeName: Ename === "" ? EditedValue.EmployeeName : Ename,
          Email: Email === "" ? EditedValue.Email : Email,
          Username: Uname === "" ? EditedValue.Username : Uname,
          Password: password === "" ? EditedValue.Password : password,
          Department: department === "" ? EditedValue.Department : department,
          Role: role === "" ? EditedValue.Role : role,

        }
        localStorage.setItem("NewEditedValues", JSON.stringify(NewEditedValues))
        navigate('/')

      }}>
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
            parseInt(id) === parseInt(data.EmployeeId) &&
            <tbody >
              <tr >
                <td >
                  <input
                    className="Emp-Id"
                    name="Uname"
                    type="text"
                    required="required"
                    defaultValue={EditedValue.EmployeeId}
                    onChange={(event) => { setEid(event.target.value) }}
                    placeholder="EmployeeId"
                  /></td>
                <td>
                  <input
                    type="text"
                    name='Ename'
                    required="required"
                    defaultValue={EditedValue.EmployeeName}
                    onChange={(event) => { setEname(event.target.value) }}
                    placeholder="Employee Name"

                  />
                </td>
                <td>
                  <select id="department"
                    onChange={(event) => { setdepartment(event.target.value) }}
                  >
                    <option defaultValue={EditedValue.Department}>{EditedValue.Department}</option>
                    <option value="development">Development</option>
                    <option value="testing">Testing</option>
                    <option value="infrastructure">Infrastructure</option>
                  </select>
                </td>
                <td>
                  <select id="role"
                    onChange={(event) => { setrole(event.target.value) }}

                  >
                    <option defaultValue={EditedValue.Role}>{EditedValue.Role}</option>
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
                    defaultValue={EditedValue.Email}
                    placeholder="sample@domain.com"
                    onChange={(event) => setEmail(event.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name='Uname'
                    required="required"
                    placeholder="User Name"
                    defaultValue={EditedValue.Username}
                    onChange={(event) => setUname(event.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name='password'
                    required="required"
                    placeholder="password"
                    defaultValue={EditedValue.Password}
                    onChange={(event) => setpassword(event.target.value)}
                  />

                </td>
                <td>
                  <input type="submit" value="Save" />
                </td>
              </tr>

            </tbody>


          )}
        </table>
      </form>
      {/* <table>
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

          </tbody> : console.log("true")}</table> */}
    </div>
  )
}



export default EditableRow