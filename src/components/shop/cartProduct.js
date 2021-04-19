import React, { Component } from "react";
import QuantityCounter from "../quantityCounter";
import GrayPriceTag from "../grayPriceTag";

import FootballDecal from "../../../static/assets/auth/images/Football Decal Image.jpg";

class CartProduct extends Component {
  render() {
    const { className, title, quantity, price } = this.props;
    return (
      <div className={`${className} cart-product`}>
        <img className="cart-product__image" src={FootballDecal} />
        <div className="cart-product__title">{title}</div>
        <QuantityCounter
          className="cart-product__quantity"
          quantity={quantity}
        />
        <a className="cart-product__remove">Remove</a>
        <GrayPriceTag className="cart-product__price" title={price} />
      </div>
    );
  }
}

export default CartProduct;
