import React from "react";
import styled from "styled-components";
import { Route, Switch } from "react-router";

import Aside from "../components/Aside";
import Nav from "../components/Nav";

import WatchList from "../components/WatchList";
import Wallet from "../components/Wallet";
import Transactions from "../components/Transactions";
import Trends from "../components/Trends";

const Dashboard = () => {
  return (
    <StyledDashboard>
      <Aside />
      <Nav />
      <Switch>
        <Route path="/dashboard" exact component={WatchList} />
        <Route path="/dashboard/transactions" component={Transactions} />
        <Route path="/dashboard/trends" component={Trends} />
        <Route path="/dashboard/wallet" component={Wallet} />
      </Switch>
    </StyledDashboard>
  );
};

const StyledDashboard = styled.div`
  display: grid;
  grid-template-columns: 6vw 1fr 0.5fr;
  grid-template-rows: 10vh 20vh 1fr;
  height: 100vh;
  max-height: 100vh;
  width: 100vw;
`;

export default Dashboard;
