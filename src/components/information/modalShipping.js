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
          <div className="shipping-modal__header">Save Address</div>
          <div className="shipping-modal__content">
            Would you like to save this address on file for future purchases
            with Football Decals ?
          </div>
        </div>
        <Field
          className="shipping-modal__save-address"
          onClick={() => history.push("/information-payment")}
          type="submit"
          title="Save Address"
          name="save-address"
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
