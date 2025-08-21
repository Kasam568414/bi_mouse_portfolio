// src/components/Home.jsx
import React from "react";
import MyImage1 from "../assets/Group 34111.png";
import MissionIllustration from "../assets/Group 34115.png";
import MissionIllustration1 from "../assets/19.png";
import MissionIllustration2 from "../assets/bg.png";

import img1 from "../assets/Frame 34115.png";
import img2 from "../assets/Group 34119.png";
import img3 from "../assets/Group 34120.png";

import heroBg from "../assets/blue.png";             // full-bleed bg
import leftBg from "../assets/Rectangle 3203.png";   // curved inner panel

// Keep this equal to your Navbar height (e.g., h-[72px])
const NAVBAR_HEIGHT = 72;

const Home = () => {
  const services = [
    {
      icon: img1,
      title: "Content Publishing",
      desc:
        "Diam id magna dis est massa sit nibh platea ultrices conubia sodales felis per",
    },
    {
      icon: img2,
      title: "Conversation Management",
      desc:
        "Diam id magna dis est massa sit nibh platea ultrices conubia sodales felis per",
    },
    {
      icon: img3,
      title: "Post Scheduling",
      desc:
        "Diam id magna dis est massa sit nibh platea ultrices conubia sodales felis per",
    },
  ];

  return (
    <>
    <div id="home">
      {/* Spacer so fixed navbar doesn't overlap content */}
      <div style={{ height: NAVBAR_HEIGHT }} aria-hidden="true" />

      {/* ================= HERO (full-bleed background, container-aligned content) ================= */}
      {/* ================= HERO (full-bleed with left/right bg) ================= */}
<div className="relative w-full min-h-[620px] overflow-hidden">
  {/* Base full-bleed background */}
  <img
    src={heroBg}
    alt=""
    className="absolute inset-0 -z-30 h-full w-full object-cover"
  />

  {/* LEFT wedge (full width, slanted) */}
  <div
    className="absolute inset-y-0 left-0 -z-20"
    style={{
      width: "66%",
      backgroundImage: `url(${leftBg})`,
      backgroundSize: "cover",
      backgroundPosition: "left center",
      clipPath: "polygon(0 0, 72% 0, 58% 100%, 0% 100%)",
    }}
    aria-hidden="true"
  />

  {/* CENTER divider (deep blue triangle) */}
  <div
    className="absolute inset-y-0 left-[58%] w-[12%] bg-[#0E5B7F] -z-20"
    style={{ clipPath: "polygon(0 0, 100% 0, 0 100%)" }}
    aria-hidden="true"
  />

  {/* Dotted pattern bottom-right */}
  <div
    className="absolute right-4 bottom-6 h-24 w-56 opacity-70 -z-10"
    style={{
      backgroundImage:
        "radial-gradient(rgba(0,0,0,0.18) 1.4px, transparent 1.4px)",
      backgroundSize: "12px 12px",
    }}
    aria-hidden="true"
  />

  {/* Curved rings behind the person */}
  <div className="pointer-events-none absolute right-[6%] top-10 hidden lg:block -z-10">
    <div className="h-[420px] w-[420px] rounded-full border-[10px] border-[#0E5B7F] opacity-60" />
    <div className="absolute inset-10 h-[420px] w-[420px] rounded-full border-[10px] border-[#0E5B7F] opacity-40" />
  </div>

  {/* Content aligned to your navbar/container */}
  <div className="mx-auto max-w-screen-xl px-4">
    <div className="grid min-h-[600px] grid-cols-1 items-center gap-10 py-16 md:grid-cols-2 md:py-20">
      {/* LEFT: text block */}
      <div className="relative">
        {/* little white dot decoration */}
        <div className="absolute -top-6 right-10 hidden md:block" aria-hidden="true">
          <svg width="34" height="34" viewBox="0 0 34 34" fill="none">
            <circle cx="17" cy="17" r="16" fill="#ffffff" />
          </svg>
        </div>

        <h1 className="mb-4 text-3xl font-extrabold leading-tight text-[#205065] md:text-5xl lg:text-6xl mr-5">
          Innovative Data Visualization Solutions for Your Business
        </h1>

        <p className="mb-6 max-w-[48ch] text-lg text-[#3e7a90] md:text-xl">
          Unlock growth with streamlined solutions. We help businesses leverage
          insights, enhance performance, and drive results through effective,
          data-driven strategies.
        </p>

        <div className="flex flex-wrap gap-3">
          <button className="rounded border border-gray-300 bg-white px-5 py-2 font-semibold hover:bg-gray-50">
            ▶ CONTACT ME
          </button>
          <button className="rounded border border-blue-600 bg-blue-50 px-5 py-2 font-semibold text-blue-900 hover:bg-blue-100">
            ☐ BOOK A CONSULTATION
          </button>
        </div>
      </div>

      {/* RIGHT: person image */}
      <div className="relative flex justify-center md:justify-end">
        {/* Optional: small avatar pill (hide if not needed) */}
        {/* <div className="absolute -top-6 right-4 hidden items-center gap-2 rounded-full bg-[#1f7ca0] px-3 py-1 text-white shadow md:flex">
          <div className="h-6 w-6 rounded-full bg-white/80 ring-2 ring-[#1f7ca0]" />
          <div className="h-6 w-6 rounded-full bg-white/80 ring-2 ring-[#1f7ca0]" />
          <div className="h-6 w-6 rounded-full bg-white/80 ring-2 ring-[#1f7ca0]" />
          <span className="ml-1 text-sm font-semibold">+5</span>
        </div> */}

        <img
          src={MyImage1}
          alt="User"
          className="h-auto w-full max-w-[520px]"
        />
      </div>
    </div>
  </div>
</div>
{/* ================= HERO END ================= */}

      {/* ================= HERO END ================= */}

      {/* Account Name */}
      <div className="mx-auto max-w-screen-xl px-4 pt-6 pb-6">
        <div className="text-center text-3xl md:text-5xl font-semibold">
          Account Name
        </div>
      </div>

      {/* Mission strip */}
      <section className="w-full bg-[#D9ECFF]">
        <div className="mx-auto max-w-screen-xl px-4 py-10">
          <div className="relative grid grid-cols-1 md:grid-cols-2 items-center gap-10">
            {/* left */}
            <div className="flex flex-col items-center">
              <h2 className="text-2xl font-bold text-[#205065] mb-3">
                Our Mission
              </h2>
              <img
                src={MissionIllustration}
                alt="Mission Illustration"
                className="max-w-[360px] w-full"
              />
            </div>

            {/* right */}
            <div className="md:pl-6">
              <div className="mb-5">
                <img
                  src={MissionIllustration1}
                  alt="Experience Badge"
                  className="w-[180px] h-auto"
                />
              </div>
              <p className="text-[#252f3f] mb-6 text-lg leading-relaxed">
                <span className="font-bold">Our mission</span> is to empower
                businesses by transforming raw data into actionable insights
                that boost productivity, streamline decision-making, and enhance
                business performance.
              </p>
              <button className="bg-[#195c6b] hover:bg-[#184f5e] text-white font-semibold px-8 py-3 rounded transition w-[200px] h-[50px]">
                DISCOVER MORE
              </button>
            </div>

            {/* tiny corner lines (optional) */}
            <div className="absolute top-6 right-10 hidden md:block" aria-hidden="true">
              <svg width="40" height="40">
                <circle cx="32" cy="16" r="14" fill="#ecf5ff" />
                <line x1="37" y1="5" x2="40" y2="0" stroke="#205065" strokeWidth="2" />
                <line x1="37" y1="10" x2="41" y2="6" stroke="#205065" strokeWidth="2" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Services teaser */}
      <div className="mx-auto max-w-screen-xl px-4 py-16 md:py-20 flex flex-col md:flex-row gap-6 items-stretch">
        {/* Left list */}
        <div className="flex flex-col gap-4 flex-1">
          {services.map((s) => (
            <div
              key={s.title}
              className="flex items-center bg-white border rounded-lg p-4 gap-4 shadow-sm h-full hover:shadow-md transition"
            >
              <div className="bg-indigo-100 rounded-lg p-3 flex items-center justify-center">
                <img
                  src={s.icon}
                  alt={s.title}
                  className="w-12 h-12 object-contain"
                />
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-medium mb-2 text-[#034552]">
                  {s.title}
                </div>
                <div className="text-[#034552] text-sm">{s.desc}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Right panel */}
        <div className="bg-blue-100 rounded-lg p-8 flex flex-col justify-between flex-1 items-start">
          <div>
            <div className="text-[#034552] font-medium mb-3 text-2xl">
              The Services
            </div>
            <div className="text-2xl md:text-4xl text-[#034552] mb-3 font-medium">
              Empower your decisions with insights that drive real impact.
            </div>
            <div className="text-[#034552] text-[16px] font-semibold mt-4">
              Efficient solutions that drive results. We help businesses optimize
              processes, streamline workflows, and achieve measurable outcomes
              through smart, data-driven strategies.
            </div>
          </div>
          <button className="mt-8 bg-teal-900 text-white font-semibold px-6 py-2 rounded hover:bg-teal-800 w-fit">
            DISCOVER MORE
          </button>
        </div>
      </div>

      {/* wave divider */}
      <section
        className="w-full"
        style={{
          backgroundImage: `url(${MissionIllustration2})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "286px",
        }}
        aria-hidden="true"
      />
      </div>
    </>
  );
};

export default Home;
