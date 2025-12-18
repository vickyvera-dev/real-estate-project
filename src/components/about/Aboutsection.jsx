import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  BsAward,
  BsGeoAlt,
  BsHeartFill,
  BsHouseHeart,
  BsKey,
} from "react-icons/bs";
import CountUp from "react-countup";

function Aboutsection() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
      easing: "ease-in-out",
    });
  }, []); 

  return (
    <div className="w-full bg-white border-b border-b-gray-300">
      {/* ===== TOP SECTION ===== */}
      <div
        className="text-center py-20 px-6 sm:px-10 md:px-16 lg:px-28 pt-36"
        data-aos="zoom-in"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-blue-950">
          About
        </h1>
        <p className="text-gray-700 text-base sm:text-lg md:text-xl max-w-4xl mx-auto mt-4 leading-relaxed">
          Odio et unde deleniti. Officiis quo odio sint voluptas consequatur ut
          a odio voluptatem. Sit dolorum debitis veritatis natus dolores. Quasi
          ratione sint dolorem.
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
                About
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* ===== DREAM HOME SECTION ===== */}
      <div className="bg-gray-100 w-full py-16 px-6 lg:px-24 mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 justify-items-center">
          {/* LEFT SIDE */}
          <div data-aos="fade-right">
            <button className="px-4 py-2 bg-gray-200 border border-gray-300 text-teal-700 rounded-full flex items-center gap-2 text-xs font-semibold">
              <BsHouseHeart size={18} />
              <span>Your Trusted Real Estate Partner</span>
            </button>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mt-6 text-gray-800 leading-tight">
              Building Dreams, Creating Homes Since 2010
            </h1>

            <p className="text-gray-600 mt-4 leading-7">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat.
            </p>

            <p className="text-gray-500 mt-3 text-sm leading-6">
              Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et
              quasi architecto beatae vitae dicta sunt explicabo.
            </p>

            {/* Quote */}
            <div className="flex items-start gap-3 mt-8 border-l-4 border-teal-700 py-6 px-4 rounded-l-xl">
              <img
                src="/images/person-m-9.webp"
                alt="CEO"
                className="w-14 h-14 rounded-full object-cover"
              />

              <div>
                <p className="text-sm text-gray-500 italic mb-3">
                  "Neque porro quisquam est qui dolorem ipsum quia dolor sit
                  amet consectetur."
                </p>
                <p className="font-medium">Michael Thompson</p>
                <p className="text-xs text-gray-500">Founder & CEO</p>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="relative w-full" data-aos="fade-left">
            <div className="relative w-full rounded-2xl shadow-md shadow-gray-300/50">
              <img
                src="/images/property-exterior-7.webp"
                className="rounded-2xl object-cover w-full lg:h-[70vh] h-[55vh]"
                alt="Premium Property"
              />

              {/* Floating small image */}
              <div className="absolute -bottom-10 -left-6 z-20">
                <img
                  src="/images/property-interior-6.webp"
                  className="w-56 h-40 rounded-2xl border-4 border-white shadow-lg object-cover"
                  alt="Interior"
                />
              </div>

              {/* Tag box */}
              <div className="flex bg-amber-50 rounded-2xl py-4 px-8 absolute right-5 top-5 flex-col shadow-md z-20 text-center">
                <span className="text-teal-700 font-bold text-2xl">14+</span>
                <span className="text-gray-600 text-sm font-medium">
                  Years of Excellence
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      

      {/* ===== STATS SECTION ===== */}
      <div className="max-w-7xl mx-auto mt-15 h-auto px-4" data-aos="fade-up" data-aos-delay="350">
        <div className="flex lg:flex-row flex-col gap-35 py-16 bg-gray-100 items-center justify-center rounded-2xl border border-gray-300">
          {/* ===== 1. PROPERTIES SOLD ===== */}
          <div className="flex flex-col items-center gap-3">
            <span className="p-8 bg-green-100 text-teal-600 rounded-2xl transition-all ease-in-out duration-300 hover:-translate-y-1 hover:text-white hover:bg-teal-600">
              <BsKey size={32} />
            </span>

            <div className="text-left">
              <h2 className="text-5xl font-bold text-gray-700">
                2<CountUp end={850} duration={3} />+
              </h2>

              <span className="text-gray-400 font-medium text-[14px] tracking-wide mt-4">
                PROPERTIES SOLD
              </span>
            </div>
          </div>

          {/* ===== 2. CLIENT SATISFACTION ===== */}
          <div className="flex flex-col items-center gap-3">
            <span className="p-8 bg-green-100 text-teal-600 rounded-2xl transition-all ease-in-out duration-300 hover:-translate-y-1 hover:text-white hover:bg-teal-600">
              <BsHeartFill size={32} />
            </span>

            <div className="text-center">
              <h2 className="text-5xl font-bold text-gray-700">
                <CountUp end={98} duration={3} />%
              </h2>

              <span className="text-gray-400 font-medium text-[14px] tracking-wide mt-4">
                CLIENT SATISFACTION
              </span>
            </div>
          </div>

          {/* ===== 3. CITIES COVERED ===== */}
          <div className="flex flex-col items-center gap-3">
            <span className="p-8 bg-green-100 text-teal-600 rounded-2xl transition-all ease-in-out duration-300 hover:-translate-y-1 hover:text-white hover:bg-teal-600">
              <BsGeoAlt size={32} />
            </span>

            <div className="text-center">
              <h2 className="text-5xl font-bold text-gray-700">
                <CountUp end={35} duration={3} />+
              </h2>

              <span className="text-gray-400 font-medium text-[14px] tracking-wide mt-4">
                CITIES COVERED
              </span>
            </div>
          </div>

          {/* ===== 4. INDUSTRY AWARDS ===== */}
          <div className="flex flex-col items-center gap-3">
            <span className="p-8 bg-green-100 text-teal-600 rounded-2xl transition-all ease-in-out duration-300 hover:-translate-y-1 hover:text-white hover:bg-teal-600">
              <BsAward size={32} />
            </span>

            <div className="text-center">
              <h2 className="text-5xl font-bold text-gray-700">
                <CountUp end={127} duration={3} />+
              </h2>

              <span className="text-gray-400 font-medium text-[14px] tracking-wide mt-4">
                INDUSTRY AWARDS
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="py-16 mt-8">
        <div className="flex justify-center flex-col">
          <h2 className="text-4xl text-gray-700 text-center">
            Our Journey of Excellence
          </h2>
          <p className="text-center max-w-2xl mx-auto text-lg text-gray-500 ">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium totam rem aperiam.
          </p>
        </div>

        <div className="max-w-6xl mx-auto mt-15 space-y-10 px-4" data-aos="fade-right" data-aos-delay="450">
          {/* === 2010 === */}
          <div className="flex lg:flex-row flex-row items-center gap-4">
            <span className="w-10 h-10 lg:w-28 lg:h-28 flex items-center justify-center rounded-full text-white bg-teal-600 text-sm lg:text-xl font-bold">
              2010
            </span>

            <div className="flex flex-col gap-1 lg:gap-2">
              <span className="text-xl lg:text-3xl font-semibold">
                Company Founded
              </span>
              <span className="text-sm lg:text-lg text-gray-500">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.
              </span>
            </div>
          </div>
       

          {/* === 2015 === */}
          <div className="flex lg:flex-row-reverse flex-row items-center lg:items-end gap-4" data-aos="fade-left" data-aos-delay="500">
            <span className="w-10 h-10 lg:w-28 lg:h-28 flex items-center justify-center rounded-full text-white bg-teal-600 text-sm lg:text-xl font-bold">
              2015
            </span>

            <div className="flex flex-col gap-1 lg:gap-2 lg:text-right">
              <span className="text-xl lg:text-3xl font-semibold">
                1000th Property Milestone
              </span>
              <span className="text-sm lg:text-lg text-gray-500">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur.
              </span>
            </div>
          </div>

          {/* === 2020 === */}
          <div className="flex lg:flex-row flex-row items-center gap-4" data-aos="fade-right" data-aos-delay="550">
            <span className="w-10 h-10 lg:w-28 lg:h-28 flex items-center justify-center rounded-full text-white bg-teal-600 text-sm lg:text-xl font-bold">
              2020
            </span>

            <div className="flex flex-col gap-1 lg:gap-2">
              <span className="text-xl lg:text-3xl font-semibold">
                Digital Innovation Launch
              </span>
              <span className="text-sm lg:text-lg text-gray-500">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum.
              </span>
            </div>
          </div>

          {/* === 2024 === */}
          <div className="flex lg:flex-row-reverse flex-row items-center lg:items-end gap-4" data-aos="fade-left" data-aos-delay="600">
            <span className="w-0 h-10 lg:w-28 lg:h-28 flex items-center justify-center rounded-full text-white bg-teal-600 text-sm lg:text-xl font-bold">
              2024
            </span>

            <div className="flex flex-col gap-1 lg:gap-2 lg:text-right">
              <span className="text-xl lg:text-3xl font-semibold">
                Regional Expansion
              </span>
              <span className="text-sm lg:text-lg text-gray-500">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum.
              </span>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-15 h-auto px-4"  data-aos="fade-up" data-aos-delay="450">
           <div className="flex justify-center flex-col">
          <h2 className="text-4xl text-gray-700 text-center">
            Meet Our Expert Team
          </h2>
          <p className="text-center max-w-2xl mx-auto text-lg text-gray-500 ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua quis nostrud exercitation.
          </p>
        </div>

        <div className="flex flex-row justify-center items-center mt-18 gap-6">
          <div className="p-10 rounded-lg bg-white transition-all duration-300 ease-in-out hover:-translate-y-3 hover:shadow flex flex-col justify-center items-center">
          <div className="">
            <img src="/images/agent-5.webp" alt="Our Agent" className="w-20 h-20 object-cover border-4 border-teal-700 rounded-full"/>
          </div>
          <h2 className="text-lg text-gray-700 font-bold mt-2">Sarah Martinez</h2>
          <p className="text-sm text-teal-700">Senior Property Advisor</p>
          </div>

           <div className="p-10 rounded-lg bg-white transition-all duration-300 ease-in-out hover:-translate-y-3 hover:shadow flex flex-col items-center justify-center">
          <div className="">
            <img src="/images/agent-4.webp" alt="Our Agent" className="w-20 h-20 object-cover border-4 border-teal-700 rounded-full"/>
          </div>
          <h2 className="text-lg text-gray-700 font-bold mt-2">David Chen</h2>
          <p className="text-sm text-teal-700">Investment Specialist</p>
          </div>
         
        </div>


<div className=" flex justify-center mt-8 transition-all ease-in-out duration-300 hover:-translate-y-1">
  <a href="/errorsection" className="py-3 px-6 rounded-full text-white bg-teal-600 font-bold text-lg">VIEW FULL TEAM</a>
</div>
        </div>
      </div>
    </div>
  );
}

export default Aboutsection;
