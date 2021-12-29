import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
    Box,
    IconButton,
    Typography,
  } from '@material-ui/core';
  import { Close } from '@material-ui/icons';
  
  type functionprop={
      delete:(value:boolean,data:any)=>void
  }

  let deletedata = JSON.parse(localStorage.getItem("deletedetails")||"{}")
  const ConfirmDelete = (prop:functionprop) => {
    return (
      <Dialog open={true} maxWidth="sm" fullWidth>
        <DialogTitle>Confirm the action</DialogTitle>
        <Box position="absolute" top={0} right={0} >
          <IconButton>
            <Close  onClick={()=>prop.delete(false,null)}/>
          </IconButton>
        </Box>
        <DialogContent>
          <Typography>Do You Want To Delete This Details?</Typography>
        </DialogContent>
        <DialogActions>
          <Button color="primary" variant="contained" onClick={()=>prop.delete(false,null)}>
            Cancel
          </Button>
          <Button color="secondary" variant="contained" onClick={()=>prop.delete(false,deletedata)} >
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    );
  };
  
  export default ConfirmDelete;