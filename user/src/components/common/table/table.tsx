import React from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import EditIcon from '@mui/icons-material/Edit';
import Data from "../../pages/category/category";
import FormDialog from "./editdetails";
import { Delete } from "@material-ui/icons"; import { DataGrid, GridColumns, GridRowsProp } from '@mui/x-data-grid';
import ConfirmDelete from './deletedetails'
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import { GridToolbarContainer } from '@mui/x-data-grid-pro'
import Box from '@mui/material/Box'
import AddDetails from "./adddetails";


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
    Department?: string,
    TotalAMount?: string,
    EmployeeName?: string,
    Email?: string,
    Username?: string,
    Password?: string

  }[]
}
type stateprop = {
  show: boolean,
  showform: boolean,
  delete: boolean,
  adddetails: boolean
}
class BasicTable extends React.Component<rowprops & columnprops, stateprop> {
  constructor(props: rowprops & columnprops) {
    super(props)

    this.state = {
      show: false,
      showform: false,
      delete: false,
      adddetails: false
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
  deletedetails = (e: any, data: any) => {
    e.preventDefault()
    localStorage.setItem("willdelete", JSON.stringify(data))
    this.setState({
      delete: true
    })

  }
  showdeletealert = (value: boolean, data: any) => {

    this.setState({
      delete: false
    })
    let deleteData: any[] = []

    if (localStorage.getItem("deletedetails") !== null) {

      let deleteddata = JSON.parse(localStorage.getItem("deletedetails") || "{}")
      deleteddata.push(data)
      localStorage.setItem("deletedetails", JSON.stringify(deleteddata))
      let check
      let filterdata
      if (data.Category !== null) {
        if (localStorage.getItem("editedcolumns") !== null) {
          check = JSON.parse(localStorage.getItem("editedcolumns") || "[]")
        }
        else {
          check = JSON.parse(localStorage.getItem("Columns") || "[]")
        }
        let takeset = new Set(deleteddata)

        let newarr = check.filter((data: Object) => {
          return takeset.has(data)
        })
        check = check.filter((ar: any) => !deleteddata.find((rm: any) => (rm.id === ar.id)))

        localStorage.setItem("editedcolumns", JSON.stringify(check))
        window.location.reload()
      }
      else if (data.Role !== null) {
        if (localStorage.getItem("editedcolumns") !== null) {
          check = JSON.parse(localStorage.getItem("editedcolumns") || "[]")
        }
        else {
          check = JSON.parse(localStorage.getItem("Columns") || "[]")
        }
        let takeset = new Set(deleteddata)

        let newarr = check.filter((data: Object) => {
          return takeset.has(data)
        })
        check = check.filter((ar: any) => !deleteddata.find((rm: any) => (rm.id === ar.id)))

        localStorage.setItem("editedcolumns", JSON.stringify(check))
        window.location.reload()

      }
      else if (data.Department !== null) {
        if (localStorage.getItem("editedcolumns") !== null) {
          check = JSON.parse(localStorage.getItem("editedcolumns") || "[]")
        }
        else {
          check = JSON.parse(localStorage.getItem("Columns") || "[]")
        }
        let takeset = new Set(deleteddata)

        let newarr = check.filter((data: Object) => {
          return takeset.has(data)
        })
        check = check.filter((ar: any) => !deleteddata.find((rm: any) => (rm.id === ar.id)))

        localStorage.setItem("editedcolumns", JSON.stringify(check))
        window.location.reload()
      }
      else if (data.EmployeeName !== null) {
        if (localStorage.getItem("editedcolumns") !== null) {
          check = JSON.parse(localStorage.getItem("editedcolumns") || "[]")
        }
        else {
          check = JSON.parse(localStorage.getItem("Columns") || "[]")
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
      if (localStorage.getItem("editedcolumns") !== null) {
        getdata = JSON.parse(localStorage.getItem("editedcolumns") || "[]")
      }
      else if (data.Category) {

        getdata = JSON.parse(localStorage.getItem("categorydetails") || "[]")
        filterdata = getdata.filter((item: any) => {
          return item.Category !== data.Category

        })
        localStorage.setItem("editedcolumns", JSON.stringify(filterdata))
        localStorage.setItem("categorydetails", JSON.stringify(filterdata))
        window.location.reload()


      }
      else if ((data.Role && !data.EmployeeName)) {
        getdata = JSON.parse(localStorage.getItem("Roledetails") || "[]")
        // alert("Role")
        filterdata = getdata.filter((item: any) => {
          return item.Role !== data.Role

        })

        localStorage.setItem("editedcolumns", JSON.stringify(filterdata))
        localStorage.setItem("Roledetails", JSON.stringify(filterdata))
        window.location.reload()

      }
      else if ((data.Department && !data.EmployeeName)) {
        getdata = JSON.parse(localStorage.getItem("departmentdetails") || "[]")
        // alert("Role")
        filterdata = getdata.filter((item: any) => {
          return item.Department !== data.Department

        })

        localStorage.setItem("editedcolumns", JSON.stringify(filterdata))
        localStorage.setItem("departmentdetails", JSON.stringify(filterdata))
        window.location.reload()

      }

      else if (data.EmployeeName) {
        getdata = JSON.parse(localStorage.getItem("employeedetails") || "[]")
        // alert("Role")
        filterdata = getdata.filter((item: any) => {
          return item.EmployeeName !== data.EmployeeName

        })

        localStorage.setItem("editedcolumns", JSON.stringify(filterdata))
        localStorage.setItem("employeedetails", JSON.stringify(filterdata))
        window.location.reload()

      }




    }

  }
  closepopup = (value: boolean) => {

    this.setState({
      showform: false,
      delete: false,
      adddetails: false
    })

  }

  createtable(rows: any, columns: any) {
    let rowarray: any[] = []
    let columnarray: any[] = []
    rows.forEach((data: any) => {


      return rowarray.push(

        <TableCell style={{ "width": "2px", "marginLeft": "10px", "color": "black" }} key={data.id}>{data.heading}</TableCell>
      )
    })
    columns.forEach((data: any) => {
      let datas: any[] = []
      rows.forEach((row: any) => {
        if (row.property === "Edit") {
          columnarray.push(<TableCell style={{ "width": "2px", "marginLeft": "10px" }}><EditIcon onClick={(e) => { this.showalert(e, data) }}></EditIcon></TableCell>)
        }
        else if (row.property === "Delete") {
          columnarray.push(<TableCell style={{ "width": "2px", "marginLeft": "10px" }}><Delete onClick={(e) => { this.deletedetails(e, data) }}></Delete></TableCell>)
        }
        else {
          columnarray.push(<TableCell style={{ "width": "2px", "marginLeft": "10px" }} key={data.id}>{data[row.property]}</TableCell>)
        }
      })
      columnarray.push(<TableRow style={{ "width": "2px", "marginLeft": "10px" }}>{datas}</TableRow>)
    })
    return (
      <>
        <TableHead>
          <TableRow >
            {rowarray}
          </TableRow>
        </TableHead>
        <TableBody >
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
      let editedvaulue = editrole.map((data: any) => {
        if (data.id === editvalue.id) {
          data = editvalue
        }
        return data
      }
      )
      localStorage.setItem("editedcolumns", JSON.stringify(editedvaulue))
      localStorage.setItem("categorydetails", JSON.stringify(editedvaulue))

    }
    else if ((editvalue.Role && !editvalue.EmployeeName)) {

      if (localStorage.getItem("editedcolumns") !== null) {
        editrole = JSON.parse(localStorage.getItem("editedcolumns") || "[]")
      }
      else {
        editrole = JSON.parse(localStorage.getItem("Roledetails") || "[]")
      }
      let editedvaulue = editrole.map((data: any) => {
        if (data.id === editvalue.id) {
          data = editvalue
        }
        return data

      }
      )

      localStorage.setItem("editedcolumns", JSON.stringify(editedvaulue))
      localStorage.setItem("Roledetails", JSON.stringify(editedvaulue))
    }

    else if ((editvalue.Department && !editvalue.EmployeeName)) {

      if (localStorage.getItem("editedcolumns") !== null) {
        editrole = JSON.parse(localStorage.getItem("editedcolumns") || "[]")
      }
      else {
        editrole = JSON.parse(localStorage.getItem("departmentdetails") || "[]")
      }
      let editedvaulue = editrole.map((data: any) => {
        if (data.id === editvalue.id) {
          data = editvalue
        }
        return data

      }
      )

      localStorage.setItem("editedcolumns", JSON.stringify(editedvaulue))
      localStorage.setItem("departmentdetails", JSON.stringify(editedvaulue))
      window.location.reload()
    }

    else if (editvalue.EmployeeName) {

      if (localStorage.getItem("editedcolumns") !== null) {
        editrole = JSON.parse(localStorage.getItem("editedcolumns") || "[]")
      }
      else {
        editrole = JSON.parse(localStorage.getItem("employeedetails") || "[]")
      }
      let editedvaulue = editrole.map((data: any) => {
        if (data.id === editvalue.id) {
          data = editvalue
        }
        return data

      }
      )

      localStorage.setItem("editedcolumns", JSON.stringify(editedvaulue))
      localStorage.setItem("employeedetails", JSON.stringify(editedvaulue))
      window.location.reload()

    }

    // window.location.reload()

  }

  adddetails() {
    this.setState({
      adddetails: true
    })
  }

  render() {
    let rows = this.props.rows
    let columns


    if (this.props.columns) {
      let propscolumn = this.props.columns
      let editedcolumn = JSON.parse(localStorage.getItem("editedcolumns") || "[]")

      let propskeys = Object.keys(Object.assign({}, ...propscolumn))
      let editkeys = Object.keys(Object.assign({}, ...editedcolumn))
      console.log(propskeys)
      console.log(editkeys)
      if (JSON.stringify(propskeys) === JSON.stringify(editkeys)) {
        columns = JSON.parse(localStorage.getItem("editedcolumns") || '[]')
        console.log(columns)
      }
      else {

        columns = this.props.columns
        localStorage.removeItem("editedcolumns")
        localStorage.removeItem("deletedetails")
        console.log(columns)
      }
    }
    else {
      columns = JSON.parse(localStorage.getItem("editedcolumns") || '[]')
      console.log(columns)
    }
    localStorage.setItem("currentcolumns", JSON.stringify(columns))


    return (
      <>
        <Box style={{ marginLeft: 160, marginTop: 90 }}
          sx={{
            height: 500,

            width: '100%',
            '& .actions': {
              color: 'text.secondary',
            },
            '& .textPrimary': {
              color: 'text.primary',
            },
          }}
        >


          <TableContainer component={Paper} style={{ "width": "90%", marginTop: 30 }}>
            <Button onClick={() => { this.adddetails() }} >Add</Button>
            <Table>
              {this.createtable(rows, columns)}

            </Table>
            {this.state.showform && <FormDialog save={this.save} close={this.closepopup} />}
          </TableContainer>
          {this.state.delete && <ConfirmDelete delete={this.showdeletealert} close={this.closepopup} deletedata={JSON.parse(localStorage.getItem("willdelete") || "{}")} />}
          {this.state.adddetails && <AddDetails close={this.closepopup} />}
        </Box>
      </>

    );
  }
}

export default BasicTable;