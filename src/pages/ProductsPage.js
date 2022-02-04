import React from "react";
import styled from "styled-components";
import { Filters, ProductList, Sort, PageHero, Error } from "../components";
import { useProductsContext } from "../context/products_context";

const ProductsPage = () => {
  const { loading, error } = useProductsContext();
  return (
    <Wrapper>
      <PageHero title="Products" />
      <div className="products section-center">
        <Filters />

        <div>
          <Sort />
          {error && <Error />}
          {loading ? <div className="loading"></div> : <ProductList />}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  min-height: 80vh;

  .products {
    display: grid;
    gap: 3rem 1.5rem;
    margin: 4rem auto;
  }
  @media (min-width: 768px) {
    .products {
      grid-template-columns: 200px 1fr;
    }
  }
`;

export default ProductsPage;
