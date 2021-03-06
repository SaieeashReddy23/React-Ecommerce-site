import React from "react";
import { useFilterContext } from "../context/filter_context";
import { BsFillGridFill, BsList } from "react-icons/bs";

import styled from "styled-components";

const Sort = () => {
  const { setGridView, setListView, list_view, filteredData, updateSort } =
    useFilterContext();

  return (
    <Wrapper>
      <div className="btn-container">
        <BsFillGridFill
          className={list_view ? "" : "active"}
          onClick={setGridView}
        />
        <BsList className={list_view ? "active" : ""} onClick={setListView} />
      </div>
      <div className="active">{filteredData.length} products found</div>
      <hr />
      <div>
        <label htmlFor="sort">
          <span>sort by</span>
        </label>

        <select
          name="sort"
          id="sort"
          className="sort-input"
          onChange={updateSort}
        >
          <option value="lowestToHighest">Price (Lowest)</option>
          <option value="highestToLowest">Price (Highest)</option>
          <option value="a_z">Name (A - Z)</option>
          <option value="z_a">Name (Z - A)</option>
        </select>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: auto auto 1fr auto;
  align-items: center;
  margin-bottom: 2rem;
  column-gap: 2rem;

  option {
    font-weight: 500;
    border-radius: 0.25rem;
  }

  span {
    font-weight: 500;
  }

  @media (max-width: 576px) {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 0.75rem;
    .btn-container {
      width: 50px;
    }
    label {
      display: inline-block;
      margin-right: 0.5rem;
    }
  }
  @media (min-width: 768px) {
    column-gap: 2rem;
  }
  p {
    text-transform: capitalize;
    margin-bottom: 0;
  }

  .btn-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 0.5rem;
    button {
      background: transparent;
      border: 1px solid var(--clr-black);
      color: var(--clr-black);
      width: 1.5rem;
      border-radius: var(--radius);
      height: 1.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      svg {
        font-size: 1rem;
      }
    }
    .active {
      background: var(--clr-black);
      color: var(--clr-white);
    }
  }

  .sort-input {
    border-color: transparent;
    font-size: 1rem;
    text-transform: capitalize;
    padding: 0.25rem 0.5rem;
    border-radius: 0.25rem;
  }
  label {
    font-size: 1rem;
    text-transform: capitalize;
  }
`;

export default Sort;
