// src/components/admincomponents/Pricing.jsx
import React, { Component } from "react";
import Navbar from "../Navbar";
import { LuSparkles, LuPause, LuPencilRuler } from "react-icons/lu";
import { MdAccessTime, MdUpdate, MdOutlineArchive } from "react-icons/md";
import { FiDollarSign } from "react-icons/fi";
import { FaBullseye } from "react-icons/fa";
import { GoPencil } from "react-icons/go";
import { RiDeleteBin6Line } from "react-icons/ri";
import { TbWorldPin } from "react-icons/tb";
import "../../index.css";

export default class Pricing extends Component {
  render() {
    const serviceRows = [
      ["Content Writing", "2500", "ChatGPT, Grammarly", "1800", "24 hrs", "2025-07-22"],
      ["Logo Design", "4000", "Adobe Illustrator, Canva", "3200", "48 hrs", "2025-07-20"],
    ];

    const bundleRows = [
      ["Starter Pack", 5000, "Content Writing,SEO Optimization", "Active"],
      ["Growth Pack", 8999, "Content Writing,SEO Optimization", "Inactive"],
    ];

    const planRows = [
      ["Basic Plan", 199, "Content Writing,SEO Optimization", "Active"],
      ["Pro Plan", 399, "Content Writing,SEO OPtimization,Social Media", "Inactive"],
    ];

    return (
      <div className="min-h-screen bg-gradient-to-br from-[#1e0033] via-[#2c003e] to-[#43002e] text-white py-10">
        <Navbar />
        <div className="px-10 py-8">
          <h1 className="text-4xl font-bold mb-2">Pricing</h1>
          <p className="text-sm font-medium text-gray-300 mb-10">
            Manage and update pricing for all services and bundles.
          </p>

          {/* Services Table */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Individual Services Pricing</h2>
            <div className="overflow-x-auto hide-scrollbar">
              <table className="table-auto w-full min-w-[800px] text-left border-collapse">
                <thead>
                  <tr>
                    {[
                      ["Service Name", <input type="checkbox" className="w-4 h-4 accent-white" />],
                      ["Market Price", <FiDollarSign />],
                      ["All Tools Used", <LuSparkles />],
                      ["Platform Price", <FiDollarSign />],
                      ["Delivery Time", <MdAccessTime />],
                      ["Last Updated", <MdUpdate />],
                      ["Actions", <FaBullseye />],
                    ].map(([heading, icon], i) => (
                      <th key={i} className="px-4 py-2 text-sm font-bold text-white whitespace-nowrap border-t border-white/10">
                        <div className="flex items-center gap-2">
                          <span className="text-lg">{icon}</span>
                          {heading}
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {serviceRows.map((row, rowIndex) => (
                    <tr key={rowIndex} className="border-t border-white/10 hover:bg-white/5 transition duration-200">
                      {row.map((cell, colIndex) => (
                        <td key={colIndex} className="px-4 py-3 text-sm text-white/90 text-nowrap">
                          {colIndex === 0 ? (
                            <div className="flex items-center gap-2">
                              <input type="checkbox" className="w-4 h-4 accent-white" />
                              {cell}
                            </div>
                          ) : colIndex === 1 || colIndex === 3 ? (
                            <div className="flex items-center gap-1">
                              <FiDollarSign />
                              {cell}
                            </div>
                          ) : (
                            cell
                          )}
                        </td>
                      ))}
                      <td className="px-4 py-3 text-sm text-white/90 text-nowrap">
                        <div className="flex gap-2">
                          <button className="flex items-center gap-1 border border-gray-500 px-3 py-1 rounded hover:bg-white/10">
                            <GoPencil /> Edit
                          </button>
                          <button className="flex items-center gap-1 border border-gray-500 px-3 py-1 rounded hover:bg-white/10">
                            <RiDeleteBin6Line /> Delete
                          </button>
                          <button className="flex items-center gap-1 border border-gray-500 px-3 py-1 rounded hover:bg-white/10">
                            <MdOutlineArchive /> Archive
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <button className="m-4 px-4 py-2 bg-purple-600 rounded hover:bg-purple-700 text-nowrap  text-xs md:text-smlg:text-base">+ Add New Service</button>
            </div>
          </div>

          {/* Bundles Table */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Bundles / Packs</h2>
            <div className="overflow-x-auto hide-scrollbar">
              <table className="table-fixed w-full min-w-[800px] text-left border-collapse">
                <thead>
                  <tr className="border-t border-white/10">
                    {[
                      ["Bundle Name", <input type="checkbox" className="w-4 h-4 accent-white" />],
                      ["Price", <FiDollarSign />],
                      ["Services Included", <LuPencilRuler />],
                      ["Status", <TbWorldPin />],
                      ["Actions", <FaBullseye />],
                    ].map(([heading, icon], i) => (
                      <th key={i} className="px-4 py-2 text-sm font-bold text-white text-nowrap">
                        <div className="flex items-center gap-2">
                          <span className="text-lg">{icon}</span>
                          {heading}
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {bundleRows.map((row, rowIndex) => (
                    <tr key={rowIndex} className="border-t border-white/10 hover:bg-white/5 transition duration-200">
                      {row.map((cell, colIndex) => {
                        if (colIndex === 0) {
                          return (
                            <td key={colIndex} className="px-4 py-3 text-sm text-white/90 text-nowrap">
                              <div className="flex items-center gap-2">
                                <input type="checkbox" className="w-4 h-4 accent-white" />
                                {cell}
                              </div>
                            </td>
                          );
                        } else if (colIndex === 1) {
                          return (
                            <td key={colIndex} className="px-4 py-3 text-sm text-white/90 text-nowrap">
                              <div className="flex items-center gap-1">
                                <FiDollarSign />
                                {cell}
                              </div>
                            </td>
                          );
                        } else if (colIndex === 3) {
                          const isActive = cell === "Active";
                          const isInactive = cell === "Inactive";
                          return (
                            <td key={colIndex} className="px-4 py-3 text-sm text-white/90 w-44">
                              <div className={`flex items-center gap-2 border px-3 py-1 rounded-lg font-medium max-w-[100px] border-gray-500 text-gray-400`}>
                                <span className={`w-2 h-2 rounded-full ${isActive ? "bg-green-500" : "bg-gray-400"}`}></span>
                                {isInactive ? "Paused" : cell}
                              </div>
                            </td>
                          );
                        } else {
                          return (
                            <td key={colIndex} className={`px-4 py-3 text-sm text-white/90 ${colIndex === 2 ? "whitespace-normal break-words" : "text-nowrap max-w-[100px]"}`}>
                              {cell}
                            </td>
                          );
                        }
                      })}
                      <td className="px-4 py-3 text-sm text-white/90 text-nowrap">
                        <div className="flex gap-2">
                          <button className="flex items-center gap-1 border border-gray-500 px-3 py-1 rounded hover:bg-white/10">
                            <GoPencil /> Edit
                          </button>
                          <button className="flex items-center gap-1 border border-gray-500 px-3 py-1 rounded hover:bg-white/10">
                            <LuPause /> Pause
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <button className="m-4 px-4 py-2 bg-purple-600 rounded hover:bg-purple-700 text-xs md:text-sm lg:text-base">Create Bundle</button>
            </div>
          </div>

          {/* Subscription Plans Table */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Subscription Plans</h2>
            <div className="overflow-x-auto hide-scrollbar">
              <table className="table-fixed w-full min-w-[800px] text-left border-collapse">
                <thead>
                  <tr className="border-t border-white/10">
                    {[
                      ["Plan Name", <input type="checkbox" className="w-4 h-4 accent-white" />],
                      ["Monthly Rate", <FiDollarSign />],
                      ["Features", <LuSparkles />],
                      ["Status", <TbWorldPin />],
                      ["Actions", <FaBullseye />],
                    ].map(([heading, icon], i) => (
                      <th key={i} className="px-4 py-2 text-sm font-bold text-white text-nowrap">
                        <div className="flex items-center gap-2">
                          <span className="text-lg">{icon}</span>
                          {heading}
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {planRows.map((row, rowIndex) => (
                    <tr key={rowIndex} className="border-t border-white/10 hover:bg-white/5 transition duration-200">
                      {row.map((cell, colIndex) => {
                        if (colIndex === 0) {
                          return (
                            <td key={colIndex} className="px-4 py-3 text-sm text-white/90 text-nowrap">
                              <div className="flex items-center gap-2">
                                <input type="checkbox" className="w-4 h-4 accent-white" />
                                {cell}
                              </div>
                            </td>
                          );
                        } else if (colIndex === 1) {
                          return (
                            <td key={colIndex} className="px-4 py-3 text-sm text-white/90 text-nowrap">
                              <div className="flex items-center gap-1">
                                <FiDollarSign />
                                {cell}
                              </div>
                            </td>
                          );
                        } else if (colIndex === 3) {
                          const isActive = cell === "Active";
                          return (
                            <td key={colIndex} className="px-4 py-3 text-sm text-white/90 w-44">
                              <div className={`flex items-center gap-2 border px-3 py-1 rounded-lg font-medium max-w-[100px] border-gray-500 text-gray-400`}>
                                <span className={`w-2 h-2 rounded-full ${isActive ? "bg-green-500" : "bg-red-500"}`}></span>
                                {cell}
                              </div>
                            </td>
                          );
                        } else {
                          return (
                            <td key={colIndex} className={`px-4 py-3 text-sm text-white/90 ${colIndex === 2 ? "whitespace-normal break-words" : "text-nowrap max-w-[100px]"}`}>
                              {cell}
                            </td>
                          );
                        }
                      })}
                      <td className="px-4 py-3 text-sm text-white/90 text-nowrap">
                        <button className="flex items-center gap-1 border border-gray-500 px-3 py-1 rounded hover:bg-white/10">
                          <GoPencil /> Edit
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <button className="m-4 px-4 py-2 bg-purple-600 rounded hover:bg-purple-700 text-xs md:text-sm lg:text-base">Create Plan</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
