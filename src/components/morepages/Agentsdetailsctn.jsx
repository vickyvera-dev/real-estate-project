import React from "react";
import {
  BsAward,
  BsBuilding,
  BsCircleFill,
  BsClockFill,
  BsCurrencyDollar,
  BsEnvelopeFill,
  BsFacebook,
  BsGem,
  BsGeoAltFill,
  BsGraphUpArrow,
  BsHeartFill,
  BsHouseDoorFill,
  BsHouseHeart,
  BsInstagram,
  BsLinkedin,
  BsPatchCheckFill,
  BsPeopleFill,
  BsSend,
  BsSpeedometer2,
  BsStarFill,
  BsTelephoneFill,
  BsTrophyFill,
  BsWhatsapp,
  BsYoutube,
} from "react-icons/bs";

export default function Agentsdetailsctn() {
  return (
    <div>
      <section id="agent-profile" class="agent-profile section">
        {/* ===== TOP SECTION ===== */}
        <div
          className="text-center py-20 px-6 sm:px-10 md:px-16 lg:px-28 pt-36"
          data-aos="zoom-in"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-blue-950">
            Agent Profiles
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
                  Agent Profiles
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div
          className="max-w-7xl mx-auto px-4 py-16"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {/* ================= AGENT PROFILE CARD ================= */}
          <div className="relative bg-white rounded-2xl shadow-md shadow-gray-300 overflow-hidden">
            {/* Cover Image */}
            <div className="h-64 w-full">
              <img
                src="images/property-exterior-4.webp"
                alt="Background"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Profile Info */}
            <div className="relative px-6 pt-20 pb-6">
              {/* Avatar + Status */}
              <div className="absolute -top-16 left-6 flex items-baseline gap-6">
                <img
                  src="images/agent-7.webp"
                  alt="Agent"
                  className="w-32 h-32 md:w-40 md:h-40 rounded-2xl border-4 border-white object-cover shadow-lg"
                />

                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-lg">
                  <BsCircleFill size={14} className="text-green-600" />
                  <span className="font-bold text-teal-900">Available</span>
                </div>
              </div>

              {/* Name & Credentials */}
              <h1 className="text-4xl font-bold mt-18 text-teal-900">
                Marcus Johnson
              </h1>
              <div className="flex flex-row items-center gap-6">
                <p className="text-teal-600 mt-6 mb-6 font-bold text-lg">
                  Licensed Real Estate Professional
                </p>

                <div className="flex items-center gap-2 text-green-600 mt-1 px-4 py-2 rounded-full bg-teal-100 shadow-lg">
                  <BsPatchCheckFill size={18} className="text-teal-700" />
                  <span className="font-medium text-teal-700">
                    Verified Agent
                  </span>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-4 w-[50%]">
                <div className="flex flex-col items-center text-center">
                  <p className="text-xl font-bold text-gray-700">4.9</p>
                  <div className="flex gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <BsStarFill
                        key={i}
                        size={15}
                        className="text-yellow-400"
                      />
                    ))}
                  </div>
                </div>
                <div className="flex flex-col items-center text-center">
                  <p className="text-xl font-bold text-gray-700">156</p>
                  <p className="text-sm text-gray-500">Properties Sold</p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <p className="text-xl font-bold text-gray-700">12+</p>
                  <p className="text-sm text-gray-500">Years Experience</p>
                </div>
              </div>
            </div>
          </div>

          {/* ================= MAIN CONTENT GRID ================= */}
          <div className="grid grid-cols-1 lg:grid-cols-[70%_30%] gap-10 mt-16">
            {/* ================= LEFT CONTENT ================= */}
            <div className="space-y-12">
              {/* About */}
              <section className="shadow-lg bg-white p-8 rounded-2xl space-y-6">
                <div className="flex flex-col mt-4 gap-2 mb-6">
                  <h3 className="text-3xl text-[#163535] mt-6 font-medium">
                    Professional Summary
                  </h3>
                  <div className="h-1 w-15 bg-teal-600"></div>
                </div>

                <p className="text-gray-700 mb-4 text-[16px]">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                  quia voluptas sit aspernatur aut odit aut fugit.
                </p>
                <p className="text-gray-700 text-[16px]">
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui
                  blanditiis praesentium voluptatum deleniti atque corrupti quos
                  dolores et quas molestias excepturi sint occaecati cupiditate
                  non provident, similique sunt in culpa qui officia deserunt
                  mollitia animi.
                </p>

                <div className="mt-6 p-6 bg-gray-100 rounded-xl font-semibold italic border-l-5 border-l-teal-600 text-lg text-[#163535]">
                  "My mission is to transform property transactions into
                  seamless experiences that exceed expectations."
                </div>
              </section>

              {/* Career Highlights */}
              <section className="shadow-lg bg-white p-8 rounded-2xl space-y-6">
                {/* Section Header */}
                <div className="flex flex-col mt-4 gap-2 mb-6">
                  <h3 className="text-3xl text-[#163535] mt-6 font-medium">
                    Career Highlights
                  </h3>
                  <div className="h-1 w-15 bg-teal-600"></div>
                </div>

                {/* Timeline */}
                <div className="relative pl-4">
                  {/* VERTICAL CONNECTING LINE */}
                  <div className="absolute left-[28px] top-[14px] bottom-[86px] w-[3px] bg-teal-600"></div>

                  <div className="space-y-12">
                    {/* ITEM 2023 */}
                    <div className="relative">
                      <div className="absolute left-0 top-0 w-7 h-7 rounded-full bg-teal-700 border-4 border-white shadow-[0_0_0_2px_theme(colors.teal.700)] z-50"></div>

                      <div className="pl-12">
                        <span className="text-sm text-white inline-flex items-center justify-center px-4 py-1 rounded-full bg-teal-700">
                          2023
                        </span>
                        <h5 className="font-semibold mt-2 text-xl">
                          Top 3% Agent Recognition
                        </h5>
                        <p className="text-gray-600 mt-1">
                          Recognized as one of the top-performing agents in the
                          metropolitan area with $18M+ in sales volume.
                        </p>
                      </div>
                    </div>
                    {/* ITEM 2021 */}
                    <div className="relative">
                      <div className="absolute left-0 top-0 w-7 h-7 rounded-full bg-teal-700 border-4 border-white shadow-[0_0_0_2px_theme(colors.teal.700)] z-50"></div>

                      <div className="pl-12">
                        <span className="text-sm text-white inline-flex items-center justify-center px-4 py-1 rounded-full bg-teal-700">
                          2021
                        </span>
                        <h5 className="font-semibold mt-2 text-xl">
                          Luxury Market Specialist
                        </h5>
                        <p className="text-gray-600 mt-1">
                          Completed advanced certification in luxury property
                          marketing and client relations.
                        </p>
                      </div>
                    </div>

                    {/* ITEM 2018 */}
                    <div className="relative">
                      <div className="absolute left-0 top-1 w-7 h-7 rounded-full bg-teal-700 border-4 border-white shadow-[0_0_0_2px_theme(colors.teal.700)]"></div>
                      <div className="pl-12">
                        
                        <span className="text-sm text-white inline-flex items-center justify-center px-4 py-1 rounded-full bg-teal-700">
                          {" "}
                          2018{" "}
                        </span>{" "}
                        <h5 className="font-semibold mt-2 text-xl">
                          Senior Agent Promotion
                        </h5>{" "}
                        <p className="text-gray-600 mt-1">
                          {" "}
                          Promoted to senior agent position after consistently
                          exceeding sales targets and client satisfaction
                          scores.{" "}
                        </p>{" "}
                      </div>{" "}
                    </div>
                  </div>
                </div>
              </section>

              {/* Service Areas */}
              <section className="shadow-lg bg-white p-8 rounded-2xl space-y-6">
                <div className="flex flex-col mt-4 gap-2 mb-6">
                  <h3 className="text-3xl text-[#163535] mt-6 font-medium">
                    Service Areas & Expertise
                  </h3>
                  <div className="h-1 w-15 bg-teal-600"></div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="p-5 bg-teal-50 rounded-xl duration-500 ease-in-out transition-all hover:shadow-2xl hover:shadow-gray-300 hover:scale-105 flex flex-row items-center gap-4">
                    <BsBuilding size={28} className="text-teal-700" />
                    <div>
                      <h5 className="font-semibold text-xl text-[#163535]">
                        Downtown District
                      </h5>
                      <p className="text-gray-600 text-sm">
                        High-rise condos and urban lofts
                      </p>
                    </div>
                  </div>

                  <div className="p-5 bg-teal-50 rounded-xl duration-500 ease-in-out transition-all hover:shadow-2xl hover:shadow-gray-300 hover:scale-105 flex flex-row items-center gap-4">
                    <BsHouseHeart size={28} className="text-teal-700" />
                    <div>
                      <h5 className="font-semibold text-xl text-[#163535]">
                        Suburban Communities
                      </h5>
                      <p className="text-gray-600 text-sm">Family homes</p>
                    </div>
                  </div>

                  <div className="p-5 bg-teal-50 rounded-xl duration-500 ease-in-out transition-all hover:shadow-2xl hover:shadow-gray-300 hover:scale-105 flex flex-row items-center gap-4">
                    <BsGem size={28} className="text-teal-700" />
                    <div>
                      <h5 className="font-semibold text-xl text-[#163535]">
                        Luxury Properties
                      </h5>
                      <p className="text-gray-600 text-sm">Premium estates</p>
                    </div>
                  </div>

                  <div className="p-5 bg-teal-50 rounded-xl duration-500 ease-in-out transition-all hover:shadow-2xl hover:shadow-gray-300 hover:scale-105 flex flex-row items-center gap-4">
                    <BsGraphUpArrow size={28} className="text-teal-700" />
                    <div>
                      <h5 className="font-semibold text-xl text-[#163535]">
                        Investment Properties
                      </h5>
                      <p className="text-gray-600 text-sm">
                        Commercial &amp; rentals
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            </div>

            {/* ================= RIGHT SIDEBAR ================= */}
            <aside className="space-y-8">
              {/* Contact Card */}
              <div className="rounded-2xl p-6 space-y-6 bg-white shadow-lg">
                <h4 className="font-semibold text-2xl text-[#163535]">
                  Let's Connect
                </h4>

                {/* Contact Methods */}
                <div className="space-y-4">
                  <a
                    href="tel:+15556789012"
                    className="flex items-center gap-4 p-4 rounded-xl bg-teal-700 hover:-translate-y-1 ease-in-out duration-300 transition"
                  >
                    <BsTelephoneFill size={18} className="text-white" />
                    <div>
                      <span className="block text-sm font-semibold text-white">
                        Call Now
                      </span>
                      <span className="text-sm text-white">
                        +1 (555) 678-9012
                      </span>
                    </div>
                  </a>

                  <a
                    href="mailto:marcus.johnson@example.com"
                    className="flex items-center gap-4 p-4 rounded-xl border border-gray-100 bg-gray-100 hover:border-teal-600 transition-all ease-in-out duration-300 hover:-translate-y-1 hover:bg-teal-50"
                  >
                    <BsEnvelopeFill size={18} />

                    <div>
                      <span className="block text-sm font-semibold">Email</span>
                      <span className="text-sm text-gray-600">
                        marcus.johnson@example.com
                      </span>
                    </div>
                  </a>

                  <a
                    href="#"
                    className="flex items-center gap-4 p-4 rounded-xl border border-gray-100 bg-gray-100 hover:border-teal-600 transition-all ease-in-out duration-300 hover:-translate-y-1 hover:bg-teal-50"
                  >
                    <BsWhatsapp size={18} />
                    <div>
                      <span className="block text-sm font-semibold">
                        WhatsApp
                      </span>
                      <span className="text-sm text-gray-600">
                        Quick messaging
                      </span>
                    </div>
                  </a>
                </div>

                {/* Social Links */}
                <div>
                  <h5 className="font-semibold text-2xl text-[#163535] mb-3">
                    Follow Me
                  </h5>

                  <div className="flex gap-5 text-gray-600">
                    <a
                      href="#"
                      className="p-2 rounded-lg bg-gray-200 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:bg-teal-700 hover:text-white"
                    >
                      <BsLinkedin />
                    </a>
                    <a
                      href="#"
                      className="p-2 rounded-lg bg-gray-200 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:bg-teal-700 hover:text-white"
                    >
                      <BsInstagram />
                    </a>

                    <a
                      href="#"
                      className="p-2 rounded-lg bg-gray-200 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:bg-teal-700 hover:text-white"
                    >
                      <BsFacebook />
                    </a>

                    <a
                      href="#"
                      className="p-2 rounded-lg bg-gray-200 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:bg-teal-700 hover:text-white"
                    >
                      <BsYoutube />
                    </a>
                  </div>
                </div>
              </div>

              {/* Office Info */}
              <div className="rounded-2xl p-6 bg-white shadow-lg">
                <h4 className="font-semibold text-2xl text-[#163535] mb-3">
                  Quick Inquiry
                </h4>

                <form
                  action="forms/contact.php"
                  method="post"
                  className="space-y-4"
                >
                  <div>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Your Name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-300"
                    />
                  </div>

                  <div>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="Email Address"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-300"
                    />
                  </div>

                  <div>
                    <select
                      name="subject"
                      required
                      className="w-full px-4 py-2 border border-gray-300 appearance-none rounded-md bg-white focus:outline-none focus:ring-1 focus:ring-gray-300"
                    >
                      <option value="">I'm interested in...</option>
                      <option value="Buying Property">Buying Property</option>
                      <option value="Selling Property">Selling Property</option>
                      <option value="Investment Opportunities">
                        Investment Opportunities
                      </option>
                      <option value="Free Consultation">
                        Free Consultation
                      </option>
                    </select>
                  </div>

                  <div>
                    <textarea
                      name="message"
                      rows="3"
                      placeholder="Brief message..."
                      className="w-full px-4 py-2 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-1 focus:ring-gray-300"
                    ></textarea>
                  </div>

                  {/* Status Messages (optional JS control) */}
                  <div className="hidden text-sm text-gray-500">Loading...</div>
                  <div className="hidden text-sm text-red-600">
                    Error sending message
                  </div>
                  <div className="hidden text-sm text-green-600">
                    Your message has been sent. Thank you!
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 bg-teal-700 text-white text-sm font-bold py-4 rounded-md hover:-translate-y-1 ease-in-out duration-300 transition"
                    >
                      <BsSend size={18} />
                      Send Message
                    </button>
                  </div>
                </form>
              </div>

              <div className="rounded-2xl p-6 bg-white shadow-lg">
                <h4 className="font-semibold text-2xl text-[#163535] mb-3">
                  Recent Achievements
                </h4>

                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-4 bg-gray-100 rounded-xl">
                    <div className="text-white bg-teal-600 p-2 rounded-lg text-xl">
                      <BsAward size={22} />
                    </div>
                    <div>
                      <h6 className="font-semibold">Excellence Award 2023</h6>
                      <span className="text-sm text-gray-600">
                        Metropolitan Real Estate Board
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-gray-100 rounded-xl">
                    <div className="text-white bg-teal-600 p-2 rounded-lg text-xl">
                      <BsTrophyFill size={20} />
                    </div>
                    <div>
                      <h6 className="font-semibold">Top Sales Performance</h6>
                      <span className="text-sm text-gray-600">
                        $18M+ Volume Last Year
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-gray-100 rounded-xl">
                    <div className="text-white bg-teal-600 p-2 rounded-lg text-xl">
                      <BsPeopleFill size={22} />
                    </div>
                    <div>
                      <h6 className="font-semibold">Client Satisfaction</h6>
                      <span className="text-sm text-gray-600">
                        98% Positive Reviews
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl p-6 bg-white shadow-lg">
                <h4 className="font-semibold text-2xl text-[#163535] mb-3">
                  Office Location
                </h4>

                <div className="space-y-4">
                  {/* Address */}
                  <div className="flex items-start gap-4">
                    <BsGeoAltFill size={18} className="text-teal-700 mt-2" />
                    <div className="text-sm text-gray-700">
                      <span className="block font-semibold text-gray-900 text-lg">
                        Premier Realty Group
                      </span>
                      <span className="block">
                        789 Business Plaza, Suite 200
                        <br />
                        Miami, FL 33101
                      </span>
                    </div>
                  </div>

                  {/* Business Hours */}
                  <div className="flex items-start gap-4">
                    <BsClockFill size={18} className="text-teal-700 mt-2" />
                    <div className="text-sm text-gray-700">
                      <span className="block font-semibold text-gray-900 text-lg">
                        Business Hours
                      </span>
                      <span className="block">
                        Mon – Fri: 9:00 AM – 7:00 PM
                        <br />
                        Weekends: By Appointment
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </aside>
          </div>

          <div
            className="mt-16 p-8 bg-white shadow-lg rounded-lg"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="flex items-center gap-4 p-5 bg-teal-50 transition-all duration-300 ease-in-out hover:shadow-2xl hover:scale-105 rounded-2xl shadow-sm">
                <div className="text-white bg-teal-800 rounded-lg p-4 text-2xl">
                  <BsHouseDoorFill size={26} />
                </div>
                <div>
                  <span className="block text-3xl font-bold">156</span>
                  <span className="text-sm text-gray-600">Properties Sold</span>
                </div>
              </div>

              <div className="flex items-center gap-4 p-5 bg-teal-50 transition-all duration-300 ease-in-out hover:shadow-2xl hover:scale-105 rounded-2xl shadow-sm">
                <div className="text-white bg-teal-800 rounded-lg p-4 text-2xl">
                  <BsCurrencyDollar size={26} />
                </div>
                <div>
                  <span className="block text-3xl font-bold">$45M+</span>
                  <span className="text-sm text-gray-600">
                    Total Sales Volume
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-4 p-5 bg-teal-50 transition-all duration-300 ease-in-out hover:shadow-2xl hover:scale-105 rounded-2xl shadow-sm">
                <div className="text-white bg-teal-800 rounded-lg p-4 text-2xl">
                  <BsHeartFill size={26} />
                </div>
                <div>
                  <span className="block text-3xl font-bold">98%</span>
                  <span className="text-sm text-gray-600">
                    Client Satisfaction
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-4 p-5 bg-teal-50 transition-all duration-300 ease-in-out hover:shadow-2xl hover:scale-105 rounded-2xl shadow-sm">
                <div className="text-white bg-teal-800 rounded-lg p-4 text-2xl">
                  <BsSpeedometer2 size={26} />
                </div>
                <div>
                  <span className="block text-3xl font-bold">28</span>
                  <span className="text-sm text-gray-600">
                    Avg. Days on Market
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
