import React, { Component } from "react";
import "./UserDetails.css";

class UserDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStep: 1,
      email: "",
      department: "Computer Science",
      name: "",
      roll: "",
      seat: "",
      selectedFile: null
    };
  }

  FileHandler = event => {
    this.setState(
      {
        selectedFile: event.target.files[0]
      },
      console.log(event.target.files[0])
    );
  };

  Change = event => {
    this.setState({ department: event.target.value });
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { email, department, name, roll, seat, file } = this.state;
    alert(`Your registration detail: \n 
           Email: ${email} \n
           Department: ${department} \n
           name: ${name} \n
           roll: ${roll} \n
           seat: ${seat} \n
           file:${file} \n
           `);
  };

  _next = () => {
    let currentStep = this.state.currentStep;
    currentStep = currentStep >= 2 ? 3 : currentStep + 1;
    this.setState({
      currentStep: currentStep
    });
  };

  _prev = () => {
    let currentStep = this.state.currentStep;
    currentStep = currentStep <= 1 ? 1 : currentStep - 1;
    this.setState({
      currentStep: currentStep
    });
  };

  /*
   * the functions for our button
   */
  previousButton() {
    let currentStep = this.state.currentStep;
    if (currentStep !== 1) {
      return (
        <button className="btn-secondary" type="button" onClick={this._prev}>
          Previous
        </button>
      );
    }
    return null;
  }

  nextButton() {
    let currentStep = this.state.currentStep;
    if (currentStep < 3) {
      return (
        <button className="btn-primary" type="button" onClick={this._next}>
          Next
        </button>
      );
    }
    return null;
  }

  render() {
    return (
      <React.Fragment>
        <h1>Project Title</h1>
        <p>Step {this.state.currentStep}</p>

        <form onSubmit={this.handleSubmit} className="form-group">
          {/* 
        render the form steps and pass required props in
      */}
          <Step1
            currentStep={this.state.currentStep}
            handleChange={this.handleChange}
            Change={this.Change}
            email={this.state.email}
            department={this.state.department}
          />
          <Step2
            currentStep={this.state.currentStep}
            handleChange={this.handleChange}
            name={this.state.name}
            roll={this.state.roll}
            seat={this.state.seat}
          />
          <Step3
            currentStep={this.state.currentStep}
            handleChange={this.handleChange}
            FileHandler={this.FileHandler}
            selectedFile={this.selectedFile}
          />
          {this.previousButton()}
          {this.nextButton()}
        </form>
      </React.Fragment>
    );
  }
}

function Step1(props) {
  if (props.currentStep !== 1) {
    return null;
  }
  return (
    <div className="form-container">
      <div className="form-title">
        <h3>Email And Department</h3>
      </div>
      <label>Email Address:</label>
      <br />
      <input
        className="form-control"
        id="email"
        name="email"
        type="text"
        placeholder="Enter email"
        value={props.email}
        onChange={props.handleChange}
      />
      <br />
      <br />
      <label>Select Department</label>
      <br />
      <div className="select-container">
        <select value={props.department} onChange={props.Change}>
          <option value="Computer Science">Computer Science</option>
          <option value="Information Technology">Information Technology</option>
          <option value="Electronics And Telecommunication">
            Electronics And Telecommunication
          </option>
          <option value="Electronics">Electronics</option>
        </select>
      </div>
    </div>
  );
}

function Step2(props) {
  if (props.currentStep !== 2) {
    return null;
  }
  return (
    <div className="form-container">
      <div className="form-title">
        <h3>Personal Details</h3>
      </div>
      <label>Name:</label>
      <br />
      <input
        className="form-control"
        id="name"
        name="name"
        type="text"
        placeholder="Enter name"
        value={props.name}
        onChange={props.handleChange}
      />
      <br />
      <br />
      <label>Roll Number:</label>
      <br />
      <input
        className="form-control"
        id="roll"
        name="roll"
        type="text"
        placeholder="Enter roll no"
        value={props.roll}
        onChange={props.handleChange}
      />
      <br />
      <br />
      <label>Seat Number:</label>
      <br />
      <input
        className="form-control"
        id="seat"
        name="seat"
        type="text"
        placeholder="Enter seat no"
        value={props.seat}
        onChange={props.handleChange}
      />
    </div>
  );
}

function Step3(props) {
  if (props.currentStep !== 3) {
    return null;
  }
  return (
    <React.Fragment>
      <div className="form-container">
        <div className="form-title">
          <h3>Project Details</h3>
        </div>
        <label>Upload Project files</label>
        <br />
        <input
          className="form-control"
          id="file"
          name="file"
          type="file"
          placeholder="Select Files"
          value={props.selectedFile}
          onChange={props.FileHandler}
        />
        <div>
          <button className="btn-primary">Sign up</button>
        </div>
      </div>
    </React.Fragment>
  );
}

export default UserDetails;
