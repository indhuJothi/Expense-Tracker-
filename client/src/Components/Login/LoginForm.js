import React from "react";
import { Form, Input, Button, Checkbox } from 'antd'
import userData from '../../mock-data.json'

class LoginForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: "",
      password: ""
    }
  }
  submit(e) {
    e.preventDefault()
    let name = userData.filter((data) => {
      return ((data.Username === this.state.username) && (data.Password === this.state.password))

    })
    console.log(name)

  }


  render() {
    return (
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        style={{ marginTop: 150 }}
        wrapperCol={{ span: 10 }}
        initialValues={{ remember: true }}
        onSubmitCapture={(e) => { this.submit(e) }}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="username"
          value={this.state.username}
          onChange={(e) => { this.setState({ username: e.target.value }) }}
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          value={this.state.password}
          onChange={(e) => { this.setState({ password: e.target.value }) }}
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Form.Item>



        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    )
  }
}


export default LoginForm