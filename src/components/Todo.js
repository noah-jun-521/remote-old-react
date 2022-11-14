import React, { Component } from 'react'

export class Todo extends Component {
  state = {
    deleteBtn: false,
  }
  render() {
    const { id, todoText } = this.props.todo
    return (
      <li
        className='list-group-item d-flex justify-content-between align-items-center'
        style={{ padding: '4px 12px', minHeight: '42px' }}
        onMouseEnter={() => this.setState({ deleteBtn: true })}
        onMouseLeave={() => this.setState({ deleteBtn: false })}
        onMouseOver={() => this.setState({ deleteBtn: true })}
      >
        <span className='text-break'>{todoText}</span>
        {this.state.deleteBtn && (
          <button
            className='btn btn-danger btn-sm'
            onClick={() => this.props.onDeleteTodo(id)}
          >
            Delete
          </button>
        )}
      </li>
    )
  }
}

export default Todo