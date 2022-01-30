import React from "react";
import styled from "styled-components";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
const Stars = ({ stars, reviews }) => {
  let arr = [];

  let i = stars;
  while (i > 1) {
    arr.push(1);
    i--;
  }

  if (i >= 0.5) {
    arr.push(0.5);
  }

  while (arr.length < 5) {
    arr.push(0);
  }

  return (
    <Wrapper>
      {arr.map((num) => {
        if (num === 1) {
          return (
            <span>
              <BsStarFill />
            </span>
          );
        } else if (num === 0.5) {
          return (
            <span>
              <BsStarHalf />
            </span>
          );
        } else {
          return (
            <span>
              <BsStar />
            </span>
          );
        }
      })}
      ({reviews} Customer reviews)
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  span {
    color: #ffb900;
    font-size: 1rem;
    margin-right: 0.25rem;
  }
  p {
    margin-left: 0.5rem;
    margin-bottom: 0;
  }
  margin-bottom: 0.5rem;
`;
export default Stars;
