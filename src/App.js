import React, { useEffect } from "react";
import { Route, Switch } from "react-router";

import { auth } from "./config/firebase";

import { useHistory } from "react-router";
import { useDispatch } from "react-redux";

import Signin from "./auth/Signin";
import Dashboard from "./pages/Dashboard";
import GlobalStyles from "./components/GlobalStyles";

import { setAlert, setUser } from "./actions";
import { currentUser, signoutUser } from "./api/api";
import ErrorHandlers from "./components/ErrorHandlers";

function App() {
  const dispatch = useDispatch();
  const history = useHistory();

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
        history.push("/dashboard");
      }, 3500);

      //* alert user for being logged in successfully
      dispatch(
        setAlert({
          message: "Session not expired. Logging in",
          type: "success",
        })
      );
    });
  }, [dispatch, history]);

  return (
    <div className="App">
      <GlobalStyles />
      <Switch>
        <Route exact path="/" component={Signin} />
        <Route path="/dashboard" component={Dashboard} />
      </Switch>
    </div>
  );
}

export default App;
