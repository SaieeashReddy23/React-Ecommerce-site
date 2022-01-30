import React, { useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useProductsContext } from "../context/products_context";
import { single_product_url as url } from "../utils/constants";
import { formatPrice } from "../utils/helpers";
import {
  Loading,
  Error,
  ProductImages,
  AddToCart,
  Stars,
  PageHero,
} from "../components";
import styled from "styled-components";
import { Link } from "react-router-dom";

const SingleProductPage = () => {
  const { single_product } = useProductsContext();
  const {
    images,
    description,
    name,
    company,
    stars,
    reviews,
    price,
    stock,
    id,
  } = single_product;

  return (
    <Wrapper className="page-100">
      <PageHero title={`Products / ${name}`} />

      <div className="section-center" style={{ marginTop: "2rem" }}>
        <Link to="/products">
          <button className="btn">Back to Products</button>
        </Link>
      </div>
      <div className="product-center section-center">
        <div>{images && <ProductImages images={images} />}</div>

        <div className="desc">
          <h2>{name}</h2>
          <span>
            <Stars stars={stars} reviews={reviews} />
          </span>

          <h4 className="price">${price / 100}</h4>
          <p>{description}</p>
          <div className="info">
            <span>Available :</span>
            <p>{stock}</p>
          </div>
          <div className="info">
            <span>Sku :</span>
            <p>{id}</p>
          </div>
          <div className="info">
            <span>Brand :</span>
            <p>{company}</p>
          </div>

          <hr />

          <div className="info" style={{ marginTop: "1rem" }}>
            <span>Colors :</span>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  .product-center {
    display: grid;
    gap: 4rem;
    margin-top: 2rem;
  }
  .price {
    color: var(--clr-primary-5);
  }
  .desc {
    line-height: 2;
    max-width: 45em;
  }
  .info {
    text-transform: capitalize;
    width: 300px;
    display: grid;
    grid-template-columns: 125px 1fr;
    span {
      font-weight: 700;
    }
  }

  @media (min-width: 992px) {
    .product-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
    }
    .price {
      font-size: 1.25rem;
    }
  }
`;

export default SingleProductPage;
