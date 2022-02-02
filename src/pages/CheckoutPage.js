import React from "react";
import styled from "styled-components";
import { PageHero, StripeCheckout } from "../components";

const CheckoutPage = () => {
  return (
    <Wrapper>
      <PageHero title="Checkout" />
      <StripeCheckout />
    </Wrapper>
  );
};
const Wrapper = styled.div`
  min-height: 75vh;
`;
export default CheckoutPage;
