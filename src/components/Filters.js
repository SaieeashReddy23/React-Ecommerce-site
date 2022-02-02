import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useFilterContext } from "../context/filter_context";
import { getUniqueValues, formatPrice } from "../utils/helpers";
import { FaCheck } from "react-icons/fa";

const Filters = () => {
  const {
    filters: {
      text,

      category,
      color,
      min_price,
      max_price,
      price,
      shipping,
    },
    all_products,

    updateFilter,
    clearFilter,
  } = useFilterContext();

  const [categories, setCategories] = useState([]);
  const [companies, setCompanies] = useState([]);
  const [colors, setColors] = useState([]);

  useEffect(() => {
    setCategories(getUniqueValues(all_products, "category"));
    setCompanies(getUniqueValues(all_products, "company"));
    setColors(getUniqueValues(all_products, "colors"));
  }, [all_products]);

  return (
    <Wrapper>
      <div className="content">
        <form className="form-control" onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            name="text"
            className="search-input"
            placeholder="Search"
            value={text}
            onChange={updateFilter}
          />
        </form>

        <div className="block">
          <h4>category</h4>
          {categories.map((categ, index) => {
            return (
              <button
                key={index}
                onClick={updateFilter}
                value={categ}
                name="category"
                className={category === categ ? "active" : ""}
              >
                {categ}
              </button>
            );
          })}
        </div>

        <div className="block">
          <h4>Company</h4>
          <select name="company" className="company" onChange={updateFilter}>
            {companies.map((company, index) => {
              return (
                <option key={index} className="company" value={company}>
                  {company}
                </option>
              );
            })}
          </select>
        </div>

        <div className="block">
          <h4>Colors</h4>
          <div className="colors">
            {colors.map((col, index) => {
              if (col === "all") {
                return (
                  <button
                    className={color === col ? "active" : ""}
                    onClick={updateFilter}
                    name="color"
                    value={col}
                    key={index}
                    style={{ margin: "0 0.5rem" }}
                  >
                    all
                  </button>
                );
              }
              return (
                <button
                  onClick={updateFilter}
                  className={color === col ? "color-btn active" : "color-btn"}
                  name="color"
                  value={col}
                  key={index}
                  style={{ background: `${col}` }}
                >
                  {color === col && <FaCheck />}
                </button>
              );
            })}
          </div>
        </div>
        <div className="block">
          <h4>Price</h4>
          <p> {formatPrice(price)}</p>
          <input
            type="range"
            min={min_price}
            max={max_price}
            className="slider"
            id="myRange"
            name="price"
            value={price}
            onChange={updateFilter}
          ></input>
        </div>
        <div className="shipping block">
          <label htmlFor="shipping">Free Shipping</label>
          <input
            type="checkbox"
            id="shipping"
            name="shipping"
            checked={shipping}
            onChange={updateFilter}
          />
        </div>

        <button className="clear-btn block" onClick={clearFilter}>
          Clear Filters
        </button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width:100vw;

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
