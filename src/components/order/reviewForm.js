import React, { Component } from "react";

import { reduxForm, Field } from "redux-form";
import history from "../../history";

import { FormButton } from "../formFields";
import ReviewModal from "../modals/review-modal";
import ReviewProducts from "./reviewProducts";

class ReviewForm extends Component {
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
    const { className, handleSubmit, subtotal } = this.props;
    let tax = 0.16;

    return (
      <form onSubmit={handleSubmit} className={`${className} review-form`}>
        <div className="review-form__legend">
          <div className="review-form__legend__name">Name</div>
          <div className="review-form__legend__quantity">Quantity</div>
          <div className="review-form__legend__price">Price</div>
        </div>
        <ReviewProducts className="review-form__products" />
        <div className="review-form__line"></div>
        <ReviewModal
          handleModalClose={this.handleModalClose}
          modalIsOpen={this.state.reviewModalIsOpen}
        />
        <Field
          className="review-form__proceed"
          onClick={this.handleNewReviewClick}
          type="submit"
          title="Proceed to Checkout"
          name="proceed"
          component={FormButton}
        />
        <Field
          className="review-form__back"
          onClick={() => history.push("/shop")}
          type="button"
          title="Back"
          name="back"
          short={true}
          component={FormButton}
        />
        <div className="review-form__details review-details">
          <div className="review-details__subtotal review-detail">
            <div className="review-detail__title">Subtotal</div>
            <div className="review-detail__price">${subtotal}</div>
          </div>
          <div className="review-details__subtotal review-detail">
            <div className="review-detail__title">Tax</div>
            <div className="review-detail__price">${tax}</div>
          </div>
          <div className="review-details__subtotal review-detail">
            <div className="review-detail__title">Shipping</div>
            <div className="review-detail__price">$0.00</div>
          </div>
          <div className="review-detail__line review-detail"></div>

          <div className="review-details__total review-detail review-detail-gray">
            <div className="review-detail__title review-detail-gray__title">
              Total
            </div>
            <div className="review-detail__price review-detail-gray__price">
              ${subtotal + tax}
            </div>
          </div>
        </div>
      </form>
    );
  }
}

ReviewForm = reduxForm({
  form: "ReviewForm",
})(ReviewForm);

export default ReviewForm;
