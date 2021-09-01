import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

const WatchList = () => {
  const theme = useSelector((state) => state.theme);

  return <StyledWatchlist>Watchlist</StyledWatchlist>;
};

const StyledWatchlist = styled.div``;

export default WatchList;
