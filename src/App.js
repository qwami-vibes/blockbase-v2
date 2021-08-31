import React from "react";

// import Signup from "./auth/Signup";
import Dashboard from "./pages/Dashboard";
import GlobalStyles from "./components/GlobalStyles";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      {/* <Signup /> */}
      <Dashboard />
    </div>
  );
}

export default App;
