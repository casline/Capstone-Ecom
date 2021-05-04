import React, { Component } from "react";

import { FormButton } from "../formFields";
import { Field } from "redux-form";

import history from "../../history";

class ModalShipping extends Component {
  render() {
    const { className, handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit} className={`${className} shipping-modal`}>
        <div className="shipping-modal__text">
          <h1>Save Address</h1>
          <h3>
            Would you like to save this address on file for future purchases
            with Football Decals ?
          </h3>
        </div>
        <Field
          className="shipping-modal__proceed"
          onClick={() => history.push("/information-payment")}
          type="submit"
          title="Save Address"
          name="proceed"
          component={FormButton}
        />
        <Field
          className="shipping-modal__back"
          onClick={() => history.push("/information-payment")}
          type="button"
          title="Dont Save"
          name="back"
          short={true}
          component={FormButton}
        />
      </form>
    );
  }
}

export default ModalShipping;
