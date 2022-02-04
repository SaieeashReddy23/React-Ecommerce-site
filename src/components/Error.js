import React from "react";
import styled from "styled-components";
const Error = () => {
  return (
    <Wrapper>
      <h2>Some error occured while fetching products</h2>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: grid;
  align-items: center;
  justify-content: center;
`;
export default Error;
