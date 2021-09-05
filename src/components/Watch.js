import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

import { colorWhite, grey } from "../Variables";
import {
  dollarConvert,
  euroConvert,
  poundConvert,
  cedisConvert,
  nairaConvert,
} from "./Convertors";

const Watch = ({ name, id, symbol, price, color, icon }) => {
  const theme = useSelector((state) => state.theme);
  const coinsPrices = useSelector((state) => state.coinsPrices);

  return (
    <StyledWatch color={color || (theme ? colorWhite : grey)}>
      <div className="crypto-list crypto-name">
        <img src={icon} alt="Crypto Logo" />
        <span>{name}</span>
      </div>
      <div className="crypto-list crypto-usd">
        {coinsPrices[symbol] ? dollarConvert(coinsPrices[symbol].USD) : "-"}
      </div>
      <div className="crypto-list crypto-gbp">
        {coinsPrices[symbol] ? poundConvert(coinsPrices[symbol].GBP) : "-"}
      </div>
      <div className="crypto-list crypto-ghs">
        {coinsPrices[symbol] ? cedisConvert(coinsPrices[symbol].GHS) : "-"}
      </div>
      <div className="crypto-list crypto-eur">
        {coinsPrices[symbol] ? euroConvert(coinsPrices[symbol].EUR) : "-"}
      </div>
      <div className="crypto-list crypto-ngn">
        {coinsPrices[symbol] ? nairaConvert(coinsPrices[symbol].NGN) : "-"}
      </div>
    </StyledWatch>
  );
};

const StyledWatch = styled.div`
  display: grid;
  grid-template-columns: 1.5fr repeat(5, 1fr);
  font-size: 1.5rem;
  width: 100%;
  background: ${(props) => props.color};
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  -webkit-text-fill-color: text;

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
