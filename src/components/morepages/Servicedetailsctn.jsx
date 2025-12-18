import { ArrowRight, Quote } from "lucide-react";
import React from "react";
import CountUp from "react-countup";

import {
  BsBuilding,
  BsGeoAlt,
  BsGraphUp,
  BsGraphUpArrow,
  BsHammer,
  BsHouseHeart,
  BsPeople,
  BsShieldCheck,
  BsTrophy,
} from "react-icons/bs";

function Servicedetailsctn() {
  const steps = [
    {
      number: "01",
      title: "Portfolio Assessment",
      text: "Comprehensive review of your financial goals, risk tolerance, and current investment portfolio to develop a customized strategy.",
    },
    {
      number: "02",
      title: "Market Research & Analysis",
      text: "Deep dive into local market conditions, growth projections, and investment opportunities that align with your criteria.",
    },
    {
      number: "03",
      title: "Property Identification",
      text: "Identification and evaluation of specific investment properties with detailed financial projections and risk assessments.",
    },
    {
      number: "04",
      title: "Due Diligence & Acquisition",
      text: "Complete property inspections, legal review, financing coordination, and seamless acquisition process management.",
    },
  ];

  return (
    <div className="border-b border-b-gray-300">
      <section id="service-details">
        {/* ===== TOP SECTION ===== */}
        <div
          className="text-center py-20 px-6 sm:px-10 md:px-16 lg:px-28 pt-36"
          data-aos="zoom-in"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-blue-950">
            Service Details
          </h1>
          <p className="text-gray-700 text-base sm:text-lg md:text-xl max-w-4xl mx-auto mt-4 leading-relaxed">
            Odio et unde deleniti. Officiis quo odio sint voluptas consequatur
            ut a odio voluptatem. Sit dolorum debitis veritatis natus dolores.
            Quasi ratione sint dolorem.
          </p>
        </div>

        {/* ===== BREADCRUMB ===== */}
        <div className="w-full bg-gray-100 py-5 px-6">
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-1 sm:ml-32">
            <ul className="flex gap-2 text-sm sm:text-base">
              <li className="text-teal-600">
                <a href="/">Home</a>
              </li>
              <li className="text-gray-600">
                /{" "}
                <a href="/about" className="hover:text-teal-600">
                  Service Details
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div
          className="max-w-7xl mx-auto px-4 mt-16 pb-8"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="grid grid-cols-1 lg:grid-cols-[70%_30%] gap-8 bg-white">
            {/* LEFT SECTION */}
            <div  className="order-2 lg:order-1">
              <div data-aos="fade-right" data-aos-delay="150">
                <button className="px-4 py-2 bg-gray-200 border border-gray-300 text-teal-700 rounded-full flex items-center gap-2 text-xs font-semibold">
                  Investment Services
                </button>

                <h1 className="text-5xl font-bold mt-4 mb-4">
                  Real Estate Investment Consulting
                </h1>

                <p className="text-lg text-gray-500">
                  Vestibulum ante ipsum primis in faucibus orci luctus et
                  ultrices posuere cubilia curae; Donec velit neque, auctor sit
                  amet aliquam vel, ullamcorper sit amet ligula. Proin eget
                  tortor risus. Curabitur non nulla sit amet nisl tempus
                  convallis quis ac lectus.
                </p>
              </div>

              {/* Investment Opportunities */}
              <div className="mt-10" data-aos="fade-up" data-aos-delay="200">
                <h3 className="text-2xl text-gray-800 font-bold">
                  Investment Opportunities
                </h3>

                <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-6 bg-white mt-6">
                  {/* 1 */}
                  <div className="p-8 bg-white shadow-lg rounded-2xl transition-all ease-in-out duration-300 hover:-translate-y-1.5">
                    <div className="p-4 rounded-2xl bg-teal-700 inline-block">
                      <BsBuilding size={28} className="text-white" />
                    </div>

                    <h4 className="my-6 text-lg text-gray-500">
                      Commercial Properties
                    </h4>

                    <p>
                      Office buildings, retail spaces, and industrial properties
                      with stable rental income potential.
                    </p>

                    <div className="py-4 mt-6 px-8 bg-teal-50 flex justify-between items-center">
                      <span className="text-xs">Avg. ROI:</span>
                      <span className="text-sm font-bold text-teal-700">
                        12-18%
                      </span>
                    </div>
                  </div>

                  {/* 2 */}
                  <div className="p-8 bg-white shadow-lg rounded-2xl transition-all ease-in-out duration-300 hover:-translate-y-1.5">
                    <div className="p-4 rounded-2xl bg-teal-700 inline-block">
                      <BsHouseHeart size={28} className="text-white" />
                    </div>

                    <h4 className="my-6 text-lg text-gray-500">
                      Residential Rentals
                    </h4>

                    <p>
                      Single-family homes and multi-unit properties in
                      high-demand residential markets.
                    </p>

                    <div className="py-4 mt-6 px-8 bg-teal-50 flex justify-between items-center">
                      <span className="text-xs">Avg. ROI:</span>
                      <span className="text-sm font-bold text-teal-700">
                        8-14%
                      </span>
                    </div>
                  </div>

                  {/* 3 */}
                  <div className="p-8 bg-white shadow-lg rounded-2xl transition-all ease-in-out duration-300 hover:-translate-y-1.5">
                    <div className="p-4 rounded-2xl bg-teal-700 inline-block">
                      <BsHammer size={28} className="text-white" />
                    </div>

                    <h4 className="my-6 text-lg text-gray-500">
                      Fix &amp; Flip Projects
                    </h4>

                    <p>
                      Short-term investment opportunities with renovation
                      potential for quick returns.
                    </p>

                    <div className="py-4 mt-6 px-8 bg-teal-50 flex justify-between items-center">
                      <span className="text-xs">Avg. ROI:</span>
                      <span className="text-sm font-bold text-teal-700">
                        20-35%
                      </span>
                    </div>
                  </div>

                  {/* 4 */}
                  <div className="p-8 bg-white shadow-lg rounded-2xl transition-all ease-in-out duration-300 hover:-translate-y-1.5">
                    <div className="p-4 rounded-2xl bg-teal-700 inline-block">
                      <BsGeoAlt size={28} className="text-white" />
                    </div>

                    <h4 className="my-6 text-lg text-gray-500">
                      Land Development
                    </h4>

                    <p>
                      Raw land and development opportunities in emerging growth
                      corridors.
                    </p>

                    <div className="py-4 mt-6 px-8 bg-teal-50 flex justify-between items-center">
                      <span className="text-xs">Avg. ROI:</span>
                      <span className="text-sm font-bold text-teal-700">
                        15-25%
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Investment Process */}
              <div className="mt-10" data-aos="fade-up" data-aos-delay="250">
                <h3 className="text-2xl text-gray-800 font-bold">
                  Our Investment Process
                </h3>

                <div className="relative lg:pl-10 md:pl-10 pl-4 mt-4">
                  {/* Vertical line */}
                  <div className="absolute lg:left-20 md:left-20 left-10 top-0 w-[3px] h-full bg-teal-600"></div>

                  <div className="space-y-12">
                    {steps.map((item, index) => (
                      <div key={index} className="relative flex gap-6">
                        {/* Marker */}
                        <div className="relative">
                          <div
                            className="w-12 h-12 flex items-center justify-center 
                              border-[3px] border-teal-600 rounded-full 
                              bg-white text-teal-700 font-bold
                              absolute z-10 lg:left-4 md:left-4"
                          >
                            {item.number}
                          </div>
                        </div>

                        {/* Content */}
                        <div className="bg-white shadow-md rounded-lg p-6 ml-6 -mt-5 relative">
                          <h5 className="text-lg font-semibold text-gray-800">
                            {item.title}
                          </h5>
                          <p className="text-gray-600 mt-1 text-[15px]">
                            {item.text}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Metrics */}
              <div className="mt-10" data-aos="fade-up" data-aos-delay="300">
                <h3 className="text-2xl text-gray-800 font-bold">
                  Client Success Metrics
                </h3>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
                  {/* 1 */}
                  <div className="border border-gray-300 p-8 rounded-2xl bg-white shadow">
                    <div className="flex items-center justify-center flex-col gap-4">
                      <span className="font-bold text-5xl text-teal-700">
                        <CountUp start={0} end={247} duration={2} />M
                      </span>
                    </div>
                    <div className="font-bold text-lg text-center mt-4">
                      Total Investments Managed
                    </div>
                    <div className="mt-4 text-sm text-gray-500 text-center">
                      Across all investment types
                    </div>
                  </div>

                  {/* 2 */}
                  <div className="border border-gray-300 p-8 rounded-2xl bg-white shadow">
                    <div className="flex items-center justify-center flex-col gap-4">
                      <span className="font-bold text-5xl text-teal-700">
                        <CountUp start={0} end={89} duration={2} />%
                      </span>
                    </div>
                    <div className="font-bold text-lg text-center mt-4">
                      Client Satisfaction Rate
                    </div>
                    <div className="mt-4 text-sm text-gray-500 text-center">
                      Based on annual surveys
                    </div>
                  </div>

                  {/* 3 */}
                  <div className="border border-gray-300 p-8 rounded-2xl bg-white shadow">
                    <div className="flex items-center justify-center flex-col gap-4">
                      <span className="font-bold text-5xl text-teal-700">
                        <CountUp start={0} end={156} duration={2} />
                      </span>
                    </div>
                    <div className="font-bold text-lg text-center mt-4">
                      Active Investment Projects
                    </div>
                    <div className="mt-4 text-sm text-gray-500 text-center">
                      Currently under management
                    </div>
                  </div>
                </div>
              </div>

              {/* Testimonials */}
              <div className="mt-10" data-aos="fade-up" data-aos-delay="350">
                <h3 className="text-2xl text-gray-800 font-bold">
                  Client Success Stories
                </h3>

                <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-6 mt-8">
                  {/* Card 1 */}
                  <div className="border-l-4 border-l-teal-700 rounded-2xl p-6 bg-white">
                    <div className="relative">
                      <span className="absolute top-4 -left-6 italic pr-4">
                        <Quote
                          size={17}
                          className="text-teal-700 fill-teal-700 ml-2"
                        />
                      </span>

                      <p className="italic ml-2">
                        "Thanks to their guidance, my real estate portfolio has
                        grown 340% in just three years. Their market insights
                        are invaluable."
                      </p>
                    </div>

                    <div className="flex flex-row gap-4 items-center mt-6">
                      <img
                        src="images/person-m-7.webp"
                        alt="Michael Chen"
                        className="object-cover rounded-full h-15 w-15"
                      />

                      <div>
                        <h6 className="text-lg text-gray-700 font-medium">
                          Michael Chen
                        </h6>
                        <span className="text-teal-700 text-sm">
                          Portfolio Value: $2.8M
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Card 2 */}
                  <div className="border-l-4 border-l-teal-700 rounded-2xl p-6 bg-white">
                    <div className="relative">
                      <span className="absolute top-4 -left-6 italic pr-4">
                        <Quote
                          size={17}
                          className="text-teal-700 fill-teal-700 ml-2"
                        />
                      </span>

                      <p className="italic ml-2">
                        "Professional, knowledgeable, and always available. They
                        found me three rental properties that consistently
                        outperform projections."
                      </p>
                    </div>

                    <div className="flex flex-row gap-4 items-center mt-6">
                      <img
                        src="images/person-f-12.webp"
                        alt="Jennifer Rodriguez"
                        className="object-cover rounded-full h-15 w-15"
                      />

                      <div>
                        <h6 className="text-lg text-gray-700 font-medium">
                          Jennifer Rodriguez
                        </h6>
                        <span className="text-teal-700 text-sm">
                          Portfolio Value: $1.4M
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT SECTION */}
            <div className="order-1 lg:order-2">
              <div>
                {/* Hero Image Card */}
                <div
                  className="service-hero"
                  data-aos="zoom-in"
                  data-aos-delay="150"
                >
                  <div className="overflow-hidden rounded-lg relative">
                    <img
                      src="images/property-interior-5.webp"
                      alt="Property Investment Service"
                      className="rounded-lg h-full w-full object-cover transition-all duration-300 hover:scale-125"
                    />
                  </div>

                  <div className="absolute bottom-4 left-3 py-2 px-4 bg-white rounded-full">
                    <div className="flex items-center gap-2">
                      <BsGraphUpArrow size={18} className="text-teal-700" />
                      <span className="text-sm text-teal-700 font-bold">
                        Premium Investment
                      </span>
                    </div>
                  </div>
                </div>

                {/* Quick Contact Card */}
                <div
                  className="p-8 bg-white shadow-lg rounded-lg mt-8 space-y-8"
                  data-aos="slide-up"
                  data-aos-delay="200"
                >
                  <div>
                    <h4 className="text-lg text-gray-800 font-bold text-center mb-6">Start Your Investment Journey</h4>
                    <p className="text-center text-gray-500 text-sm">
                      Get personalized advice from our investment specialists
                      today.
                    </p>
                  </div>

                  <form
                    action="forms/contact.php"
                    method="post"
                    className="space-y-6"
                  >
                    <input
                      type="hidden"
                      name="subject"
                      value="Investment Consultation"
                      className="w-full p-2 border border-gray-300 rounded-lg focus:ring-0 focus:outline-none"
                    />

                    <div className="form-group">
                      <input
                        type="text"
                        name="name"
                        className="w-full p-2 border border-gray-300 rounded-lg focus:ring-0 focus:outline-none"
                        placeholder="Full Name"
                        required
                      />
                    </div>

                    <div className="form-group">
                      <input
                        type="email"
                        name="email"
                       className="w-full p-2 border border-gray-300 rounded-lg focus:ring-0 focus:outline-none"
                        placeholder="Email Address"
                        required
                      />
                    </div>

                    <div className="form-group">
                      <input
                        type="tel"
                        name="phone"
                        className="w-full p-2 border border-gray-300 rounded-lg focus:ring-0 focus:outline-none"
                        placeholder="Phone Number"
                        required
                      />
                    </div>

                    <div className="form-group">
                      <select name="budget" className="w-full p-2 border border-gray-300 rounded-lg appearance-none focus:ring-0 focus:outline-none" required>
                        <option value="">Investment Budget Range</option>
                        <option value="100k-250k">$100k - $250k</option>
                        <option value="250k-500k">$250k - $500k</option>
                        <option value="500k-1m">$500k - $1M</option>
                        <option value="1m+">$1M+</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <textarea
                        name="message"
                        className="w-full p-2 border border-gray-300 rounded-lg focus:ring-0 focus:outline-none"
                        rows="3"
                        placeholder="Investment goals or questions..."
                      ></textarea>
                    </div>

                    

                    <button type="submit" className="w-full py-4 bg-teal-700 text-white font-semibold rounded-lg flex flex-row items-center gap-2 justify-center text-center">
                      <span>Get Free Consultation</span>
                      <ArrowRight/>                      
                    </button>
                  </form>
                </div>

                {/* Sidebar Highlights */}
               

                <div
                  className="border-l-4 border-l-teal-700 rounded-2xl p-6 mt-8 bg-teal-50"
                  data-aos="fade-up"
                  data-aos-delay="250"
                >
                  <h5 className="text-lg text-gray-800 font-bold mb-5">Why Choose Our Investment Services</h5>

                  <div className="space-y-4">
                    <div className="flex flex-row items-center gap-4">
                      <BsTrophy size={17} className="text-teal-700"/>
                      <span>20+ Years Market Experience</span>
                    </div>

                    <div className="flex flex-row items-center gap-2">
                      <BsGraphUp size={17} className="text-teal-700"/>
                      <span>15% Average ROI for Clients</span>
                    </div>

                    <div className="flex flex-row items-center gap-2">
                      <BsPeople size={17} className="text-teal-700"/>
                      <span>500+ Successful Investments</span>
                    </div>

                    <div className="flex flex-row items-center gap-2">
                      <BsShieldCheck size={17} className="text-teal-700"/>
                      <span>Licensed Investment Advisors</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Servicedetailsctn;
