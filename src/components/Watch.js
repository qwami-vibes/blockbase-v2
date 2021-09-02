import React from "react";
import styled from "styled-components";

const Watch = ({ currency }) => {
  return (
    <StyledWatch>
      <div className="crypto-list crypto-name">
        <img src="google.com" alt="Crypto Logo" />
        <span>{currency}</span>
      </div>
      <div className="crypto-list crypto-usd">25,000</div>
      <div className="crypto-list crypto-gbp">45,000</div>
      <div className="crypto-list crypto-ghs">606,504</div>
      <div className="crypto-list crypto-eur">434,344</div>
      <div className="crypto-list crypto-ngn">43,344,434</div>
    </StyledWatch>
  );
};

const StyledWatch = styled.div`
  display: grid;
  grid-template-columns: 1.5fr repeat(5, 1fr);
  font-size: 1.5rem;
  width: 100%;

  .crypto {
    &-list {
      padding: 1rem 0.2rem;
      display: flex;
      align-items: center;
    }

    &-name {
      text-rendering: auto;
      text-transform: capitalize;

      img {
        width: 3rem;
        height: 3rem;
        object-fit: cover;
        border-radius: 50%;
      }

      span {
        font-size: 1.7rem;
        margin: 0.2rem 1rem;
      }
    }
  }
`;

export default Watch;
