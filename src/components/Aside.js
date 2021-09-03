import React from "react";
import styled from "styled-components";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

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
  grey,
  lighterGrey,
  primaryColor,
  secondaryColor,
} from "../Variables";

const Aside = () => {
  const location = useLocation();
  const theme = useSelector((state) => state.theme);

  return (
    <StyledAside className={theme ? "dark" : null}>
      <StyledLogo>
        <img src={logoSmall} alt="Blockbase Logo" />
      </StyledLogo>
      <StyledLinks>
        <StyledLink
          className={location.pathname === "/dashboard" ? "active" : null}
        >
          <Link className={theme ? "dark" : null} to="/dashboard">
            <GridOutline width="3rem" height="3rem" />
          </Link>
        </StyledLink>
        <StyledLink
          className={location.pathname === "/trends" ? "active" : null}
        >
          <Link className={theme ? "dark" : null} to="/trends">
            <TrendingUpOutline width="3rem" height="3rem" />
          </Link>
        </StyledLink>
        <StyledLink
          className={location.pathname === "/transactions" ? "active" : null}
        >
          <Link className={theme ? "dark" : null} to="/transactions">
            <SwapHorizontalOutline width="3rem" height="3rem" />
          </Link>
        </StyledLink>
        <StyledLink
          className={location.pathname === "/wallet" ? "active" : null}
        >
          <Link className={theme ? "dark" : null} to="/wallet">
            <WalletOutline width="3rem" height="3rem" />
          </Link>
        </StyledLink>
      </StyledLinks>
      <StyledProfile>
        <img src={ProfilePic} alt="Profile Pic" />
      </StyledProfile>
      <StyledLinks>
        <StyledLink className={theme ? "dark" : null}>
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

  &.dark {
    background: ${grey};
    color: ${colorWhite};
    fill: ${colorWhite};
  }
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

  &.dark,
  a.dark {
    svg {
      color: ${colorWhite};
      fill: ${colorWhite};
    }
  }

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
