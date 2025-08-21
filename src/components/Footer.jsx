// src/components/Footer.jsx
import React from "react";
import Img from "../assets/footer.png";
import Img1 from "../assets/Group 34148.png";

const CONTAINER = "mx-auto max-w-screen-xl px-4";
const VSPACE = "py-16 md:py-20";

const Footer = () => (
  <footer className="w-full">
    <div className="relative w-full bg-center bg-cover" style={{ backgroundImage: `url(${Img})` }}>
      <div className="absolute inset-0 bg-black/40" />
      <div className={`relative ${CONTAINER} ${VSPACE} flex items-center justify-center`}>
        <div className="flex flex-col items-center text-center gap-6">
          <img src={Img1} alt="" />
          <button className="bg-[#0FADB4] hover:bg-teal-600 text-white font-semibold px-8 py-3 rounded-md cursor-pointer">ORDER NOW</button>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
