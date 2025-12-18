import { ArrowRight, Check } from "lucide-react";
import React from "react";
import { BsGraphUp, BsKey, BsSearch, BsShieldCheck } from "react-icons/bs";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";

function Featuredservices() {
  return (
    
    <div className="w-full bg-[#fefefe] py-10 lg:px-22 lg:pl-26 px-6">
      <div>
        
        <div  data-aos="fade-up">
          <h1 className="text-3xl font-medium pb-2 relative text-[#1f2f31] text-center">
            Featured Services
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
       

        <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-6 w-full items-stretch"  data-aos="fade-up" data-aos-delay="100">
          {/*first card*/}
          <div className="border border-gray-300 bg-white py-8 px-8 rounded-2xl group shadow-md hover:shadow-xl transition-all duration-300 relative overflow-hidden hover:-translate-y-2" data-aos="zoom-in" data-aos-delay="200">
            {/* Animated Top Bar */}
            <span className="absolute top-0 left-1/2 h-0.5 bg-teal-600 w-0 group-hover:w-20 group-hover:left-[calc(50%-40px)] transition-all duration-500"></span>

            {/* ICON */}
            <div className="w-full">
              <div className="w-full flex flex-row justify-between items-center">
                <span
                  className="rounded-full py-6 px-6 bg-gray-300 inline-block transition-all group-hover:rotate-y-360
               ease-in-out duration-700"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <BsSearch size={28} className="text-teal-700 " />
                </span>

                <span
                  className="font-bold text-3xl text-gray-500 font-raleway"
                  style={{ fontFamily: "Raleway" }}
                >
                  01
                </span>
              </div>
            </div>

            {/* TEXT CONTENT */}
            <div>
              <h3 className="text-center text-xl text-green-950 font-bold mt-8 mb-5 transition-colors ease-in-out duration-300 hover:text-teal-700">
                Property Search
              </h3>
              <p className="text-center mb-5 text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipiscing elit sed
                eiusmod tempor incididunt labore dolore magna
              </p>
            </div>

            {/* FEATURES */}
            <div className="space-y-2 mt-5">
              <div className="flex flex-row gap-2 items-center">
                <Check size={15} className="text-teal-700" />
                <span className="text-gray-500">Advanced Search Filters</span>
              </div>

              <div className="flex flex-row gap-2 items-center">
                <Check size={15} className="text-teal-700" />
                <span className="text-gray-500">360° Virtual Tours</span>
              </div>

              <div className="flex flex-row gap-2 items-center">
                <Check size={15} className="text-teal-700" />
                <span className="text-gray-500">Real-time Updates</span>
              </div>

              {/* BUTTON */}
              <div className="w-full flex justify-center mt-6">
                <Link
                  to="/servicedetails"
                  className="flex flex-row gap-2 border border-teal-700 text-teal-700 font-bold rounded-full py-3 px-6 justify-center items-center transition-all ease-in-out duration-300 hover:bg-teal-700 hover:text-white hover:scale-x-105"
                >
                  <span>Explore More</span>
                  <ArrowRight />
                </Link>
              </div>
            </div>
          </div>

          {/*second card*/}
          <div className="bg-teal-700 py-8 px-8 rounded-2xl group shadow-md hover:shadow-xl transition-all duration-300 relative overflow-hidden hover:-translate-y-2" data-aos="zoom-in" data-aos-delay="300">
            {/* Animated Top Bar */}
            <span className="absolute top-0 left-1/2 h-0.5 bg-white w-0 group-hover:w-20 group-hover:left-[calc(50%-40px)] transition-all duration-500"></span>

            {/* ICON */}
            <div className="w-full">
              <div className="w-full flex flex-row justify-between items-center">
                <span
                  className="rounded-full py-6 px-6 bg-white inline-block transition-all group-hover:rotate-y-360
               ease-in-out duration-700"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <BsGraphUp size={28} className="text-teal-700" />
                </span>

                <span
                  className="font-bold text-3xl text-white font-raleway"
                  style={{ fontFamily: "Raleway" }}
                >
                  02
                </span>
              </div>
            </div>

            {/* TEXT CONTENT */}
            <div>
              <h3 className="text-center text-xl text-white font-bold mt-8 mb-5 transition-colors ease-in-out duration-300 hover:text-teal-500">
                Market Analysis
              </h3>
              <p className="text-center mb-5 text-white">
                Ut enim ad minim veniam quis nostrud exercitation ullamco
                laboris nisi aliquip commodo consequat duis aute
              </p>
            </div>

            {/* FEATURES */}
            <div className="space-y-2 mt-5">
              <div className="flex flex-row gap-2 items-center">
                <Check size={15} className="text-white" />
                <span className="text-gray-500">Price Trend Reports</span>
              </div>

              <div className="flex flex-row gap-2 items-center">
                <Check size={15} className="text-white" />
                <span className="text-white">Investment Insights</span>
              </div>

              <div className="flex flex-row gap-2 items-center">
                <Check size={15} className="text-white" />
                <span className="text-white">Market Forecasting</span>
              </div>

              {/* BUTTON */}
              <div className="w-full flex justify-center mt-6">
                <Link
                 to="/servicedetails"
                  className="flex flex-row gap-2 bg-teal-600 text-white font-bold rounded-full py-3 px-6 justify-center items-center transition-all ease-in-out duration-300 hover:bg-white hover:text-teal-700 hover:scale-x-105 hover:border hover:border-teal-700"
                >
                  <span>Get Analysis</span>
                  <ArrowRight />
                </Link>
              </div>
            </div>
          </div>

          {/*third card*/}
          <div className="border border-gray-300 bg-white py-8 px-8 rounded-2xl group shadow-md hover:shadow-xl transition-all duration-300 relative overflow-hidden hover:-translate-y-2" data-aos="zoom-in" data-aos-delay="400">
            {/* Animated Top Bar */}
            <span className="absolute top-0 left-1/2 h-0.5 bg-teal-600 w-0 group-hover:w-20 group-hover:left-[calc(50%-40px)] transition-all duration-500"></span>

            {/* ICON */}
            <div className="w-full">
              <div className="w-full flex flex-row justify-between items-center">
                <span
                  className="rounded-full py-6 px-6 bg-gray-300 inline-block transition-all group-hover:rotate-y-360
               ease-in-out duration-700"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <BsKey size={28} className="text-teal-700 " />
                </span>

                <span
                  className="font-bold text-3xl text-gray-500 font-raleway"
                  style={{ fontFamily: "Raleway" }}
                >
                  03
                </span>
              </div>
            </div>

            {/* TEXT CONTENT */}
            <div>
              <h3 className="text-center text-xl text-green-950 font-bold mt-8 mb-5 transition-colors ease-in-out duration-300 hover:text-teal-700">
                Property Management
              </h3>
              <p className="text-center mb-5 text-gray-500">
                Excepteur sint occaecat cupidatat non proident sunt culpa qui
                officia deserunt mollit anim laborum sed
              </p>
            </div>

            {/* FEATURES */}
            <div className="space-y-2 mt-5">
              <div className="flex flex-row gap-2 items-center">
                <Check size={15} className="text-teal-700" />
                <span className="text-gray-500">Tenant Screening</span>
              </div>

              <div className="flex flex-row gap-2 items-center">
                <Check size={15} className="text-teal-700" />
                <span className="text-gray-500">Rental Collection</span>
              </div>

              <div className="flex flex-row gap-2 items-center">
                <Check size={15} className="text-teal-700" />
                <span className="text-gray-500">Maintenance Services</span>
              </div>

              {/* BUTTON */}
              <div className="w-full flex justify-center mt-6">
                <Link
                  to="/servicedetails"
                  className="flex flex-row gap-2 border border-teal-700 text-teal-700 font-bold rounded-full py-3 px-6 justify-center items-center transition-all ease-in-out duration-300 hover:bg-teal-700 hover:text-white hover:scale-x-105"
                >
                  <span>Manage Now</span>
                  <ArrowRight />
                </Link>
              </div>
            </div>
          </div>

          {/*fourth card*/}
          <div className="border border-gray-300 bg-white py-8 px-8 rounded-2xl group shadow-md hover:shadow-xl transition-all duration-300 relative overflow-hidden hover:-translate-y-2" data-aos="zoom-in" data-aos-delay="500">
            {/* Animated Top Bar */}
            <span className="absolute top-0 left-1/2 h-0.5 bg-teal-600 w-0 group-hover:w-20 group-hover:left-[calc(50%-40px)] transition-all duration-500"></span>

            {/* ICON */}
            <div className="w-full">
              <div className="w-full flex flex-row justify-between items-center">
                <span
                  className="rounded-full py-6 px-6 bg-gray-300 inline-block transition-all group-hover:rotate-y-360
               ease-in-out duration-700"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <BsShieldCheck size={28} className="text-teal-700" />
                </span>

                <span
                  className="font-bold text-3xl text-gray-500 font-raleway"
                  style={{ fontFamily: "Raleway" }}
                >
                  04
                </span>
              </div>
            </div>

            {/* TEXT CONTENT */}
            <div>
              <h3 className="text-center text-xl text-green-950 font-bold mt-8 mb-5">
                Legal Support
              </h3>
              <p className="text-center mb-5 text-gray-500">
                Sed ut perspiciatis unde omnis iste natus error voluptatem
                accusantium doloremque laudantium totam rem aperiam
              </p>
            </div>

            {/* FEATURES */}
            <div className="space-y-2 mt-5">
              <div className="flex flex-row gap-2 items-center">
                <Check size={15} className="text-teal-700" />
                <span className="text-gray-500">Contract Review</span>
              </div>

              <div className="flex flex-row gap-2 items-center">
                <Check size={15} className="text-teal-700" />
                <span className="text-gray-500">Title Verification</span>
              </div>

              <div className="flex flex-row gap-2 items-center">
                <Check size={15} className="text-teal-700" />
                <span className="text-gray-500">Legal Documentation</span>
              </div>

              {/* BUTTON */}
              <div className="w-full flex justify-center mt-6">
                <Link
                  to="/servicedetails"
                  className="flex flex-row gap-2 border border-teal-700 text-teal-700 font-bold rounded-full py-3 px-6 justify-center items-center transition-all ease-in-out duration-300 hover:bg-teal-700 hover:text-white hover:scale-x-105"
                >
                  <span>Learn More</span>
                  <ArrowRight />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-12" data-aos="fade-up" data-aos-delay="600">
          <Link
          to="/services"
          className="relative inline-block px-6 py-3 font-bold text-teal-700 rounded-full overflow-hidden group border border-teal-700 justify-center "
        >
          {/* Background */}
          <span className="absolute inset-0 w-0 bg-teal-600 transition-all duration-500 group-hover:w-full"></span>

          {/* Button Text */}
          <span className="relative z-10 group-hover:text-white flex flex-row gap-2 items-center">
            <span>Discover All Our Services </span>
            <span>
              <HiOutlineArrowNarrowRight
                size={24}
                className="rotate-330 group-hover:rotate-360"
              />
            </span>
          </span>
        </Link>
        </div>
      </div>
    </div>
  );
}
export default Featuredservices;
