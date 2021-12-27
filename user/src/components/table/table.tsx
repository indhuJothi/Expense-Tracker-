import React from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import EditIcon from '@mui/icons-material/Edit';
import { domainToASCII } from "url";
import Data from "./datasentfile";
import FormDialog from "./editdetails";
import { Delete } from "@material-ui/icons";import { DataGrid, GridColumns, GridRowsProp } from '@mui/x-data-grid';
import {
  randomCreatedDate,
  randomTraderName,
  randomUpdatedDate,
} from '@mui/x-data-grid-generator';

type rowprops={
    rows:{
        heading:string|null,
        property:string|null
    }[] 

}

type columnprops={
    columns:{
        id:string,
        Category:string,
        MinimumLimit:string
    }[]
}
type stateprop={
    show:boolean,
    showform:boolean
}
class BasicTable extends React.Component<rowprops & columnprops,stateprop> {
  constructor(props:rowprops & columnprops)
  {
    super(props)
    
      this.state={
        show:false,
        showform:false
      }
    
  }
  showTable()
   {
     this.setState({
       show :true
     })
   }

   showalert=(e:any,data:any)=>{
       e.preventDefault()
       this.setState({
           showform:true
       })
       let mydata ={
           id:data.id,
           Category:data.Category,
           MinimumLimit:data.MinimumLimit
       }
       console.log(data)
       localStorage.setItem("editdetails",JSON.stringify(mydata))

    
   }


  
 createtable(rows:any,columns:any){
     let rowarray:any[]=[]
     let columnarray:any[]=[]
     rows.forEach((data:any)=>{
       
     
        return   rowarray.push(
        
           <TableCell key={data.id}>{data.heading}</TableCell>
    )   
     })
     columns.forEach((data:any)=>{
         let datas:any[]=[]
         rows.forEach((row:any)=>{
             if(row.property==="Edit")
             {
               columnarray.push(<TableCell><EditIcon onClick={(e)=>{this.showalert(e,data)}}></EditIcon></TableCell> )
             }
             else if(row.property==="Delete"){
                columnarray.push(<TableCell><Delete></Delete></TableCell>)
             }
             else{
             columnarray.push(<TableCell key={data.id}>{data[row.property]}</TableCell>)
      }
     })
         columnarray.push(<TableRow>{datas}</TableRow>)
     })
     return(
         <>
         <TableHead>
             <TableRow>
                {rowarray}
             </TableRow>
             </TableHead>
             <TableBody>
                {columnarray}
             </TableBody>
        
         </>
         
     )
 }        

  render() {
    let rows = this.props.rows
    let columns =this.props.columns
    return (
        <>
        <TableContainer component={Paper}>
            <Table>
               {this.createtable(rows,columns)}

            </Table>
            {this.state.showform &&<FormDialog/>}
            </TableContainer>
            </>

    );
  }
}

export default BasicTable;