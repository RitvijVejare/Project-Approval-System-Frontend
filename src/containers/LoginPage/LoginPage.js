import React, { Component } from "react";
import axios from "axios";
import qs from "qs";
import "./LoginPage.css";
//axios.defaults.withCredentials = true

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
    //alert(`username:${username} \n password:${password}`);

    axios({
      method: "post",
      url: SERVER_URL + "/login",
      credentials: "include",
      withCredentials: true,
      data: qs.stringify({
        email: username,
        password: password
      }),
      headers: {
        "content-type": "application/x-www-form-urlencoded;charset=utf-8"
      }
    })
      .then(function (res) {
        console.log(res);
      })
      .catch(function (err) {
        console.log(err);
      });
    /*
    axios.post(SERVER_URL+"/login",qs.stringify({
            email: username,
            password: password
        }),{
            credentials: 'same-origin',
            withCredentials : true,
            headers: {'content-type': 'application/x-www-form-urlencoded;charset=utf-8'} 
        })
    .then(response =>{
        Cookies.set('express:sess', "eyJwYXNzcG9ydCI6eyJ1c2VyIjoiNWYyM2MxMjE5YzFlNjg1NDFjMDYzOWZjIn0sImZsYXNoIjp7ImVycm9yIjpbIkludmFsaWQgcGFzc3dvcmQiLCJNaXNzaW5nIGNyZWRlbnRpYWxzIl19fQ==; express:sess.sig=lFwbVwGT07qm3_YbeQuhPw_0Dic");
        //console.log(Cookies.get('express:sess'));
    })
    .catch(err => {
        console.log(err) 
    });*/
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
        <form
          method="post"
          onSubmit={this.submitHandler}
          className="login-form"
        >
          <div className="login-title">
            <label>Login</label>
          </div>

          <br />
          <br />
          <label className="login-label">Username </label>
          <br />
          <br />
          <input
            className="login-input"
            type="email"
            name="email"
            placeholder="username"
            onChange={this.usernameHandler}
            required="true"
          />
          <br />
          <br />
          <label className="login-label">Password </label>
          <br />
          <br />
          <input
            className="login-input"
            type="password"
            name="password"
            placeholder="password"
            onChange={this.passwordHandler}
            required="true"
          />
          <br />
          <br />
          <button type="submit" className="login-btn">
            Login
          </button>
        </form>
      </div>
    );
  }
}
