import React, { Component } from "react";

import { FormButton } from "../formFields";
import { Field } from "redux-form";

import history from "../../history";

class ModalReview extends Component {
  render() {
    const { className, handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit} className={`${className} review-modal`}>
        <div className="review-modal__text">
          <h1>Thank You !!</h1>
          <h3>
            To continue with this purchase select the button below to move to
            shipping inforamtion or select back to update items in cart.
          </h3>
        </div>
        <Field
          className="review-modal__proceed"
          onClick={() => history.push("/information-shipping")}
          type="submit"
          title="Proceed to Checkout"
          name="proceed"
          component={FormButton}
        />
        <Field
          className="review-modal__back"
          onClick={() => history.push("/shop")}
          type="button"
          title="Back"
          name="back"
          short={true}
          component={FormButton}
        />
      </form>
    );
  }
}

export default ModalReview;
