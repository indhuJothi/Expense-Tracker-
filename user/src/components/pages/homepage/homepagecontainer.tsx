import { Box } from '@mui/system'
import React from 'react'
import Departmentdata from '../department/department-data.json'
import Categorydata from '../category/category-data.json'
import InputLabel from '@mui/material/InputLabel';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem'
import { Button, FormControl, TextField, ThemeProvider } from '@mui/material';
import Header from '../../common/header/header';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import BasicTable from '../../common/table/table';
import ManagerTable from '../../common/table/managertable/manager-table';
import baseURL from '../../service/api/api'



type stateprop = {
    formValues: any,
    totalAmount: any,
    showTable: Boolean,
    Department:any[],
    Category:any[]
}

let columns = [
    {
        heading: "Username",
        property: "Username"
    },
    {
        heading: "Department",
        property: "Department"
    },
    {
        heading: "Category",
        property: "Category"
    },
    {
        heading: "Expense",
        property: "Amount"
    },
    {
        heading: "Approval/Rejection",
        property: "Result"
    }
]



class HomePageContainer extends React.Component<{}, stateprop> {
    constructor(props: any) {
        super(props)
        this.state = {
            totalAmount: null,
            showTable: false,
            Department:[],
            Category:[],
            formValues: [{ Department: "", Category: "", Amount: 0, FileUpload: null, Date: "" }]
        };
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(i: any, e: any) {
        let formValues = this.state.formValues;
        formValues[i][e.target.name] = e.target.value;
        this.setState({ formValues });

        const TotalAmount = this.state.formValues.map((item: any) => parseInt(item.Amount)).reduce((prev: any, curr: any) => prev + curr, 0);
        this.setState({
            totalAmount: TotalAmount
        })
    }

    addFormFields() {
        this.setState(({
            formValues: [...this.state.formValues, { Department: "", Category: "", Amount: 0, FileUpload: null, Date: "" }]
        }))
    }

    removeFormFields(i: any) {
        let formValues = this.state.formValues;
        formValues.splice(i, 1);
        this.setState({ formValues });
    }

    handleSubmit(event: any) {
        event.preventDefault();
        let formValues = this.state.formValues
        let reimburseddetails = JSON.parse(localStorage.getItem("reimbursedetails") || "[]")
        let reimbursedetails
        let userdetails = JSON.parse(localStorage.getItem("userdetails")||"{}")
        this.state.formValues.map((data: any) => {
            reimbursedetails = {
                Username: userdetails.Username,
                Date: data.Date,
                Department: userdetails.Department,
                FileUpload: data.FileUpload,
                Amount: data.Amount,
                Category: data.Category,
                Result: "Pending"

            }
            reimburseddetails.push(reimbursedetails)
        }

        )
        baseURL.post('/expense/reimbursed',{mydata:reimbursedetails}, {
            headers: {
                "Content-Type": "application/json",
                "access-token": localStorage.getItem("authtoken") || ""
            }
          
        }).then(response => {
    
            console.log(response)
        })
        localStorage.setItem("reimbursedetails", JSON.stringify(reimburseddetails))
     
        // window.location.reload()
    }

    result(data: any) {
        console.log(data)
    }

   
    componentDidMount(){
        let department: any[] = []
        let category:any[]=[]
        baseURL.get('/expense/departments', {
            headers: {
                "Content-Type": "application/json",
                "access-token": localStorage.getItem("authtoken") || ""
            }
        }).then(response => {
    
            response.data.map((datas: any) => {
                department.push(datas.Department)
            })
            this.setState({
                Department:department
            })
        })
    
        baseURL.get('/expense/categories', {
            headers: {
                "Content-Type": "application/json",
                "access-token": localStorage.getItem("authtoken") || ""
            }
        }).then(response => {
    
            response.data.map((datas: any) => {
             category.push(datas.Category)
            })
           this.setState({
               Category:category
           })
        })
       
      }

    render() {
        
        let rowsproperty = JSON.parse(localStorage.getItem("approved") || "[]")
        let reimbursedetails = JSON.parse(localStorage.getItem("reimbursedetails") || "[]")
        let userdetails=JSON.parse(localStorage.getItem("userdetails")||"{}")
        let rows: { Username: string, Department: string, Category: string, Amount: string, Result: string }[] = []
        if (localStorage.getItem("approved")) {
            if (reimbursedetails.length > 0) {
                reimbursedetails.map((data: any) => {
                    if (userdetails.Username === data.Username) {
                        let rowdata = {
                            Username: data.Username,
                            Department: data.Department,
                            Category: data.Category,
                            Amount: data.Amount,
                            Result: "Pending"
                        }

                        rows.push(rowdata)
                    }

                })
            }
            // else{
            rowsproperty.map((data: any) => {
                if (userdetails.Username === data.Username) {
                    let rowdata = {
                        Username: data.Username,
                        Department: data.Department,
                        Category: data.Category,
                        Amount: data.Amount,
                        Result: data.Result
                    }
                    rows.push(rowdata)
                }

            })
            // }
        }
        else {
            reimbursedetails.map((data: any) => {
                if (userdetails.Username === data.Username) {
                    let rowdata = {
                        Username: data.Username,
                        Department: data.Department,
                        Category: data.Category,
                        Amount: data.Amount,
                        Result: "Pending"
                    }

                    rows.push(rowdata)
                }

            })

        }



        return (
            <>
                <Header />
                <Button variant='contained' onClick={() => { this.setState({ showTable: !this.state.showTable }) }} style={{ marginTop: 100 }}>My Requests</Button>
                {this.state.showTable ? <>  <Button style={{ marginTop: 100 }} variant='contained' onClick={() => { this.setState({ showTable: !this.state.showTable }) }}>Reimburse</Button>

                    <BasicTable rows={columns} columns={rows} />

                </>


                    :
                    <form onSubmit={this.handleSubmit} style={{ "marginTop": "5%" }}>
                        {this.state.formValues.map((element: any, index: any) => (
                            <div className="form-inline" key={index} style={{ "marginBottom": "30px" }}>
                                <FormControl style={{ "width": "20%" }}>
                                    {/* <InputLabel id="demo-simple-select-label">Department</InputLabel> */}
                                    <TextField  name="Department" defaultValue={userdetails.Department}></TextField>
                                    {/* <Select type="text" name="Department" required value={element.Department || ""} onChange={e => this.handleChange(index, e)} >
                                        {this.state.Department.map((data: any) => { return <MenuItem value={data}>{data}</MenuItem> })}
                                    </Select> */}
                                </FormControl>
                                <FormControl style={{ "width": "20%" }}>
                                    <InputLabel id="demo-simple-select-label">Category</InputLabel>
                                    <Select type="text" required name="Category" value={element.Category || ""} onChange={e => this.handleChange(index, e)} >
                                        {this.state.Category.map((data: any) => { return <MenuItem value={data}>{data}</MenuItem> })}
                                    </Select></FormControl>
                                <TextField required onChange={e => this.handleChange(index, e)} type="number" style={{ "width": "20%" }} label="Amount" name='Amount' value={element.Amount} inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} />
                                <FormControl style={{ "width": "20%" }}>
                                    <TextField required type="file" name="FileUpload" label="File Upload" variant="outlined" onChange={e => this.handleChange(index, e)} focused />
                                </FormControl>
                                <FormControl style={{ "width": "15%" }}>
                                    <TextField required type="date" label="DD/MM/YYYY" focused name='Date' onChange={e => this.handleChange(index, e)} />
                                </FormControl>
                                {
                                    index ?
                                        <IconButton onClick={() => this.removeFormFields(index)}><CloseIcon /></IconButton>
                                        : null
                                }
                            </div>
                        ))}
                        <TextField focused value={this.state.totalAmount} label="TotalAmount" style={{ "marginBottom": "7px" }} />
                        <Box style={{ "marginTop": "50px", "padding": "10px", "borderTop": "1px solid grey", "boxShadow": "0px 0 10px rgba(0, 0, 0, 0.8)", "textAlign": "center", "justifyContent": "center" }}>
                            <Button variant="contained" color="secondary" onClick={() => window.location.reload()} type="submit" style={{ "marginRight": "8px" }} >Reset</Button>
                            <Button variant="contained" color="secondary" type="submit">Submit</Button>

                        </Box>
                        <Box>
                            <Button variant="contained" color="secondary" style={{ "marginTop": "20px", "marginLeft": "4px" }} type="button" onClick={() => this.addFormFields()}>Add</Button>
                        </Box>
                    </form>


                }
            </>
        );
    }
}
export default HomePageContainer;