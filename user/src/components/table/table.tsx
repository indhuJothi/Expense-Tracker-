import React from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import EditIcon from '@mui/icons-material/Edit';
import Data from "./datasentfile";
import FormDialog from "./editdetails";
import { Delete } from "@material-ui/icons"; import { DataGrid, GridColumns, GridRowsProp } from '@mui/x-data-grid';
import ConfirmDelete from './deletedetails'
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import { GridToolbarContainer } from '@mui/x-data-grid-pro'


type rowprops = {
  rows: {
    heading: string | null,
    property: string | null
  }[]

}

type columnprops = {
  columns:
  {
    id: string,
    Category?: string,
    MinimumLimit?: string,
    Role?: string
    Department: string,
    TotalAMount: string
  }[]
}
type stateprop = {
  show: boolean,
  showform: boolean,
  delete: boolean
}
class BasicTable extends React.Component<rowprops & columnprops, stateprop> {
  constructor(props: rowprops & columnprops) {
    super(props)

    this.state = {
      show: false,
      showform: false,
      delete: false
    }

  }
  showTable() {
    this.setState({
      show: true
    })
  }

  showalert = (e: any, data: any) => {
    e.preventDefault()
    this.setState({
      showform: true
    })
    localStorage.setItem("editdetails", JSON.stringify(data))
  }
  deletedetails=(e:any,data:any)=>{
    e.preventDefault()
    localStorage.setItem("willdelete",JSON.stringify(data))
    this.setState({
      delete:true
    })
    
  }
  showdeletealert = (value:boolean, data: any) => {
    
      this.setState({
        delete:false
      })
    let deleteData: any[] = []
  
    if (localStorage.getItem("deletedetails") !== null) {

      let deleteddata = JSON.parse(localStorage.getItem("deletedetails") || "{}")
      deleteddata.push(data)
      localStorage.setItem("deletedetails", JSON.stringify(deleteddata))
      let check
      let  filterdata 
      if(data.Category!==null){
      if(localStorage.getItem("editedcolumns")!==null){
        check=JSON.parse(localStorage.getItem("editedcolumns")||"[]")
      }
      else{
        check=JSON.parse(localStorage.getItem("Columns")||"[]")
      }
      let takeset = new Set(deleteddata)
   
      let newarr = check.filter((data: Object) => {
        return takeset.has(data)
      })
      check = check.filter((ar: any) => !deleteddata.find((rm: any) => (rm.id === ar.id)))
  
      localStorage.setItem("editedcolumns", JSON.stringify(check))
      window.location.reload()
    }
    else if(data.Role!==null){
      if(localStorage.getItem("editedcolumns")!==null){
        check=JSON.parse(localStorage.getItem("editedcolumns")||"[]")
      }
      else{
        check=JSON.parse(localStorage.getItem("Columns")||"[]")
      }
      let takeset = new Set(deleteddata)
   
      let newarr = check.filter((data: Object) => {
        return takeset.has(data)
      })
      check = check.filter((ar: any) => !deleteddata.find((rm: any) => (rm.id === ar.id)))
   
      localStorage.setItem("editedcolumns", JSON.stringify(check))
      window.location.reload()

    }
    }

    else {
      deleteData = [data]
      let filterdata
      localStorage.setItem("deletedetails", JSON.stringify(deleteData))
     
      let getdata 
      if(localStorage.getItem("editedcolumns")!==null){
        getdata = JSON.parse(localStorage.getItem("editedcolumns") || "[]")
      }
      else if(data.Category){
        
        getdata = JSON.parse(localStorage.getItem("categorydetails") || "[]")
        filterdata = getdata.filter((item: any) => {
          return item.Category !== data.Category
         
        })
        localStorage.setItem("editedcolumns", JSON.stringify(filterdata))
        window.location.reload()
      alert("hi")
        console.log(getdata)
      }
      else if(data.Role){
        getdata = JSON.parse(localStorage.getItem("Roledetails") || "[]")
        alert("Role")
        filterdata = getdata.filter((item: any) => {
          return item.Role !== data.Role
         
        })
        console.log(getdata)
        localStorage.setItem("editedcolumns", JSON.stringify(filterdata))
        window.location.reload()
       
      }
     
      console.log(filterdata)
   

    }

  }
  closepopup = (value: boolean) => {

    this.setState({
      showform: false,
      delete:false
    })

  }

  createtable(rows: any, columns: any) {
    let rowarray: any[] = []
    let columnarray: any[] = []
    rows.forEach((data: any) => {


      return rowarray.push(

        <TableCell key={data.id}>{data.heading}</TableCell>
      )
    })
    columns.forEach((data: any) => {
      let datas: any[] = []
      rows.forEach((row: any) => {
        if (row.property === "Edit") {
          columnarray.push(<TableCell><EditIcon onClick={(e) => { this.showalert(e, data) }}></EditIcon></TableCell>)
        }
        else if (row.property === "Delete") {
          columnarray.push(<TableCell><Delete onClick={(e) => { this.deletedetails(e, data) }}></Delete></TableCell>)
        }
        else {
          columnarray.push(<TableCell key={data.id}>{data[row.property]}</TableCell>)
        }
      })
      columnarray.push(<TableRow>{datas}</TableRow>)
    })
    return (
      <>
        <TableHead>
          <TableRow>
            {rowarray}
          </TableRow>
        </TableHead>
        <TableBody>
          {columnarray}
        </TableBody>

      </>

    )
  }
  
  save = (value: boolean, editvalue: any) => {
    this.setState({
      showform: false
    })
  console.log(editvalue.Role)
    localStorage.setItem("savedetails", JSON.stringify(editvalue))
    let editrole
    if (editvalue.Category) {

      if (localStorage.getItem("editedcolumns") !== null) {
        editrole = JSON.parse(localStorage.getItem("editedcolumns") || "[]")
      }
      else {
        editrole = JSON.parse(localStorage.getItem("categorydetails") || "[]")
      }
     let editedvaulue= editrole.map((data: any) => {
        if (data.id === editvalue.id) {
          data = editvalue
        }
        return data
      }
      )
      localStorage.setItem("editedcolumns", JSON.stringify(editedvaulue))
     
    }
    else if (editvalue.Role) {

      if (localStorage.getItem("editedcolumns") !== null) {
        editrole = JSON.parse(localStorage.getItem("editedcolumns") || "[]")
      }
      else {
        editrole = JSON.parse(localStorage.getItem("Roledetails") || "[]")
      }
     let editedvaulue= editrole.map((data: any) => {
        if (data.id === editvalue.id) {
          data = editvalue
        }
       return data

      }
      )
     
      localStorage.setItem("editedcolumns", JSON.stringify(editedvaulue))
    }

    // window.location.reload()

  }

  // deletedetails(value: boolean, deletedetail: any){
  

  //  console.log(deletedetail)
  // }


  render() {
    let rows = this.props.rows
    let columns 
    { localStorage.getItem('editedcolumns') === null ? columns = this.props.columns : columns = JSON.parse(localStorage.getItem("editedcolumns") || '[]') }
    
  
    return (
      <>
      
        <TableContainer component={Paper}>
          
          <Table>
            {this.createtable(rows, columns)}

          </Table>
          {this.state.showform && <FormDialog save={this.save} close={this.closepopup} />}
        </TableContainer>
        {this.state.delete && <ConfirmDelete delete={this.showdeletealert} close={this.closepopup} deletedata={JSON.parse(localStorage.getItem("willdelete")||"{}")} />}


      </>

    );
  }
}

export default BasicTable;