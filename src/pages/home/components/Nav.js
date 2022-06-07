import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

import Search from "../components/Search";
import FeatherIcons from "feather-icons-react";

import { setTheme } from "../../../redux/actions";
import { colorWhite } from "../../../helpers/Variables";

const Nav = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme);

  return (
    <StyledNav>
      <StyledName>overview</StyledName>
      <Search />
      <StyledControls>
        <StyledLink
          className={theme ? "dark" : null}
          onClick={() => dispatch(setTheme())}
        >
          {theme ? <FeatherIcons icon="sun" /> : <FeatherIcons icon="moon" />}
        </StyledLink>
        <StyledLink className={theme ? "dark" : null}>
          <FeatherIcons icon="bell" />
        </StyledLink>
      </StyledControls>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  display: grid;
  grid-template-columns: 0.6fr 1fr 0.3fr;
  width: 70%;
  margin: 0 auto;
`;

const StyledName = styled.div`
  display: flex;
  align-items: center;
  font-size: 2rem;
  margin-left: 22%;
  text-transform: capitalize;
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
