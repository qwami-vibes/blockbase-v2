import React from "react";
import { Route, Routes as Switch } from "react-router-dom";

import PublicRoute from "./pages/auth/PublicRoute";
import Signin from "./pages/auth/Signin";
import Dashboard from "./pages/home/Dashboard";
import Page404 from "./pages/Page404";
import GlobalStyles from "./components/GlobalStyles";
import Onboarding from "./pages/home/components/Onboarding";

function App() {
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
        <Route
          path="/onboarding"
          element={
            <PublicRoute>
              <Onboarding />
            </PublicRoute>
          }
        />
        <Route path="*" element={<Page404 />} />
      </Switch>
    </div>
  );
}

export default App;
