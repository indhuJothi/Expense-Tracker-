import { Box } from '@mui/system'
import React from 'react'
import Departmentdata from '../department/department-data.json'
import Categorydata from '../category/category-data.json'
import InputLabel from '@mui/material/InputLabel';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem'
import { Button, FormControl, TextField, ThemeProvider } from '@mui/material';
import Header from '../../common/header/header';
import { createMuiTheme } from '@material-ui/core/styles';
import lightgrey from '@material-ui/core/colors/grey';
import purple from '@material-ui/core/colors/purple';


type stateprop = {
    Department: string,
    Category: string,
    Amount: number,
    selectedFile: any,
    Date: any
}
const theme = createMuiTheme({
    palette: {
        primary: purple,
        secondary: lightgrey,
    }


})

export default class HomePage extends React.Component<{}, stateprop> {
    constructor(props: any) {
        super(props)
        this.state = {
            Department: "",
            Category: "",
            Amount: 0,
            selectedFile: null,
            Date: ""
        }

    }

    HandleDepartment = (event: React.ChangeEvent<HTMLSelectElement>) => {
        this.setState({
            Department: event.target.value
        })
    }

    HandleCategory = (event: React.ChangeEvent<HTMLSelectElement>) => {
        this.setState({
            Category: event.target.value
        })

    }

    HandleAmount = (e: any) => {
        this.setState({
            Amount: e.target.value
        })
    }
    OnFileChange = (event: any) => {

        this.setState({ selectedFile: event.target.files[0] });
        console.log(this.state.selectedFile)
    };

    HandleSubmit = (e:any) => {
        e.preventDefault()
        let submitteddata = {
            Department: this.state.Department,
            Category: this.state.Category,
            Amount: this.state.Amount,
            selectedfile: this.state.selectedFile
        }

        console.log(submitteddata)
    }

    HandleDate = (e: any) => {
        e.preventDefault()
        this.setState({
            Date: e.target.value
        })
    }





    render() {
        console.log(this.state.Department)
        console.log(this.state.Amount)
        console.log(this.state.Date)
        const DepartmentData = Departmentdata.map((data) => {
            return data.Department
        })
        return (
            <>
                <Header />
                <Box sx={{ minWidth: 120 }} style={{ "marginTop": "15%" }}>

                    <form
                    onSubmit={this.HandleSubmit}
                    >
                        <FormControl style={{ "width": "20%" }}>
                            <InputLabel id="demo-simple-select-label">Department</InputLabel>
                            <Select label="Select" value={this.state.Department} onChange={(event: any) => this.HandleDepartment(event)}>
                                {DepartmentData.map((data: any) => { return <MenuItem value={data}>{data}</MenuItem> })}
                            </Select>
                        </FormControl>
                        <FormControl style={{ "width": "20%" }}>
                            <InputLabel id="demo-simple-select-label">Category</InputLabel>
                            <Select label="Select" value={this.state.Category} onChange={(event: any) => this.HandleCategory(event)}>
                                {Categorydata.map((data: any) => { return <MenuItem value={data.Category}>{data.Category}</MenuItem> })}
                            </Select>
                        </FormControl>
                        <TextField onChange={this.HandleAmount} type="number" style={{ "width": "20%" }} label="Amount" value={this.state.Amount} inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} />
                        <ThemeProvider theme={theme}><FormControl style={{ "width": "20%" }}>
                            <TextField type="file" label="File Upload" variant="outlined" onChange={this.OnFileChange} focused color='secondary' />
                        </FormControl>
                        </ThemeProvider>
                        <ThemeProvider theme={theme}>
                            <FormControl style={{ "width": "15%" }}>
                                <TextField type="date" label="DD/MM/YYYY" focused color='secondary' onChange={this.HandleDate} />
                            </FormControl>
                        </ThemeProvider>
                   
                     
                    </form>

                </Box>
            </>
        )
    }
}