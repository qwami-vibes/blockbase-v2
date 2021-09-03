import React from "react";
import styled from "styled-components";
import { lightestGrey, lightGrey } from "../Variables";
import { useSelector } from "react-redux";

const ListHeader = () => {
  const theme = useSelector((state) => state.theme);

  return (
    <StyledHeader className={theme ? "dark" : null}>
      <div className="items">Coin</div>
      <div className="items">USD ($)</div>
      <div className="items">GBP (&pound;)</div>
      <div className="items">GHS (&cent;)</div>
      <div className="items">EUR (&euro;)</div>
      <div className="items">NGN (&#8358;)</div>
    </StyledHeader>
  );
};

const StyledHeader = styled.div`
  flex: 1;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1.5fr repeat(5, 1fr);
  font-size: 1.5rem;
  color: ${lightGrey};

  .items {
    width: 100%;
    height: 100%;
  }

  &.dark {
    color: ${lightestGrey};
  }
`;

export default ListHeader;
