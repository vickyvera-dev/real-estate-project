import React from "react";
import {
  BsArrowRightCircle,
  BsAward,
  BsBuildings,
  BsHeadset,
} from "react-icons/bs";
import CountUp from "react-countup";
import { CircleCheck } from "lucide-react";
import Featuredproperty from "./Featuredproperty";
import { Link } from "react-router-dom";

function Premiumestate() {
  return (
    <div className="bg-[#fefefe]  w-full py-10 lg:px-22 px-5  pt-18">
      <div className="grid grid-cols-1 gap-15  md:grid-cols-1 lg:grid-cols-2 sm:grid-cols-1 w-full pt-20">
        {/* Left Section */}
        <div className="px-4 lg:w-[115%]" data-aos="fade-left" data-aos-delay="200">
          <button className="px-4 py-3 bg-teal-700 text-white rounded-full flex items-center flex-row gap-1 text-sm font-semibold">
            <BsBuildings className="fill-white h-4 w-6" />
            <span>Premium Real Estate</span>
          </button>
          <h1 className="lg:text-5xl sm:text-4xl lg:text-left text-center pb-6 mt-6 font-bold text-gray-800 leading-16 tracking-wide overflow-hidden break-words">
            Transforming Real Estate Dreams Into Reality
          </h1>
          <p className="lg:text-xl lg:text-left text-center text-gray-500 leading-8 tracking-tight">
            Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
            eiusmod tempor incididunt ut labore dolore magna aliqua. Enim ad
            minim veniam quis nostrud exercitation ullamco laboris nisi ut
            aliquip consequat.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 gap-4 mr-10 mt-10">
            <div className="border rounded-xl border-gray-300 bg-white px-8 py-4 duration-300 ease-in-out  hover:shadow-2xl hover:shadow-gray-300 hover:border-1 hover:scale-105 group  transition-all shadow-md  items-center group-hover:shadow-lg group-hover:shadow-teal-200 group-hover:text-teal-600 text-center">
              <h2 className="text-4xl font-bold text-teal-700  mb-2 tracking-wide ">
                <span className="relative top-1 transform scale-y-80">
                  <CountUp end={2} duration={3} />
                </span>
                <span className="relative top-1 transform scale-y-80">
                  <CountUp end={800} duration={3} />+
                </span>
              </h2>
              <p className="text-gray-500 text-md">Properties Listed</p>
            </div>

            <div className="border rounded-xl border-gray-300 bg-white px-8 py-4 duration-300 ease-in-out  hover:shadow-2xl hover:shadow-gray-300 hover:border-1 hover:scale-105 group  transition-all shadow-md   group-hover:shadow-lg group-hover:shadow-teal-200 group-hover:text-teal-600 text-center">
              <h2 className="text-4xl font-bold text-teal-700  mb-2">
                <span>
                  <CountUp end={95} duration={3} />%
                </span>
              </h2>
              <p className="text-gray-500 text-md">Success Rate</p>
            </div>

            <div className="border rounded-xl border-gray-300 bg-white px-8 py-4 duration-300 ease-in-out  hover:shadow-2xl hover:shadow-gray-300 hover:border-1 hover:scale-105 group  transition-all shadow-md   group-hover:shadow-lg group-hover:shadow-teal-200 group-hover:text-teal-600 text-center">
              <h2 className="text-4xl font-bold text-teal-700  mb-2">
                <span>
                  <CountUp end={24} duration={3} />
                  /7
                </span>
              </h2>
              <p className="text-gray-500 text-md">Client Support</p>
            </div>
          </div>

          <div className="mt-10 space-y-4">
            <div className="flex flex-row items-center gap-4">
              <CircleCheck className="text-teal-700" />
              <span className="text-gray-500 text-md">
                Expert market analysis and pricing strategies
              </span>
            </div>
            <div className="flex flex-row items-center gap-4">
              <CircleCheck className="text-teal-700" />
              <span className="text-gray-500 text-md">
                Personalized property matching services
              </span>
            </div>
            <div className="flex flex-row items-center gap-4">
              <CircleCheck className="text-teal-700" />
              <span className="text-gray-500 text-md">
                Professional photography and virtual tours
              </span>
            </div>
          </div>

          <div className="lg:flex flex-row mt-10 gap-8 hidden">
            <Link
              to="/about"
              className="px-4 py-3 bg-teal-700 inline-flex text-white rounded-full items-center flex-row gap-1 text-sm font-semibold group transition-transform hover:translate-y-1 ease-in-out duration-300 hover:shadow hover:shadow-teal-400"
            >
              <span>Learn More About Us</span>
              <span className="transition-transform group-hover:translate-x-1 ease-in-out duration-300">
                <BsArrowRightCircle className="text-white h-4 w-6" />
              </span>
            </Link>
            <div className="flex flex-row gap-3 items-center">
              <span className="p-2 bg-teal-100 rounded-full">
                <BsHeadset className="text-teal-700 h-5 w-6" />
              </span>
              <span className="flex flex-col">
                <p className="text-gray-500 text-md">Need assistance?</p>
                <p className="text-gray-700 text-md font-bold hover:text-teal-700">
                  +1 (555) 987-6543
                </p>
              </span>
            </div>
          </div>
        </div>
        

        {/* Right Section - Responsive Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-1 md:grid-cols-1 pt-15 gap-4 lg:pr-10 md:pr-16 sm:pr-16 px-6 lg:px-6 w-full" data-aos="fade-right" data-aos-delay="300">
          <div className="relative w-[109%] h-96 lg:row-span-2">
            <img
              src="/images/property-exterior-7.webp"
              alt="House Property"
              className="rounded-2xl object-cover w-full h-full relative overflow-hidden shadow-md shadow-gray-200"
            />

            <div className="bg-amber-50 rounded-2xl py-6 px-8 absolute right-9 bottom-8 flex flex-row gap-2 items-center">
              <span className="bg-teal-700 px-3 py-3 rounded-xl">
                <BsAward size={25} className="text-white" />
              </span>
              <div className="flex  flex-col">
                <span className="text-gray-700 font-bold text-xl">
                  {" "}
                  <CountUp end={12} duration={3} />+{" "}
                </span>
                <span className="text-gray-600 text-sm font-medium">
                  Award won
                </span>
              </div>
            </div>
          </div>

          <div className="lg:h-[300px] md:h-[500px] sm:h-[full] h-[500px]">
            <div className="grid grid-cols-1 lg:grid-cols-2 sm:grid-cols-1 md:grid-cols-2 gap-4 w-[109%] h-[50%]">
              <div className="w-full rounded-xl h-full overflow-hidden">
                <img
                  src="/images/property-interior-8.webp"
                  alt="House Property"
                  className="rounded-2xl object-cover w-full h-full transition-transform duration-500 hover:scale-105"
                />
              </div>

              <div className="w-full rounded-xl h-full overflow-hidden">
                <img
                  src="/images/agent-3.webp"
                  alt="Agent"
                  className="rounded-2xl object-cover w-full h-full transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Premiumestate;
