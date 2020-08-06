import { NavLink, Redirect } from "react-router-dom";
import axios from "axios";
import qs from "qs";
import SERVER_URL from "./URL";
import LogoutRedirect from "./LogoutRedirect";
import React, { Component } from "react";

export default class Signout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedout: false
    };
  }

  kickUser = () => {
    console.log("entered Getuser");
    axios({
      method: "get",
      url: SERVER_URL + "/logout",
      withCredentials: true
    })
      .then(function (res) {
        console.log(res.data);
      })
      .catch(function (err) {
        console.log(err);
      });

    this.setState(
      prevState => ({
        loggedout: !prevState.loggedout
      }),
      console.log(this.state.loggedout)
    );
  };

  render() {
    return (
      <React.Fragment>
        <button onClick={this.kickUser}>Signout</button>
        <LogoutRedirect toggle={this.state.loggedout} />
      </React.Fragment>
    );
  }
}
