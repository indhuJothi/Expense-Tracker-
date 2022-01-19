import React from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from "react";
import { text } from "stream/consumers";

type functionprop = {
    close: (value: boolean) => void,

}

function AddDetails(prop: functionprop) {

    const [open, setOpen] = React.useState(true);
    const [error,setError]= React.useState("")
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

    function newdetails() {

        if (rowskeys.includes("EmployeeName")) {
            if (localStorage.getItem("editedcolumns")) {
                let storeddetails = JSON.parse(localStorage.getItem("editedcolumns") || "[]")
                let storeddetailskey = Object.keys(Object.assign({}, ...storeddetails))

                let newdetails = {
                    id: storeddetails.length+1,
                    EmployeeName: EmployeeName,
                    Email: Email,
                    Username: Username,
                    Password: Password,
                    Department: Department,
                    Role: Role

                }
                if (storeddetails.includes("EmployeeName")) {
                    storeddetails.push(newdetails)

                    localStorage.setItem("editedcolumns", JSON.stringify(storeddetails))
                }
                else {
                    let storeddetails = JSON.parse(localStorage.getItem("employeedetails") || "[]")
                    let newdetails = {
                        id: storeddetails.length+1,
                        EmployeeName: EmployeeName,
                        Email: Email,
                        Username: Username,
                        Password: Password,
                        Department: Department,
                        Role: Role

                    }
                    storeddetails.push(newdetails)

                    localStorage.setItem("employeedetails", JSON.stringify(storeddetails))
                }
            }
            else {
                let storeddetails = JSON.parse(localStorage.getItem("employeedetails") || "[]")
                let newdetails = {
                    id: storeddetails.length+1,
                    EmployeeName: EmployeeName,
                    Email: Email,
                    Username: Username,
                    Password: Password,
                    Department: Department,
                    Role: Role

                }
                storeddetails.push(newdetails)

                localStorage.setItem("employeedetails", JSON.stringify(storeddetails))
            }
        }
        if ((rowskeys.includes("Department") && !rowskeys.includes("EmployeeName"))) {

           
            if (localStorage.getItem("editedcolumns")) {

                let storeddetails = JSON.parse(localStorage.getItem("editedcolumns") || "[]")
                let storeddetailskey = Object.keys(Object.assign({}, ...storeddetails))
                let newdetails = {
                    id: storeddetails.length+1,
                    Department: Department,
                    TotalAmount: TotalAmount
                }
                if (storeddetailskey.includes("Department")) {
                    storeddetails.push(newdetails)
                    localStorage.setItem("editedcolumns", JSON.stringify(storeddetails))
                }
                else {
                    let storeddetails = JSON.parse(localStorage.getItem("departmentdetails") || "[]")
                    let newdetails = {
                        id: storeddetails.length+1,
                        Department: Department,
                        TotalAmount: TotalAmount
                    }
                    storeddetails.push(newdetails)

                    localStorage.setItem("departmentdetails", JSON.stringify(storeddetails))

                }

            }
            else {
               
                let storeddetails = JSON.parse(localStorage.getItem("departmentdetails") || "[]")
                let newdetails = {
                    id: storeddetails.length+1,
                    Department: Department,
                    TotalAmount: TotalAmount
                }
                storeddetails.push(newdetails)
                localStorage.setItem("departmentdetails", JSON.stringify(storeddetails))

            }

        }
        if (rowskeys.includes("Category")) {
         
            if (localStorage.getItem("editedcolumns")) {
                let storeddetails = JSON.parse(localStorage.getItem("editedcolumns") || "[]")
                let storeddetailskey = Object.keys(Object.assign({}, ...storeddetails))
                let newdetails = {
                    id: storeddetails.length+1,
                    Category: Category,
                    MinimumLimit: MinimumLimit
                }
                if (storeddetailskey.includes("Category")) {
                    storeddetails.push(newdetails)
                    localStorage.setItem("editedcolumns", JSON.stringify(storeddetails))
                }
                else {
                    let storeddetails = JSON.parse(localStorage.getItem("categorydetails") || "[]")
                    let newdetails = {
                        id: storeddetails.length+1,
                        Category: Category,
                        MinimumLimit: MinimumLimit
                    }
                    storeddetails.push(newdetails)
                  
                    localStorage.setItem("categorydetails", JSON.stringify(storeddetails))

                }

            }
            else {
                let storeddetails = JSON.parse(localStorage.getItem("categorydetails") || "[]")
                let newdetails = {
                    id: storeddetails.length+1,
                    Category: Category,
                    MinimumLimit: MinimumLimit
                }
                storeddetails.push(newdetails)
                
                localStorage.setItem("categorydetails", JSON.stringify(storeddetails))

            }
        }
        if ((rowskeys.includes("Role") && !rowskeys.includes("EmployeeName"))) {
           
            if (localStorage.getItem("editedcolumns")) {
                let storeddetails = JSON.parse(localStorage.getItem("editedcolumns") || "[]")
                let newdetails = {
                    id: storeddetails.length+1,
                    Role: Role
                }
                let storeddetailskey = Object.keys(Object.assign({}, ...storeddetails))
                if (storeddetailskey.includes("Role")) {
                    storeddetails.push(newdetails)
                    localStorage.setItem("editedcolumns", JSON.stringify(storeddetails))
                }
                else {
                    let storeddetails = JSON.parse(localStorage.getItem("Roledetails") || "[]")
                    let newdetails = {
                        id: storeddetails.length+1,
                        Role: Role
                    }
                    storeddetails.push(newdetails)
                    localStorage.setItem("Roledetails", JSON.stringify(storeddetails))

                }

            }
            else {
                let storeddetails = JSON.parse(localStorage.getItem("Roledetails") || "[]")
                let newdetails = {
                    id: storeddetails.length+1,
                    Role: Role
                }
                storeddetails.push(newdetails)
                localStorage.setItem("Roledetails", JSON.stringify(storeddetails))

            }

        }

    }

    return (
        <Dialog open={open}
            onClose={() => { prop.close(false) }}
        >
            <DialogTitle>Add Details</DialogTitle>
            <DialogContent>
                <form
                    onSubmit={newdetails}
                >
                {rowskeys.includes("EmployeeName") && 
                <>
                 
                    <TextField
                        autoFocus
                        margin="dense"
                        label="EmployeeName"
                        id="EmployeeName"
                        fullWidth
                        variant="standard"
                        required
                        onChange={(e) => { setEmployeeName(e.target.value) }}
                        value={EmployeeName}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="Role"
                        label="Role"
                        fullWidth
                        required
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
                        required
                        value={Department}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        label="Email"
                        id="Email"
                        fullWidth
                        variant="standard"
                        required
                        type="email"
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
                        required
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        label="Password"
                        id="Password"
                        fullWidth
                        variant="standard"
                        required
                        onChange={(e) => { setPassword(e.target.value) }}
                        value={Password}
                    />
                  </> 
               }
                {(rowskeys.includes("Department") && !rowskeys.includes("EmployeeName")) &&
                    <>
                     
                        <TextField
                            autoFocus
                            margin="dense"
                            label="Department"
                            id="Department"
                            fullWidth
                            onChange={(e) => { setDepartment(e.target.value) }}
                            value={Department}
                            required
                        />
                        <TextField
                            autoFocus
                            margin="dense"
                            label="TotalAmount"
                            id="TotalAmount"
                            fullWidth
                            onChange={(e) => { setTotalAmount(e.target.value) }}
                            required
                            value={TotalAmount}
                            inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                            helperText={parseInt(TotalAmount)>=0?"":"Please fill numbers only"}
                        
                        />
                      </>
                }
                {rowskeys.includes("Category") &&
                    <>
                       
                        <TextField
                            autoFocus
                            margin="dense"
                            label="Category"
                            id="Category"
                            fullWidth
                            onChange={(e) => { setCategory(e.target.value) }}
                            value={Category}
                            required
                        />
                        <TextField
                            autoFocus
                            margin='dense'
                            label="MinimumLimit"
                            fullWidth
                            // type="number"
                            inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                            id="Minimumlimit"
                            value={MinimumLimit}
                            onChange={(e) => { setMinimumLimit(e.target.value) }}
                            required
                            helperText={parseInt(MinimumLimit)>=0||""?"":"Please fill numbers only"}
                        />
                        </>
                 
                }
                {(rowskeys.includes("Role") && !rowskeys.includes("EmployeeName")) &&
                   <>
                      
                        <TextField
                            autoFocus
                            margin="dense"
                            label="role"
                            id="Role"
                            fullWidth
                            onChange={(e) => { setRole(e.target.value) }}
                            value={Role}
                            required
                        />
                  </>
                }
                   <DialogActions>
            <Button type='submit' value="submit">Submit</Button>
                <Button onClick={() => { prop.close(false) }}>Cancel</Button>

            </DialogActions>  
            </form>
            </DialogContent>
        
        </Dialog>

    )

}

export default AddDetails