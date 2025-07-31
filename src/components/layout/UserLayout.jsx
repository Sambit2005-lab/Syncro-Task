import React from "react";
import { Outlet } from "react-router-dom";
import UserSidebar from "../usercomponents/UserSidebar";

const UserLayout = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#341059] via-[#2e154b] to-[#331d3d] text-white flex">
      <UserSidebar />
      <div className="ml-60 flex-1 overflow-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default UserLayout;
