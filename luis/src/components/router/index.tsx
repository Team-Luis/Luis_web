import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../common/header";
import StartView from "../common/start";
import Login from "../auth/login";

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/start" element={<StartView />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
