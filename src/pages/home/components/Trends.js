import React, { useState, useEffect } from "react";
import styled from "styled-components";
import {
  lightGrey,
  primaryColor,
  secondaryColor,
} from "../../../helpers/Variables";
import { useSelector } from "react-redux";

import ListHeader from "./ListHeader";
import Watch from "./Watch";

const Trends = ({ search }) => {
  const theme = useSelector((state) => state.theme);
  const coins = useSelector((state) => state.coins);
  const [searchResult, setSearchResult] = useState();

  useEffect(() => {
    setSearchResult(
      coins.coins.filter((coin) => coin.name.toLowerCase().includes(search))
    );
  }, [search, coins]);

  return (
    <StyledTrends className={theme ? "dark" : null}>
      <StyledIntro>
        Here, you discover all the trending crypto-currencies and their values
        on the market with every property they have as at now
      </StyledIntro>
      <StyledList>
        <ListHeader />
        <StyledTrendsList className={theme ? "dark" : null}>
          {coins.pending ? (
            <h1>Loading...</h1>
          ) : search && search.length > 0 ? (
            searchResult &&
            searchResult.map((coin) => (
              <Watch
                key={coin.uuid}
                id={coin.id}
                symbol={coin.symbol}
                name={coin.name}
                color={coin.color}
                price={coin.price}
                icon={coin.iconUrl}
              />
            ))
          ) : (
            coins.coins &&
            coins.coins.map((coin) => (
              <Watch
                key={coin.uuid}
                id={coin.id}
                symbol={coin.symbol}
                name={coin.name}
                color={coin.color}
                price={coin.price}
                icon={coin.iconUrl}
              />
            ))
          )}
        </StyledTrendsList>
      </StyledList>
    </StyledTrends>
  );
};

const StyledTrends = styled.div`
  display: grid;
  grid-template-rows: 10vh 1fr;
  overflow: hidden;
  height: 100%;
  width: 100%;
  grid-area: 2 / 2 / -1 / 3;
  padding: 1rem 3rem;
`;

const StyledIntro = styled.div`
  font-size: 1.6rem;
  text-align: center;
  color: transparent;
  background: linear-gradient(90deg, ${primaryColor}, ${secondaryColor});
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledList = styled.div`
  display: grid;
  grid-template-rows: 8vh 1fr;
  height: 100%;
  overflow: hidden;
`;

const StyledTrendsList = styled.div`
  height: 100%;
  max-height: 100%;
  width: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;

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

export default Trends;
