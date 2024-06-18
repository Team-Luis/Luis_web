import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../common/header";

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
