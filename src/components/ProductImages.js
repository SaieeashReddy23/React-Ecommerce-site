import React, { useState } from "react";
import styled from "styled-components";

const ProductImages = ({ images }) => {
  const [mainImage, setMainImage] = useState(images[0].thumbnails.large.url);
  const [clickImage, setClickImage] = useState(images[0].thumbnails.large.url);

  return (
    <Wrapper>
      <img
        src={mainImage}
        alt="SingleProduct"
        className="main"
        height={mainImage.height}
        width={mainImage.width}
      />

      <div className="gallery">
        {images.map(({ thumbnails, name }, index) => {
          const { small, large } = thumbnails;
          return (
            <img
              key={index}
              src={small.url}
              alt={name}
              height={small.height}
              width={small.width}
              onClick={() => setClickImage(large.url)}
              onMouseEnter={() => setMainImage(large.url)}
              onMouseLeave={() => setMainImage(clickImage)}
            />
          );
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .main {
    height: 700px;
  }
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    object-fit: cover;
  }
  .gallery {
    margin-top: 1rem;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    column-gap: 1rem;
    img {
      height: 100px;
      cursor: pointer;
    }
  }
  .active {
    box-shadow: 0px 0px 0px 2px var(--clr-primary-5);
  }
  @media (max-width: 576px) {
    .main {
      height: 300px;
    }
    .gallery {
      img {
        height: 50px;
      }
    }
  }
  @media (min-width: 992px) {
    .main {
      height: 500px;
    }
    .gallery {
      img {
        height: 75px;
      }
    }
  }
`;

export default ProductImages;
