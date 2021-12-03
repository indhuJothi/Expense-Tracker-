import React from "react";
import './Emp-Table.css';
import data from "../../mock-data.json";
import ReadOnlyRow from "../ReadOnlyRow";


class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
      alert(
     this.state.Ename
      )

    }
    else {
      alert("Please Enter all the information")
    }

  }
  render() {
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
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            {data.map((data) => (
              <ReadOnlyRow
                contact={data}
              />
            ))}
          </table>
        </form>

        <h2 className="title">Add Employee</h2>
        <form onSubmit={this.handleSubmit.bind(this)} className="addEmpForm">
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


