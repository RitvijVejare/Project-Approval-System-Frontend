import React, { Component } from "react";
import axios from "axios";
import qs from "qs";
import "./LoginPage.css";
//axios.defaults.withCredentials = true
import SERVER_URL from "../../components/URL";
import RedirectOnSubmit from "../../components/RedirectOnSubmit";

let Data = null;

class LoginPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "admin",
      password: "******",
      user: [],
      redirectToReferrer: false,
      error: ""
    };
  }

  afterSubmit() {
    console.log("aftersubmit");
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
        console.log(res.data);
        Data = res.data.type;
        // console.log(Data.email);
        // console.log(Data.department);
        // this.state.user = res.data;
      })
      .then(data =>
        this.setState({
          user: data,
          redirectToReferrer: true
        })
      )
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

  render() {
    const redirectToReferrer = this.state.redirectToReferrer;

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
            required
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
            required
          />
          <br />
          <br />
          <button type="submit" className="login-btn">
            Login
          </button>
        </form>
        {redirectToReferrer ? (
          <RedirectOnSubmit condition={true} type={Data} />
        ) : null}
        {console.log()}
      </div>
    );
  }
}

export default LoginPage;
