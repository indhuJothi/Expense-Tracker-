import React, { useEffect } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
 
type functionprop={
  close:(value:boolean)=>void,
  save:(value:boolean,editdetails:any)=>void
}
export default function FormDialog(prop:functionprop) {
  let editdetails = JSON.parse(localStorage.getItem("editdetails")|| '{}') 
let fielddetails=editdetails
console.log(fielddetails)
  const [open, setOpen] = React.useState(true);
  const [id,setId] = React.useState(fielddetails.id);
  const [Category,setCategory]=React.useState(fielddetails.Category)
  const [MinimumLimit,setMinimumLimit]=React.useState(fielddetails.MinimumLimit)
  const [Role,setRole]=React.useState(fielddetails.Role)



  let savedetails:any



  return (
    <div>
 
      <Dialog open={open} onClose={()=>{prop.close(false)}}>
        <DialogTitle>Edit Details</DialogTitle>
        <DialogContent>
          <DialogContentText>
           Edit the details
          </DialogContentText>
        
         
          
   {fielddetails.Role!==undefined &&
    <form onSubmit={()=>{prop.save(false,savedetails={id:id,Role:Role})}}>
  <TextField
          autoFocus
          margin="dense"
          id="id"
          label="id"
          fullWidth
          onChange={(e)=>{setId(e.target.value)}}
          variant="standard"
 
          defaultValue={fielddetails.id}
        />
        <TextField
        autoFocus
        margin="dense"
        label="role"
        id="Role"
        fullWidth
        onChange={(e)=>{setRole(e.target.value)}}
        defaultValue={fielddetails.Role}
        />
        <Button type='submit' value="submit">Submit</Button>
          </form>
          }
      

{fielddetails.Category!==undefined &&
<form onSubmit={()=>prop.save(false,savedetails={
  id:id,
  Category:Category,
  MinimumLimit:MinimumLimit
})}>
  <TextField
   autoFocus
   margin='dense'
   label='id'
   fullWidth
   id='id'
   defaultValue={fielddetails.id}
   onChange={(e)=>setId(e.target.value)}
  />
<TextField
        autoFocus
        margin="dense"
        label="Category"
        id="Category"
        fullWidth
        onChange={(e)=>{setCategory(e.target.value)}}
        defaultValue={fielddetails.Category}
        />
      <TextField
      autoFocus
      margin='dense'
      label="MinimumLimit"
      fullWidth
      id="Minimumlimit"
      defaultValue={fielddetails.MinimumLimit}
      onChange={(e)=>{setMinimumLimit(e.target.value)}}
    
      />
        <Button type='submit' value="submit">Submit</Button>
         
</form>
}

        </DialogContent>
        <DialogActions>
          <Button onClick={()=>{prop.close(false)}}>Cancel</Button>
          {/* <Button onClick={()=>{prop.close(false)}}>Save</Button> */}
        </DialogActions>
      </Dialog>
    </div>
  );
}

