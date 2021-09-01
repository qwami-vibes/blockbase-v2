import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

import { SearchOutline } from "react-ionicons";
import { colorWhite, greyDarkest } from "../Variables";

const Search = () => {
  const theme = useSelector((state) => state.theme);

  return (
    <StyledSearch className={theme ? "dark" : null}>
      <input
        type="text"
        name="search"
        id="search"
        placeholder="Search for assets"
      />
      <StyledIcon className={theme ? "dark" : null} type="submit">
        <SearchOutline />
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
