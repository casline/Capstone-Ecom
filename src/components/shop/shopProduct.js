import React, { Component } from "react";
import GrayPriceTag from "../grayPriceTag";
import QuantityCounter from "../quantityCounter";

class ShopProduct extends Component {
  render() {
    const { _id, title, description, price } = this.props;
    return (
      <div className="shop-product">
        <div className="shop-product__title">{title}</div>
        <div className="shop-product__description">{description}</div>
        <GrayPriceTag className="shop-product__price" title={price} />
        <QuantityCounter className="shop-product__quantity" quantity={1} />
        <div className="shop-product__add-to-cart">Add To Cart</div>
      </div>
    );
  }
}

export default ShopProduct;
