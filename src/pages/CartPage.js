import React from "react";
import styled from "styled-components";

import { CartContent, PageHero } from "../components";

const CartPage = () => {
  return (
    <Wrapper>
      <PageHero title="Cart" />
      <CartContent />
    </Wrapper>
  );
};

const Wrapper = styled.main`
  min-height: 78.7vh;
  .empty {
    text-align: center;
    h2 {
      margin-bottom: 1rem;
      text-transform: none;
    }
  }
`;

export default CartPage;
