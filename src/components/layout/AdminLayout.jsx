import React from "react";
import { Outlet } from "react-router-dom";
import AdminSidebar from "../admincomponents/AdminSidebar"

const AdminLayout = () => {
  return (
    <div className="relative min-h-screen flex">
      <AdminSidebar />
      <div className="ml-60 flex-1 bg-gray-100 text-black overflow-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
