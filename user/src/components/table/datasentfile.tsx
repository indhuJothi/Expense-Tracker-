import { TextField } from '@mui/material'
import Button from '@mui/material/Button'
import React from  'react'
import data from '../user/category/category-data.json'
import BasicTable from './table'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

type stateprop={
    showform:boolean,
    id:string,
    Category:string,
    MinimumLimit:string
}
class Data extends React.Component<{},stateprop>{
    constructor(props:any){
        super(props)
        this.state={
            showform:false,
            id:"",
            Category:"",
            MinimumLimit:""
        }
    }
    componentDidMount(){
        localStorage.setItem("categorydetails",JSON.stringify(data))
        let alreadyaditeddata
        if(localStorage.getItem("editedcolumns")){
            alreadyaditeddata = JSON.parse(localStorage.getItem("editedcolumns")||"[]")
            alreadyaditeddata.map((data:any)=>{
                if(data.Role)
                {
                    localStorage.removeItem('editedcolumns')

                }
            })
        }
          
    }
    adddetails(){
       this.setState({
           showform:true
       })
    }

   add(e:any){
       e.preventDefault()
       let adddata={
           id:this.state.id,
           Category:this.state.Category,
           MinimumLimit:this.state.MinimumLimit

       }
       if(localStorage.getItem("editedcolumns")!==null){
       data.push(adddata)
       localStorage.setItem("editedcolumns",JSON.stringify(data))
       }
       else{
           let editeddetails=JSON.parse(localStorage.getItem("editedcolumns")||"[]")
           editeddetails.push(adddata)
           localStorage.setItem("editedcolumns",JSON.stringify(editeddetails))
       }
       this.setState({
           showform:false
       })
   }
    render(){
        const rows=[
            {
                heading:"id",
                property:"id"
            },
            {
                heading:"Category",
                property:"Category"
            },
            {
                heading:"MinimumLimit",
                property:"MinimumLimit"
            },
            {
                heading:"Edit",
                property:"Edit"
            },
            {
                heading:"Delete",
                property:"Delete"
            }
        ]
      
        let columns 
        localStorage.getItem("categorydetails")!==null?columns=JSON.parse(localStorage.getItem("categorydetails")||'[]'):columns=data
        console.log(columns)
        return(
            <>
            {/* <Button onClick={()=>this.adddetails()}>Add</Button> */}
            <BasicTable rows={rows} columns ={columns}/>
           {/* {this.state.showform
           &&
           <>
         <Dialog open={this.state.showform} onClose={()=>this.setState({showform:false})}>
           <DialogTitle>Fill the details</DialogTitle>
           <DialogContent >
           <form onSubmit={(e)=>{this.add(e)}}>
                <TextField 
                  autoFocus
                  margin="dense"
                  id="id"
                  label="id"
                  variant="standard"
                  fullWidth
                name='id' value={this.state.id} onChange={(e)=>{this.setState({id:e.target.value})}}/>
              
                <TextField  
                 autoFocus
                 margin="dense"
                 id="Category"
                 label="Category"
                 variant="standard"
                 fullWidth
                name="Category" value={this.state.Category} onChange={(e)=>{this.setState({Category:e.target.value})}}/>
               
                <TextField 
                 autoFocus
                 fullWidth
                 margin="dense"
                 id="MinimumLimit"
                 label="MInimumLimit"
                 variant="standard"
                name="MinimumLimit" value={this.state.MinimumLimit} onChange={(e)=>{this.setState({MinimumLimit:e.target.value})}}/>
                <Button type='submit' value="submit">Submit</Button>
            </form>
            </DialogContent>
            <DialogActions>
                <Button onClick={()=>{this.setState({showform:false})}}>Cancel</Button>
            </DialogActions>
            </Dialog>
            </>
            } */}
            </>
           
        )
    }
}

export default Data


