import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, LineElement, PointElement, CategoryScale, LinearScale } from "chart.js";
import Navbar from "../Navbar";
import { FaRegUserCircle } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { IoIosArrowDown } from "react-icons/io";
import { BiSearch, BiFilter } from "react-icons/bi";
import { LuArrowDownUp } from "react-icons/lu";
import { BsThreeDots } from "react-icons/bs";
import { HiOutlineUserCircle } from "react-icons/hi2";
import { TbSum } from "react-icons/tb";
import { GoStack } from "react-icons/go";
import { MdOutlinePayments, MdOutlineLogout } from "react-icons/md";
import { HiMenu } from "react-icons/hi";
import "../../index.css"

ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale);

const orders = [
  { id: "4777827", customer: "John Smith", total: "$20.75", items: "1 item", date: "15 Mar 2025, 2:45 pm", payment: "Success", tracking: "94562312306123654789" },
  { id: "4777828", customer: "Sambit Pradhan", total: "$20.75", items: "1 item", date: "15 Mar 2025, 2:45 pm", payment: "Pending", tracking: "94562312306123654789" },
  { id: "4777829", customer: "Diptesh Panda", total: "$20.75", items: "1 item", date: "15 Mar 2025, 2:45 pm", payment: "Pending", tracking: "94562312306123654789" },
];

const StatusBadge = ({ status }) => {
  const isSuccess = status === "Success";
  const classes = isSuccess
    ? "bg-[#476700] text-white"
    : "bg-purple-800 text-white";

  return (
    <span className={`px-2 py-1 rounded-lg text-xs font-medium ${classes}`}>
      {status}
    </span>
  );
};

const Orders = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1e0033] via-[#2c003e] to-[#43002e] text-white px-8 py-10 font-sans">
      <Navbar />

      {/* Title */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold">Orders</h1>
        <p className="text-gray-300 text-sm">Here you can find all of your Orders</p>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <StatCard title="Total Orders" value="248" percent="+13.9%" color="green" />
        <StatCard title="Order items over time" value="32" percent="-16.1%" color="red" />
        <StatCard title="Returns Orders" value="7" percent="+1.6%" color="yellow" />
        <StatCard title="Fulfilled orders over time" value="12" percent="+19.5%" color="green" />
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap items-center justify-between gap-4 text-sm mb-4 pb-2">
        <div className="flex gap-6 text-sm">
          {["All", "Unpaid", "Closed", "Paid"].map(tab => (
            <button
              key={tab}
              className="text-gray-300 hover:text-white hover:bg-[#26291f] p-2 rounded-lg"
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="flex gap-2">
          <button className="border border-gray-600 px-3 py-2 rounded-md hover:bg-[#4c4f42]"><BiSearch /></button>
          <button className="border border-gray-600 px-3 py-2 rounded-md hover:bg-[#4c4f42]"><HiMenu /></button>
          <button className="border border-gray-600 px-3 py-2 rounded-md hover:bg-[#4c4f42]"><BiFilter /></button>
          <button className="border border-gray-600 px-3 py-2 rounded-md hover:bg-[#4c4f42]"><LuArrowDownUp /></button>
          <button className="border border-gray-600 px-3 py-2 rounded-md hover:bg-[#4c4f42]"><BsThreeDots /></button>
        </div>
      </div>

      {/* Filter Row */}
    <div className="flex flex-wrap gap-3 sm:gap-4 border-b  border-white/10 pb-3 sm:pb-4">
      <button className="flex items-center gap-2 border border-gray-600 px-2.5 py-1 sm:px-4 sm:py-1 rounded-full text-sm sm:text-base whitespace-nowrap">
        <FaRegUserCircle className="text-base" /> Customer<IoIosArrowDown />
      </button>
      <button className="flex items-center gap-2 border border-gray-600 px-2.5 py-1 sm:px-4 sm:py-1 rounded-full text-sm sm:text-base whitespace-nowrap">
        <SlCalender className="text-base" /> Order Date<IoIosArrowDown />
      </button>
      <button className="px-2.5 py-1 sm:px-4 sm:py-2 rounded-md text-sm sm:text-base text-gray-300 hover:text-white whitespace-nowrap">
        + Add Filter
      </button>
    </div>


      {/* Orders Table */}
      <div className="overflow-x-auto hide-scrollbar rounded-lg">
        <table className="w-full text-sm text-left">
          <thead className=" text-gray-300 pb-2">
            <tr>
              <th className="px-4 py-3"><input type="checkbox" /></th>
              <th className="px-4 py-3"><div className="flex items-center gap-1 text-nowrap">#Order ID</div></th>
              <th className="px-4 py-3"><div className="flex items-center gap-1 text-nowrap"><HiOutlineUserCircle className="text-base" /> Customer</div></th>
              <th className="px-4 py-3"><div className="flex items-center gap-1 text-nowrap"><TbSum className="text-base" /> Total</div></th>
              <th className="px-4 py-3"><div className="flex items-center gap-1 text-nowrap"><GoStack className="text-base" /> Items</div></th>
              <th className="px-4 py-3"><div className="flex items-center gap-1 text-nowrap"><SlCalender className="text-base" /> Order Date</div></th>
              <th className="px-4 py-3"><div className="flex items-center gap-1 text-nowrap"><MdOutlinePayments className="text-base" /> Payment</div></th>
              <th className="px-4 py-3"><div className="flex items-center gap-1 text-nowrap"><MdOutlineLogout className="text-base" /> Tracking Number</div></th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, idx) => (
              <tr key={idx} className="border-t border-white/10 hover:bg-[#290035]">
                <td className="px-4 py-3"><input type="checkbox" /></td>
                <td className="px-4 py-3">{order.id}</td>
                <td className="px-4 py-3">{order.customer}</td>
                <td className="px-4 py-3">{order.total}</td>
                <td className="px-4 py-3">{order.items}</td>
                <td className="px-4 py-3">{order.date}</td>
                <td className="px-4 py-3"><StatusBadge status={order.payment} /></td>
                <td className="px-4 py-3">{order.tracking}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const StatCard = ({ title, value, percent, color }) => {
  const chartColors = {
    green: "#22c55e",
    red: "#ef4444",
    yellow: "#eab308",
  };

  const data = {
    labels: ["", "", "", "", "", "", ""],
    datasets: [
      {
        data: [5, 6, 4, 7, 5, 8, 6],
        borderColor: chartColors[color],
        tension: 0.4,
      },
    ],
  };

  return (
    <div className="bg-[#1a012a] border border-gray-800 rounded-lg p-4">
      <h3 className="text-sm text-gray-400 mb-1">{title}</h3>
      <div className="flex justify-between items-end mt-4">
        <div>
          <div className="text-2xl font-bold">{value}</div>
          <div className={`text-xs mt-1 ${color === "red" ? "text-red-400" : "text-green-400"}`}>{percent}</div>
        </div>
        <div className="h-12 min-w-[80px]">
          <Line
            data={data}
            options={{
              responsive: true,
              animation: false,
              plugins: { legend: { display: false } },
              scales: { x: { display: false }, y: { display: false } },
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Orders;
