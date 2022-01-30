import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const PageHero = ({ title }) => {
  return (
    <Wrapper>
      <h4 className="section-center">
        <Link to="/"> Home / </Link>
        <b>{title}</b>
      </h4>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background: var(--clr-primary-10);
  width: 100%;
  min-height: 5rem;
  display: flex;
  align-items: center;

  color: var(--clr-primary-1);
  a {
    color: var(--clr-primary-3);
    padding: 0.5rem;
    transition: var(--transition);
  }
  a:hover {
    color: var(--clr-primary-1);
  }
`;

export default PageHero;
