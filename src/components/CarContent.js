import React from "react";
import styled from "styled-components";
import { useCartContext } from "../context/cart_context";
import { Link } from "react-router-dom";
import CartColumns from "./CartColumns";
import CartItem from "./CartItem";
import CartTotals from "./CartTotals";

const CartContent = () => {
  const { cart, clearCart,total_amount } = useCartContext();

  if(total_amount < 1){
    return <div className="empty">
    <div>
     <h1 style={{marginBottom:"1rem"}}>Your cart is empty</h1>
    

<Link to="/products">
   <button className="btn">Fill up</button>
</Link>
    </div>
   
 
    </div>
  }

  return (
    <Wrapper className="section-center">
      <CartColumns />
      {cart !== [] &&
        cart.map((item, index) => {
          return <CartItem key={index} {...item} />;
        })}

      <div className="link-container">
        <Link to="/products">
          <button className="link-btn"> Continue Shopping</button>
        </Link>

        <button className="clear-btn link-btn" onClick={clearCart}>
          Clear Shopping Cart
        </button>
      </div>

      <CartTotals />
    </Wrapper>
  );
};
const Wrapper = styled.section`
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
