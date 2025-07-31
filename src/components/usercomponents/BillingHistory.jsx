import React, { Component } from 'react';
import Navbar from '../Navbar';
import "../../index.css"
export default class BillingHistory extends Component {
  render() {
    const headers = ['Date', 'Invoice', 'Amount', 'Upload'];
    const rows = [
      ['May 21, 2025', 'Invoice #001', '₹799'],
      ['May 22, 2025', 'Invoice #002', '₹999'],
    ];

    return (
      <div className="relative min-h-screen text-white font-sans overflow-hidden p-10">
        {/* Gradient background layer */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#2d0346] via-[#090113] to-black" />

        {/* Glow circles */}
        <div className="absolute -bottom-[30%] -right-[18%] w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,_#4a0d27_30%,_transparent_90%)] opacity-80 blur-[120px] pointer-events-none z-0" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,_#5e0ba2_30%,_transparent_80%)] opacity-30 blur-3xl pointer-events-none z-0" />

        {/* Main content (on top) */}
        <div className="relative z-10 p-4 ">
          <Navbar />
          <div className="py-8">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">My Services</h1>
            <p className="text-base sm:text-lg md:text-xl font-medium text-gray-300 mb-6 sm:mb-8">Billing History</p>

            <div className="overflow-x-auto hide-scrollbar backdrop-blur-sm bg-white/5 rounded-xl shadow-xl">
              <table className="min-w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-white/10">
                    {headers.map((heading, index) => (
                      <th
                        key={index}
                        className="px-4 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm font-semibold text-white/80 whitespace-nowrap"
                      >
                        {heading}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row, rowIndex) => (
                    <tr
                      key={rowIndex}
                      className="border-b border-white/10 hover:bg-white/5 transition duration-200"
                    >
                      {row.map((cell, colIndex) => (
                        <td key={colIndex} className="px-4 sm:px-6 py-4 text-sm text-white/90 whitespace-nowrap">
                          {cell}
                        </td>
                      ))}
                      <td className="px-4 sm:px-6 py-4 text-sm text-white/90">
                        <div className="p-[0.5px] rounded-md bg-gradient-to-b from-purple-600 via-pink-500 to-red-500 inline-block">
                          <button className="bg-gradient-to-b from-[#691515] via-[#691515] to-[#0d0743] text-white px-10 py-1 rounded-md w-full h-full font-normal">
                            View
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
      </div>
    );
  }
}
