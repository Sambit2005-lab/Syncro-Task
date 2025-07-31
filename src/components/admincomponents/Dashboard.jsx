// src/pages/DashboardPage.jsx
import React from "react";
import { Line, Bar, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  BarElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import { FiDollarSign } from "react-icons/fi";
import { MdAttachMoney, MdShoppingCart } from "react-icons/md";
import { FaBullseye } from "react-icons/fa";
import { IoMdTrendingUp } from "react-icons/io";
import { IoTrendingDownSharp } from "react-icons/io5";
import Navbar from "../Navbar";

ChartJS.register(
  LineElement,
  BarElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  ArcElement
);

const iconMap = {
  "Average Order Value": (
    <FiDollarSign size={24} className="text-white mb-1 border border-gray-200 p-1 rounded-lg" />
  ),
  "Total Income": (
    <MdAttachMoney size={24} className="text-white mb-1 border border-gray-200 p-1 rounded-lg" />
  ),
  "Conversation Rate": (
    <FaBullseye size={24} className="text-white mb-1 border border-gray-200 p-1 rounded-lg" />
  ),
  "Total Orders": (
    <MdShoppingCart size={24} className="text-white mb-1 border border-gray-200 p-1 rounded-lg" />
  ),
};

const DashboardPage = () => {
  const lineData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "Income",
        data: [5000, 8000, 3500, 9000, 7000, 2000, 12000, 14000, 9000, 10000, 5000, 7500],
        borderColor: "#d946ef",
        backgroundColor: "transparent",
        tension: 0.4,
      },
    ],
  };

  const barData = {
    labels: ["Tool 1", "Tool 2", "Tool 3", "Tool 4"],
    datasets: [
      {
        label: "Other AI",
        data: [5, 1, 2, 3],
        backgroundColor: "#9ca3af",
      },
      {
        label: "Our AI",
        data: [8, 3, 7, 5],
        backgroundColor: "#a855f7",
      },
    ],
  };

  const totalIncomeStat = {
    title: "Total Income",
    value: "$325,890",
    subtitle: "+$500,000 last month",
    growth: "16.4%",
  };
  const isNegative = totalIncomeStat.growth.includes("-");
  const GrowthIcon = isNegative ? IoTrendingDownSharp : IoMdTrendingUp;

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1e0033] via-[#15011d] to-[#43002e] text-white p-4 sm:p-6 font-sans">
      <Navbar />

      {/* Top Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
        <h2 className="text-2xl font-bold">Overview</h2>
        <div className="flex items-center gap-3 flex-wrap">
          <select className="bg-[#2a2440] px-3 py-1 rounded text-sm text-white border border-gray-600">
            <option>Last 7 days</option>
            <option selected>Last 30 days</option>
            <option>Last 90 days</option>
          </select>
          <button className="bg-[#7f3df4] hover:bg-[#692bd0] px-4 py-2 rounded-md text-sm font-medium text-white">
            Export
          </button>
        </div>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-6">
        {[
          {
            title: "Average Order Value",
            value: "$85.70",
            subtitle: "+150 last month",
            growth: "13.9%",
          },
          {
            title: "Total Income",
            value: "$325,890",
            subtitle: "+$500,000 last month",
            growth: "16.4%",
          },
          {
            title: "Conversation Rate",
            value: "28.5%",
            subtitle: "+2.3% last month",
            growth: "13.9%",
          },
          {
            title: "Total Orders",
            value: "9,305",
            subtitle: "+2,894 last month",
            growth: "18.4%",
          },
        ].map((item, i) => {
          const isNegative = item.growth.includes("-");
          const Icon = isNegative ? IoTrendingDownSharp : IoMdTrendingUp;

          return (
            <div key={i} className="bg-gradient-to-br from-[#450d6c] to-[#25023f] rounded-2xl p-5 shadow-md">
              <div className="mb-2">{iconMap[item.title]}</div>
              <p className="text-sm text-gray-400 mb-4">{item.title}</p>
              <div className="flex items-center justify-between gap-2">
                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold">{item.value}</h3>
                  <p className="text-xs text-gray-400">{item.subtitle}</p>
                </div>
                <div className="flex items-center gap-1 bg-white text-purple-800 px-2 py-1 rounded text-sm">
                  <Icon className={isNegative ? "text-red-500" : "text-green-500"} />
                  <span>{item.growth}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Chart Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Line Chart */}
        <div className="bg-white/20 backdrop-blur-md p-4 sm:p-6 rounded-2xl shadow-md w-full min-w-0">
          <div className="flex justify-between items-center mb-4 flex-wrap gap-2">
            <div>
              <h4 className="text-lg font-semibold">Monthly Sales Performance</h4>
              <div className="flex items-center gap-3 mt-1">
               <p className="text-xl sm:text-2xl md:text-3xl text-white/90">$2,85,000</p>
                <div className="flex items-center gap-1 bg-white text-purple-800 px-2 py-1 rounded text-sm">
                  <GrowthIcon className={isNegative ? "text-red-500" : "text-green-500"} />
                  <span>{totalIncomeStat.growth}</span>
                </div>
              </div>
            </div>
            <select className="bg-[#2a2440] px-3 py-1 rounded text-sm">
              <option>Income</option>
            </select>
          </div>
          <Line
            data={lineData}
            options={{
              animation: false,
              plugins: {
                legend: { display: false },
                tooltip: {
                  mode: "index",
                  intersect: false,
                  displayColors: false,
                  callbacks: {
                    title: () => "Total Income",
                    label: (tooltipItem) => {
                      const amount = `$${tooltipItem.formattedValue}`;
                      const fullDates = [
                        "01/Jan/2025", "01/Feb/2025", "01/Mar/2025", "01/Apr/2025",
                        "01/May/2025", "01/Jun/2025", "01/Jul/2025", "01/Aug/2025",
                        "01/Sep/2025", "01/Oct/2025", "01/Nov/2025", "01/Dec/2025",
                      ];
                      const date = fullDates[tooltipItem.dataIndex] || "N/A";
                      return [amount, `Date: ${date}`];
                    },
                  },
                },
              },
              interaction: { mode: "nearest", intersect: false },
              elements: { point: { radius: 0, hoverRadius: 0 } },
              scales: {
                x: {
                  ticks: { color: "#fff", autoSkip: false },
                  grid: { color: "#ffffff33", borderDash: [4, 4] },
                },
                y: {
                  ticks: { display: false },
                  grid: { display: false },
                },
              },
            }}
          />
        </div>

        {/* Bar Chart */}
        <div className="bg-white/20 backdrop-blur-md p-4 sm:p-6 rounded-2xl shadow-md w-full min-w-0">
          <h4 className="text-lg font-semibold mb-4">Comparison With Other AI</h4>
          <Bar
            data={barData}
            options={{
              responsive: true,
              animation: false,
              plugins: { legend: { labels: { color: "#fff" } } },
              scales: {
                x: { ticks: { display: false }, grid: { display: false } },
                y: { ticks: { display: false }, grid: { display: false } },
              },
            }}
          />
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Top Selling */}
        <div className="bg-white/20 backdrop-blur-md p-4 sm:p-6 rounded-2xl flex-1">
          <h4 className="text-lg font-semibold mb-4">Top Selling</h4>
          <div className="text-sm text-gray-300 divide-y divide-gray-600">
            {[
              { title: "Resume Creation", items: "3,250 items", amount: "$52,392" },
              { title: "Pitch Deck Design", items: "2,980 items", amount: "$50,000" },
              { title: "Branding Kit", items: "2,740 items", amount: "$48,730" },
            ].map((item, i) => (
              <div key={i} className="flex justify-between py-4">
                <div className="flex flex-col">
                  <span className="font-medium text-white">{item.title}</span>
                  <span className="text-xs text-gray-400">{item.items}</span>
                </div>
                <span className="font-semibold text-white">{item.amount}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Pie Chart */}
        <div className="bg-white/20 backdrop-blur-md p-4 sm:p-6 rounded-2xl w-full max-w-xs mx-auto lg:mx-0 text-center text-white">
          <h4 className="text-lg font-semibold mb-4">Orders</h4>
          <div className="relative w-40 h-40 mx-auto">
            <Pie
              data={{
                labels: ["Completed", "Remaining"],
                datasets: [
                  {
                    data: [25, 75],
                    backgroundColor: ["#9333ea", "#312e81"],
                    borderWidth: 0,
                    cutout: "75%",
                  },
                ],
              }}
              options={{
                animation: false,
                plugins: {
                  legend: { display: false },
                  tooltip: {
                    callbacks: {
                      label: (ctx) => `${ctx.label}: ${ctx.raw}%`,
                    },
                  },
                },
              }}
            />
            <div className="absolute inset-0 flex items-center justify-center text-2xl font-bold text-purple-600">
              25%
            </div>
          </div>
          <div className="mt-6 space-y-3 text-sm text-left">
            <div className="flex justify-between pb-2">
              <p className="text-gray-400">Order Completed</p>
              <p className="font-semibold text-white">2,008</p>
            </div>
            <div className="flex justify-between border-b border-gray-700 pb-2">
              <p className="text-gray-400">Order In Transit</p>
              <p className="font-semibold text-white">8,000</p>
            </div>
            <div className="flex justify-between">
              <p className="text-gray-400">Total Orders</p>
              <p className="font-semibold text-white">100,098</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
