import React, { Component } from 'react';
import "./ChangePassword.css";

class ChangePassword extends Component {
    state = { 
        newpassword : "",
        confirmpassword : ""
     }

     newpasswordHandler = (e) => {
        this.setState({newpassword:e.target.value});
    }
    
    confirmpasswordHandler = (e) => {
        this.setState({confirmpassword:e.target.value});
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
        if(this.state.newpassword!==this.state.confirmpassword){
            alert("Please enter same password in both fields");
            this.setState({newpassword:"",confirmpassword:""})
        }else{
            alert("Both fields are same");
        }
    }

    render() { 
        return ( 
            <form onSubmit={this.handleSubmit} className="changepassword-form">
                <div className="changepassword-title">
                    <label>Change Password</label>
                </div>
                <label className="changepassword-label">New Password : </label>
                <br />
                <br />
                <input
                className="changepassword-input"
                type="password"
                name="password"
                value={this.state.newpassword}
                onChange={this.newpasswordHandler}
                required
                />
                <br />
                <br />
                <label className="changepassword-label">Confirm Password : </label>
                <br />
                <br />
                <input
                className="changepassword-input"
                type="password"
                name="password"
                value={this.state.confirmpassword}
                onChange={this.confirmpasswordHandler}
                required
                />
                <br />
                <br />
                <button className="changepassword-btn">Confirm</button>
            </form>
         );
    }
}
 
export default ChangePassword;


