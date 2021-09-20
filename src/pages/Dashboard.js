import React, { useEffect } from "react";
import styled from "styled-components";
import { Route, Switch } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router";

import { auth } from "../config/firebase";

import Aside from "../components/Aside";
import Nav from "../components/Nav";
import AccountBrief from "../components/AccountBrief";

import { getListApi } from "../api/api";

import WatchList from "../components/WatchList";
import Wallet from "../components/Wallet";
import Transactions from "../components/Transactions";
import Trends from "../components/Trends";
import { colorWhite, greyDarker } from "../Variables";
import Alerts from "../components/Alerts";
import { setAlert, setUser } from "../actions";

const Dashboard = () => {
  const theme = useSelector((state) => state.theme);
  const alert = useSelector((state) => state.alert);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(getListApi(dispatch));

    auth.onAuthStateChanged((user) => {
      //* check if user is logged in or not in firebase
      //* if user is null = not logged in, do nothing
      if (user === null) {
        history.push("/");

        return dispatch(
          setAlert({
            message: "Session expired or logged out. Please re-login",
            type: "warning",
          })
        );
      }

      //* else user is logged in, then create current user state
      const data = {
        user: user.providerData[0],
        id: user.uid,
      };

      //* send current user state to state manager
      dispatch(setUser(data));

      //* redirect user to the dashboard page in 3.5s after the alert popup

      //* alert user for being logged in successfully
    });
  }, [dispatch, history]);

  return (
    <StyledDashboard className={theme ? "dark" : null}>
      {alert.visble && <Alerts />}
      <Aside />
      <Nav />
      <AccountBrief />
      <Switch>
        <Route path="/dashboard" exact component={WatchList} />
        <Route path="/dashboard/trends" component={Trends} />
        <Route path="/dashboard/transactions" component={Transactions} />
        <Route path="/dashboard/wallet" component={Wallet} />
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
