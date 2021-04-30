import React, { Component } from "react";

import { reduxForm, Field } from "redux-form";
import history from "../../history";

import { FormInput, FormButton } from "../formFields";
import { UnderlinedTitle } from "./infoHelp";
import OrderSummary from "./orderSummary";

class PaymentForm extends Component {
  render() {
    const { className, handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit} className={`${className} payment-form`}>
        <Field
          className="payment-form__name"
          type="name"
          title="Name on Credit Card"
          placeholder="Full Name"
          name="name"
          component={FormInput}
        />
        <Field
          className="payment-form__card"
          type="card"
          title="Credit Card Number"
          placeholder="____-____-____-____"
          name="card"
          component={FormInput}
        />
        <Field
          className="payment-form__expiration"
          type="expiration"
          title="Expiration Date"
          placeholder="MM/YY"
          name="expiration"
          component={FormInput}
        />
        <Field
          className="payment-form__ccv"
          type="ccv"
          title="CCV"
          placeholder="CCV"
          name="ccv"
          component={FormInput}
        />
        <div className="payment-form__line"></div>
        <Field
          className="payment-form__pay-complete"
          onClick={() => history.push("/information-payment")}
          type="submit"
          title="Pay & Complete"
          name="pay-complete"
          component={FormButton}
        />
        <Field
          className="payment-form__back"
          onClick={() => history.push("/signin")}
          type="button"
          title="Back"
          name="back"
          short={true}
          component={FormButton}
        />
        <OrderSummary className="payment-form__order-summary" />
        <div className="payment-form__shipping-info shipping-info">
          <UnderlinedTitle
            className="shipping-info__title"
            title="Shipping To"
          />
          <div className="shipping-info__name small text">Caleb Schafrath</div>
          <div className="shipping-info__address small text">
            Address goes here
          </div>
        </div>
      </form>
    );
  }
}

PaymentForm = reduxForm({
  form: "PaymentForm",
})(PaymentForm);

export default PaymentForm;
