import React from 'react';
import Paper from '@mui/material/Paper';
import EditIcon from '@mui/icons-material/Edit';
import { Delete } from "@material-ui/icons"; import { DataGrid, GridColumns, GridRowsProp } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Close from "@mui/icons-material/Close";
import { IconButton, Table } from "@mui/material";
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

type rowprops={
   rows:{ Amount?:string,
    Date?:string,
    FileUpload?:any,
    Category?: string,
    Department?: string,
    Username?: string,
   }[]
}

type columnprops={
    columns: {
        heading: string | null,
        property: string | null
      }[]
}

type functionprop={
    approve:(data:any)=>void
}

export default class ManagerTable extends React.Component<rowprops & columnprops & functionprop, {}>{
  constructor(props:rowprops & columnprops & functionprop)
{
    super(props)

}

    createtable(rows: any, columns: any) {
        let columnarray: any[] = []
        let rowarray: any[] = []
        columns.forEach((data: any) => {
    
    
          return columnarray.push(
    
            <TableCell style={{ "width": "2px", "marginLeft": "10px", "color": "black" }} key={data.id}>{data.heading}</TableCell>
          )
        })
        rows.forEach((data: any) => {
            let datas: any[] = []
            columns.forEach((column: any) => {
            
              
             
             if(column.property==="Approval"){

                  rowarray.push(<TableCell><Button onClick={()=>{this.props.approve(data)}}>Approve</Button></TableCell>)
                }
                else if(column.property==="Rejection"){
                rowarray.push(<TableCell><Button style={{"color":"red"}}>Reject</Button></TableCell>)
                }
             
              else {
                rowarray.push(<TableCell style={{ "width": "2px", "marginLeft": "10px" }} key={data.id}>{data[column.property]}</TableCell>)
              }
            })
              rowarray.push(<TableRow style={{ "width": "2px", "marginLeft": "10px" }}>{datas}</TableRow>)
          })
          return (
            <>
              <TableHead>
                <TableRow >
                  {columnarray}
                </TableRow>
              </TableHead>
              <TableBody >
                {rowarray}
              </TableBody>
      
            </>
      
          )
        }

    render() {
        let rows = this.props.rows
        let columns = this.props.columns
        return (
            <Box style={{ marginLeft: 50, marginTop: 80 }}
                sx={{
                    height: 500,

                    width: '100%',
                    '& .actions': {
                        color: 'text.secondary',
                    },
                    '& .textPrimary': {
                        color: 'text.primary',
                    },
                }}
            >
                <TableContainer component={Paper} style={{ "width": "90%", marginTop: 30 }} >
                    <Table>
                    {this.createtable(rows, columns)}
                    </Table>
                </TableContainer>

            </Box>
        )
    }
}