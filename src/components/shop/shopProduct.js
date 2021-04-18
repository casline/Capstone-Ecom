import React, { Component } from "react";
import GrayPriceTag from "../grayPriceTag";
import QuantityCounter from "../quantityCounter";

import FootballDecal from "../../../static/assets/auth/images/Football Decal Image.jpg";

class ShopProduct extends Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     shopProductClass: "",
  //   };
  // }

  // handleMouseEnter() {
  //   this.setState({
  //     shopProductClass: "image-blur",
  //   });
  // }
  // handleMouseLeave() {
  //   this.setState({
  //     shopProductClass: "",
  //   });
  // }
  render() {
    const { _id, title, description, price } = this.props;
    return (
      <div className="shop-product">
        <div className="shop-product__front">
          <img className="shop-product__front__image" src={FootballDecal} />
          <div className="shop-product__front__title">{title}</div>
        </div>
        <div className="shop-product__back">
          <div className="shop-product__back__title">{title}</div>
          <div className="shop-product__back__description">{description}</div>
          <GrayPriceTag className="shop-product__back__price" title={price} />
          <QuantityCounter
            className="shop-product__back__quantity"
            quantity={1}
          />
          <div className="shop-product__back__add-to-cart">Add To Cart</div>
        </div>
      </div>
    );
  }
}

export default ShopProduct;
