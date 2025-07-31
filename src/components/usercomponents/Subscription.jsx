import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import Navbar from '../Navbar';

const Subscription = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#290a4b] via-[#120c2d] to-[#3b0a2d] text-white px-4 sm:px-6 py-8 sm:py-10 overflow-hidden">
      
      {/* Gradient overlay background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#2d0346] via-[#090113] to-transparent z-0 pointer-events-none" />

      {/* Glow circle bottom-right */}
      <div className="absolute -bottom-[30%] -right-[18%] w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,_#4a0d27_30%,_transparent_90%)] opacity-80 blur-[120px] pointer-events-none z-0" />

      {/* Glow circle bottom-left */}
      <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,_#7e57c2_30%,_transparent_80%)] opacity-30 blur-3xl pointer-events-none z-0" />

      <Navbar />

      <div className="max-w-5xl mx-auto relative z-10">
        <h1 className="text-4xl font-bold mb-4">Subscription</h1>
        <p className="text-lg text-gray-300 mb-10">Your Picked Plans</p>

        <div className="w-full max-w-sm p-8 bg-gradient-to-b from-[#26053c] backdrop-blur-md border border-white/10 rounded-xl overflow-hidden relative">
          
          {/* Decorative gradient circle */}
          <div className="absolute top-1 left- 9 w-60 h-80 bg-gradient-to-br from-[#b09c9c] via-[#dbcdcd] to-[#e8dbdb] rounded-full blur-3xl opacity-30 z-0" />

          {/* Card content */}
          <div className="relative z-10">
            <div className="mb-3">
              <span className="bg-gradient-to-b from-gray-500 via-[#5a5454] to-[#312d2d] text-white text-sm px-3 py-1 rounded-sm">
                Popular Plan
              </span>
            </div>

            <h2 className="text-3xl font-bold mb-2 text-white">
              $124<span className="text-lg font-normal">/month</span>
            </h2>

            <p className="text-sm text-gray-300 mb-6">
              Perfect for marketers / scale up business
            </p>

            <ul className="space-y-4 text-sm">
              {[
                "Unlimited monthly emails",
                "3 seats",
                "Customer user permission",
                "Unlimited audience",
                "Unlimited website",
                "Email support 24/7 priority",
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-white/90">
                  <FaCheckCircle className="" /> {item}
                </li>
              ))}
            </ul>

          
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
