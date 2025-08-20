import React from "react";
import { useCart } from "../context/cartContext";

function Cart() {
  const cart = useCart();
  return (
    <>
      <h1>Cart</h1>

      {cart.cartItems.length === 0 && <h3>Cart is Empty</h3>}

      {cart.cartItems.map((item, i) => (
        <div key={i}>
          {item.name}-{item.price}
        </div>
      ))}
    </>
  );
}

export default Cart;
