import React, { useEffect } from "react";
import styled from "styled-components";
import { Route, Routes as Switch, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { auth } from "../../config/firebase";
// import { getCollection, getListApi } from "../../api/api";
import { everyCoin } from "../../api/api";

import Aside from "./components/Aside";
import Nav from "./components/Nav";
import AccountBrief from "./components/AccountBrief";
import Onboarding from "./components/Onboarding";

import { colorWhite, greyDarker } from "../../helpers/Variables";
import { setAlert, setUser } from "../../redux/actions";

import WatchList from "./components/WatchList";
import Wallet from "./components/Wallet";
import Transactions from "./components/Transactions";
import Trends from "./components/Trends";
import Alerts from "../../components/Alerts";
import Page404 from "../Page404";

const Dashboard = () => {
  const theme = useSelector((state) => state.theme);
  const alert = useSelector((state) => state.alert);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(everyCoin());

    auth.onAuthStateChanged((user) => {
      //* check if user is logged in or not in firebase
      //* if user is null = not logged in, do nothing
      if (user === null) {
        navigate("/");

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

      // getCollection("users")
      //   .then((data) => {
      //     data.forEach((doc) => console.log(doc.data()));
      //   })
      //   .catch((err) => console.log(err.code));

      //* send current user state to state manager
      dispatch(setUser(data));
    });
  }, [dispatch, navigate]);

  return (
    <StyledDashboard className={theme ? "dark" : null}>
      {alert.visble && <Alerts />}
      <Aside />
      <Nav />
      <AccountBrief />
      <Switch>
        <Route path="watch" exact element={<WatchList />} />
        <Route path="trends" element={<Trends />} />
        <Route path="transactions" element={<Transactions />} />
        <Route path="wallet" element={<Wallet />} />
        <Route path="onboarding" element={<Onboarding />} />
        <Route path="*" element={<Page404 />} />
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
