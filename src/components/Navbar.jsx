import React, { useState } from "react";
import { FiSearch, FiMenu, FiX } from "react-icons/fi";
import { IoNotificationsOutline } from "react-icons/io5";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative z-50">
      {menuOpen && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-30 lg:hidden" onClick={() => setMenuOpen(false)} />
      )}

      {/* Top Navbar */}
      <div className="w-full h-16 text-white flex items-center justify-between px-4 md:px-6 bg-transparent lg:bg-transparent relative z-50">
        <div className="flex-1" />
        <div className="hidden lg:flex flex-1 justify-center gap-8 font-medium text-sm">
          <a href="#" className="hover:text-purple-300">HOME</a>
          <a href="#" className="hover:text-purple-300">NOTIFICATION</a>
          <a href="#" className="hover:text-purple-300 text-nowrap">ABOUT US</a>
          <a href="#" className="hover:text-purple-300">CONTACT</a>
        </div>

        {/* Right section */}
        <div className="flex items-center justify-end gap-4 flex-1 min-w-[120px]">
          <FiSearch size={20} className="cursor-pointer hover:text-gray-300" />
          <IoNotificationsOutline size={22} className="cursor-pointer hover:text-gray-300" />
          <img
            src="https://i.pravatar.cc/300"
            alt="Profile"
            className="w-8 h-8 rounded-full border-2 border-white object-cover"
          />

          {/* Hamburger menu */}
          <div className="block lg:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="fixed top-16 left-0 right-0 bg-gray-900 text-white flex flex-col items-center gap-6 py-8 z-40 lg:hidden shadow-lg">
          <a href="#" className="hover:text-purple-300 text-lg">Home</a>
          <a href="#" className="hover:text-purple-300 text-lg">Bill</a>
          <a href="#" className="hover:text-purple-300 text-lg">Profile</a>
          <a href="#" className="hover:text-purple-300 text-lg">Support</a>

          <button
            className="mt-4 px-4 py-2 border border-purple-400 rounded text-sm hover:bg-purple-400 hover:text-white transition"
            onClick={() => setMenuOpen(false)}
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
};


export default Navbar;
