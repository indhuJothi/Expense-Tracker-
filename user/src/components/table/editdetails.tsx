import React, { useEffect } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function FormDialog() {
  const [open, setOpen] = React.useState(true);

let editdetails = JSON.parse(localStorage.getItem("editdetails"))

console.log(editdetails)
const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
 
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
           Edit the details
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="id"
            label="id"
            fullWidth
            variant="standard"
            defaultValue={editdetails.id}
          />
              <TextField
            autoFocus
            margin="dense"
            id="category"
            label="category"
            fullWidth
            variant="standard"
            defaultValue={editdetails.Category}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Save</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
