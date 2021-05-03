import React, { Component } from "react";
import ReactModal from "react-modal";

class ReviewModal extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <ReactModal isOpen={true}>
        <h1>Coding in progress</h1>
      </ReactModal>
    );
  }
}

export default ReviewModal;
