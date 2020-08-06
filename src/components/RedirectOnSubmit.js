import {
  BrowserRouter as Router,
  Redirect,
  withRouter
} from "react-router-dom";
import React, { Component } from "react";

class redirectOnSubmit extends Component {
  render() {
    if (this.props.type == "yami") {
      return <Redirect to="/admin" exact />;
    }
    if (this.props.type == "ig") {
      return <Redirect to="/internal-guide" exact />;
    }
    if (this.props.type == "student") {
      return <Redirect to="/student" exact />;
    }
    if (this.props.type == "pic") {
      return <Redirect to="/project-incharge" exact />;
    } else {
      return <Redirect to="/" exact />;
    }
  }
}

export default withRouter(redirectOnSubmit);
