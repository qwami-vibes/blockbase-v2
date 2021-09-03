import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

import Watch from "./Watch";
import {
  colorWhite,
  lightGrey,
  primaryColor,
  secondaryColor,
} from "../Variables";
import { StarOutline } from "react-ionicons";
import ListHeader from "./ListHeader";

const WatchList = () => {
  const theme = useSelector((state) => state.theme);

  return (
    <StyledWatchlist className={theme ? "dark" : null}>
      <StyledContainer>
        <StyledTitle className={theme ? "dark" : null}>
          <span>
            watchlist <StarOutline width="2rem" height="2rem" />
          </span>
          <ListHeader />
        </StyledTitle>
        <StyledList className={theme ? "dark" : null}>
          {["bitcoin", "ethereum", "stellar", "bitcoin cash", "litecoin"].map(
            (list) => (
              <Watch currency={list} />
            )
          )}
        </StyledList>
      </StyledContainer>
    </StyledWatchlist>
  );
};

const StyledWatchlist = styled.div`
  grid-area: 3 / 2 / -1 / 3;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledContainer = styled.div`
  padding: 1rem 2rem;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
    rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
  width: 90%;
  height: 90%;
  border-radius: 1rem;
  overflow: hidden;
  display: grid;
  grid-template-rows: 20% 80%;
`;

const StyledTitle = styled.div`
  display: flex;
  align-items: center;
  font-size: 2rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  span {
    display: flex;
    align-items: center;
    flex: 0 0 50%;
    text-transform: capitalize;

    svg {
      margin: 0 0 4% 15%;
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

export default WatchList;
