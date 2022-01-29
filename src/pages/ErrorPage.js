import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const ErrorPage = () => {
  return (
    <Wrapper>
      <div>
        <h1>404</h1>
        <h4>Sorry , The page you tried connot be found</h4>
        <button className="btn">
          <Link to="/">Back Home</Link>
        </button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  background: var(--clr-primary-10);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 80vh;
  h1 {
    font-size: 5rem;
  }
  h4 {
    text-transform: none;
    margin-bottom: 2rem;
  }
`;

export default ErrorPage;
