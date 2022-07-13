import React, { useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

// import Watch from "./Watch";

import {
  colorWhite,
  grey,
  lightGrey,
  primaryColor,
  secondaryColor,
} from "../../../helpers/Variables";
import FeatherIcons from "feather-icons-react";
import ListHeader from "./ListHeader";
import AccountBrief from "./AccountBrief";
import { MarketCapCard } from "./Card";

const WatchList = () => {
  const theme = useSelector((state) => state.theme);
  const favs = useSelector((state) => state.favs);
  const coinsPrices = useSelector((state) => state.coinsPrices);
  const [currentControl, setCurrentControl] = useState(0);

  return (
    <StyledWatchlist className={theme ? "dark" : null}>
      <StyledTop>
        <StyledCardContainer control={currentControl}>
          {coinsPrices.marketCap.length <= 0 ? (
            <div>No data to show</div>
          ) : (
            coinsPrices?.marketCap.map((item, index) => (
              <MarketCapCard
                key={index}
                currentControl={currentControl}
                marketcap="marketcap"
                index={index}
                data={item}
              />
            ))
          )}
          <div className="controls">
            {coinsPrices?.marketCap.map((item, index) => (
              <div
                key={index}
                onClick={() => setCurrentControl(index)}
                className={
                  index === currentControl ? "control active" : "control"
                }
              ></div>
            ))}
          </div>
        </StyledCardContainer>
      </StyledTop>
      <StyledContainer>
        <StyledTitle className={theme ? "dark" : null}>
          <div className="title">
            <span>watchlist</span>
            <FeatherIcons size={16} icon="star" />
          </div>
          <ListHeader />
        </StyledTitle>
        <StyledList className={theme ? "dark" : null}>
          {favs && favs.length > 0 ? (
            <div>list of favorites</div>
          ) : (
            <StyledNoFavs>no favorites list</StyledNoFavs>
          )}
        </StyledList>
      </StyledContainer>
      <AccountBrief />
    </StyledWatchlist>
  );
};

const StyledWatchlist = styled.div`
  grid-area: 2 / 2 / -1 / 3;
  display: grid;
  grid-template-columns: 1fr 0.3fr;
  grid-template-rows: 0.6fr 1fr;
`;

const StyledContainer = styled.div`
  grid-area: 2 / 1 / -1 / 2;
  padding: 1rem 2rem;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
    rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
  width: 90%;
  height: 95%;
  border-radius: 1rem;
  overflow: hidden;
  display: grid;
  grid-template-rows: 20% 80%;
  margin: 0 auto;
`;

const StyledTop = styled.div`
  grid-area: 1 / 1 / 2 / 2;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const StyledTitle = styled.div`
  display: flex;
  align-items: center;
  font-size: 2rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  .title {
    display: flex;
    align-items: center;
    flex: 0 0 50%;
    width: 11%;

    span {
      text-transform: capitalize;
    }

    svg {
      margin: 0 0 4% 15%;
      flex: 1;
    }
  }

  &.dark {
    span {
      svg {
        color: ${colorWhite};

        fill: ${colorWhite};
      }
    }
  }
`;

const StyledList = styled.div`
  max-height: 100%;
  overflow-x: hidden;
  overflow-y: scroll;
  height: 100%;
  width: 100%;
  display: grid;
  grid-gap: 1rem;

  &::-webkit-scrollbar {
    width: 2px;
    border-radius: 2rem;
    background: ${lightGrey};
  }

  &::-webkit-scrollbar-thumb {
    background: linear-gradient(90deg, ${primaryColor}, ${secondaryColor});
  }

  &.dark {
    &::-webkit-scrollbar {
      background: white;
    }
  }
`;

const StyledNoFavs = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 1.8rem;
  text-transform: capitalize;
`;

const StyledCardContainer = styled.div`
  width: 40%;
  height: 32rem;
  max-height: 35rem;
  overflow: hidden;
  position: relative;

  .controls {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    position: absolute;
    right: 0%;
    top: 50%;
    transform: translate(0, -50%);

    .control {
      width: 1.5rem;
      height: 1.5rem;
      background-color: ${grey};
      border: 1px solid ${colorWhite};
      border-radius: 100rem;
      margin: 0.3rem 0;
      cursor: pointer;

      &.active {
        background-color: ${secondaryColor};
      }
    }
  }
`;

export default WatchList;
