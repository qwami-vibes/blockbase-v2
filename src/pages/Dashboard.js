import React, { useEffect } from "react";
import styled from "styled-components";
import { Route, Switch } from "react-router";
import { useSelector, useDispatch } from "react-redux";

import Aside from "../components/Aside";
import Nav from "../components/Nav";
import AccountBrief from "../components/AccountBrief";

import { getCoins } from "../api/api";

import WatchList from "../components/WatchList";
import Wallet from "../components/Wallet";
import Transactions from "../components/Transactions";
import Trends from "../components/Trends";
import { colorWhite, greyDarker } from "../Variables";

const Dashboard = () => {
  const theme = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCoins());
  }, [dispatch]);

  return (
    <StyledDashboard className={theme ? "dark" : null}>
      <Aside />
      <Nav />
      <AccountBrief />
      <Switch>
        <Route path="/dashboard" exact component={WatchList} />
        <Route path="/transactions" component={Transactions} />
        <Route path="/trends" component={Trends} />
        <Route path="/wallet" component={Wallet} />
      </Switch>
    </StyledDashboard>
  );
};

const StyledDashboard = styled.div`
  display: grid;
  grid-template-columns: 6vw 1fr 0.4fr;
  grid-template-rows: 10vh 20vh 1fr;
  height: 100vh;
  max-height: 100vh;
  width: 100vw;
  font-family: "Poppins", sans-serif;

  &.dark {
    background: ${greyDarker};
    color: ${colorWhite};
    fill: ${colorWhite};
  }
`;

export default Dashboard;
