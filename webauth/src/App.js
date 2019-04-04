import React, { Component } from "react";
import Login from "./components/Login.jsx";
import Users from "./components/users.jsx";
import NavBar from "./components/NavBar";
import { Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Route exact path="/login" component={Login} />
        <PrivateRoute path="/users" component={Users} />
      </div>
    );
  }
}

export default App;
