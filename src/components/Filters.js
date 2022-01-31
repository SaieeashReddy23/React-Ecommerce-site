import React from "react";
import styled from "styled-components";
import { useFilterContext } from "../context/filter_context";
import { getUniqueValues, formatPrice } from "../utils/helpers";
import { FaCheck } from "react-icons/fa";

const Filters = () => {
  const { selectCategory, category, categoryFilter } = useFilterContext();
  return (
    <Wrapper>
      <div className="content">
        <form className="form-control">
          <input type="text" className="search-input" placeholder="Search" />
        </form>
        <div className="block">
          <h4>Category</h4>
          <button
            onClick={() => selectCategory("All")}
            className={categoryFilter ? " " : "active"}
          >
            All
          </button>
          <button
            onClick={() => selectCategory("bedroom")}
            className={
              categoryFilter && category === "bedroom" ? "active" : " "
            }
          >
            Bedroom
          </button>
          <button
            onClick={() => selectCategory("office")}
            className={categoryFilter && category === "office" ? "active" : " "}
          >
            Office
          </button>
          <button
            onClick={() => selectCategory("kitchen")}
            className={
              categoryFilter && category === "kitchen" ? "active" : " "
            }
          >
            Kitchen
          </button>
          <button
            onClick={() => selectCategory("living room")}
            className={
              categoryFilter && category === "living room" ? "active" : " "
            }
          >
            Livingroom
          </button>
          <button
            onClick={() => selectCategory("kids")}
            className={categoryFilter && category === "kids" ? "active" : " "}
          >
            Kids
          </button>
          <button
            onClick={() => selectCategory("dining")}
            className={categoryFilter && category === "dining" ? "active" : " "}
          >
            Dining
          </button>
        </div>

        <div className="block">
          <h4>Company</h4>
          {/* <select name="" id="" className="company">
            <option value="marcos" selected disabled>
              marcos
            </option>
          </select> */}
        </div>

        <div className="block">
          <h4>Colors</h4>
          <div className="colors">
            <button className="all-btn active">All</button>
            <button className="color-btn">All</button>
            <button className="color-btn">All</button>
            <button className="color-btn">All</button>
          </div>
        </div>
        <div className="block">
          <h4>Price</h4>
          <p> {formatPrice(3299.999)}</p>
          <input
            type="range"
            min="1"
            max="100"
            className="slider"
            id="myRange"
          ></input>
        </div>
        <div className="shipping block">
          <label htmlFor="ship">Free Shipping</label>
          <input type="checkbox" id="ship" />
        </div>

        <button className="clear-btn block">Clear Filters</button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .form-control {
    margin-bottom: 1.25rem;
    h5 {
      margin-bottom: 0.5rem;
    }
  }

  .block {
    margin-top:1rem;
  }
  .search-input {
    padding: 0.5rem;
    background: var(--clr-grey-10);
    border-radius: var(--radius);
    border-color: transparent;
    letter-spacing: var(--spacing);
  }
  .search-input::placeholder {
    text-transform: capitalize;
  }

  button {
    display: block;
    margin: 0.25em 0;
    padding: 0.25rem 0;
    text-transform: capitalize;
    background: transparent;
    border: none;
    border-bottom: 1px solid transparent;
    letter-spacing: var(--spacing);
    color: var(--clr-grey-5);
    cursor: pointer;
  }

  button:hover{
     border-color: var(--clr-grey-5);
  }
  }
  .active {
    border-color: var(--clr-grey-5);
  }
  .company {
    background: var(--clr-grey-10);
    border-radius: var(--radius);
    border-color: transparent;
    padding: 0.25rem;
  }
  .colors {
    display: flex;
    align-items: center;
  }
  .color-btn {
    display: inline-block;
    width: 1rem;
    height: 1rem;
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
      font-size: 0.5rem;
      color: var(--clr-white);
    }
  }
  .all-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 0.5rem;
    opacity: 0.5;
  }
  .active {
    opacity: 1;
  }
  .all-btn .active {
    text-decoration: underline;
  }
  .price {
    margin-bottom: 0.25rem;
  }
  .shipping {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    text-transform: capitalize;
    column-gap: 0.5rem;
    font-size: 1rem;
  }
  .clear-btn {
    background: var(--clr-red-dark);
    color: var(--clr-white);
    padding: 0.25rem 0.5rem;
    border-radius: var(--radius);
  }
  @media (min-width: 768px) {
    .content {
      position: sticky;
      top: 1rem;
    }
  }
`;

export default Filters;
