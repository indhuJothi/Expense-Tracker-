import React, { useEffect } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
 
type functionprop={
  close:(value:boolean)=>void
}
export default function FormDialog(prop:functionprop) {
  const [open, setOpen] = React.useState(true);
  const [id,setId] = React.useState("");
  const [Category,setCategory]=React.useState("")
  const [MimiumLimit,setMinimumLimit]=React.useState("")

let editdetails = JSON.parse(localStorage.getItem("editdetails")|| '{}') 

  return (
    <div>
 
      <Dialog open={open} onClose={()=>{prop.close(false)}}>
        <DialogTitle>Edit Details</DialogTitle>
        <DialogContent>
          <DialogContentText>
           Edit the details
          </DialogContentText>
         <form >
          {Object.keys(editdetails).map((key)=>
                   <TextField
          autoFocus
          margin="dense"
          id="id"
          label={key}
          fullWidth
          variant="standard" 
          defaultValue={editdetails[key]}
        />
          )
             

        }
        </form>
        
       


        </DialogContent>
        <DialogActions>
          <Button onClick={()=>{prop.close(false)}}>Cancel</Button>
          <Button onClick={()=>{prop.close(false)}}>Save</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
function value(value: any) {
  throw new Error('Function not implemented.');
}

