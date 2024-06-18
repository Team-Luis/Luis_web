import React from "react";
import Header from "./components/common/header";
import { GlobalStyles } from "./styles/globals";
import Router from "./components/router";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Router />
    </div>
  );
}

export default App;
