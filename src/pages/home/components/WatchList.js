import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

// import Watch from "./Watch";
import {
  colorWhite,
  lightGrey,
  primaryColor,
  secondaryColor,
} from "../../../helpers/Variables";
import FeatherIcons from "feather-icons-react";
import ListHeader from "./ListHeader";
import AccountBrief from "./AccountBrief";

const WatchList = () => {
  const theme = useSelector((state) => state.theme);

  return (
    <StyledWatchlist className={theme ? "dark" : null}>
      <StyledTop></StyledTop>
      <StyledContainer>
        <StyledTitle className={theme ? "dark" : null}>
          <div className="title">
            <span>watchlist</span>
            <FeatherIcons size={16} icon="star" />
          </div>
          <ListHeader />
        </StyledTitle>
        <StyledList className={theme ? "dark" : null}></StyledList>
      </StyledContainer>
      <AccountBrief />
    </StyledWatchlist>
  );
};

const StyledWatchlist = styled.div`
  grid-area: 2 / 2 / -1 / 3;
  display: grid;
  grid-template-columns: 1fr 0.3fr;
  grid-template-rows: 0.45fr 1fr;
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

export default WatchList;
