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
    let mydata = {
      id: data.id,
      Category: data.Category,
      MinimumLimit: data.MinimumLimit,
      Role: data.Role,
      Department: data.Department,
      TotalAmount: data.TotalAmount
    }

    localStorage.setItem("editdetails", JSON.stringify(mydata))
  }

  showdeletealert = (e: any, data: any) => {
    e.preventDefault()

    let deleteData: any[] = []

    if (localStorage.getItem("deletedetails") !== null) {

      let deleteddata = JSON.parse(localStorage.getItem("deletedetails") || "{}")
      deleteddata.push(data)
      localStorage.setItem("deletedetails", JSON.stringify(deleteddata))
      this.setState({
        delete: true
      })

      let check
      if (localStorage.getItem("Columns") !== null) {
        check = JSON.parse(localStorage.getItem("Columns") || "[]")
      }
      else {
        check = JSON.parse(localStorage.getItem("categorydetails") || "[]")
      }
      let takeset = new Set(deleteddata)
      console.log(takeset)
      console.log(deleteddata)
      let newarr = check.filter((data: Object) => {
        return takeset.has(data)
      })
      check = check.filter((ar: any) => !deleteddata.find((rm: any) => (rm.id === ar.id)))
      console.log(check)
      localStorage.setItem("Columns", JSON.stringify(check))
      window.location.reload()
    }

    else {
      deleteData = [data]
      localStorage.setItem("deletedetails", JSON.stringify(deleteData))
      this.setState({
        delete: true
      })
      let getdata = JSON.parse(localStorage.getItem("categorydetails") || "[]")
      getdata = getdata.filter((item: any) => {
        return item.id !== data.id
      })
      localStorage.setItem("Columns", JSON.stringify(getdata))
      window.location.reload()

    }

  }
  closepopup = (value: boolean) => {

    this.setState({
      showform: false
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
          columnarray.push(<TableCell><Delete onClick={(e) => { this.showdeletealert(e, data) }}></Delete></TableCell>)
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

    localStorage.setItem("savedetails", JSON.stringify(editvalue))
    let editrole

    if (editvalue.Role !== undefined) {
      editrole = JSON.parse(localStorage.getItem("roledetails") || "{}")
      editrole.map((data: any) => {
        if (parseInt(data.id) === parseInt(editvalue.id)) {
          return data.id = editvalue.id,
            data.Role = editvalue.Role

        }

      }
      )
      localStorage.setItem("Columns", JSON.stringify(editrole))
    }

    if (editvalue.Category !== undefined) {

      if (localStorage.getItem("Columns") !== null) {
        editrole = JSON.parse(localStorage.getItem("Columns") || "[]")
      }
      else {
        editrole = JSON.parse(localStorage.getItem("categorydetails") || "[]")
      }
      editrole.map((data: any) => {
        if (parseInt(data.id) === parseInt(editvalue.id)) {
          return data.id = editvalue.id,
            data.Category = editvalue.Category,
            data.MinimumLimit = editvalue.MinimumLimit

        }

      }
      )
      localStorage.setItem("Columns", JSON.stringify(editrole))
    }

    // window.location.reload()

  }

  deletedetails = (value: boolean, deletedetail: any) => {
    this.setState({
      delete: false
    })

    // let result = prevData.filter((data) => { return (data.Department != this.state.DeleteDepartment) })
  }

  render() {
    let rows = this.props.rows
    let columns = this.props.columns
    { localStorage.getItem('Columns') === null ? columns = this.props.columns : columns = JSON.parse(localStorage.getItem("Columns") || '[]') }
    return (
      <>
        <TableContainer component={Paper}>
          <Table>
            {this.createtable(rows, columns)}

          </Table>
          {this.state.showform && <FormDialog save={this.save} close={this.closepopup} />}
        </TableContainer>
        {this.state.delete && <ConfirmDelete delete={this.deletedetails} />}


      </>

    );
  }
}

export default BasicTable;