import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../common/header";
import StartView from "../common/start";
import Login from "../auth/login";
import Signup from "../auth/signup";
import Main from "../main/index"

const Router = () => {
  return (
    <Routes>
      <Route path="/start" element={<StartView />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
        <Route path="/main" element={<Main />} />
    </Routes>
  );
};

export default Router;
