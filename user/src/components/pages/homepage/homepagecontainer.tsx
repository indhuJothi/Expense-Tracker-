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



type stateprop = {
    formValues: any,
    totalAmount: any
}

class HomePageContainer extends React.Component<{}, stateprop> {
    constructor(props: any) {
        super(props)
        this.state = {
            totalAmount: null,
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
            formValues: [...this.state.formValues, {Department: "", Category: "", Amount: 0, FileUpload: null, Date: "" }]
        }))
    }

    removeFormFields(i: any) {
        let formValues = this.state.formValues;
        formValues.splice(i, 1);
        this.setState({ formValues });
    }

    handleSubmit(event: any) {
        event.preventDefault();
        localStorage.setItem("reimbursedetails", JSON.stringify(this.state.formValues))
    }


    render() {

        return (
            <>
                <Header />
                <form onSubmit={this.handleSubmit} style={{ "marginTop": "10%" }}>
                    {this.state.formValues.map((element: any, index: any) => (
                        <div className="form-inline" key={index} style={{ "marginBottom": "30px" }}>
                            <FormControl style={{ "width": "20%" }}>
                                <InputLabel id="demo-simple-select-label">Department</InputLabel>
                                <Select type="text" name="Department" required value={element.Department || ""} onChange={e => this.handleChange(index, e)} >
                                    {Departmentdata.map((data: any) => { return <MenuItem value={data.Department}>{data.Department}</MenuItem> })}
                                </Select></FormControl>
                            <FormControl style={{ "width": "20%" }}>
                                <InputLabel id="demo-simple-select-label">Category</InputLabel>
                                <Select type="text" required name="Category" value={element.Category || ""} onChange={e => this.handleChange(index, e)} >
                                    {Categorydata.map((data: any) => { return <MenuItem value={data.Category}>{data.Category}</MenuItem> })}
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

                </form>
                <Box>
                    <Button variant="contained" color="secondary" style={{ "marginTop": "20px", "marginLeft": "4px" }} type="button" onClick={() => this.addFormFields()}>Add</Button>
                </Box>
            </>
        );
    }
}
export default HomePageContainer;