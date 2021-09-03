import React from "react";
import styled from "styled-components";

import ListHeader from "./ListHeader";
import WatchList from "./WatchList";

const Trends = () => {
  return (
    <StyledTrends>
      <StyledIntro>
        Here you can discover all the trending crypto currencies and their value
        with every property they have as at now
      </StyledIntro>
      <StyledList>
        <ListHeader />
        <StyledTrendsList>
          <WatchList currency={"Bitcoin"} />
        </StyledTrendsList>
      </StyledList>
    </StyledTrends>
  );
};

const StyledTrends = styled.div``;

const StyledIntro = styled.div``;

const StyledList = styled.div``;

const StyledTrendsList = styled.div``;

export default Trends;
