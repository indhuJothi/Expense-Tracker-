import React from 'react'
import { Grid, Paper, Avatar, TextField, Button, Typography, Link } from '@material-ui/core'
import data from './mockdata.json'
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack'
import CloseIcon from '@material-ui/icons/Close'




type IMyComponentState = {
  username: string,
  password: string,
  errorr: string,
  showerror: boolean
}
class Loginform extends React.Component<{}, IMyComponentState>{
  constructor(props: any) {
    super(props);
    this.state = {
      username: "",
      password: "",
      errorr: "",
      showerror: false
    }
  }

  submit(e: any) {
    e.preventDefault()
    let name = data.filter((data) => {
      return ((data.Username === this.state.username) && (data.Password === this.state.password))

    })

    if (name.length > 0) {
      name.map((data) => { 
        return (
          localStorage.setItem("username", data.Username),
          localStorage.setItem("role",data.Role)
          )
      })
      window.location.replace('/homepage')

    }
    else {

      this.setState({
        showerror: true
      })
    }

  }

  render() {

    const paperStyle = { padding: 20, height: '40vh', width: 280, margin: "20px auto" }
    const avatarStyle = { backgroundColor: '#1bbd7e' }
    const btnstyle = { margin: '8px 0' }
    return (
      <Grid style={{ marginTop: 120 }}>
        {this.state.showerror && <Stack sx={{ width: '60%', marginTop: '30px' }} spacing={2}>
          <Alert severity="error" onClick={() => { this.setState({ showerror: false }) }}>
            <CloseIcon style={{ marginLeft: "140%" }}></CloseIcon>
            <AlertTitle>Error</AlertTitle>
            Please enter correct username and password  <strong>check it out!</strong>
          </Alert>
        </Stack>}
        <Paper elevation={10} style={paperStyle}>
          <h2>Sign In</h2>
          <form onSubmit={(e) => this.submit(e)}>

            <TextField name='username' required
              style={{ marginBottom: 20 }} variant="outlined" color="primary" label="username" value={this.state.username} onChange={(e) => { this.setState({ username: e.target.value }) }}></TextField>
            <TextField type="password"
              name='password'
              label='password'
              variant="outlined"
              color="primary"
              required
              value={this.state.password}
              onChange={(e) => { this.setState({ password: e.target.value }) }}
            />
            <Button type='submit' variant="outlined" size="medium" style={{ marginTop: 30, marginLeft: 80 }} value='submit'>Submit</Button>
          </form>
        </Paper>

      </Grid>
    )
  }
}

export default Loginform