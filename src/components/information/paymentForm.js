import React, { Component } from "react";

import { reduxForm, Field } from "redux-form";
import history from "../../history";
import { connect } from "react-redux";

import { FormInput, FormButton } from "../formFields";
import { UnderlinedTitle } from "./infoHelp";
import OrderSummary from "./orderSummary";
import PaymentModal from "../modals/payment-modal";

class PaymentForm extends Component {
  constructor() {
    super();

    this.state = {
      reviewModalIsOpen: false,
    };

    this.handleNewReviewClick = this.handleNewReviewClick.bind(this);
    this.handleModalClose = this.handleModalClose.bind(this);
  }

  handleModalClose() {
    this.setState({
      reviewModalIsOpen: false,
    });
  }

  handleNewReviewClick() {
    this.setState({
      reviewModalIsOpen: true,
    });
  }
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
          placeholder="3 Digit Code"
          name="ccv"
          component={FormInput}
        />
        <div className="payment-form__line"></div>
        <PaymentModal
          handleModalClose={this.handleModalClose}
          modalIsOpen={this.state.reviewModalIsOpen}
        />
        <Field
          className="payment-form__pay-complete"
          onClick={this.handleNewReviewClick}
          type="submit"
          title="Pay & Complete"
          name="pay-complete"
          component={FormButton}
        />
        <Field
          className="payment-form__back"
          onClick={() => history.push("/shop")}
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
          <div className="shipping-info__name small text">
            {this.props.name}
          </div>
          <div className="shipping-info__address small text">
            {this.props.address}
          </div>
        </div>
      </form>
    );
  }
}

PaymentForm = reduxForm({
  form: "PaymentForm",
})(PaymentForm);

function mapStateToProps(state) {
  const { name, address } = state.user.user;
  return {
    name,
    address,
  };
}

PaymentForm = connect(mapStateToProps)(PaymentForm);

export default PaymentForm;
