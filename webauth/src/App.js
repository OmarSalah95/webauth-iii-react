import React, { Component } from "react";
import Login from "./components/login.jsx";
import Users from "./components/users.jsx";
import NavBar from "./components/NavBar";
import { Route } from "react-router-dom";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Route path="/login" component={Login} />
        <Route path="/users" component={Users} />
      </div>
    );
  }
}

export default App;
