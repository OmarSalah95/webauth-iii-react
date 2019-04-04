import React, { Component } from "react";

const authenticate = FirstComponent => SecondComponent => {
  return class extends Component {
    render() {
      const token = localStorage.getItem("token");
      if (token) {
        return <FirstComponent />;
      } else {
        return <SecondComponent />;
      }
    }
  };
};
