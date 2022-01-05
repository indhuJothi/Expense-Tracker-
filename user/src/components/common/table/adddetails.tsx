import React from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from "react";

type functionprop = {
    close: (value: boolean) => void,

}

function AddDetails(prop: functionprop) {

    const [open, setOpen] = React.useState(true);
    const [id, setId] = React.useState("");
    const [Category, setCategory] = React.useState("")
    const [MinimumLimit, setMinimumLimit] = React.useState("")
    const [Role, setRole] = React.useState("")
    const [Department, setDepartment] = React.useState("")
    const [TotalAmount, setTotalAmount] = React.useState("")
    const [EmployeeName, setEmployeeName] = React.useState("")
    const [Username, setUsename] = React.useState("")
    const [Password, setPassword] = React.useState("")
    const [Email, setEmail] = React.useState("")

    const rows = JSON.parse(localStorage.getItem("currentcolumns") || "[]")
    const rowskeys = Object.keys(Object.assign({}, ...rows))
    console.log(rowskeys)
    function newdetails() {
        //    alert(EmployeeName)
        if (rowskeys.includes("EmployeeName")) {
            if (localStorage.getItem("editedcolumns")) {
                let storeddetails = JSON.parse(localStorage.getItem("editedcolumns") || "[]")
                let storeddetailskey = Object.keys(Object.assign({}, ...storeddetails))

                let newdetails = {
                    id: id,
                    EmployeeName: EmployeeName,
                    Email: Email,
                    Username: Username,
                    Password: Password,
                    Department: Department,
                    Role: Role

                }
                if (storeddetails.includes("EmployeeName")) {
                    storeddetails.push(newdetails)
                    console.log(storeddetails)
                    localStorage.setItem("editedcolumns", JSON.stringify(storeddetails))
                }
                else {
                    let storeddetails = JSON.parse(localStorage.getItem("employeedetails") || "[]")
                    let newdetails = {
                        id: id,
                        EmployeeName: EmployeeName,
                        Email: Email,
                        Username: Username,
                        Password: Password,
                        Department: Department,
                        Role: Role

                    }
                    storeddetails.push(newdetails)
                    console.log(storeddetails)
                    localStorage.setItem("employeedetails", JSON.stringify(storeddetails))
                }
            }
            else {
                let storeddetails = JSON.parse(localStorage.getItem("employeedetails") || "[]")
                let newdetails = {
                    id: id,
                    EmployeeName: EmployeeName,
                    Email: Email,
                    Username: Username,
                    Password: Password,
                    Department: Department,
                    Role: Role

                }
                storeddetails.push(newdetails)
                console.log(storeddetails)
                localStorage.setItem("employeedetails", JSON.stringify(storeddetails))
            }
        }
        if ((rowskeys.includes("Department") && !rowskeys.includes("EmployeeName"))) {

            let newdetails = {
                id: id,
                Department: Department,
                TotalAmount: TotalAmount
            }
            if (localStorage.getItem("editedcolumns")) {
                let storeddetails = JSON.parse(localStorage.getItem("editedcolumns") || "[]")
                let storeddetailskey = Object.keys(Object.assign({}, ...storeddetails))
                if (storeddetailskey.includes("Department")) {
                    storeddetails.push(newdetails)
                    localStorage.setItem("editedcolumns", JSON.stringify(storeddetails))
                }
                else {
                    let storeddetails = JSON.parse(localStorage.getItem("departmentdetails") || "[]")
                    storeddetails.push(newdetails)
                    localStorage.setItem("departmentdetails", JSON.stringify(storeddetails))

                }

            }
            else {
                let newdetails = {
                    id: id,
                    Department: Department,
                    TotalAmount: TotalAmount
                }
                let storeddetails = JSON.parse(localStorage.getItem("departmentdetails") || "[]")
                storeddetails.push(newdetails)
                localStorage.setItem("departmentdetails", JSON.stringify(storeddetails))

            }

        }
        if (rowskeys.includes("Category")) {
            let newdetails = {
                id: id,
                Category: Category,
                MinimumLimit: MinimumLimit
            }
            if (localStorage.getItem("editedcolumns")) {
                let storeddetails = JSON.parse(localStorage.getItem("editedcolumns") || "[]")
                let storeddetailskey = Object.keys(Object.assign({}, ...storeddetails))
                if (storeddetailskey.includes("Category")) {
                    storeddetails.push(newdetails)
                    localStorage.setItem("editedcolumns", JSON.stringify(storeddetails))
                }
                else {
                    let storeddetails = JSON.parse(localStorage.getItem("categorydetails") || "[]")
                    storeddetails.push(newdetails)
                    localStorage.setItem("categorydetails", JSON.stringify(storeddetails))

                }

            }
            else {
                let storeddetails = JSON.parse(localStorage.getItem("categorydetails") || "[]")
                storeddetails.push(newdetails)
                localStorage.setItem("categorydetails", JSON.stringify(storeddetails))

            }
        }
        if ((rowskeys.includes("Role") && !rowskeys.includes("EmployeeName"))) {
            let newdetails = {
                id: id,
                Role: Role
            }
            if (localStorage.getItem("editedcolumns")) {
                let storeddetails = JSON.parse(localStorage.getItem("editedcolumns") || "[]")
                let storeddetailskey = Object.keys(Object.assign({}, ...storeddetails))
                if (storeddetailskey.includes("Role")) {
                    storeddetails.push(newdetails)
                    localStorage.setItem("editedcolumns", JSON.stringify(storeddetails))
                }
                else {
                    let storeddetails = JSON.parse(localStorage.getItem("Roledetails") || "[]")
                    storeddetails.push(newdetails)
                    localStorage.setItem("Roledetails", JSON.stringify(storeddetails))

                }

            }
            else {
                let storeddetails = JSON.parse(localStorage.getItem("Roledetails") || "[]")
                storeddetails.push(newdetails)
                localStorage.setItem("Roledetails", JSON.stringify(storeddetails))

            }

        }

    }

    return (
        <Dialog open={open}
        // onClose={()=>{prop.close(false)}}
        >
            <DialogTitle>Add Details</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Add Details
                </DialogContentText>
                {rowskeys.includes("EmployeeName") && <form
                    onSubmit={newdetails}
                >
                    <TextField
                        autoFocus
                        margin="dense"
                        id="id"
                        label="id"
                        fullWidth
                        onChange={(e) => { setId(e.target.value) }}
                        variant="standard"
                        value={id}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        label="EmployeeName"
                        id="EmployeeName"
                        fullWidth
                        variant="standard"
                        onChange={(e) => { setEmployeeName(e.target.value) }}
                        value={EmployeeName}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="Role"
                        label="Role"
                        fullWidth
                        onChange={(e) => { setRole(e.target.value) }}
                        variant="standard"

                        value={Role}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="Department"
                        label="Department"
                        fullWidth
                        onChange={(e) => { setDepartment(e.target.value) }}
                        variant="standard"
                        value={Department}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        label="Email"
                        id="Email"
                        fullWidth
                        variant="standard"
                        onChange={(e) => { setEmail(e.target.value) }}
                        value={Email}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        label="UserName"
                        id="UserName"
                        fullWidth
                        variant="standard"
                        onChange={(e) => { setUsename(e.target.value) }}
                        value={Username}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        label="Password"
                        id="Password"
                        fullWidth
                        variant="standard"
                        onChange={(e) => { setPassword(e.target.value) }}
                        value={Password}
                    />
                    <Button type='submit' value="submit">Submit</Button>
                </form>}
                {(rowskeys.includes("Department") && !rowskeys.includes("EmployeeName")) &&
                    <form onSubmit={newdetails}>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="id"
                            label="id"
                            fullWidth
                            onChange={(e) => { setId(e.target.value) }}
                            variant="standard"

                            value={id}
                        />
                        <TextField
                            autoFocus
                            margin="dense"
                            label="Department"
                            id="Department"
                            fullWidth
                            onChange={(e) => { setDepartment(e.target.value) }}
                            value={Department}
                        />
                        <TextField
                            autoFocus
                            margin="dense"
                            label="TotalAmount"
                            id="TotalAmount"
                            fullWidth
                            onChange={(e) => { setTotalAmount(e.target.value) }}
                            value={TotalAmount}
                        />
                        <Button type='submit' value="submit">Submit</Button>
                    </form>
                }
                {rowskeys.includes("Category") &&
                    <form onSubmit={newdetails}>
                        <TextField
                            autoFocus
                            margin='dense'
                            label='id'
                            fullWidth
                            id='id'
                            value={id}
                            onChange={(e) => setId(e.target.value)}
                        />
                        <TextField
                            autoFocus
                            margin="dense"
                            label="Category"
                            id="Category"
                            fullWidth
                            onChange={(e) => { setCategory(e.target.value) }}
                            value={Category}
                        />
                        <TextField
                            autoFocus
                            margin='dense'
                            label="MinimumLimit"
                            fullWidth
                            id="Minimumlimit"
                            value={MinimumLimit}
                            onChange={(e) => { setMinimumLimit(e.target.value) }}

                        />
                        <Button type='submit' value="submit">Submit</Button>

                    </form>
                }
                {(rowskeys.includes("Role") && !rowskeys.includes("EmployeeName")) &&
                    <form onSubmit={newdetails}>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="id"
                            label="id"
                            fullWidth
                            onChange={(e) => { setId(e.target.value) }}
                            variant="standard"

                            value={id}
                        />
                        <TextField
                            autoFocus
                            margin="dense"
                            label="role"
                            id="Role"
                            fullWidth
                            onChange={(e) => { setRole(e.target.value) }}
                            value={Role}
                        />
                        <Button type='submit' value="submit">Submit</Button>
                    </form>
                }


            </DialogContent>
            <DialogActions>
                <Button onClick={() => { prop.close(false) }}>Cancel</Button>

            </DialogActions>
        </Dialog>

    )

}

export default AddDetails