import React from "react";
import styled from "styled-components";
import { useCartContext } from "../context/cart_context";
import { useUserContext } from "../context/user_context";
import { formatPrice } from "../utils/helpers";
import { Link } from "react-router-dom";

const CartTotals = () => {
  const { total_products_price, shipping } = useCartContext();

  return (
    <Wrapper>
      <div>
        <article>
          <h5>
            <h5>Subtotal :</h5>
            <h5>{formatPrice(total_products_price)}</h5>
          </h5>
          <p>
            <p>Shipping Fee : </p>
            <p>{formatPrice(shipping)}</p>
          </p>
          <hr />
          <h4>
            <h4>Order Total :</h4>{" "}
            <h4>{formatPrice(total_products_price + shipping)}</h4>
          </h4>
        </article>
        <button className="btn">login</button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin-top: 3rem;
  display: flex;
  justify-content: center;
  article {
    border: 1px solid var(--clr-grey-8);
    border-radius: var(--radius);
    padding: 1.5rem 3rem;
  }
  h4,
  h5,
  p {
    display: grid;
    grid-template-columns: 200px 1fr;
  }
  p {
    text-transform: capitalize;
  }
  h4 {
    margin-top: 1.5rem;
  }
  h5 {
    font-size: 1.25rem;
  }
  p {
    font-weight: 600;
  }
  @media (min-width: 776px) {
    justify-content: flex-end;
  }
  .btn {
    width: 100%;
    margin-top: 1rem;
    text-align: center;
    font-weight: 700;
  }
`;

export default CartTotals;
