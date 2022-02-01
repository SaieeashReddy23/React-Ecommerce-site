import React from "react";
import styled from "styled-components";
import { useCartContext } from "../context/cart_context";
import { Link } from "react-router-dom";
import CartColumns from "./CartColumns";
import CartItem from "./CartItem";
import CartTotals from "./CartTotals";

const CartContent = () => {
  const { cart, clearCart } = useCartContext();

  return (
    <Wrapper className="section-center">
      <CartColumns />
      {cart.map((item, index) => {
        return <CartItem key={index} {...item} />;
      })}
      <CartItem />
      <CartTotals />
      <div className="link-container">
        <button className="link-btn"> Continue Shopping</button>
        <button className="clear-btn link-btn" onClick={clearCart}>
          Clear Shopping Cart
        </button>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  min-height: 66vh;
  .link-container {
    display: flex;
    justify-content: space-between;
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
  .link-btn {
    background: transparent;
    border-color: transparent;
    text-transform: capitalize;
    padding: 0.25rem 0.5rem;
    background: var(--clr-primary-5);
    color: var(--clr-white);
    border-radius: var(--radius);
    letter-spacing: var(--spacing);
    font-weight: 400;
    cursor: pointer;
  }
  .clear-btn {
    background: var(--clr-black);
  }
`;
export default CartContent;
