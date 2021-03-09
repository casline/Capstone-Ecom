import React, { Component } from "react";
import SigninForm from "./signinForm";

class Signin extends Component {
  onSubmit = (fields) => {
    console.log(fields);
  };
  render() {
    return (
      <div className="sign-in">
        <SigninForm onSubmit={this.onSubmit} className="sign-in__form" />
      </div>
    );
  }
}

export default Signin;
