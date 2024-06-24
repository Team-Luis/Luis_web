import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../common/header";
import StartView from "../common/start";
import Login from "../auth/login";
import Signup from "../auth/signup";
import Write from "../write";
import Main from "../main/index";
import PostDetail from "../main/detail";
import Modify from "../main/modify";

const Router = () => {
  return (
    <Routes>
      <Route path="/start" element={<StartView />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/write" element={<Write />} />
      <Route path="/posts">
        <Route path="" element={<Main />} />
        <Route path=":id" element={<PostDetail />} />
      </Route>
      <Route path="/modify">
        <Route path=":id" element={<Modify />} />
      </Route>
    </Routes>
  );
};

export default Router;
