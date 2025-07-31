// src/components/Sidebar.jsx
import React from "react";
import { NavLink } from "react-router-dom";
import { LuPencilRuler } from "react-icons/lu";
import { FaEdit } from "react-icons/fa";
import { CgNotes } from "react-icons/cg";
import { GoChecklist } from "react-icons/go";
import { CiSettings } from "react-icons/ci";
import { IoIosLogOut } from "react-icons/io";
const UserSidebar = () => {
  return (
      <div className="fixed top-0 left-0 h-screen w-60 bg-gradient-to-b from-[#2c1435] to-[#381c56] text-white pt-48 px-4  ">
      <nav className="flex flex-col gap-4 text-sm font-medium text-nowrap">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex items-center gap-2 px-4 py-2 rounded hover:text-purple-300 ${
              isActive ? "text-purple-300 font-semibold" : "text-white"
            }`
          }
        >
          <LuPencilRuler /> My Services
        </NavLink>

        <NavLink
          to="/request-custom"
          className={({ isActive }) =>
            `flex items-center gap-2 px-4 py-2 rounded hover:text-purple-300 ${
              isActive ? "text-purple-300 font-semibold" : "text-white"
            }`
          }
        >
          <FaEdit /> Request Custom
        </NavLink>

        <NavLink
          to="/billing-history"
          className={({ isActive }) =>
            `flex items-center gap-2 px-4 py-2 rounded hover:text-purple-300 ${
              isActive ? "text-purple-300 font-semibold" : "text-white"
            }`
          }
        >
          <CgNotes /> Billing History
        </NavLink>

        <NavLink
          to="/subscription"
          className={({ isActive }) =>
            `flex items-center gap-2 px-4 py-2 rounded hover:text-purple-300 ${
              isActive ? "text-purple-300 font-semibold" : "text-white"
            }`
          }
        >
          <GoChecklist /> Subscription
        </NavLink>

        <NavLink
          to="/profile-settings"
          className={({ isActive }) =>
            `flex items-center gap-2 px-4 py-2 rounded hover:text-purple-300 ${
              isActive ? "text-purple-300 font-semibold" : "text-white"
            }`
          }
        >
          <CiSettings /> Profile Settings
        </NavLink>

        <div className="mt-24 border-t border-gray-600 pt-4">
          <NavLink
            to="#"
            className="flex items-center gap-2 px-4 py-2 text-gray-400 hover:text-white"
          >
            <IoIosLogOut /> Logout
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default UserSidebar;
