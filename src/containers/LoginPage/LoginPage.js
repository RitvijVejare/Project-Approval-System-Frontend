import React, { Component } from "react";
import axios from "axios";

const SERVER_URL = "http://127.0.0.1:8000";

export default class LoginPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "admin",
      password: "******",
      user: []
    };
  }

  usernameHandler = event => {
    this.setState({ username: event.target.value });
  };

  passwordHandler = event => {
    this.setState({ password: event.target.value });
  };

  submitHandler = event => {
    event.preventDefault();
    const { username, password } = this.state;
    alert(`username:${username} \n password:${password}`);
    axios
      .post(SERVER_URL+"/login",{
        email : username,
        password :  password
      }).then(response => {
        console.log(response);
        //this.setState({ user: user.data });
      });
  };

  componentDidMount() {
    
    /*const { username, password } = this.state;
    axios
      .post(SERVER_URL+"/login",{
        email : username,
        password :  password
      })
      .then(response => {
        console.log(response);
        //this.setState({ user: user.data });
      });*/
  }

  render() {
    return (
      <div>
        <form method="post" onSubmit={this.submitHandler}>
          <label>Username </label>
          <input
            type="email"
            name="email"
            placeholder="username"
            onChange={this.usernameHandler}
          />
          <br />
          <br />
          <label>Password </label>
          <input
            type="password"
            name="password"
            placeholder="password"
            onChange={this.passwordHandler}
          />
          <br />
          <br />
          <button type="submit">submit</button>
        </form>
      </div>
    );
  }
}

