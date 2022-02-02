import React from "react";
import styled from "styled-components";
import { PageHero } from "../components";
import aboutImg from "../assets/hero-bcg.jpeg";

const AboutPage = () => {
  return (
    <div>
      <PageHero title="About" />

      <Wrapper className="section-center ">
        <div>
          <img src={aboutImg} alt="About" />
        </div>

        <div>
          <div className="title">
            <h2> Our Story</h2>
            <div className="underline"></div>
          </div>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta amet
            ab saepe nulla quas labore inventore velit nihil, mollitia adipisci
            ipsam commodi voluptate accusantium necessitatibus laudantium dolor
            facilis excepturi neque facere, modi consequatur. Amet ex odio
            architecto commodi iste asperiores unde incidunt quas maxime. Rerum
            laudantium maiores ad temporibus quam.
          </p>
        </div>
      </Wrapper>
    </div>
  );
};

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  margin-top: 2.3rem;
  min-height: calc(100vh - (58vh));
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 375px;
    object-fit: cover;
    margin-top: 3rem;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
    margin-bottom: 2rem;
  }
  .title {
    margin-top: 2.5rem;
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 2fr;
    min-height: 59vh;
  }
`;
export default AboutPage;
