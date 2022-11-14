import React, { Component } from 'react'

export class Header extends Component {
  render() {
    return (
      <div className='d-flex justify-content-between py-2'>
        <span className='h5'>{`${this.props.username}'s todo list`}</span>
        <button
          className='btn btn-primary btn-sm'
          onClick={() => this.props.onUsernameChange('')}
        >
          Logout
        </button>
      </div>
    )
  }
}

export default Header
