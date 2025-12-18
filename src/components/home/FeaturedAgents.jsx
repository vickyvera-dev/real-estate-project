import { CircleArrowRight, Mail, MapPin, Phone } from "lucide-react";
import React from "react";
import {
   BsEnvelope,
   BsTelephone,
  BsWhatsapp,
} from "react-icons/bs";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";

function FeaturedAgents() {
  return (
    <div className="w-full bg-[#fefefe] py-10 lg:px-22 lg:pl-26 px-6">
      <div>
        <div data-aos="fade-up">
          <h1 className="text-3xl font-medium pb-2 relative text-[#1f2f31] text-center">
            Featured Agents
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
     

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 w-full" data-aos="fade-up" data-aos-delay="100">
        {/* CARD 1 */}
        <div className="shadow-lg pb-8 bg-white rounded-2xl flex flex-col h-full transition-all ease-in-out duration-300 hover:-translate-y-1 group" data-aos="fade-up" data-aos-delay="100">
          <div className="relative overflow-hidden">
            {/* TOP BADGE */}
            <div className="absolute top-3 right-3 bg-yellow-500 text-gray-600 text-xs font-bold rounded-full py-1 px-2 flex items-center gap-2 z-20">
              <span className="text-xs">TOP AGENT</span>
            </div>

            {/* HOVER ICONS */}
            <div
              className="absolute inset-0 flex items-center justify-center gap-3 
            opacity-0 group-hover:opacity-100 group-hover:scale-110 
            transition-all duration-300 z-10"
            >
              <span className="p-4 rounded-lg bg-white text-teal-700 hover:bg-teal-900 hover:text-white transition-colors duration-300 shadow-md">
                <BsTelephone size={18} />
              </span>

              <span className="p-4 rounded-lg bg-white text-teal-700 hover:bg-red-600 hover:text-white transition-colors duration-300 shadow-md">
                <BsEnvelope size={18} />
              </span>

              <span className="p-4 rounded-lg bg-white text-teal-700 hover:bg-green-600 hover:text-white transition-colors duration-300 shadow-md">
                <BsWhatsapp size={18} />
              </span>
            </div>

            {/* IMAGE */}
            <img
              src="/images/agent-5.webp"
              alt="Agent"
              className="object-cover w-full h-[280px] rounded-t-2xl transition-all duration-300 group-hover:scale-110"
            />
          </div>

          <div className="mt-4  flex flex-col justify-center items-center text-center">
            <h4 className="font-bold text-lg hover:text-teal-600 transition-colors duration-300 ease-in-out flex flex-col text-center">
              <span>Lisa Thompson</span>
              <span className="text-teal-700">Luxury Property Expert</span>
            </h4>
            <div className="flex flex-row justify-between border border-gray-300 py-2 px-12  rounded-lg mt-6 bg-teal-50 items-center">
              <div className="flex flex-col pr-8 pb-2">
                <span className="text-lg font-bold">150+</span>
                <span className="text-gray-500 text-[10px] font-bold">PROPERTIES SOLD</span>
              </div>

              <div className="flex flex-col border-l border-l-gray-300 pl-12 pb-2">
                <span className="text-lg font-bold">4.9</span>
                <span className="text-gray-500 text-[10px] font-bold">RATING</span>
              </div>
            </div>
            <div className="flex flex-row gap-1 items-center mt-3">
              <span className="text-sm text-gray-600">
                <MapPin size={15} />
              </span>
              <span className="text-xs text-gray-600">Miami Beach</span>
            </div>

            <div className="flex gap-4 text-sm mt-6">
              <span className="flex items-center gap-1 text-teal-700 text-[10px] font-bold py-1 px-4 rounded-full border border-teal-700">
                WATERFRONT
              </span>
              <span className="flex items-center gap-1  text-teal-700 text-[10px] font-bold py-1 px-4 rounded-full border border-teal-700">
                HIGH-RISE
              </span>
            </div>

            <div className="w-full mt-8 px-8 ">
              <Link
                to="/agentsdetail"
                className="w-full block bg-teal-700 text-white font-bold rounded-lg py-3 text-xs text-center hover:-translate-y-1 transition-all"
              >
                View Full Profile
              </Link>
            </div>
          </div>
        </div>

        {/* CARD 2 */}
        <div className="shadow-lg pb-8 bg-white rounded-2xl flex flex-col h-full transition-all ease-in-out duration-300 hover:-translate-y-1 group" data-aos="fade-up" data-aos-delay="200">
          <div className="relative overflow-hidden">
            {/* TOP BADGE */}
            <div className="absolute top-3 right-3 text-white bg-teal-900 text-xs font-bold rounded-full py-1 px-2 flex items-center gap-2 z-20">
              <span className="text-xs">CERTIFIED</span>
            </div>

            {/* HOVER ICONS */}
            <div
              className="absolute inset-0 flex items-center justify-center gap-3 
            opacity-0 group-hover:opacity-100 group-hover:scale-110 
            transition-all duration-300 z-10"
            >
              <span className="p-4 rounded-lg bg-white text-teal-700 hover:bg-teal-900 hover:text-white transition-colors duration-300 shadow-md">
                <BsTelephone size={18} />
              </span>

              <span className="p-4 rounded-lg bg-white text-teal-700 hover:bg-red-600 hover:text-white transition-colors duration-300 shadow-md">
                <BsEnvelope size={18} />
              </span>

              <span className="p-4 rounded-lg bg-white text-teal-700 hover:bg-green-600 hover:text-white transition-colors duration-300 shadow-md">
                <BsWhatsapp size={18} />
              </span>
            </div>

            {/* IMAGE */}
            <img
              src="/images/agent-3.webp"
              alt="Agent"
              className="object-cover w-full h-[280px] rounded-t-2xl transition-all duration-300 group-hover:scale-110"
            />
          </div>

          <div className="mt-4  flex flex-col justify-center items-center text-center">
            <h4 className="font-bold text-lg hover:text-teal-600 transition-colors duration-300 ease-in-out flex flex-col text-center">
              <span>Robert Chen</span>
              <span className="text-teal-700">Commercial Specialist</span>
            </h4>
            <div className="flex flex-row justify-between border border-gray-300 py-2 px-12  rounded-lg mt-6 bg-teal-50 items-center">
              <div className="flex flex-col pr-6 pb-2">
                <span className="text-lg font-bold">90+</span>
                <span className="text-gray-500 text-[10px] font-bold">COMMERCIAL SALES</span>
              </div>

              <div className="flex flex-col border-l border-l-gray-300 pl-18 pb-2">
                <span className="text-lg font-bold">4.8</span>
                <span className="text-gray-500 text-[10px] font-bold">RATING</span>
              </div>
            </div>
            <div className="flex flex-row gap-1 items-center mt-3">
              <span className="text-sm text-gray-600">
                <MapPin size={15} />
              </span>
              <span className="text-xs text-gray-600">Downtown</span>
            </div>

            <div className="flex gap-4 text-sm mt-6">
              <span className="flex items-center gap-1 text-teal-700 text-[10px] font-bold py-1 px-4 rounded-full border border-teal-700">
                OFFICE SPACE
              </span>
              <span className="flex items-center gap-1  text-teal-700 text-[10px] font-bold py-1 px-4 rounded-full border border-teal-700">
                RETAIL
              </span>
            </div>

            <div className="w-full mt-8 px-8 ">
              <Link
                to="/agentsdetail"
                className="w-full block bg-teal-700 text-white font-bold rounded-lg py-3 text-xs text-center hover:-translate-y-1 transition-all"
              >
                View Full Profile
              </Link>
            </div>
          </div>
        </div>

        {/* CARD 3 */}
        <div className="shadow-lg pb-8 bg-white rounded-2xl flex flex-col h-full transition-all ease-in-out duration-300 hover:-translate-y-1 group" data-aos="fade-up" data-aos-delay="300">
          <div className="relative overflow-hidden">
            {/* TOP BADGE */}
            <div className="absolute top-3 right-3 text-white bg-green-600 text-xs font-bold rounded-full py-1 px-2 flex items-center gap-2 z-20">
              <span className="text-xs">RISINGSTAR</span>
            </div>

            {/* HOVER ICONS */}
            <div
              className="absolute inset-0 flex items-center justify-center gap-3 
            opacity-0 group-hover:opacity-100 group-hover:scale-110 
            transition-all duration-300 z-10"
            >
              <span className="p-4 rounded-lg bg-white text-teal-700 hover:bg-teal-900 hover:text-white transition-colors duration-300 shadow-md">
                <BsTelephone size={18} />
              </span>

              <span className="p-4 rounded-lg bg-white text-teal-700 hover:bg-red-600 hover:text-white transition-colors duration-300 shadow-md">
                <BsEnvelope size={18} />
              </span>

              <span className="p-4 rounded-lg bg-white text-teal-700 hover:bg-green-600 hover:text-white transition-colors duration-300 shadow-md">
                <BsWhatsapp size={18} />
              </span>
            </div>

            {/* IMAGE */}
            <img
              src="/images/agent-4.webp"
              alt="Agent"
              className="object-cover w-full h-[280px] rounded-t-2xl transition-all duration-300 group-hover:scale-110"
            />
          </div>

          <div className="mt-4  flex flex-col justify-center items-center text-center">
            <h4 className="font-bold text-lg hover:text-teal-600 transition-colors duration-300 ease-in-out flex flex-col text-center">
              <span>OFFICE SPACE</span>
              <span className="text-teal-700">RESIDENTIAL ADVISOR</span>
            </h4>
            <div className="flex flex-row justify-between border border-gray-300 py-2 px-12  rounded-lg mt-6 bg-teal-50 items-center">
              <div className="flex flex-col pr-8 pb-2">
                <span className="text-lg font-bold">75+</span>
                <span className="text-gray-500 text-[10px] font-bold">HAPPY FAMILIES</span>
              </div>

              <div className="flex flex-col border-l border-l-gray-300 pl-12 pb-2">
                <span className="text-lg font-bold">4.9</span>
                <span className="text-gray-500 text-[10px] font-bold">RATING</span>
              </div>
            </div>
            <div className="flex flex-row gap-1 items-center mt-3">
              <span className="text-sm text-gray-600">
                <MapPin size={15} />
              </span>
              <span className="text-xs text-gray-600">Suburbs</span>
            </div>

            <div className="flex gap-4 text-sm mt-6">
              <span className="flex items-center gap-1 text-teal-700 text-[10px] font-bold py-1 px-4 rounded-full border border-teal-700">
                FAMILY HOMES
              </span>
              <span className="flex items-center gap-1  text-teal-700 text-[10px] font-bold py-1 px-4 rounded-full border border-teal-700">
                FIRST-TIME
              </span>
            </div>

            <div className="w-full mt-8 px-8 ">
              <Link
                to="/agentsdetail"
                className="w-full block bg-teal-700 text-white font-bold rounded-lg py-3 text-xs text-center hover:-translate-y-1 transition-all"
              >
                View Full Profile
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-12" data-aos="fade-up" data-aos-delay="400">
        <Link
          to="/agents"
          className="relative inline-block px-6 py-3 font-bold text-teal-700 rounded-full overflow-hidden group border border-teal-700 justify-center "
        >
          {/* Background */}
          <span className="absolute inset-0 w-0 bg-teal-600 transition-all duration-500 group-hover:w-full"></span>

          {/* Button Text */}
          <span className="relative z-10 group-hover:text-white flex flex-row gap-2 items-center">
            <span>Explore All Our Agents </span>
            <span>
              <CircleArrowRight size={18} />
            </span>
          </span>
        </Link>
      </div>
    </div>
  );
}
export default FeaturedAgents;
