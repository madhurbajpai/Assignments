import React from "react";
import { useState } from "react";
import { useCart } from "../context/CartContext";
import PopUp from "../components/PopUp";
import "./Cart.css";
const Cart = () => {
  const { cartItems, addToCart, removeFromCart, updateQuantity, clearCart } =
    useCart();
  const [showPopup, setShowPopup] = React.useState(false);

  const total = cartItems
    .reduce((sum, item) => sum + item.price * item.quantity, 0)
    .toFixed(2);
  const handleCheckout = () => {
    clearCart();
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
    }, 3000);
  };
  return (
    <div className="cart-page">
      <h2 className="head">Your Cart</h2>
      {cartItems.length === 0 ? (
        <p className="empty-cart">Your cart is empty</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div className="cart-item" key={item.id}>
              <img
                src={item.image}
                alt={item.name}
                className="cart-item-image"
              />
              <div className="cart-item-details">
                <h3 className="cart-item-title">{item.name}</h3>
                <p className="cart-item-price">${item.price.toFixed(2)}</p>
                <p className="cart-item-quantity">Quantity: {item.quantity}</p>
                <button className="cart-item-button"
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                >
                  -
                </button>
                <button className="cart-item-button"
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                >
                  +
                </button>
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
            </div>
          ))}
          <h3 className="cart-total">Total: ${total}</h3>
          <button onClick={handleCheckout}>Checkout</button>
        </>
      )}
      {showPopup && <PopUp show={showPopup} />}
    </div>
  );
};

export default Cart;
