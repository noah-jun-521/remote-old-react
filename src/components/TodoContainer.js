import React, { Component } from 'react'
import AddForm from './AddForm'
import Todos from './Todos'

export class TodoContainer extends Component {
  state = {
    todoList: [],
  }

  addTodoHandler = (todo) => {
    this.setState({ todoList: [...this.state.todoList, todo] })
  }

  deleteTodoHandler = (id) => {
    const filteredTodoList = this.state.todoList.filter(
      (todo) => todo.id !== id
    )
    this.setState({ todoList: filteredTodoList })
  }

  render() {
    return (
      <>
        <AddForm onAddTodo={this.addTodoHandler} />
        <Todos
          todoList={this.state.todoList}
          onDeleteTodo={this.deleteTodoHandler}
        />
      </>
    )
  }
}

export default TodoContainer
