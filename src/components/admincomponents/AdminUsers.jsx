import React from "react";
import {
  FaEdit,
  FaTrash,
  FaSearch,
  FaRegUserCircle,
} from "react-icons/fa";
import { FiUserPlus } from "react-icons/fi";
import { CiAt } from "react-icons/ci";
import { TbCircleDashed } from "react-icons/tb";
import { SlCalender } from "react-icons/sl";
import { GrEmptyCircle } from "react-icons/gr";
import Navbar from "../Navbar";
import { IoChevronDown } from "react-icons/io5";
import { BsThreeDots } from "react-icons/bs";
import { PiSlidersHorizontalLight } from "react-icons/pi";
import "../../index.css";

const users = [
  {
    name: "John Smith",
    email: "johnsmith@gmail.com",
    role: "Project Manager",
    status: "Active",
    joined: "15 Mar 2025, 2:45 pm",
  },
  {
    name: "Sambit Pradhan",
    email: "sambitpradhan@gmail.com",
    role: "UX Designer",
    status: "Inactive",
    joined: "15 Mar 2025, 2:45 pm",
  },
  {
    name: "Diptesh Panda",
    email: "dipteshpanda@gmail.com",
    role: "Frontend Developer",
    status: "Active",
    joined: "15 Mar 2025, 2:45 pm",
  },
];

const AdminUsers = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1e0033] via-[#2c003e] to-[#43002e] text-white px-10 py-10 font-sans">
      <Navbar />

      {/* Page Heading */}
      <div className="flex flex-col gap-2 mb-8">
        <h1 className="text-4xl font-bold">Users</h1>
        <p className="text-gray-300 text-sm">
          Manage users and their permissions within the application.
        </p>
      </div>

{/* Filter and Actions Row */}
<div className="flex flex-col md:flex-row flex-wrap md:items-center justify-between mb-4 gap-3 lg:gap-4 text-sm">
  {/* Filter Buttons */}
  <div className="flex flex-col sm:flex-row flex-wrap gap-2 md:gap-4">
    <button className="w-[160px] flex items-center justify-center gap-2 border border-gray-600 px-2 py-1 rounded-full text-xs md:px-4 md:py-2 md:text-sm">
      <FaRegUserCircle />
      <span className="whitespace-nowrap">Role</span>
      <IoChevronDown />
    </button>
    <button className="w-[160px] flex items-center justify-center gap-2 border border-gray-600 px-2 py-1 rounded-full text-xs md:px-4 md:py-2 md:text-sm">
      <SlCalender />
      <span className="whitespace-nowrap">Joining Date</span>
      <IoChevronDown />
    </button>
    <button className="px-2 py-1 text-gray-300 hover:text-white text-xs md:px-4 md:py-2 md:text-sm">
      + Add Filter
    </button>
  </div>

  {/* Action Buttons */}
  <div className="flex flex-col sm:flex-row items-center gap-2">
    <button className="flex items-center gap-2 px-3 py-2 rounded-md">
      <FaSearch />
      <span>Search</span>
    </button>
    <button className="flex items-center gap-2 px-4 py-2 rounded-md text-sm">
      <PiSlidersHorizontalLight /> Hide
    </button>
    <button>
      <BsThreeDots />
    </button>
    <button className="w-[160px] flex items-center justify-center gap-2 border border-gray-600 px-2 py-1 rounded-full text-xs md:px-4 md:py-2 md:text-sm">
      <FiUserPlus />
      <span className="whitespace-nowrap">Add User</span>
      <IoChevronDown />
    </button>
  </div>
</div>




      {/* Table */}
      <div className="overflow-x-auto hide-scrollbar">
        <table className="w-full text-sm text-left">
          <thead className="border-y border-gray-700 text-white">
            <tr>
              <th className="px-4 py-3">
                <input type="checkbox" />
              </th>
              <th className="px-4 py-3 text-nowrap">
                <div className="flex items-center gap-2">
                  <span>Full Name</span>
                </div>
              </th>
              <th className="px-4 py-3">
                <div className="flex items-center gap-2">
                  <CiAt className="text-base" />
                  <span>Email</span>
                </div>
              </th>
              <th className="px-4 py-3">
                <div className="flex items-center gap-2">
                  <FaRegUserCircle className="text-base" />
                  <span>Role</span>
                </div>
              </th>
              <th className="px-4 py-3">
                <div className="flex items-center gap-2">
                  <TbCircleDashed className="text-base" />
                  <span>Status</span>
                </div>
              </th>
              <th className="px-4 py-3 text-nowrap">
                <div className="flex items-center gap-2">
                  <SlCalender className="text-base" />
                  <span>Joined Date</span>
                </div>
              </th>
              <th className="px-4 py-3">
                <div className="flex items-center gap-2">
                  <GrEmptyCircle className="text-base" />
                  <span>Actions</span>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, idx) => (
              <tr
                key={idx}
                className="border-t border-gray-700 hover:bg-[#290035]"
              >
                <td className="px-4 py-3">
                  <input type="checkbox" />
                </td>
                <td className="px-4 py-3 text-nowrap">{user.name}</td>
                <td className="px-4 py-3">{user.email}</td>
                <td className="px-4 py-3 text-nowrap">{user.role}</td>
                <td className="px-4 py-3">
                  <span
                    className={`inline-flex items-center gap-2 px-2 py-1 text-xs rounded-lg font-semibold ${
                      user.status === "Active"
                        ? "border border-gray-700 text-white"
                        : "border border-gray-700 text-white"
                    }`}
                  >
                    <span
                      className={`w-2 h-2 rounded-full ${
                        user.status === "Active"
                          ? "bg-green-700"
                          : "bg-red-700"
                      }`}
                    ></span>
                    {user.status}
                  </span>
                </td>
                <td className="px-4 py-3 text-nowrap">{user.joined}</td>
                <td className="px-4 py-3">
                  <div className="flex gap-2">
                    <button className="flex items-center gap-1 px-3 py-1 rounded border border-gray-800 text-xs hover:bg-gray-800">
                      <FaEdit /> Edit
                    </button>
                    <button className="flex items-center gap-1 px-3 py-1 rounded border border-gray-800 text-xs hover:bg-red-800">
                      <FaTrash /> Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminUsers;
