import React from "react";
import { Route, Switch } from "react-router";

import Signup from "./auth/Signup";
import Dashboard from "./pages/Dashboard";
import GlobalStyles from "./components/GlobalStyles";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Switch>
        <Route exact path="/" component={Signup} />
        <Route path="/dashboard" component={Dashboard} />
      </Switch>
    </div>
  );
}

export default App;
