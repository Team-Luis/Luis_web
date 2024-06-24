import React, { useState } from "react";
import * as S from "./style";
import useSidebar from "../../../hooks/common/sidebar/useSidebar";

const Sidebar = () => {
  const { handleCategory } = useSidebar();

  return (
    <S.SidebarWrap>
      <span>Major</span>
      <span onClick={() => handleCategory("ALL")}>All</span>
      <span onClick={() => handleCategory("WEB")}>Web</span>
      <span onClick={() => handleCategory("IOS")}>iOS</span>
      <span onClick={() => handleCategory("ANDROID")}>Android</span>
      <span onClick={() => handleCategory("SERVER")}>Server</span>
    </S.SidebarWrap>
  );
};

export default Sidebar;
