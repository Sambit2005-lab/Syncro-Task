// src/pages/RequestCustom.jsx

import React, { useState } from 'react';
import Navbar from '../Navbar';

const RequestCustom = () => {
  const [fileName, setFileName] = useState("No file chosen");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFileName(file ? file.name : "No file chosen");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submission logic here (e.g., API call or validation)
    console.log("Form submitted");
  };

  return (
    <div className="relative min-h-screen p-10 bg-gradient-to-b from-[#160240] to-[#11021b] text-white font-sans overflow-hidden">
      <div className="absolute z-0 top-2/3 left-1/2 w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full 
                  bg-[radial-gradient(circle,_rgba(183,142,255,0.2)_30%)] blur-[80px] pointer-events-none" />
      <div className="absolute z-0 top-1/2 left-1/2 w-[200px] h-[200px] -translate-x-1/2 -translate-y-1/2 rounded-full 
                  bg-[radial-gradient(circle,_rgba(183,142,255,0.4)_0%,_transparent_80%)] blur-[60px] pointer-events-none" />
      <Navbar />
      <div className="max-w-3xl mx-auto mt-20 z-10 relative">
        <h1 className="text-3xl font-bold mb-10 text-purple-200">Request Custom Service</h1>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="service-title" className="block mb-1 text-sm">Service Title</label>
            <input
              id="service-title"
              type="text"
              placeholder="Enter the service you need"
              required
              className="w-full px-4 py-3 rounded-lg bg-[#121626] border border-purple-900 placeholder-gray-400 focus:outline-none"
            />
          </div>

          <div>
            <label htmlFor="budget-range" className="block mb-1 text-sm">Budget Range</label>
            <input
              id="budget-range"
              type="text"
              placeholder="Enter your budget range"
              required
              className="w-full px-4 py-3 rounded-lg bg-[#121626] border border-purple-900 placeholder-gray-400 focus:outline-none"
            />
          </div>

          <div>
            <label htmlFor="description" className="block mb-1 text-sm">Description</label>
            <textarea
              id="description"
              placeholder="Enter short description"
              rows="5"
              required
              className="w-full px-4 py-3 rounded-lg bg-[#121626] border border-purple-900 placeholder-gray-400 focus:outline-none"
            />
          </div>

          <div>
            <label htmlFor="file-upload" className="block mb-1 text-sm">Upload file</label>
            <div className="flex items-center gap-4 flex-wrap">
              <label
                htmlFor="file-upload"
                className="bg-[#121626] border border-purple-900 px-4 py-2 rounded-lg text-white cursor-pointer"
              >
                Choose File
              </label>
              <input
                id="file-upload"
                type="file"
                onChange={handleFileChange}
                className="hidden"
              />
              <span className="text-gray-300 break-all">{fileName}</span>
            </div>
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="px-6 py-3 rounded-lg bg-purple-600 shadow-lg hover:opacity-90 text-white font-medium"
            >
              Submit Request
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RequestCustom;
