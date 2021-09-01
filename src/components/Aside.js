import React from "react";
import styled from "styled-components";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";

import logoSmall from "../assets/blockbase-small.png";
import ProfilePic from "../assets/background-image.png";
import {
  WalletOutline,
  LogOutOutline,
  GridOutline,
  TrendingUpOutline,
  SwapHorizontalOutline,
} from "react-ionicons";
import {
  colorWhite,
  lighterGrey,
  primaryColor,
  secondaryColor,
} from "../Variables";

const Aside = () => {
  const location = useLocation();

  return (
    <StyledAside>
      <StyledLogo>
        <img src={logoSmall} alt="Blockbase Logo" />
      </StyledLogo>
      <StyledLinks>
        <StyledLink
          className={location.pathname === "/dashboard" ? "active" : null}
        >
          <Link to="/dashboard">
            <GridOutline width="3rem" height="3rem" />
          </Link>
        </StyledLink>
        <StyledLink
          className={
            location.pathname === "/dashboard/trends" ? "active" : null
          }
        >
          <Link to="/dashboard/trends">
            <TrendingUpOutline width="3rem" height="3rem" />
          </Link>
        </StyledLink>
        <StyledLink
          className={
            location.pathname === "/dashboard/transactions" ? "active" : null
          }
        >
          <Link to="/dashboard/transactions">
            <SwapHorizontalOutline width="3rem" height="3rem" />
          </Link>
        </StyledLink>
        <StyledLink
          className={
            location.pathname === "/dashboard/wallet" ? "active" : null
          }
        >
          <Link to="/dashboard/wallet">
            <WalletOutline width="3rem" height="3rem" />
          </Link>
        </StyledLink>
      </StyledLinks>
      <StyledProfile>
        <img src={ProfilePic} alt="Profile Pic" />
      </StyledProfile>
      <StyledLinks>
        <StyledLink>
          <LogOutOutline width="3rem" height="3rem" />
        </StyledLink>
      </StyledLinks>
    </StyledAside>
  );
};

const StyledAside = styled.aside`
  grid-area: 1 / 1 / -1 / 2;
  background: ${lighterGrey};
  display: grid;
  grid-template-rows: 15vh 55vh 20vh 10vh;
`;

const StyledFlex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledLogo = styled(StyledFlex)`
  img {
    width: 5rem;
  }
`;

const StyledLinks = styled(StyledFlex)`
  flex-direction: column;
  justify-content: space-evenly;
  height: 70%;
  margin: auto;
`;

const StyledLink = styled(StyledFlex)`
  cursor: pointer;
  padding: 1.5rem;
  border-radius: 50%;
  transition: all 0.5s ease-in;

  &.active {
    background: linear-gradient(90deg, ${primaryColor}, ${secondaryColor});
    transition: all 0.5s ease-in;

    svg {
      color: ${colorWhite};
      fill: ${colorWhite};
    }
  }
`;

const StyledProfile = styled(StyledFlex)`
  img {
    border-radius: 50%;
    width: 7rem;
    height: 7rem;
    object-fit: cover;
  }
`;

export default Aside;
