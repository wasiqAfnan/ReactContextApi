import React, { createContext, useState, useContext } from "react";

// Create the context
const CartContext = createContext();

// Create the provider component
export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Function to add item to cart
  const addToCart = (item) => {
    setCart([...cart, item]);
  };  

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

// custom hook for using the cartContext
export const useCart = () =>{
    const context = useContext(CartContext);
    return context;
}
