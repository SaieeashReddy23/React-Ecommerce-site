import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import heroBcg from "../assets/hero-bcg.jpeg";
import heroBcg2 from "../assets/hero-bcg-2.jpeg";

const Hero = () => {
  return (
    <Wrapper className="section-center">
      <div>
        <h2>Design Your Comfort Zone</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
          molestiae nostrum praesentium placeat ea voluptatibus error corporis
          eius veniam, debitis, qui sapiente incidunt perferendis. Quas odio
          reiciendis dolor inventore aliquam,
        </p>
      </div>
      <Link to="/products">
        <div className="img-container">
          <img src={heroBcg} alt="heroimg" className="main-img" />
          <img src={heroBcg2} alt="heroimg2" className="accent-img" />
        </div>
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  min-height: 60vh;
  display: grid;
  place-items: center;
  .img-container {
    display: none;
  }

  p {
    line-height: 2;
    max-width: 45em;
    margin-bottom: 2rem;
    color: var(--clr-grey-5);
    font-size: 1rem;
  }
  @media (min-width: 992px) {
    height: calc(100vh - 5rem);
    grid-template-columns: 1fr 1fr;
    width: 100vw;
    gap: 8rem;
    h2 {
      margin-bottom: 2rem;
    }
    p {
      font-size: 1rem;
    }
    .hero-btn {
      padding: 0.75rem 1.5rem;
      font-size: 1rem;
    }
    .img-container {
      display: block;
      position: relative;
      margin-top: 2rem;
      margin-right: -10rem;
    }
    .main-img {
      width: 100%;
      height: 400px;
      position: relative;
      border-radius: var(--radius);
      display: block;
      object-fit: cover;
    }
    .accent-img {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 250px;
      transform: translateX(-50%);
      border-radius: var(--radius);
    }
    .img-container::before {
      content: "";
      position: absolute;
      width: 10%;
      height: 80%;
      background: var(--clr-primary-9);
      bottom: 0%;
      left: -8%;
      border-radius: var(--radius);
    }
  }
`;

export default Hero;
