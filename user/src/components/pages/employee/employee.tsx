
import React from 'react'
import employeedata from '../login/mockdata.json'
import BasicTable from '../../common/table/table'
import Menu from '../../common/menu/menu'

export default class Employeetable extends React.Component {
    componentDidMount() {
        if (localStorage.getItem("editedcolumns")) {
            let editedcolumns = JSON.parse(localStorage.getItem("editedcolumns") || "[]")
            let rolekeys = Object.keys(Object.assign({}, ...employeedata))
            let editkeys = Object.keys(Object.assign({}, ...editedcolumns))
            if (JSON.stringify(rolekeys) === JSON.stringify(editkeys)) {
                localStorage.setItem("employeedetails", JSON.stringify(editedcolumns))
            }

            else {
                localStorage.setItem("employeedetails", JSON.stringify(employeedata))
            }
        }
        else if (localStorage.getItem("employeedetails")) {
            let employeedetails = JSON.parse(localStorage.getItem("employeedetails") || "[]")
            localStorage.setItem("employeedetails", JSON.stringify(employeedetails))
        }
        else {
            localStorage.setItem("employeedetails", JSON.stringify(employeedata))
        }


    }


    render() {
        const rows = [
            {
                heading: "id",
                property: "id"
            },
            {
                heading: "EmployeeName",
                property: "EmployeeName"
            },
            {
                heading: "Department",
                property: "Department"
            },
            {
                heading: "Role",
                property: "Role"
            },
            {
                heading: "Email",
                property: "Email"
            },
            {
                heading: "Username",
                property: "Username"
            },
            {
                heading: "Password",
                property: "Password"
            },

            {
                heading: "Edit",
                property: "Edit"
            },
            {
                heading: "Delete",
                property: "Delete"
            }
        ]
        let columns
        { localStorage.getItem("employeedetails") !== null ? columns = JSON.parse(localStorage.getItem("employeedetails") || "{}") : columns = employeedata }
        return (

            <>
                <Menu />
                <BasicTable rows={rows} columns={columns} />
            </>


        )
    }
}