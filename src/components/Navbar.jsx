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
            <li><a href="#home" className="hover:text-[#7274FF] font-bold">Home</a></li>
            <li><a href="#services" className="hover:text-[#7274FF] font-bold">Services</a></li>
            <li><a href="#about" className="hover:text-[#7274FF] font-bold">About Us</a></li>
          </ul>

          <a href="https://www.fiverr.com/bi_mouse/do-create-power-bi-dashboard-tableau-excel-data-visualization-and-dashboards?context_referrer=search_gigs_with_recommendations_row_1&source=main_banner&ref_ctx_id=bc4f5d61dba84512897a0de11629a1e4&pckg_id=1&pos=3&context_type=auto&funnel=bc4f5d61dba84512897a0de11629a1e4&seller_online=true&imp_id=670a7527-a1ef-47aa-bbcb-f346cf1fb5e1" className="bg-blue-600 text-white px-5 py-2 rounded-lg font-medium hover:bg-blue-700 transition">
            REQUEST A QUOTE
          </a>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
