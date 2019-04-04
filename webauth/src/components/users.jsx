import React, { Component } from "react";
import axios from "axios";
import authenticate from "./authenticate";
import Login from "./Login.jsx";

class Users extends Component {
  state = {
    users: []
  };
  componentDidMount() {
    axios
      .get("/api/users")
      .then(res => {
        this.setState({ users: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  }
  render() {
    return (
      <div>
        <h1>User page</h1>;
        <ul>
          {this.state.users.map(user => (
            <li key={user.id}>{user.username}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default authenticate(Users)(Login);
