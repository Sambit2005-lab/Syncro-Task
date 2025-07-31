import React, { Component } from 'react';
import Navbar from '../Navbar';
import "../../index.css"
export default class Myservice extends Component {
  render() {
    const headers = ['Service Name', 'Status', 'Transit'];
    const rows = [
      ['Resume Creation', 'Completed', 'Delivered on May 21, 2025'],
      ['Blog Writing', 'In Progress', 'Delivery by July 23']
    ];

    return (
      <div className="relative min-h-screen text-white font-sans overflow-hidden p-10">
        {/* Background gradient layer */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#2d0346] via-[#090113] " />

       {/* Circular glow bottom-right */}
      <div className="absolute -bottom-[30%] -right-[18%] w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,_#4a0d27_30%,_transparent_90%)] opacity-80 blur-[120px] pointer-events-none" />


      <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,_#7e57c2_30%,_transparent_80%)] opacity-30 blur-3xl pointer-events-none" />



        {/* Main Content Layer */}
        <div className="relative z-10">
        <Navbar />

          <div className="px-10 py-8">
            <h1 className="text-4xl font-bold mb-6">My Services</h1>
            <p className="text-xl font-medium text-gray-300 mb-8">Service History</p>

            <div className="overflow-x-auto hide-scrollbar bg-white/10 rounded-xl shadow-xl">
              <table className="table-auto w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-white/10">
                    {headers.map((heading, index) => (
                      <th
                        key={index}
                        className="px-6 py-4 text-sm font-bold text-white text-nowrap"
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
                        <td
                          key={colIndex}
                          className="px-6 py-5 text-sm text-white/90 text-nowrap"
                        >
                          {cell}
                        </td>
                      ))}
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
