import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaCheck } from "react-icons/fa";
import { useCartContext } from "../context/cart_context";
import AmountButtons from "./AmountButtons";

const AddToCart = ({ product }) => {
  const { colors, id, stock } = product;

  const { addToCart } = useCartContext();

  const [mainColor, setMainColor] = useState(colors[0]);

  const [noOfItems, setNoOfItems] = useState(1);

  const increase = () => {
    if (noOfItems < stock) {
      setNoOfItems(noOfItems + 1);
    }
  };
  const decrease = () => {
    if (noOfItems > 1) {
      setNoOfItems(noOfItems - 1);
    }
  };

  return (
    <Wrapper>
      <div className="colors">
        <span>Colors: </span>
        <div>
          {colors.map((color, index) => {
            return (
              <button
                className={
                  mainColor === color ? "color-btn active" : "color-btn"
                }
                key={index}
                style={{ background: color }}
                onClick={() => setMainColor(color)}
              >
                {mainColor === color && <FaCheck />}
              </button>
            );
          })}
        </div>
      </div>

      <AmountButtons
        className="btn-container"
        decrease={decrease}
        increase={increase}
        val={noOfItems}
      />

      {/* <div className="btn-container">
        <button className="inc-btn" onClick={decrease}>
          -
        </button>
        <span className="ele">{noOfItems}</span>
        <button className="inc-btn" onClick={increase}>
          +
        </button>
      </div> */}

      <Link to="/cart">
        <button
          className="btn"
          onClick={() => addToCart(id, mainColor, noOfItems, product)}
        >
          ADD TO CART
        </button>
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin-top: 2rem;
  .colors {
    display: grid;
    grid-template-columns: 125px 1fr;
    align-items: center;
    margin-bottom: 0.5rem;
    span {
      text-transform: capitalize;
      font-weight: 700;
    }
    div {
      display: flex;
    }
  }
  .color-btn {
    display: inline-block;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    background: #222;
    margin-right: 0.5rem;
    border: none;
    cursor: pointer;
    opacity: 0.5;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      font-size: 0.75rem;
      color: var(--clr-white);
    }
  }
  .active {
    opacity: 1;
  }
  .btn-container {
    margin-top: -1rem;
    margin-left: -2rem;
  }

  .btn {
    margin-top: 0rem;
    width: 140px;
  }
`;
export default AddToCart;
