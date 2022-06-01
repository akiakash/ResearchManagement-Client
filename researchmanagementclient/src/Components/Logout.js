import React, { Component } from "react";

export default class Logout extends Component {
  logout = () => {
    window.localStorage.clear();
    window.location = "/";
  };

  render() {
    return <button onClick={this.logout}>Logout</button>;
  }
}
