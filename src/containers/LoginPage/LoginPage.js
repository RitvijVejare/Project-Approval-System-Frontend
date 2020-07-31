import React, { Component } from "react";
import axios from "axios";

const port = "http://localhost:8000/user";

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
  };

  componentDidMount() {
    axios
      .get(port)

      .then(response => {
        console.log(response);
        this.setState({ user: user.data });
      });
  }

  render() {
    return (
      <div>
        <form action="/login" method="post" onSubmit={this.submitHandler}>
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
