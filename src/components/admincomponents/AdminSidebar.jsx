import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { FaSignOutAlt } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import { IoCartOutline } from "react-icons/io5";
import { PiNotePencilDuotone } from "react-icons/pi";
import { PiCurrencyDollarLight } from "react-icons/pi";

const AdminSidebar = () => {

  // Navigation items configuration
const navItems = [
  { name: "Dashboard", icon: <MdDashboard />, path: "/admin" },
  { name: "Orders", icon: <IoCartOutline />, path: "/admin/orders" },
  { name: "User", icon: <FaPeopleGroup />, path: "/admin/adminusers" },
  { name: "Requests", icon: <PiNotePencilDuotone />, path: "/admin/requests" },
  { name: "Pricing", icon: <PiCurrencyDollarLight />, path: "/admin/pricing" },
];


  return (
    <div className="fixed top-0 left-0 h-screen w-60 bg-gradient-to-b from-[#2c1435] to-[#381c56] text-white pt-48 px-4  ">
      <nav className="flex flex-col gap-4 text-sm font-medium text-nowrap">
        {navItems.map(({ name, icon, path }) => (
          <NavLink
            key={name}
            to={path}
            className={({ isActive }) =>
              `flex items-center gap-2 px-4 py-2 rounded hover:text-purple-300 ${
                isActive ? "text-purple-300 font-semibold" : "text-white"
              }`
            }
          >
            {icon} {name}
          </NavLink>
        ))}

        <div className="mt-20 border-t border-gray-600 pt-4">
          <div
            className="flex items-center gap-2 px-4 py-2 text-gray-400 hover:text-white cursor-pointer"
          >
            <FaSignOutAlt /> Logout
          </div>
        </div>
      </nav>
    </div>
  );
};

export default AdminSidebar;
