import React from 'react'
import { Grid,Paper, Avatar, TextField, Button, Typography,Link } from '@material-ui/core'
import data from '../../mockdata.json'


// interface IMyComponentProps {
//    username : string,
//    password:string
// }

type IMyComponentState= {
    username: string,
    password:string,
    errorr:string
}
class Loginform extends React.Component<{},IMyComponentState>{
  constructor(props:any){
      super(props);
    this.state={
        username:"",
        password:"",
        errorr:""
    }
}

    submit(e:any)
    {
       e.preventDefault()
       let username
       let name = data.filter((data) => {
        return ((data.Username === this.state.username) && (data.Password === this.state.password))
  
      })
    
    name.map((data)=>{return  localStorage.setItem("username",data.Username)})
    window.location.replace('/department')
    
    
       
}

 render(){

    const paperStyle={padding :20,height:'40vh',width:280, margin:"20px auto"}
    const avatarStyle={backgroundColor:'#1bbd7e'}
    const btnstyle={margin:'8px 0'}
    return(
        <Grid style={{marginTop:120}}>
            <Paper elevation={10} style={paperStyle}>
                    <h2>Sign In</h2>
              <form onSubmit={(e)=>this.submit(e)}> 
              
                <TextField name='username' required
                style={{marginBottom:20}} variant="outlined" color="primary"  label="username" value={this.state.username} onChange={(e) => { this.setState({ username: e.target.value })}}></TextField>
                <TextField type="password"
          name='password'
          label='password'
          variant="outlined"
          color="primary"
          required
          value={this.state.password}
          onChange={(e)=>{this.setState({password:e.target.value})}}
        />
                <Button type='submit' variant="outlined" size="medium" style={{marginTop:30,marginLeft:80}} value='submit'>Submit</Button>
              </form>
            </Paper>
        </Grid>
    )
}}

export default Loginform