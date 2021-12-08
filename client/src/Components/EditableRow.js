import React from "react";

const EditableRow = ()=>{
    return(
        <tr>
            <td>
            <input
            type="text"
            name='Ename'
            required="required"
            placeholder="Employee Name"
            
          />
          <select id="department">
            <option value="">{""}</option>
            <option value="development">Development</option>
            <option value="testing">Testing</option>
            <option value="infrastructure">Infrastructure</option>
          </select>
          <select id="role"
          
         
           >
            <option value="option">option</option>
            <option value="employee">employee</option>
            <option value="Manager">Manager</option>
            <option value="Admin">Admin</option>
          </select>
          <input
            type="email"
            name='Email'
            required="required"
            // value={this.state.Email}
            placeholder="sample@domain.com"
            // onChange={(event) => this.setState({ Email: event.target.value })}
          />
          <input
            type="text"
            name='Uname'
            required="required"
            placeholder="User Name"
            // value={this.state.Uname}
            // onChange={(event) => this.setState({ Uname: event.target.value })}
          />
          <input
            type="password"
            name='password'
            required="required"
            placeholder="password"
            // value={this.state.password}
            // onChange={(event) => this.setState({ password: event.target.value })}
          />

            </td>
        </tr>
    )
}

export default EditableRow