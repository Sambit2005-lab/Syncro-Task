import React from "react";
import Navbar from "../Navbar";
import { FiUser, FiCalendar, FiFilter } from "react-icons/fi";
import {
  FaRegUserCircle,
  FaRegCalendarAlt,
  FaDollarSign,
  FaBullseye,
} from "react-icons/fa";
import { FaRegPenToSquare } from "react-icons/fa6";
import { TbCircleDashed } from "react-icons/tb";
import { FaEdit, FaTrash } from "react-icons/fa";
import "../../index.css";
const requestData = [
  {
    id: "REQ1023",
    email: "anjali.k@domain.com",
    service: "Business Proposal Edit",
    submittedDate: "15 Mar 2025, 2:45 pm",
    deadline: "18 Mar 2025, 5:00 pm",
    budget: "$35",
    status: "New",
    assignedTo: "Nikhil",
  },
  {
    id: "REQ1024",
    email: "rahul.m@edu.in",
    service: "Academic Proofreading",
    submittedDate: "14 Mar 2025, 11:00 am",
    deadline: "17 Mar 2025, 3:00 pm",
    budget: "$20–25",
    status: "In Review",
    assignedTo: "GenAI",
  },
  {
    id: "REQ1025",
    email: "akash.k@domain.com",
    service: "Research Editing",
    submittedDate: "13 Mar 2025, 1:30 pm",
    deadline: "16 Mar 2025, 4:00 pm",
    budget: "$28",
    status: "Rejected",
    assignedTo: "Akash",
  },
];


const getStatusDot = (status) => {
  switch (status) {
    case "New":
      return "bg-blue-400";
    case "In Review":
      return "bg-orange-400";
    case "Rejected":
      return "bg-red-400";
    default:
      return "bg-gray-400";
  }
};

const Requests = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1e0033] via-[#2c003e] to-[#43002e] text-white py-10">
      <Navbar />

      <div className="p-6">
        <h1 className="text-3xl font-bold mb-2">Requests</h1>
        <p className="text-sm text-gray-300 mb-6">
          Manage and review incoming project service requests
        </p>

        {/* Filter Row */}
        <div className="flex flex-wrap items-center gap-4 mb-6 text-sm">
          <button className="flex items-center gap-1 border border-white/30 px-3 py-1 rounded-full text-white/80">
            <FiUser /> Role
          </button>
          <button className="flex items-center gap-1 border border-white/30 px-3 py-1 rounded-full text-white/80">
            <FiCalendar /> Submitted Date
          </button>
          <button className="flex items-center gap-1  px-3 py-1 rounded text-white/80">
            + Add Filter
          </button>
        </div>

        {/* Table */}
        <div className="overflow-x-auto hide-scrollbar">
         <table className="w-full text-sm border-t border-white/10">
    <thead className="bg-transparent text-white/80 text-left">
    <tr>
      <th className="w-6 px-4 py-3">
        <input type="checkbox" />
      </th>
      <th className="w-28 px-4 py-3 text-nowrap">Request ID</th>
      <th className="w-48 px-4 py-3">
        <div className="flex items-center gap-1">
          <FaRegUserCircle /> Submitted By
        </div>
      </th>
      <th className="w-56 px-4 py-3">
        <div className="flex items-center gap-1">
          <FaRegPenToSquare /> Service Title
        </div>
      </th>
      <th className="w-44 px-4 py-3">
        <div className="flex items-center gap-1 text-nowrap">
          <FaRegCalendarAlt /> Submitted Date
        </div>
      </th>
      <th className="w-40 px-4 py-3">
        <div className="flex items-center gap-1">
          <FaRegCalendarAlt /> Deadline
        </div>
      </th>
      <th className="w-28 px-4 py-3">
        <div className="flex items-center gap-1">
          <FaDollarSign /> Budget
        </div>
      </th>
      <th className="w-40 px-4 py-3">
        <div className="flex items-center gap-1">
          <TbCircleDashed /> Status
        </div>
      </th>
      <th className="w-40 px-4 py-3">
        <div className="flex items-center gap-1 text-nowrap">
          <FiUser /> Assigned To
        </div>
      </th>
      <th className="w-36 px-4 py-3">
        <div className="flex items-center gap-1">
          <FaBullseye /> Actions
        </div>
      </th>
    </tr>
  </thead>
  <tbody>
    {requestData.map((req, index) => (
      <tr key={index} className="border-t border-white/10 hover:bg-white/5">
        <td className="px-4 py-3">
          <input type="checkbox" />
        </td>
        <td className="px-4 py-3">{req.id}</td>
        <td className="px-4 py-3 text-nowrap">{req.email}</td>
        <td className="px-4 py-3 text-nowrap">{req.service}</td>
        <td className="px-4 py-3 text-nowrap">{req.submittedDate}</td>
        <td className="px-4 py-3 text-nowrap">{req.deadline}</td>
        <td className="px-4 py-3">{req.budget}</td>
      <td className="px-4 py-3">
        <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-lg text-xs font-semibold whitespace-nowrap min-w-[90px] border border-gray-700 ${(req.status)}`}>
          <span className ={`w-2 h-2 rounded-full ${getStatusDot(req.status)}`}></span>
          {req.status}
        </div>
      </td>

        <td className="px-4 py-3">{req.assignedTo}</td>
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
    </div>
  );
};

export default Requests;
