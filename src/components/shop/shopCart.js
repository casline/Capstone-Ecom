import React, { Component } from "react";

function CartButton({ className, icon }) {
  return (
    <div className={`${className} cart-button`}>
      <i className={icon} />
    </div>
  );
}

function CartContent({ className, products }) {
  let count = products.length;
  let productJSX = products.map((product) => <h1 key={product}>{product}</h1>);
  return (
    <div className={`${className} cart-content`}>
      <div className="cart-content__title">Cart ({count})</div>
      <div className="cart-content__products">{productJSX}</div>
      <CartFooter className="cart-content__footer" products={products} />
    </div>
  );
}

function CartFooter({ className, products }) {
  const price = 4.99;
  return (
    <div className={`${className} cart-footer`}>
      <a className="cart-footer__checkout">Checkout</a>
      <div className="cart-footer__subtotal">Subtotal</div>
      <div className="cart-footer__price">${price}</div>
    </div>
  );
}

class ShopCart extends Component {
  render() {
    const { className } = this.props;
    return (
      <div className={`${className} shop-cart`}>
        <CartButton className="shop-cart__toggle" icon="fas fa-times" />
        <CartContent
          className="shop-cart__content"
          products={[
            123,
            456,
            789,
            123,
            456,
            789,
            123,
            456,
            789,
            123,
            456,
            789,
            123,
            456,
            789,
          ]}
        />
      </div>
    );
  }
}

export default ShopCart;
