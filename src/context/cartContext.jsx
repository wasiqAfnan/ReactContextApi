import React, { createContext, useState, useContext } from "react";

// Create the context
const CartContext = createContext();

// Create the provider component
export const CartContextProvider = ({ children }) => {
  const [cartItems, setCart] = useState([]);

  // Function to add item to cart
  const addToCart = (item) => {
    setCart([...cartItems, item]);
  };  

  return (
    <CartContext.Provider value={{ cartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

// custom hook for using the cartContext
export const useCart = () =>{
    const context = useContext(CartContext);
    return context;
}
