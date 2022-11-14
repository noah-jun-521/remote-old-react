import React, { Component } from 'react'

export class AddForm extends Component {
  state = {
    todoText: '',
  }
  submitHandler = (e) => {
    e.preventDefault()
    if (this.state.todoText !== '') {
      const randId = Math.random().toString(36).slice(2)
      this.props.onAddTodo({ id: randId, todoText: this.state.todoText })
      this.setState({ todoText: '' })
    }
  }
  render() {
    return (
      <form className='form-group' onSubmit={(e) => this.submitHandler(e)}>
        <div className='d-flex form-group'>
          <input
            type='text'
            placeholder='add todo...'
            className='form-control'
            value={this.state.todoText}
            onChange={(e) => this.setState({ todoText: e.target.value })}
          />
          <button
            type='button'
            className='btn btn-primary'
            onClick={(e) => this.submitHandler(e)}
          >
            Add
          </button>
        </div>
      </form>
    )
  }
}

export default AddForm
