import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

import FeatherIcons from "feather-icons-react";
import { colorWhite, greyDarkest } from "../../../helpers/Variables";

const Search = ({ setSearch }) => {
  const theme = useSelector((state) => state.theme);
  const coins = useSelector((state) => state.coins);

  return (
    <StyledSearch className={theme ? "dark" : null}>
      <input
        type="text"
        name="search"
        id="search"
        placeholder="Search for assets"
        onChange={(e) => setSearch(e.target.value)}
      />
      <StyledIcon className={theme ? "dark" : null} type="submit">
        <FeatherIcons icon="search" />
      </StyledIcon>
    </StyledSearch>
  );
};

const StyledSearch = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;

  input {
    padding: 1.5rem 4rem;
    width: 75%;
    border-radius: 0.5rem;
    border: 0;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
      rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
    font: 500 1.6rem "Clash Grotesk", sans-serif;

    &::placeholder {
      font: inherit;
    }
  }

  &.dark {
    input {
      background: ${greyDarkest};
      color: ${colorWhite};
      box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
        rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;

      &::placeholder {
        color: ${colorWhite};
      }
    }
  }
`;

const StyledIcon = styled.button`
  margin-left: -3rem;

  &.dark {
    svg {
      color: ${colorWhite};
    }
  }
`;

export default Search;
