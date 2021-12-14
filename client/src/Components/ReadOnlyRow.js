import React from "react";
import "../Components/Admin/Emp_Table.css"
import {Link} from 'react-router-dom'
import SweetAlert from 'react-bootstrap-sweetalert';

class ReadOnlyRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     show:false,
     alert:null
    }
  }

  handleDelete(){
    this.setState({
      show:true,
  
      
    })

  }

  hideAlert=(Id)=>{
    
    let Users= JSON.parse(localStorage.getItem("Users"))
    console.log(Users)
    // Users.map((user)=>{
    //   if(parseInt(Id)===parseInt(user.EmployeeId)){
    //     Users.pop(Id)
    //   }
    const final=Users.filter((user)=>{return user.EmployeeId!==Id})
    console.log(final)
    this.setState({
      show:false
    })
    console.log(final)

    localStorage.setItem("Users",JSON.stringify(final))
     
   window.location.reload()
  }
  render(){
 
  let contact =this.props.contact
  // let deletedData = JSON.parse(localStorage.getItem("DeletedValues"))
  //  deletedData!==null ?contact=deletedData:contact= this.props.contact
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
        <button type="button" onClick={()=>this.handleDelete()}>
          Delete
        </button>
      </td>
    </tr>
    {/* </tbody> */}
    {this.state.show &&    
      <SweetAlert
      // show={this.state.show}
     warning
     title="!"
     onConfirm={()=>this.hideAlert(contact.EmployeeId)}
    >
      Are you sure?
      Do you want to delete this employee?
    </SweetAlert>}
    </>
  );
  }
};

export default ReadOnlyRow;
