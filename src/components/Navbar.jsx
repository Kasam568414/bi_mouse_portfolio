// src/components/Navbar.jsx
import React from "react";

const NAV_H = 72;

function Navbar() {
  return (
    <>
      {/* spacer so content না ঢাকে */}
      <div style={{ height: NAV_H }} aria-hidden="true" />
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
        <div className="mx-auto max-w-screen-xl px-4 h-[72px] flex justify-between items-center">
          <div className="text-xl font-bold">Name</div>

          <ul className="hidden md:flex space-x-8 font-medium">
            <li><a href="#" className="hover:text-[#7274FF] font-bold">Home</a></li>
            <li><a href="#" className="hover:text-[#7274FF] font-bold">Services</a></li>
            <li><a href="#" className="hover:text-[#7274FF] font-bold">About Us</a></li>
          </ul>

          <a href="#" className="bg-blue-600 text-white px-5 py-2 rounded-lg font-medium hover:bg-blue-700 transition">
            REQUEST A QUOTE
          </a>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
