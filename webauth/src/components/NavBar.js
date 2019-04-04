import React from "react";
import { NavLink } from "react-router-dom";
import { withRouter } from "react-router-dom";

const NavBar = props => {
  return (
    <header>
      <NavLink to="/login">Login</NavLink>
      &nbsp; || &nbsp;
      {props.match.path === "/users" ? (
        <button
          onClick={() => {
            localStorage.removeItem("token");
            props.match.history.push("/login");
          }}
        >
          Log Out
        </button>
      ) : (
        <NavLink to="/users">Users</NavLink>
      )}
    </header>
  );
};

export default withRouter(NavBar);
