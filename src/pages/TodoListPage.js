import React, { Component } from "react";
import Header from "../components/Header";
import TodoContainer from "../components/TodoContainer";
import { withRouter } from "react-router-dom";

export class TodoListPage extends Component {
  componentDidMount() {
    if (!this.props.username) this.props.history.push("/");
  }
  componentDidUpdate(prevProps) {
    if (this.props.username !== prevProps.username) {
      if (!this.props.username) this.props.history.push("/");
    }
  }
  render() {
    const { username, onUsernameChange } = this.props;
    return (
      <div className="container">
        <Header username={username} onUsernameChange={onUsernameChange} />
        <TodoContainer />
      </div>
    );
  }
}

export default withRouter(TodoListPage);
