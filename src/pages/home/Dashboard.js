import React, { useEffect } from "react";
import styled from "styled-components";
import { Route, Routes as Switch } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { everyCoin } from "../../api/api";

import Aside from "./components/Aside";
import Nav from "./components/Nav";

import { colorWhite, greyDarker } from "../../helpers/Variables";

import WatchList from "./components/WatchList";
import Wallet from "./components/Wallet";
import Transactions from "./components/Transactions";
import Trends from "./components/Trends";
import Alerts from "../../components/Alerts";
import Page404 from "../Page404";
import Settings from "./components/Settings";

const Dashboard = () => {
  const theme = useSelector((state) => state.theme);
  const alert = useSelector((state) => state.alert);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(everyCoin());
  }, [dispatch]);

  return (
    <StyledDashboard className={theme ? "dark" : null}>
      {alert.visble && <Alerts />}
      <Aside />
      <Nav />
      <Switch>
        <Route path="watch" exact element={<WatchList />} />
        <Route path="trends" element={<Trends />} />
        <Route path="transactions" element={<Transactions />} />
        <Route path="wallet" element={<Wallet />} />
        <Route path="settings" element={<Settings />} />
        <Route path="*" element={<Page404 />} />
      </Switch>
    </StyledDashboard>
  );
};

const StyledDashboard = styled.div`
  display: grid;
  grid-template-columns: 6vw 1fr;
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
