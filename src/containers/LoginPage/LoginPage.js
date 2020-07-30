import React, { Component } from "react";

export default class LoginPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "admin",
      password: "admin"
    };
  }

  render() {
    return (
      <div>
        <form action="/login" method="post">
          <label>Username </label>
          <input type="email" name="email" placeholder="username" />
          <br />
          <br />
          <label>Password </label>
          <input type="password" name="password" placeholder="password" />
          <br />
          <br />
          <button type="submit" onSubmit={this.CheckUser}>
            submit
          </button>
        </form>
      </div>
    );
  }
}
