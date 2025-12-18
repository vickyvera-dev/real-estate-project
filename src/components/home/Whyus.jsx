import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { ChevronDown, Search, Star } from "lucide-react";
import CountUp from "react-countup";
import {
  BsClock,
  BsClockFill,
  BsFillPeopleFill,
  BsGem,
  BsHouseHeart,
  BsMap,
  BsPlayCircleFill,
  BsShieldCheck,
  BsShieldFillCheck,
} from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Whyus() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      delay: 50,
    });
  }, []);
  return (
    <div className="w-full bg-white mt-30">
      {/*about home building dream section*/}

      <div className="bg-gray-100 w-full py-10 lg:px-22 lg:pl-26 px-6 ">
        <div>
          <div>
            <h1 className="text-3xl font-medium pb-2 relative text-[#1f2f31] text-center">
              Why Us
            </h1>
            <div
              className="relative w-45 mt-2 mx-auto mb-5"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="w-full h-[1px] bg-gray-400 relative"></div>
              <div className="absolute inset-y-0 w-16 h-1 bg-teal-600 translate-x-15 -translate-y-0.5 transform transform-transition"></div>
            </div>
            <p className="text-[18px] text-center mb-20 text-gray-500">
              Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
              consectetur velit
            </p>
          </div>
        </div>

        <div
          className="grid grid-cols-1 lg:grid-cols-[48%_50%] md:grid-cols-1 gap-30 lg:gap-10  md:gap-20 w-full  justify-items-center"
          data-aos="fade-right"
        >
          {/* ===== LEFT SECTION ===== */}
          <div
            className="relative w-full h-full flex justify-center items-center lg:mt-15"
            data-aos="fade-right"
            data-aos-delay="400"
          >
            {/* Outer wrapper */}
            <div className="relative w-full rounded-2xl shadow-md shadow-gray-300">
              {/* Image wrapper with hover scale */}
              <div className="overflow-hidden relative group rounded-2xl">
                {/* Scalable image */}
                <img
                  src="/images/property-exterior-10.webp"
                  alt="premium property"
                  className="rounded-2xl object-cover w-full lg:h-[70vh] h-[60vh] 
                 transition-all duration-300 ease-in-out 
                 group-hover:scale-125"
                />

                {/* Centered overlay */}
                <div className="absolute inset-0 flex items-center justify-center z-40">
                  <a
                    href="https://www.youtube.com/watch?v=Y7f98aduVJ8"
                    className="glightbox flex flex-row items-center gap-3"
                  >
                    <BsPlayCircleFill className="text-white text-6xl transition-transform duration-300 group-hover:scale-110" />
                    <span className="text-white text-lg font-bold">
                      Watch Our Story
                    </span>
                  </a>
                </div>
              </div>

              <div className="flex bg-amber-50 rounded-2xl py-6 px-10 absolute -bottom-12 -left-8 shadow-xl flex-row gap-4 items-center z-20">
                <span className="py-4 px-4 bg-teal-700 rounded-2xl">
                  <BsGem size={22} className="text-white" />
                </span>
                <div className="flex flex-col items-start">
                  <h2 className="font-medium text-teal-700 text-lg">
                    Premier Service
                  </h2>
                  <p className="text-gray-500 text-sm flex flex-col ">
                    <span>Luxury real estate</span>
                    <span>expertise since 2009</span>
                  </p>
                </div>
              </div>

              {/* Price Tag */}
              <div className="flex bg-teal-700 rounded-2xl py-8 px-4 absolute rotate-10 -right-5 -top-5 flex-col shadow-md z-20 text-center">
                <span className="text-white font-bold text-xl">15+</span>
                <span className="text-white text-lg font-medium">
                  Years Excellence
                </span>
              </div>

              <div className="flex bg-white rounded-2xl py-8 px-10 absolute rotate -right-5 -top-5 flex-col shadow-md z-20 text-center mt-36">
                <span className="text-gray-700 font-bold text-2xl">3.2K</span>
                <span className="text-gray-500 text-sm font-medium">
                  Happy Clients
                </span>
              </div>
            </div>
          </div>

          {/* ===== RIGHT SECTION ===== */}
          <div className="w-full" data-aos="fade-left" data-aos-delay="400">
            {/* Premium Button */}
            <div>
              <button className="px-4 py-2 bg-gray-200  text-teal-700 rounded-full flex items-center gap-2 text-sm font-bold">
                <Star size={18} className="text-teal-700 fill-teal-700" />

                <span>Why Elite Properties</span>
              </button>
            </div>

            {/* Title and Description */}
            <div className="mt-6">
              <h1 className="lg:text-5xl sm:text-4xl font-medium lg:text-left text-center text-gray-800 leading-tight  mb-6">
                Your Gateway to Exceptional Real Estate Experiences
              </h1>
              <p className="lg:text-lg lg:text-left text-center text-gray-500 leading-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation.
              </p>
              

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full mt-4">
                {/*1*/}
                <div className="flex rounded-2xl flex-row gap-4 items-center z-20" data-aos="fade-up" data-aos-delay="400">
                  <span className="py-4 px-4 bg-teal-700 rounded-2xl">
                    <FaLocationDot size={22} className="text-white" />
                  </span>
                  <div className="flex flex-col items-start">
                    <h2 className="font-medium text-teal-700 text-lg">
                      Prime Locations
                    </h2>
                    <p className="text-gray-500 text-sm">
                      Exclusive access to the most sought-after neighborhoods
                      and emerging markets.
                    </p>
                  </div>
                </div>
                   {/*2*/}
                <div className="flex rounded-2xl  flex-row gap-4 items-center z-20" data-aos="fade-up" data-aos-delay="450">
                  <span className="py-4 px-4 bg-teal-700 rounded-2xl">
                    <BsShieldFillCheck
                      size={22}
                      className="text-white fill-white"
                    />
                  </span>
                  <div className="flex flex-col items-start">
                    <h2 className="font-medium text-teal-700 text-lg">
                      Guaranteed Results
                    </h2>
                    <p className="text-gray-500 text-sm flex flex-col ">
                      Our proven track record ensures successful transactions
                      and satisfied clients.
                    </p>
                  </div>
                </div>
                 
                 {/*3*/}
                <div className="flex rounded-2xl flex-row gap-4 items-center z-20" data-aos="fade-up" data-aos-delay="500">
                  <span className="py-4 px-4 bg-teal-700 rounded-2xl">
                    <BsClockFill size={22} className="text-white fill-white" />
                  </span>
                  <div className="flex flex-col items-start">
                    <h2 className="font-medium text-teal-700 text-lg">
                      Fast Processing
                    </h2>
                    <p className="text-gray-500 text-sm flex flex-col ">
                      Streamlined processes and expert negotiation to close
                      deals efficiently.
                    </p>
                  </div>
                </div>
               {/*4*/}
                <div className="flex rounded-2xl flex-row gap-4 items-center z-20" data-aos="fade-up" data-aos-delay="550">
                  <span className="py-4 px-4 bg-teal-700 rounded-2xl">
                    <BsFillPeopleFill size={22} className="text-white" />
                  </span>
                  <div className="flex flex-col items-start">
                    <h2 className="font-medium text-teal-700 text-lg">
                      Expert Team
                    </h2>
                    <p className="text-gray-500 text-sm flex flex-col ">
                      Certified professionals with deep market knowledge and
                      client dedication.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex lg:flex-row flex-col items-center gap-3 mt-10 rounded-lg border border-gray-300 py-8 px-12 bg-teal-50 justify-center">
                {/* Item 1 */}
                <div className="flex flex-col gap-2 items-center pr-4">
                  <span className="text-3xl font-bold text-teal-900">94</span>
                  <span className="text-gray-600 text-[15px] font-semibold">
                    % Success Rate
                  </span>
                </div>

                {/* Item 2 - center item */}
                <div
                  className="
                  flex flex-col gap-2 items-center
                  lg:border-l lg:border-r lg:border-r-gray-300 lg:pr-6 lg:pl-6
                   border-gray-300
                  py-4 lg:py-0
                "
                >
                  <span className="text-3xl font-bold text-teal-900">1800</span>
                  <span className="text-gray-600 text-[15px] font-semibold">
                    + Properties Sold
                  </span>
                </div>

                {/* Item 3 */}
                <div className="flex flex-col gap-2 items-center pr-4">
                  <span className="text-3xl font-bold text-teal-900">24</span>
                  <span className="text-gray-600 text-[15px] font-semibold">
                    /7 Support Available
                  </span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row lg:gap-4 md:gap-4 sm:gap-16 mt-16 w-full">
                {/* Button 1 */}
                <div className="transition-all ease-in-out duration-300 hover:-translate-y-1 w-full sm:w-auto mb-4 lg:mb-0">
                  <Link
                    to="/properties" 
                    className="py-4 px-8 bg-teal-600 text-white rounded-lg font-bold w-full block text-center"
                  >
                    Explore Properties
                  </Link>
                </div>

                {/* Button 2 */}
                <div className="transition-all ease-in-out duration-300 hover:-translate-y-1 w-full sm:w-auto">
                  <Link
                    to="/contacts"
                    className="py-4 px-8 border-teal-600 border text-teal-600 bg-white rounded-lg font-bold transition-all ease-in-out duration-300 hover:bg-teal-600 hover:text-white w-full block text-center"
                  >
                    Schedule Consultation
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Whyus;
