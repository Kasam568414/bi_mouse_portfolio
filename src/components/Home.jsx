import React from "react";
import MyImage1 from "../assets/Group 34111.png";
import MissionIllustration from "../assets/Group 34115.png"; // Use 
import MissionIllustration1 from "../assets/19.png"; // Use 
import MissionIllustration2 from "../assets/Group 34142 (1).png"; 

import img1 from "../assets/Frame 34115.png"
import img2 from "../assets/Group 34119.png"
import img3 from "../assets/Group 34120.png"

const NAVBAR_HEIGHT = 64; // px

const Home = () => {
  const services = [
    {
      icon: img1,
      title: 'Content Publishing',
      desc: 'Diam id magna dis est massa sit nibh platea ultrices conubia sodales felis per',
    },
    {
      icon: img2,
      title: 'Conversation Management',
      desc: 'Diam id magna dis est massa sit nibh platea ultrices conubia sodales felis per',
    },
    {
      icon: img3,
      title: 'Post Scheduling',
      desc: 'Diam id magna dis est massa sit nibh platea ultrices conubia sodales felis per',
    },
  ];

  return (
    <section className="">
      <div 
        className="w-full flex items-center"
        style={{ paddingTop: `${NAVBAR_HEIGHT}px` }}
      >
        <div
          className="w-full flex items-stretch relative"
          style={{
            backgroundImage: "url('src/assets/Rectangle 3651 (2).png')",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        >
          {/* Left Section */}
          <div
            className="flex-1 relative px-10 py-16 flex flex-col justify-center z-20 w-3/6"
            style={{
              backgroundImage: "url('src/assets/Rectangle 3203.png')",
              backgroundSize: "cover",
              backgroundPosition: "center"
            }}
          >
            <h1 className="text-4xl md:text-7xl font-bold text-[#205065] mb-6 leading-tight">
              Innovative Data Visualization Solutions for Your Business
            </h1>
            <p className="mb-6 text-[#3e7a90] w-3/4 text-2xl">
              Unlock growth with streamlined solutions. We help businesses leverage insights, enhance performance, and drive results through effective, data-driven strategies.
            </p>
            <div className="flex gap-4">
              <button className="bg-white border border-gray-400 text-gray-900 px-5 py-2 rounded shadow hover:bg-gray-100 flex items-center gap-2 font-semibold">
                &#9654; CONTACT ME
              </button>
              <button className="bg-blue-50 border border-blue-600 text-blue-900 px-5 py-2 rounded shadow hover:bg-blue-100 flex items-center gap-2 font-semibold">
                &#9744; BOOK A CONSULTATION
              </button>
            </div>
          </div>
          {/* Right Section */}
          <div className="w-3/6 flex items-center justify-center relative">
            <img
              style={{ width: '596.789306640625px' }}
              src={MyImage1}
              alt="User"
              className="relative mt-10"
            />
          </div>
        </div>
      </div>

      <div className="text-center text-5xl font-semibold mt-8 mb-8">
        Account Name
      </div>

      <section className="w-full py-12 bg-[#D9ECFF] flex justify-center">
        <div className="w-full max-w-7xl flex flex-row justify-between px-10 py-10 rounded-lg relative gap-8">
          {/* Left: mission heading and illustration */}
          <div className="flex flex-col items-center w-1/2">
            <h2 className="text-2xl font-bold text-[#205065] mb-4">
              Our Mission
            </h2>
            <img
              src={MissionIllustration}
              alt="Mission Illustration"
              className="w-2xs"
            />
          </div>

          {/* Right: Experience badge and mission content */}
          <div className="flex flex-col justify-center w-1/2 pl-8">
            {/* Experience badge */}
            <div className="mb-6">
              <img src={MissionIllustration1} alt="Experience Badge" />
            </div>

            {/* Mission statement */}
            <p className="text-[#252f3f] mb-8 text-lg leading-relaxed w-full">
              <span className="font-bold">Our mission</span> is to empower businesses by transforming raw data into actionable insights that boost productivity, streamline decision-making, and enhance business performance. We are driven by the goal of helping our clients succeed through advanced analytics, interactive dashboards, and intuitive data visualizations.
            </p>

            {/* Button */}
            <button className="bg-[#195c6b] hover:bg-[#184f5e] text-white font-semibold px-8 py-3 rounded transition w-[200px] h-[50px]">
              DISCOVER MORE
            </button>
          </div>

          {/* Decorative ball top-right */}
          <div className="absolute top-6 right-10">
            <svg width="40" height="40">
              <circle cx="32" cy="16" r="14" fill="#ecf5ff" />
              <line x1="37" y1="5" x2="40" y2="0" stroke="#205065" strokeWidth="2" />
              <line x1="37" y1="10" x2="41" y2="6" stroke="#205065" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </section>



      <div className="flex flex-col md:flex-row gap-6 p-6 bg-white items-stretch min-h-[400px] mt-4 mb-4">
        {/* Left Section */}
        <div className="flex flex-col gap-4 flex-1">
          {services.map((s) => (
            <div
              key={s.title}
              className="flex items-center bg-white border rounded-lg p-4 gap-4 shadow-sm h-full hover:shadow-md transition"
            >
              <div className="bg-indigo-100 rounded-lg p-3 flex items-center justify-center">
                <img src={s.icon} alt={s.title} className="w-12 h-12 object-contain" />
              </div>
              <div>
                <div className="text-4xl font-medium mb-4 (500) text-[#034552]">{s.title}</div>
                <div className=" text-[#034552] text-sm">{s.desc}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Right Section */}
        <div className="bg-blue-100 rounded-lg p-8 flex flex-col justify-between flex-1 items-start">
          <div>
            <div className="text-[#034552] font-medium mb-3 text-2xl ">The Services</div>
            <div className="text-4xl  text-[#034552] mb-3 font-medium (500)">
              Empower your decisions with insights that drive real impact.
            </div>
            <div className="text-[#034552] text-sm text-[16px] font-semibold mt-8">
              Efficient solutions that drive results. We help businesses optimize processes, streamline workflows, and achieve measurable outcomes through smart, data-driven strategies. Our approach combines precision, creativity, and impact to deliver meaningful results.
            </div>
          </div>
          <button className="mt-8 bg-teal-900 text-white font-semibold px-6 py-2 rounded hover:bg-teal-800 w-fit">
            DISCOVER MORE
          </button>
        </div>
      </div>



<section
  className="w-full"
  style={{
    backgroundImage: `url(${MissionIllustration2})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "286px"  // or "100vh" or any height you prefer
  }}
></section>

    </section>
  );
};

export default Home;
