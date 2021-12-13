import React from "react";
import './Emp_Table.css';
import data from "../../mock-data.json";
import ReadOnlyRow from "../ReadOnlyRow";
import { Link } from 'react-router-dom'


class Table extends React.Component {
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

  showDepartment(event) {
    this.setState({
      department: event.target.value
    })
  }

  showRole(event) {
    this.setState({
      role: event.target.value
    })
  }


  handleSubmit(event) {
    event.preventDefault();
    let EnameRes = true
    let UnameRes = true
    let EmailRes = true
    let passwordRes = true
    let departmentRes = true
    let roleRes = true

    if (this.state.Ename !== "") {
      EnameRes = false
    }
    else {
      EnameRes = true
    }
    if (this.state.Uname !== "") {
      UnameRes = false
    }
    else {
      UnameRes = true
    }
    if (this.state.Email !== "") {
      EmailRes = false
    }
    else {
      EmailRes = true
    }
    if (this.state.department !== "") {
      departmentRes = false
    }
    else {
      departmentRes = true
    }
    if (this.state.role !== "") {
      roleRes = false
    }
    else {
      roleRes = true
    }
    if (this.state.password !== "") {
      passwordRes = false
    }
    else {
      passwordRes = true
    }
    if ((EmailRes || EnameRes || UnameRes || passwordRes || departmentRes || roleRes || departmentRes) === false) {

      var EmpDetails = [];
      var addedEmployee = [];
      var EmpDetails = {
        EmployeeId: this.state.Eid,
        EmployeeName: this.state.Ename,
        Department: this.state.department,
        Role: this.state.role,
        Email: this.state.Email,
        Username: this.state.Uname,
        Password: this.state.password
      }
      let Details = []
      if (localStorage.getItem("EmpDetails")) {
        let prevDetails = JSON.parse(localStorage.getItem("EmpDetails"))
        let storePrevDetails
        prevDetails.map((data) => {
          storePrevDetails = {
            EmployeeId: data.EmployeeId,
            EmployeeName: data.EmployeeName,
            Department: data.Department,
            Role: data.Role,
            Email: data.Email,
            Username: data.Username,
            Password: data.Password
          }
          Details.push(storePrevDetails)
        })


      }
      Details.push(EmpDetails)
      localStorage.setItem("EmpDetails", JSON.stringify(Details))
      window.location.reload()



    }
    else {
      alert("Please Enter all the information")
    }

  }
  handleEditClick(event, contact) {
    event.preventDefault();

    alert("Hi")


  }

  handleEditForm(event) {
    event.preventDefault();
    alert("Hello")

  }

  componentWillMount() {
    let users = []
    data.map((data) => {
      users[data.EmployeeId - 1] = {
        EmployeeId: data.EmployeeId,
        EmployeeName: data.EmployeeName,
        Department: data.Department,
        Role: data.Role,
        Email: data.Email,
        Username: data.Username,
        Password: data.Password
      }
    }
   
    )
    let EditedValues
    if(localStorage.getItem("NewEditedValues"))
    {
    EditedValues= JSON.parse(localStorage.getItem("NewEditedValues"))
    users.map((data)=>{
   
      data.EmployeeId===EditedValues.EmployeeId &&
      <>
        {data.EmployeeId=EditedValues.EmployeeId},
        {data.EmployeeName=EditedValues.EmployeeName},
        {data.Email=EditedValues.Email},
        {data.Username=EditedValues.Username},
        {data.Password=EditedValues.Password},
        {data.Role=EditedValues.Role},
        {data.Department=EditedValues.Department}
       </>
      
    })
  }
    localStorage.setItem("Users", JSON.stringify(users))
  

  }

  render() {
    let datas = JSON.parse(localStorage.getItem("Users"))
    let addedDatas = JSON.parse(localStorage.getItem("EmpDetails"))
    console.log(addedDatas)
  
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
                <th>Send</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {datas.map((data) => (

                <ReadOnlyRow
                  contact={data}
                  handleEditClick={this.handleEditClick}
                />
              ))}

              {localStorage.getItem("EmpDetails") !== null &&
                addedDatas.map((data) => 

                  <tr>
                    <td>{data.EmployeeId}</td>
                    <td>{data.EmployeeName}</td>
                    <td>{data.Department}</td>
                    <td>{data.Role}</td>
                    <td>{data.Email}</td>
                    <td>{data.Username}</td>
                    <td>{data.Password}</td>
                    <td> <button>Send</button>
                    </td>
                    <td>
                      <Link
                        to={{ pathname: "/edit" + JSON.parse(localStorage.getItem("EmpDetails"))[0] }}
                      >
                        Edit
                      </Link>
                    </td>
                    <td>
                      <button type="button" onClick={() => "#"}>
                        Delete
                      </button>
                    </td>
                  </tr>


                )}</tbody>
          </table>
        </form>

        <h2 className="title">Add Employee</h2>
        <form onSubmit={this.handleSubmit.bind(this)} className="addEmpForm">
          <input
            type="text"
            name='Eid'
            required="required"
            placeholder="Employee Id"
            value={this.state.Eid}
            onChange={(event) => this.setState({ Eid: event.target.value })}
          />
          <input
            type="text"
            name='Ename'
            // required="required"
            placeholder="Employee Name"
            value={this.state.Ename}
            onChange={(event) => this.setState({ Ename: event.target.value })}
          />
          <select id="department" value={this.state.department} onChange={this.showDepartment.bind(this)}>
            <option value="">{""}</option>
            <option value="development">Development</option>
            <option value="testing">Testing</option>
            <option value="infrastructure">Infrastructure</option>
          </select>
          <select id="role" value={this.state.role} onChange={this.showRole.bind(this)}>
            <option value="option">option</option>
            <option value="employee">employee</option>
            <option value="Manager">Manager</option>
            <option value="Admin">Admin</option>
          </select>
          <input
            type="email"
            name='Email'
            // required="required"
            value={this.state.Email}
            placeholder="sample@domain.com"
            onChange={(event) => this.setState({ Email: event.target.value })}
          />
          <input
            type="text"
            name='Uname'
            // required="required"
            placeholder="User Name"
            value={this.state.Uname}
            onChange={(event) => this.setState({ Uname: event.target.value })}
          />
          <input
            type="password"
            name='password'
            // required="required"
            placeholder="password"
            value={this.state.password}
            onChange={(event) => this.setState({ password: event.target.value })}
          />

          <input type="submit"
            value="submit" />
        </form>
      </div>
    );
  }
}

export default Table;


