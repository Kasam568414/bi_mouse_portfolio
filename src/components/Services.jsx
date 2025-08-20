import React from 'react'
import cardimg1 from "../assets/img1.png"
import cardimg2 from "../assets/img2.png"
import cardimg3 from "../assets/img3.png"
import cardimg4 from "../assets/img4.png"
import cardimg5 from "../assets/img5.png"
import cardimg6 from "../assets/img6.png"
import cardimg7 from "../assets/img7.png"
import cardimg8 from "../assets/img8.png"
import cardimg9 from "../assets/img9.png"
import cardimg10 from "../assets/Sadiya gig image-2 2.png"




const Services = () => {


  const services = [
  {
    title: "Creative Power BI Dashboard Design",
    desc: "Design creative and interactive dashboards for clear insights.",
    icon: cardimg1,
  },
  {
    title: "Tableau & Looker Studio Visualization",
    desc: "Build compelling visualizations to track performance.",
    icon: cardimg2,
  },
  {
    title: "Excel-Based KPI Dashboards",
    desc: "Create Excel-based dashboards for key metrics at a glance.",
    icon: cardimg3,
  },
  {
    title: "Data Modeling, Cleaning & Prep",
    desc: "Clean, structure, and model data for analysis.",
    icon: cardimg4,
  },
  {
    title: "Performance Dashboards",
    desc: "Monitor business performance with actionable visuals.",
    icon: cardimg5,
  },
  {
    title: "Automated Reporting",
    desc: "Generate reports automatically from Excel, SQL, or Google Sheets.",
    icon: cardimg6,
    highlight: true,
  },
  {
    title: "Interactive Features",
    desc: "Add filters, slicers, and drilldowns for dynamic insights.",
    icon: cardimg7,
  },
  {
    title: "Real-Time Tracking",
    desc: "Track KPIs and insights in real time.",
    icon: cardimg8,
  },
  {
    title: "Branded Dashboards",
    desc: "Design multi-page dashboards tailored to your brand.",
    icon: cardimg9,
  },
];

  return (
  <section className="py-12 bg-white">
    <div className="max-w-fit mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-1">Our Services</h2>
      <p className="text-lg text-center mb-10 text-gray-600">
        The right decision for your marketing strategy
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {services.map((svc, i) => (
          <div
            key={i}
            className={`flex flex-col items-center p-6 bg-[#D9ECFF] rounded-lg shadow hover:shadow-lg transition-all
              ${svc.highlight ? "border-2 border-blue-400" : ""}`}
          >
            <img src={svc.icon} alt={svc.title} className="text-5xl mb-5 font-medium (500)" />
            <h3 className="font-semibold  text-2xl text-center mb-2">{svc.title}</h3>
            <p className="text-gray-700 text-center mb-5">{svc.desc}</p>
            <button className="mt-auto px-4 py-2 bg-[#A5AAFF] text-black rounded hover:bg-purple-500 transition">
              Learn More
            </button>
          </div>
        ))}
      </div>

      
    </div>



    <div 
  className="flex items-center justify-center px-4" 
  style={{
    backgroundImage: "url('src/assets/Rectangle 3666@2x.png')",
    backgroundSize: "cover",
    backgroundPosition: "center"
  }}>
  <div className="flex flex-col md:flex-row p-8 md:p-12 gap-8">
    {/* Left Side: Agency Overview */}
    <div className="flex-1 flex flex-col justify-between">
      <span className="text-xs font-semibold text-gray-400 mb-2">WHO WE ARE</span>
      <h2 className="text-[#034552] text-[45px] font-semibold mb-0">Agency Overview</h2>
      <p className="text-[#034552] text-[18px] font-semibold mt-2 mb-6">
        At bimouse.agency, we transform your data into powerful insights using Power BI, Excel, and Tableau.
        Our team designs interactive, visually striking dashboards that simplify decision-making, reveal trends, and drive business growth.
      </p>
      <button className="bg-teal-700 text-white px-5 py-2 rounded-lg font-semibold hover:bg-teal-600 transition w-max">
        DISCOVER MORE
      </button>
    </div>

    {/* Right Side: Certification Card */}
    <div className="flex-1 flex flex-col items-center justify-center relative">
      {/* Badge / experience */}
      <div className="absolute -top-6 left-1 flex items-center gap-2">
        <span className="bg-[#A5AAFF] text-white font-bold rounded-lg px-5 py-5 text-5xl ">5+</span>
      </div>
      {/* Card Content image  */}
      <div>
        <img src={cardimg10} alt="" />
      </div>
      {/* Additional content can be added below */}
    </div>
  </div>
</div>

  </section>
  )
}

export default Services