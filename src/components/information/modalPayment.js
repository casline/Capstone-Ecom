import React, { Component } from "react";

import { FormButton } from "../formFields";
import { Field } from "redux-form";

import history from "../../history";

class ModalPayment extends Component {
  render() {
    const { className, handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit} className={`${className} payment-modal`}>
        <div className="payment-modal__text">
          <div className="payment-modal__header">Thank You !!</div>
          <div className="payment-modal__body">
            Your order number is: A95362716 <br></br>We've recieved your order
            and it will be fullfilled and shipped within the next business day.
            Login to your account for purchase history and orders shipping
            information.
          </div>
        </div>
        <Field
          className="payment-modal__proceed"
          onClick={() => history.push("/information-payment")}
          type="submit"
          title="Got it!"
          name="proceed"
          component={FormButton}
        />
      </form>
    );
  }
}

export default ModalPayment;
