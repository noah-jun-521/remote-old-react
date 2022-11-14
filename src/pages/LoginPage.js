import React, { Component } from 'react'
import LoginForm from '../components/LoginForm'
import { withRouter } from 'react-router-dom'

export class LoginPage extends Component {
  componentDidMount() {
    if (this.props.username) this.props.history.push('/todolist')
  }
  componentDidUpdate(prevProps) {
    if (this.props.username !== prevProps.username) {
      if (this.props.username) this.props.history.push('/todolist')
    }
  }
  render() {
    return (
      <div className='d-flex justify-content-center align-items-center min-vh-100'>
        <div className='border border-dark px-4 py-5'>
          <LoginForm onUsernameChange={this.props.onUsernameChange} />
        </div>
      </div>
    )
  }
}

export default withRouter(LoginPage)
