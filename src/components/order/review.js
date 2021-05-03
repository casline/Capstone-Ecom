import React, { Component } from "react";

import { connect } from "react-redux";
import * as actions from "../../actions";
import ReviewModal from "../modals/review-modal";

import PageTitle from "../pageTitle";
import ReviewForm from "./reviewForm";

class Review extends Component {
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
  componentDidMount() {
    this.props.setHeaderLinks([]);
    this.props.setNavbarLinks([]);
  }

  onSubmit = (fields) => {
    console.log("fields");
  };
  render() {
    let subtotal = 0;
    this.props.cartProducts.map((cartProduct) => {
      subtotal += cartProduct.quantity * cartProduct.product.price;
    });
    return (
      <div className="review">
        <ReviewModal
          handleModalClose={this.handleModalClose}
          modalIsOpen={this.state.reviewModalIsOpen}
        />
        <div className="new-review-link">
          <a onClick={this.handleNewReviewClick}>Open Modal!</a>
        </div>
        <PageTitle className="review__page-title" title="Order Review" />
        <ReviewForm
          className="review__form"
          onSubmit={this.onSubmit}
          subtotal={subtotal}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { cartProducts } = state.user;
  return {
    cartProducts,
  };
}

Review = connect(mapStateToProps, actions)(Review);

export default Review;
