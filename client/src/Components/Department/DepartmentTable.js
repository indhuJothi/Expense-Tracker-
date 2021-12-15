import React from "react";
import {Table,Button,header,Modal,Input} from 'antd';
import DepartmentData from './DeptMockData.json'
import {EditOutlined,DeleteOutlined} from '@ant-design/icons'
import './DepartmentTable.css'





export class DepartmentTable extends React.Component{
    constructor(props)
    {
        super(props)
        this.state={
          
            showForm:false,
            Amount:"",
            Department:"",
            showEdit:false,
            EditDepartment:"",
            EditAmount:"",
            EditId:"",
            record:null,
            Id:""
            
        }
    }
    
     addData(){
         this.setState({
             showForm:true
         })
     }

     addDept(){
       let Dept = this.state.Department
       let Amnt= this.state.Amount
       let Id= this.state.Id
       let add={
           Department:Dept,
           TotalAmount:Amnt,
           Id:Id
       }
       let data = DepartmentData
       data.push(add)
 
    
       this.setState({
      
        showForm:false
           
       })
  
       localStorage.setItem("AddDepartment",JSON.stringify(data))
     }
      
     DeleteRecord(record){
         Modal.confirm({
             title:"Are you sure you want to delete this record?",
             onOk:()=>{

                let prevData= JSON.parse(localStorage.getItem("AddDepartment"))
                let result = prevData.filter((data)=>{return(data.Department!=record.Department)})
                localStorage.setItem("AddDepartment",JSON.stringify(result))
                window.location.reload()
             }
         })
       
     }

     EditRecord(record){
         
         this.setState({
             showEdit:true,
             EditDepartment:record.Department,
             EditAmount:record.TotalAmount,
             EditId:record.Id
             
         })
     }

     Edit(){
         let EditedDepartment=this.state.EditDepartment
         let EditedAmount = this.state.EditAmount
         let EditedId = this.state.EditId
         console.log(EditedDepartment)
         let storedData = JSON.parse(localStorage.getItem("AddDepartment"))
         let result 
         storedData.map((data)=>{
             if(data.Id===EditedId){
                 data.Department=EditedDepartment
                 data.Amount=EditedAmount
                 data.Id=EditedId
             }
             
         })
         
         this.setState({
             showEdit:false
         })
         localStorage.setItem("AddDepartment",JSON.stringify(storedData))
     }

     componentDidMount(){
     localStorage.setItem("AddDepartment",JSON.stringify(DepartmentData))
     }
   
    render(){
    let columns=[
        {
            key:1,
            title:"Id",
            dataIndex:"Id"
        },
        {
            key:2,
            title:"Department",
            dataIndex:"Department"
        },
        {
            key:3,
            title:"Total Amount",
            dataIndex:"TotalAmount"
        },
     
        {
            key:4,
            title:"Edit",
            render:(record)=>{
                return(
                    <>
                    <EditOutlined onClick={()=>{this.EditRecord(record)}}></EditOutlined>
                   
                    </>
                  
                )
            }
        },
        {
            key:5,
            title:"Delete",
            render:(record)=>{
                return(
                    <>
                   
                    <DeleteOutlined style={{color:"red",marginLeft:14}} onClick={()=>{this.DeleteRecord(record)}}></DeleteOutlined>
                    </>
                  
                )
            }
        }
    
    ]
    
       let data 
       localStorage.getItem("AddDepartment")===null?data=DepartmentData:data=JSON.parse(localStorage.getItem("AddDepartment"))
        
        return(
            <div className="App">
            <header className="App-header">
            
            <Table className="DeptTable"  columns={columns} dataSource={data}>
            </Table>
            <Button style={{marginLeft:20,textAlign:"center"}} onClick={()=>{this.addData()}}>Add Department and Amount </Button>
            <Modal 
            title="Add Dept" 
            visible={this.state.showForm} 
            okText="Add"
            onCancel={()=>{
                this.setState({
                    showForm:false
                })
            }}
            onOk={()=>{this.addDept()}}
            >
                 <Input value={this.state.Id} placeholder="Id" onChange={(event)=>{this.setState({Id:event.target.value})}}></Input>
                <Input value={this.state.Department} placeholder="Department" onChange={(event)=>{this.setState({Department:event.target.value})}}></Input>
                <Input value={this.state.Amount}placeholder="Amount" onChange={(event)=>{this.setState({Amount:event.target.value})}}></Input>

            </Modal>
            <Modal
        title="Edit Record"
        visible={this.state.showEdit}
        onOk={()=>{this.Edit()}}
       onCancel={()=>{this.setState({showEdit:false})}}
        >
             <Input value={this.state.EditId} placeholder="Id" onChange={(event)=>{this.setState({EditId:event.target.value})}}></Input>
            <Input value={this.state.EditDepartment} onChange={(e)=>{this.setState({EditDepartment:e.target.value})}}></Input>
            <Input value={this.state.EditAmount} onChange={(e)=>{this.setState({EditAmount:e.target.value})}}/>
        </Modal>
            </header>
            </div>
           
        )
    }
}