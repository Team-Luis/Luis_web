import React from "react";
import Header from "./components/common/header";
import { GlobalStyles } from "./styles/globals";
import Router from "./components/router";
import Provider from "./components/common/provider";

function App() {
  return (
    <div className="App">
      <Provider />
    </div>
  );
}

export default App;
