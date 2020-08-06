import React from "react";
import { Redirect } from "react-router-dom";

const LogoutRedirect = props => {
  if (props.toggle == true) {
    return <Redirect to="/login" exact />;
  } else {
    return null;
  }
};

export default LogoutRedirect;
