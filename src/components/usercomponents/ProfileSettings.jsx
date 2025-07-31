import React, { useState } from "react";
import Navbar from "../Navbar";

const ProfileSettings = () => {
  const [fullName, setFullName] = useState("Sambit Pradhan");
  const [email, setEmail] = useState("sambitpradhan@gmail.com");
  const [password, setPassword] = useState("");
  const [twoFactor, setTwoFactor] = useState("");

  return (
    <div className="min-h-screen overflow-x-hidden bg-gradient-to-br from-[#43002e] via-[#2c003e] to-[#1e0033] text-white p-10">
      <Navbar />
      <div className="flex flex-col gap-10 mt-10">
        {/* Profile Picture Section */}
        <div className="flex flex-col items-start gap-4">
          <h2 className="text-lg font-semibold">Picture</h2>
          <div className="flex flex-wrap gap-4 items-center">
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="User"
              className="w-20 h-20 rounded-full object-cover"
            />
            <button className="px-4 py-1.5 rounded-xl text-sm font-medium self-center bg-purple-600 text-white shadow-lg border-[0.5px] border-white whitespace-nowrap">
              Update Picture
            </button>
          </div>
        </div>

        <div className="flex flex-wrap gap-12">
          {/* Left Column */}
          <div className="flex flex-col gap-6">
            {/* Full Name */}
            <div className="flex flex-col">
              <label className="block mb-1 font-bold">Full Name</label>
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="bg-transparent border border-gray-500 rounded-md px-4 py-2 w-full max-w-xs text-gray-300 font-semibold"
              />
            </div>

            {/* Password */}
            <div className="flex flex-col">
              <label className="block mb-1 font-bold">Change My Password</label>
              <input
                type="password"
                value={password}
                placeholder="Enter new password"
                onChange={(e) => setPassword(e.target.value)}
                className="bg-transparent border border-gray-500 rounded-md px-4 py-2 w-full max-w-xs text-gray-300 font-semibold"
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-6">
            {/* Email Address */}
            <div className="flex flex-col">
              <label className="block mb-1 font-bold">Email Address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-transparent border border-gray-500 rounded-md px-4 py-2 w-full text-left text-gray-300 font-semibold"
              />
            </div>

            {/* Two Factor */}
            <div className="flex flex-col">
              <label className="block mb-1 font-bold">Two Factor Authenticator</label>
              <input
                type="text"
                value={twoFactor}
                placeholder="Two Factor Authenticator"
                onChange={(e) => setTwoFactor(e.target.value)}
                className="bg-transparent border border-gray-500 rounded-md px-4 py-2 w-full max-w-xs text-gray-300 font-semibold"
              />
            </div>
          </div>
        </div>

        {/* Update Button */}
        <div className="mt-10 flex justify-end">
          <button className="bg-purple-600 px-6 py-3 rounded-xl text-white shadow-lg border-[0.5px] border-white">
            Update Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileSettings;
