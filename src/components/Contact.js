import React from "react";
import styled from "styled-components";

const Contact = () => {
  return (
    <Wrapper className="section-center">
      <div className="content">
        <div>
          <h3>Join our newsletters and get 20% off</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex, quasi
            asperiores molestias, minima aliquid non at dolorum sint nam,
            quibusdam dolores? Nemo sit animi amet debitis beatae reiciendis
          </p>
        </div>

        <form
          className="contact-form"
          action="https://formspree.io/f/xknyjgvq"
          method="POST"
        >
          <input
            type="email"
            placeholder="Enter Email"
            className="form-input"
            name="_replyto"
          />
          <button className="submit-btn">Submit</button>
        </form>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 5rem 0;

  h3 {
    text-transform: none;
  }
  p {
    line-height: 2;
    max-width: 45em;
    color: var(--clr-grey-5);
  }
  .contact-form {
    width: 90vw;
    max-width: 500px;
    display: grid;
    grid-template-columns: auto auto;
  }

  .form-input,
  .submit-btn {
    font-size: 1rem;
    padding: 0.5rem 1rem;
    border: 2px solid var(--clr-black);
  }
  .form-input {
    border-right: none;
    color: var(--clr-grey-3);
    border-top-left-radius: var(--radius);
    border-bottom-left-radius: var(--radius);
  }
  .submit-btn {
    border-top-right-radius: var(--radius);
    border-bottom-right-radius: var(--radius);
  }
  .form-input::placeholder {
    color: var(--clr-black);
    text-transform: capitalize;
  }
  .submit-btn {
    background: var(--clr-primary-5);
    text-transform: capitalize;
    letter-spacing: var(--spacing);
    cursor: pointer;
    transition: var(--transition);
    color: var(--clr-black);
  }
  .submit-btn:hover {
    color: var(--clr-white);
  }
  @media (min-width: 992px) {
    .content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: center;
      gap: 5rem;
      margin-bottom: -4rem;
    }
    p {
      margin-bottom: 0;
    }
  }
  @media (min-width: 1280px) {
    padding: 15rem 0;
  }
`;

export default Contact;
