import React from "react";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full flex justify-between items-center px-8 py-4 bg-white shadow-md z-50">
      {/* Logo */}
      <div className="text-xl font-bold">Name</div>

      {/* Menu Links */}
      <ul className="hidden md:flex space-x-8 font-medium">
        <li>
          <a href="#" className="hover:text-[#7274FF] font-bold">
            Home
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-[#7274FF] font-bold">
            Services
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-[#7274FF] font-bold">
            About Us
          </a>
        </li>
      </ul>

      {/* Button */}
      <a
        href="#"
        className="bg-blue-600 text-white px-5 py-2 rounded-lg font-medium hover:bg-blue-700 transition"
      >
        REQUEST A QUOTE
      </a>
    </nav>
  );
}

export default Navbar;
