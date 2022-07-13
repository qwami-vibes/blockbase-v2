import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import FeatherIcons from "feather-icons-react";

import {
  colorWhite,
  dangerColor,
  greyDarkest,
  lightestGrey,
  primaryColor,
  secondaryColor,
  successColor,
} from "../../../helpers/Variables";

export const MarketCapCard = ({ marketcap, data, index, currentControl }) => {
  const coins = useSelector((state) => state.coins);
  const [img, setImg] = useState();

  useEffect(() => {
    coins?.coins?.forEach((coin) => {
      if (data?.CoinInfo.Name.includes(coin.symbol)) {
        setImg(coin.iconUrl);
      }
    });
  }, [coins, data]);

  return (
    <StyledCard
      index={index}
      currentControl={currentControl}
      className={marketcap ?? ""}
    >
      <div className="heading">highest market cap</div>
      <div className="coin">
        <div>
          <img src={img} alt={`${data?.CoinInfo.Name} smaller img`} />
        </div>
        <div className="coinPrice">{data?.DISPLAY.GHS.MKTCAP}</div>
        <div
          className={
            data?.RAW.GHS.CHANGEPCT24HOUR < 0
              ? "change-decrease change"
              : "change-increase change"
          }
        >
          {data?.RAW.GHS.CHANGEPCT24HOUR < 0 ? (
            <FeatherIcons size={30} icon="trending-down" />
          ) : (
            <FeatherIcons size={30} icon="trending-up" />
          )}
          &nbsp;
          {(data?.RAW.GHS.CHANGEPCT24HOUR).toFixed(2)} %
        </div>
      </div>
      <div className="other">
        Last updated: &nbsp;<span> {data?.DISPLAY.GHS.LASTUPDATE}</span>
      </div>
    </StyledCard>
  );
};

const Card = ({ index }) => {
  return (
    <StyledCard index={index}>
      <div className="heading">New Currencies</div>
      <div className="coin">
        <div></div>
        <div className="coinPrice"></div>
        <div></div>
      </div>
      <div className="other"></div>
    </StyledCard>
  );
};

const StyledCard = styled.div`
  height: 90%;
  width: 95%;
  border-radius: 1rem;
  overflow: hidden;
  display: grid;
  grid-template-rows: 0.4fr 1fr 0.4fr;
  color: ${colorWhite};
  background: ${greyDarkest};
  margin: 2rem 0;
  position: absolute;
  z-index: ${(props) => (props.index === props.currentControl ? 10 : 1)};
  opacity: ${(props) => (props.index === props.currentControl ? 1 : 0)};
  transition: all 0.5s 0.2s ease-in;

  img {
    width: 5rem;
    height: 5rem;
    object-fit: cover;
  }

  &.marketcap {
    background: linear-gradient(
      to right bottom,
      ${primaryColor},
      ${secondaryColor}
    );
  }

  .heading {
    text-transform: capitalize;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
  }

  .coin {
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    .coinPrice {
      font-size: 3rem;
      font-weight: bold;
    }
  }

  .change {
    font-size: 2.7rem;
    font-weight: bold;

    &-increase {
      svg {
        color: ${successColor};
      }
      color: ${successColor};
    }

    &-decrease {
      svg {
        color: ${dangerColor};
      }
      color: ${dangerColor};
    }
  }

  .other {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 0 2rem;
    color: ${lightestGrey};
    font-weight: 100;
    font-size: 1.5rem;

    span {
      font-size: 1.8rem;
      font-weight: 500;
      color: ${colorWhite};
    }
  }
`;

export default Card;
