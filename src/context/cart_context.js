import React, { useEffect, useContext, useReducer } from "react";
import reducer from "../reducers/cart_reducer";
import {
  ADD_TO_CART,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
  CLEAR_CART,
  COUNT_CART_TOTALS,
} from "../actions";
import { useProductsContext } from "./products_context";

const initialState = {
  cart: [],
  total_amount: 0,
  total_products: 0,
  shipping: 555,
};

const CartContext = React.createContext();

export const CartProvider = ({ children }) => {
  const { products } = useProductsContext();

  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = (id, color, amount, product) => {
    console.log(product);
    dispatch({ type: ADD_TO_CART, payload: { id, color, amount, product } });
  };

  const handleIncrease = () => {};

  const handleDecrease = () => {};

  const removeCartItem = (id) => {
    dispatch({ type: REMOVE_CART_ITEM, payload: id });
  };

  const clearCart = () => {
    dispatch({ type: CLEAR_CART });
  };

  const countCartTotals = () => {
    dispatch({ type: COUNT_CART_TOTALS });
  };

  return (
    <CartContext.Provider
      value={{
        ...state,
        addToCart,
        handleDecrease,
        handleIncrease,
        clearCart,
        countCartTotals,
        removeCartItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
// make sure use
export const useCartContext = () => {
  return useContext(CartContext);
};
