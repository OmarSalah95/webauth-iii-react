import React, { Component } from "react";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:5000";

axios.interceptors.request.use(requestConfig => {
  const token = localStorage.getItem("token");
  requestConfig.headers.authorization = token;
  return requestConfig;
});

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
export default authenticate;
