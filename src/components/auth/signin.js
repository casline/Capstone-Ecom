import React, { Component } from "react";
import SigninForm from "./signinForm";

import PageTitle from "../pageTitle";

import { connect } from "react-redux";
import * as actions from "../../actions";

class Signin extends Component {
  componentDidMount() {
    this.props.setHeaderLinks([]);
    this.props.setNavbarLinks([]);
  }
  onSubmit = (fields) => {
    console.log(fields);
  };
  render() {
    return (
      <div className="sign-in">
        <PageTitle className="sign-in__page-title" title="Login" />
        <SigninForm onSubmit={this.onSubmit} className="sign-in__form" />
      </div>
    );
  }
}

Signin = connect(null, actions)(Signin);

export default Signin;
