import React from "react";
import styled from "styled-components";
import { useCartContext } from "../context/cart_context";
import { useUserContext } from "../context/user_context";
import { formatPrice } from "../utils/helpers";
import { Link } from "react-router-dom";

const CartTotals = () => {
  const { total_products_price, shipping } = useCartContext();

  const { loginWithRedirect, myUser } = useUserContext();

  return (
    <Wrapper>
      <div>
        <article>
          <h5>
            <div>Subtotal :</div>
            <div>{formatPrice(total_products_price)}</div>
          </h5>
          <div className="con">
            <p> Shipping Fee :</p>
            <p>{formatPrice(shipping)}</p>
          </div>
          <hr />
          <h4>
            <div>Order Total :</div>
            <div>{formatPrice(total_products_price + shipping)}</div>
          </h4>
        </article>

        {myUser ? (
          <Link to="/checkout" className="btn">
            Proceed to checkout
          </Link>
        ) : (
          <button className="btn" onClick={() => loginWithRedirect()}>
            Login
          </button>
        )}
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
  .con {
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
