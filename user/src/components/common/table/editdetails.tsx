import React, { useEffect } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

type functionprop = {
  close: (value: boolean) => void,
  save: (value: boolean, editdetails: any) => void
}
export default function FormDialog(prop: functionprop) {
  let editdetails = JSON.parse(localStorage.getItem("editdetails") || '{}')
  let fielddetails = editdetails

  const [open, setOpen] = React.useState(true);
  const [id, setId] = React.useState(fielddetails.id);
  const [Category, setCategory] = React.useState(fielddetails.Category)
  const [MinimumLimit, setMinimumLimit] = React.useState(fielddetails.MinimumLimit)
  const [Role, setRole] = React.useState(fielddetails.Role)
  const [Department, setDepartment] = React.useState(fielddetails.Department)
  const [TotalAmount, setTotalAmount] = React.useState(fielddetails.TotalAmount)
  const [EmployeeName, setEmployeeName] = React.useState(fielddetails.EmployeeName)
  const [Username, setUsename] = React.useState(fielddetails.Username)
  const [Password, setPassword] = React.useState(fielddetails.Password)
  const [Email, setEmail] = React.useState(fielddetails.Email)



  let savedetails: any



  return (
    <div>

      <Dialog open={open} onClose={() => { prop.close(false) }}>
        <DialogTitle>Edit Details</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Edit the details
          </DialogContentText>



          {(fielddetails.Role !== undefined && fielddetails.EmployeeName === undefined) &&
            <form onSubmit={() => { prop.save(false, savedetails = { id: id, Role: Role }) }}>
              <TextField
                autoFocus
                margin="dense"
                id="id"
                label="id"
                fullWidth
                disabled
                onChange={(e) => { setId(e.target.value) }}
                variant="standard"

                defaultValue={fielddetails.id}
              />
              <TextField
                autoFocus
                margin="dense"
                label="role"
                id="Role"
                fullWidth
                onChange={(e) => { setRole(e.target.value) }}
                defaultValue={fielddetails.Role}
              />
              <DialogActions>
                <Button type='submit' value="submit">Submit</Button>
                <Button onClick={() => { prop.close(false) }}>Cancel</Button>
              </DialogActions>
            </form>
          }



          {(fielddetails.Department !== undefined && fielddetails.EmployeeName === undefined) &&
            <form onSubmit={() => { prop.save(false, savedetails = { id: id, Department: Department, TotalAmount: TotalAmount }) }}>
              <TextField
                autoFocus
                margin="dense"
                id="id"
                label="id"
                fullWidth
                disabled
                onChange={(e) => { setId(e.target.value) }}
                variant="standard"

                defaultValue={fielddetails.id}
              />
              <TextField
                autoFocus
                margin="dense"
                label="Department"
                id="Department"
                fullWidth
                onChange={(e) => { setDepartment(e.target.value) }}
                defaultValue={fielddetails.Department}
              />
              <TextField
                autoFocus
                margin="dense"
                label="TotalAmount"
                id="TotalAmount"
                fullWidth
                onChange={(e) => { setTotalAmount(e.target.value) }}
                defaultValue={fielddetails.TotalAmount}
              />
              <DialogActions>
                <Button type='submit' value="submit">Submit</Button>
                <Button onClick={() => { prop.close(false) }}>Cancel</Button>
              </DialogActions>
            </form>
          }

          {fielddetails.Category !== undefined &&
            <form onSubmit={() => prop.save(false, savedetails = {
              id: id,
              Category: Category,
              MinimumLimit: MinimumLimit
              
            })}>
              <TextField
                autoFocus
                margin='dense'
                label='id'
                fullWidth
                disabled
                id='id'
                defaultValue={fielddetails.id}
                onChange={(e) => setId(e.target.value)}
              />
              <TextField
                autoFocus
                margin="dense"
                label="Category"
                id="Category"
                fullWidth
                onChange={(e) => { setCategory(e.target.value) }}
                defaultValue={fielddetails.Category}
              />
              <TextField
                autoFocus
                margin='dense'
                label="MinimumLimit"
                fullWidth
                id="Minimumlimit"
                defaultValue={fielddetails.MinimumLimit}
                onChange={(e) => { setMinimumLimit(e.target.value) }}

              />
              <DialogActions>
                <Button type='submit' value="submit">Submit</Button>
                <Button onClick={() => { prop.close(false) }}>Cancel</Button>
              </DialogActions>

            </form>
          }
          {fielddetails.EmployeeName !== undefined &&
            <form onSubmit={() => {
              prop.save(false,
                savedetails = { id: id, EmployeeName: EmployeeName, Email: Email, Username: Username, Password: Password, Role: Role, Department: Department })
            }}>
              <TextField
                autoFocus
                margin="dense"
                id="id"
                label="id"
                fullWidth
                disabled
                onChange={(e) => { setId(e.target.value) }}
                variant="standard"

                defaultValue={fielddetails.id}
              />
              <TextField
                autoFocus
                margin="dense"
                label="EmployeeName"
                id="EmployeeName"
                fullWidth
                variant="standard"
                onChange={(e) => { setEmployeeName(e.target.value) }}
                defaultValue={fielddetails.EmployeeName}
              />
              <TextField
                autoFocus
                margin="dense"
                id="Role"
                label="Role"
                fullWidth
                onChange={(e) => { setRole(e.target.value) }}
                variant="standard"

                defaultValue={fielddetails.Role}
              />
              <TextField
                autoFocus
                margin="dense"
                id="Department"
                label="Department"
                fullWidth
                onChange={(e) => { setDepartment(e.target.value) }}
                variant="standard"

                defaultValue={fielddetails.Department}
              />
              <TextField
                autoFocus
                margin="dense"
                label="Email"
                id="Email"
                fullWidth
                variant="standard"
                onChange={(e) => { setEmail(e.target.value) }}
                defaultValue={fielddetails.Email}
              />
              <TextField
                autoFocus
                margin="dense"
                label="UserName"
                id="UserName"
                fullWidth
                variant="standard"
                onChange={(e) => { setUsename(e.target.value) }}
                defaultValue={fielddetails.Username}
              />
              <TextField
                autoFocus
                margin="dense"
                label="Password"
                id="Password"
                fullWidth
                variant="standard"
                onChange={(e) => { setPassword(e.target.value) }}
                defaultValue={fielddetails.Password}
              />
              <DialogActions>
                <Button type='submit' value="submit">Submit</Button>
                <Button onClick={() => { prop.close(false) }}>Cancel</Button>
              </DialogActions>
            </form>
          }

        </DialogContent>
      </Dialog>
    </div>
  );
}

