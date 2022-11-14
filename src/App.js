import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import TodoListPage from "./pages/TodoListPage";

import "./index.css";
class App extends Component {
  state = {
    username: "",
  };
  usernameHandler = (username) => {
    this.setState({ username });
  };
  render() {
    return (
      <div className="App">
        <Router basename={this.props.basename ?? "/"}>
          <Switch>
            <Route exact path="/">
              <LoginPage
                username={this.state.username}
                onUsernameChange={this.usernameHandler}
              />
            </Route>
            <Route path="/todolist">
              <TodoListPage
                username={this.state.username}
                onUsernameChange={this.usernameHandler}
              />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
