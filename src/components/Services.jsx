// src/components/Services.jsx
import React from "react";
import cardimg1 from "../assets/img1.png";
import cardimg2 from "../assets/img2.png";
import cardimg3 from "../assets/img3.png";
import cardimg4 from "../assets/img4.png";
import cardimg5 from "../assets/img5.png";
import cardimg6 from "../assets/img6.png";
import cardimg7 from "../assets/img7.png";
import cardimg8 from "../assets/img8.png";
import cardimg9 from "../assets/img9.png";
import cardimg10 from "../assets/Sadiya gig image-2 2.png";
import cardimg11 from "../assets/bg3.jpg";
import cardimg12 from "../assets/Frame 34167.png";
import cardimg13 from "../assets/Frame 34167 (2).png";
import cardimg14 from "../assets/Frame 34167 (1).png";
import banner from "../assets/Rectangle 3666@2x.png";

/** MAKE THIS MATCH YOUR NAVBAR EXACTLY */
const NAV_CONTAINER = "mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8";
/** If navbar is fixed, keep this equal to its height */
const NAVBAR_HEIGHT = 72;
/** Consistent vertical rhythm for all blocks on this page */
const VSPACE = "py-16 md:py-20";

const Services = () => {
  const services = [
    { title: "Creative Power BI Dashboard Design", desc: "Design creative and interactive dashboards for clear insights.", icon: cardimg1 },
    { title: "Tableau & Looker Studio Visualization", desc: "Build compelling visualizations to track performance.", icon: cardimg2 },
    { title: "Excel-Based KPI Dashboards", desc: "Create Excel-based dashboards for key metrics at a glance.", icon: cardimg3 },
    { title: "Data Modeling, Cleaning & Prep", desc: "Clean, structure, and model data for analysis.", icon: cardimg4 },
    { title: "Performance Dashboards", desc: "Monitor business performance with actionable visuals.", icon: cardimg5 },
    { title: "Automated Reporting", desc: "Generate reports automatically from Excel, SQL, or Google Sheets.", icon: cardimg6, highlight: true },
    { title: "Interactive Features", desc: "Add filters, slicers, and drilldowns for dynamic insights.", icon: cardimg7 },
    { title: "Real-Time Tracking", desc: "Track KPIs and insights in real time.", icon: cardimg8 },
    { title: "Branded Dashboards", desc: "Design multi-page dashboards tailored to your brand.", icon: cardimg9 },
  ];

  const plans = [
    { name: "Basic", title: "Starter Dashboard", desc: "1 basic yet Wonderful visualization tailored to your requirements!", price: "$100", delivery: "3-day delivery", details: ["1 dashboard"] },
    { name: "Standard", title: "Business Insights", desc: "Insights super-Amazing dashboard tailored to your requirements! (With basic data)", price: "$350", delivery: "5-day delivery", details: ["Data source connectivity","Interactive/animated visuals","1 dashboard"] },
    { name: "Premium", title: "Pro Dashboard Suite", desc: "1 complex super-Fantastic dashboard tailored to your requirements! (With advanced data prep)", price: "$445", delivery: "7-day delivery", details: ["Data source connectivity","Web embedding","Interactive/animated visuals","1 dashboard"] },
  ];

  const CARD_DIM = { width: "340px", height: "560px" };

  return (
    <>
      {/* Spacer so fixed navbar doesn’t overlap */}
      <div style={{ height: NAVBAR_HEIGHT }} aria-hidden="true" />

      {/* SERVICES GRID */}
      <section className="bg-white scroll-mt-[72px]">
        <div className={`${NAV_CONTAINER} ${VSPACE}`}>
          <h2 className="text-3xl font-bold text-center mb-1">Our Services</h2>
          <p className="text-lg text-center mb-10 text-gray-600">
            The right decision for your marketing strategy
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {services.map((svc, i) => (
              <div
                key={i}
                className={`flex flex-col items-center p-6 bg-[#D9ECFF] rounded-lg shadow hover:shadow-lg transition-all ${
                  svc.highlight ? "border-2 border-blue-400" : ""
                }`}
              >
                <img src={svc.icon} alt={svc.title} className="mb-5 w-16 h-16 object-contain" />
                <h3 className="font-semibold text-2xl text-center mb-2">{svc.title}</h3>
                <p className="text-gray-700 text-center mb-5">{svc.desc}</p>
                <button className="mt-auto px-4 py-2 bg-[#A5AAFF] text-black rounded hover:bg-purple-500 transition">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AGENCY OVERVIEW (full-bleed bg, content aligned to NAV_CONTAINER) */}
      <section
        className="w-full"
        style={{
          backgroundImage: `url(${banner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className={`${NAV_CONTAINER} ${VSPACE}`}>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-1">
              <span className="text-xs font-semibold text-gray-400">WHO WE ARE</span>
              <h2 className="text-[#034552] text-[45px] font-semibold">Agency Overview</h2>
              <p className="text-[#034552] text-[18px] font-semibold">
                At bimouse.agency, we transform your data into powerful insights using Power BI, Excel, and Tableau.
                Our team designs interactive, visually striking dashboards that simplify decision-making.
              </p>
              <button className="bg-teal-700 text-white px-5 py-2 rounded-lg font-semibold hover:bg-teal-600 transition w-max">
                DISCOVER MORE
              </button>
            </div>

            <div className="relative flex-1 flex items-center justify-center">
              <div className="absolute -top-6 left-0 -translate-x-2 bg-[#A5AAFF] text-white font-bold rounded-lg px-5 py-3 text-3xl">
                5+
              </div>
              <img src={cardimg10} alt="cert" className="max-w-full h-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* CORE VALUES (full-bleed bg + overlay, content aligned to NAV_CONTAINER) */}
      <section
        className="relative w-full overflow-hidden"
        style={{
          backgroundImage: `url(${cardimg11})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg,#034753 0%,rgba(21,96,95,0.88) 10%,rgba(21,96,95,0.68) 70%,rgba(21,96,95,0.30) 88%,rgba(21,96,95,0) 100%)",
          }}
          aria-hidden="true"
        />
        <div className={`${NAV_CONTAINER} ${VSPACE} relative`}>
          <h3 className="text-white text-[25px] font-semibold mb-5">Core Values</h3>
          <div className="space-y-5 max-w-2xl">
            <ValueRow
              icon={cardimg12}
              title="Innovation"
              text="We push boundaries to create forward–thinking dashboards and visualizations using Power BI, Tableau, and Excel."
            />
            <ValueRow
              icon={cardimg14}
              title="Quality"
              text="Our solutions are built to perform, focusing on accuracy, scalability, and actionable insights."
            />
            <ValueRow
              icon={cardimg13}
              title="Insight"
              text="We help businesses leverage data to make smarter decisions and achieve measurable results."
            />
          </div>
        </div>
      </section>

      {/* PLANS */}
      <section className="bg-white">
        <div className={`${NAV_CONTAINER} ${VSPACE}`}>
          <div className="mx-auto flex max-w-5xl flex-col gap-8 md:flex-row md:justify-center">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className="border-2 border-[#C7F2E9] bg-[#E9FFFB] rounded-xl shadow-md flex flex-col items-center px-8 py-8 hover:scale-[1.01] transition"
                style={{ ...CARD_DIM, minWidth: CARD_DIM.width, minHeight: CARD_DIM.height }}
              >
                <div className="flex w-full items-center justify-center">
                  <div className="rounded-full" style={{ width: 52, height: 52, background: "#5AB7F7", marginBottom: 18, marginTop: 4 }} />
                </div>
                <div className="w-full text-center text-[28px] font-bold mb-2">{plan.name}</div>
                <div className="w-full text-[15px]">
                  Save up to 10% <span className="text-[#10B98A] underline">with Subscribe to Save?</span>
                </div>
                <div className="w-full mt-1 text-[16px]">
                  <span className="font-bold">{plan.title}</span> {plan.desc}
                </div>
                <div className="w-full text-center text-[38px] font-bold mb-4">{plan.price}</div>
                <button className="w-full rounded bg-[#195D6A] py-2 text-[20px] font-bold text-white hover:bg-[#138E89] mb-4">
                  Continue
                </button>
                <div className="w-full text-[16px] font-bold mb-2">• {plan.delivery}</div>
                <ul className="ml-3 w-full text-[15px]">
                  {plan.details.map((d, i) => (
                    <li key={i}>– {d}</li>
                  ))}
                </ul>
                <div style={{ flexGrow: 1 }} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

function ValueRow({ icon, title, text }) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-20 w-20 items-center justify-center">
        <img src={icon} alt="" className="h-[72px] w-[72px] object-contain" />
      </div>
      <div>
        <div className="text-[22px] font-semibold text-white">{title}</div>
        <p className="text-[13px] leading-tight text-white/90">{text}</p>
      </div>
    </div>
  );
}

export default Services;
