import React, { useEffect } from "react";
import { Route, Routes as Switch, useNavigate } from "react-router-dom";

import { auth } from "./config/firebase";

import { useDispatch } from "react-redux";

import PublicRoute from "./pages/auth/PublicRoute";
import Signin from "./pages/auth/Signin";
import Dashboard from "./pages/home/Dashboard";
import Page404 from "./pages/Page404";
import GlobalStyles from "./components/GlobalStyles";

import { setAlert, setUser } from "./redux/actions";
import { currentUser, signoutUser } from "./api/api";
import ErrorHandlers from "./components/ErrorHandlers";

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      //* check if user is logged in or not in firebase
      //* if user is null = not logged in, do nothing
      if (user === null) {
        return null;
      } else if (!user.emailVerified) {
        //* send email verification
        return currentUser()
          .sendEmailVerification()
          .then(() => {
            dispatch(
              setAlert({
                message: "Please verify email or login",
                type: "info",
              })
            );

            //* sign out user for no verified email
            signoutUser()
              .then()
              .catch((err) => ErrorHandlers(dispatch, err.code));
          })
          .catch((err) => {
            ErrorHandlers(dispatch, err.code);
          });
      }

      //* else user is logged in, then create current user state
      const data = {
        user: user.providerData[0],
        id: user.uid,
      };

      //* send current user state to state manager
      dispatch(setUser(data));

      //* redirect user to the dashboard page in 3.5s after the alert popup
      setTimeout(() => {
        navigate("/");
      }, 3500);

      //* alert user for being logged in successfully
      dispatch(
        setAlert({
          message: "Session not expired. Logging in",
          type: "success",
        })
      );
    });
  }, [dispatch, navigate]);

  return (
    <div className="App">
      <GlobalStyles />
      <Switch>
        <Route exact path="/login" element={<Signin />} />
        <Route
          path="/*"
          element={
            <PublicRoute>
              <Dashboard />
            </PublicRoute>
          }
        />
        <Route path="*" element={<Page404 />} />
      </Switch>
    </div>
  );
}

export default App;
