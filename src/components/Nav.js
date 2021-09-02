import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

import Search from "../components/Search";
import {
  MoonOutline,
  SunnyOutline,
  NotificationsOutline,
} from "react-ionicons";

import { setTheme } from "../actions";
import { colorWhite } from "../Variables";

const Nav = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme);

  return (
    <StyledNav>
      <StyledName>Overview</StyledName>
      <Search />
      <StyledControls>
        <StyledLink
          className={theme ? "dark" : null}
          onClick={() => dispatch(setTheme())}
        >
          {theme ? <SunnyOutline /> : <MoonOutline />}
        </StyledLink>
        <StyledLink className={theme ? "dark" : null}>
          <NotificationsOutline />
        </StyledLink>
      </StyledControls>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  display: grid;
  grid-template-columns: 0.6fr 1fr 0.3fr;
`;

const StyledName = styled.div`
  display: flex;
  align-items: center;
  font-size: 2rem;
  margin-left: 22%;
`;

const StyledControls = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const StyledLink = styled.div`
  cursor: pointer;

  &.dark {
    svg {
      color: ${colorWhite};
    }
  }
`;

export default Nav;
