import React, { Component } from "react";

class GrayPriceTag extends Component {
  render() {
    const { className, title } = this.props;
    return <div className={`${className} gray-price-tag`}>${title}</div>;
  }
}
export default GrayPriceTag;
