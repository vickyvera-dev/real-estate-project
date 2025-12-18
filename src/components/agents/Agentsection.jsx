/* =========================================================
   =============== 📦 IMPORTS SECTION =======================
   ========================================================= */
import { Mail, MapPin, Phone } from "lucide-react";
import React from "react";
import {
  BsEnvelope,
  BsFacebook,
  BsInstagram,
  BsLinkedin,
  BsTelephone,
  BsTwitter,
  BsTwitterX,
  BsWhatsapp,
  BsYoutube,
} from "react-icons/bs";

function Agentsection() {
  return (
    <div className="border-b border-b-gray-300">

      {/* TOP HERO SECTION */}
      <div
        className="text-center py-20 px-6 sm:px-10 md:px-16 lg:px-28 pt-36"
        data-aos="zoom-in"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-blue-950">
          Agents
        </h1>
        <p className="text-gray-700 text-base sm:text-lg md:text-xl max-w-4xl mx-auto mt-4 leading-relaxed">
          Odio et unde deleniti. Officiis quo odio sint voluptas consequatur ut
          a odio voluptatem. Sit dolorum debitis veritatis natus dolores. Quasi
          ratione sint dolorem.
        </p>
      </div>

      {/*  BREADCRUMB */}
      <div className="w-full bg-gray-100 py-5 px-6">
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-1 sm:ml-32">
          <ul className="flex gap-2 text-sm sm:text-base">
            <li className="text-teal-600">
              <a href="/">Home</a>
            </li>
            <li className="text-gray-600">
              /{" "}
              <a href="/about" className="hover:text-teal-600">
                Agents
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/*  AGENT MAIN GRID  */}
      <div className="grid grid-cols-1 lg:grid-cols-2 max-w-7xl mx-auto gap-10 py-16 items-stretch lg:px-0 px-4">
        
        {/*AGENT IMAGE */}
       {/* === LEFT IMAGE === */}
<div className="rounded-2xl h-full flex transition-all ease-in-out duration-300 hover:-translate-y-1 group">
  <div className="relative overflow-hidden w-full h-full" data-aos="fade-right" data-aos-delay="100">
    
    {/* BADGE */}
    <div className="absolute top-3 left-3 text-white bg-teal-700 text-xs font-bold rounded-full py-1 px-2 flex items-center gap-2 z-20">
      <span className="text-xs">Top Seller</span>
    </div>

    {/* IMAGE: match right-side height */}
    <img
      src="/images/agent-4.webp"
      alt="Agent"
      className="object-cover w-full h-full rounded-2xl"
    />
  </div>
</div>


        {/* AGENT DETAILS  right section*/}
        <div data-aos="fade-left" data-aos-delay="200">

          {/* === NAME + TITLE === */}
          <h2 className="text-5xl text-gray-700">Emily Rodriguez</h2>
          <p className="text-xl text-teal-700 font-bold mt-4">
            Senior Real Estate Advisor
          </p>

          {/* === SPECIALTIES === */}
          <div className="flex flex-row items-center gap-4 mt-4">
            <button className="px-4 py-2 bg-gray-200 border border-gray-300 text-teal-700 rounded-full flex items-center gap-2 text-xs font-semibold">
              Luxury Homes
            </button>
            <button className="px-4 py-2 bg-gray-200 border border-gray-300 text-teal-700 rounded-full flex items-center gap-2 text-xs font-semibold">
              Investment Properties
            </button>
            <button className="px-4 py-2 bg-gray-200 border border-gray-300 text-teal-700 rounded-full flex items-center gap-2 text-xs font-semibold">
              First-Time Buyers
            </button>
          </div>

          {/* === SHORT QUOTE === */}
          <p className="italic text-lg text-gray-600 mt-7 tracking-wide">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation."
          </p>

          {/* === STATS === */}
          <div className="flex flex-row items-center gap-6 mt-7">
            <div className="flex flex-col gap-2">
              <span className="text-3xl font-bold text-teal-700">150+</span>
              <span className="text-gray-400">Properties Sold</span>
            </div>

            <div className="flex flex-col gap-2">
              <span className="text-3xl font-bold text-teal-700">$45M</span>
              <span className="text-gray-400">Total Sales</span>
            </div>

            <div className="flex flex-col gap-2 text-center">
              <span className="text-3xl font-bold text-teal-700">5</span>
              <span className="text-gray-400">Years Experience</span>
            </div>
          </div>

          {/* CONTACT INFO */}
          <div className="mt-6">
            <div className="flex gap-2 text-gray-600 mb-3 items-center">
              <Phone size={18} />
              <span>+1 (555) 234-5678</span>
            </div>

            <div className="flex gap-2 text-gray-600 mb-4">
              <Mail size={18} />
              <span className="text-sm text-gray-600 font-bold">
                emily.rodriguez@example.com
              </span>
            </div>

            <div className="flex gap-2 text-gray-600 mb-3 items-center">
              <MapPin size={18} />
              <span className="text-sm text-gray-600 font-bold">
                Downtown Miami Office
              </span>
            </div>
          </div>

          {/* ===========SOCIAL ICONS ================ */}
          <div className="flex gap-5 text-gray-600 mt-6">
            <span className="p-2 rounded-full bg-gray-200 hover:-translate-y-1 hover:bg-teal-700 hover:text-white transition-all">
              <BsLinkedin />
            </span>
            <span className="p-2 rounded-full bg-gray-200 hover:-translate-y-1 hover:bg-teal-700 hover:text-white transition-all">
              <BsFacebook />
            </span>
            <span className="p-2 rounded-full bg-gray-200 hover:-translate-y-1 hover:bg-teal-700 hover:text-white transition-all">
              <BsInstagram />
            </span>
            <span className="p-2 rounded-full bg-gray-200 hover:-translate-y-1 hover:bg-teal-700 hover:text-white transition-all">
              <BsTwitter />
            </span>
          </div>

          {/* =============== ACTION BUTTONS ==================== */}
          <div className="flex flex-col sm:flex-row lg:gap-4 md:gap-4 sm:gap-16 mt-10 w-full">
            
            {/* Button 1 */}
            <div className="transition-all hover:-translate-y-1 w-full sm:w-auto mb-4">
              <a
                href="#"
                className="py-3 px-8 bg-teal-600 text-white rounded-full font-bold block text-center"
              >
                View My Listings
              </a>
            </div>

            {/* Button 2 */}
            <div className="transition-all hover:-translate-y-1 w-full sm:w-auto">
              <a
                href="#"
                className="py-3 px-8 border-teal-600 border text-teal-600 bg-white rounded-full font-bold hover:bg-teal-600 hover:text-white block text-center"
              >
                Schedule Consultation
              </a>
            </div>

          </div>

        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 w-full max-w-7xl mx-auto lg:px-0 px-4 py-16">
              
              {/* CARD 1 */}
              <div className="shadow-lg pb-8 bg-white rounded-2xl flex flex-col h-full transition-all ease-in-out duration-300 hover:-translate-y-1 group" data-aos="flip-left" data-aos-delay="100">
                <div className="relative overflow-hidden">
                  {/* TOP BADGE */}
                  <div className="absolute top-3 right-3 text-white bg-teal-900 text-xs font-bold rounded-full py-1 px-2 flex items-center gap-2 z-20">
                    <span className="text-xs">Verified</span>
                  </div>
      
                  {/* HOVER ICONS */}
                  <div
                    className="absolute inset-0 flex items-center justify-center gap-3 
                  opacity-0 group-hover:opacity-100 group-hover:scale-110 
                  transition-all duration-300 z-10"
                  >
                    <span className="p-4 rounded-full bg-white text-teal-700 hover:bg-teal-900 hover:text-white transition-colors duration-300 shadow-md">
                      <BsTelephone size={18} />
                    </span>
      
                    <span className="p-4 rounded-full bg-white text-teal-700 hover:bg-teal-600 hover:text-white transition-colors duration-300 shadow-md">
                      <BsEnvelope size={18} />
                    </span>
      
                    <span className="p-4 rounded-full bg-white text-teal-700 hover:bg-green-600 hover:text-white transition-colors duration-300 shadow-md">
                      <BsWhatsapp size={18} />
                    </span>
                  </div>
      
                  {/* IMAGE */}
                 <div className="overflow-hidden rounded-t-2xl">
                   <img
                    src="/images/agent-3.webp"
                    alt="Agent"
                    className="object-cover w-full h-[280px] rounded-t-2xl transition-all duration-300 group-hover:scale-110"
                  />
                 </div>
                </div>
      
                <div className="mt-4  flex flex-col justify-center items-center text-center">
                  <h4 className=" hover:text-teal-600 transition-colors duration-300 ease-in-out flex flex-col text-center">
                    <span className="font-bold text-xl">Michael Chen</span>
                    <span className="text-teal-700 text-sm">Property Consultant</span>
                  </h4>
                 
                  <div className="flex flex-row gap-1 items-center mt-3">
                    <span className="text-sm text-gray-600">
                      <MapPin size={15} />
                    </span>
                    <span className="text-xs text-gray-600">Brooklyn Heights</span>
                  </div>

                  <div className="flex gap-4 text-sm mt-6 items-center flex-row">
                    <span className="flex items-center gap-1 text-[10px] font-bold py-1 px-4 rounded-full bg-teal-50 text-xs text-teal-600">
                      English
                    </span>
                    <span className="flex items-center gap-1  text-teal-700 text-[10px] font-bold py-1 px-4 rounded-full bg-teal-50 text-sm">
                      Mandarin
                    </span>
                  </div>                
      
                   {/* Button 2 */}
                <div className="transition-all ease-in-out duration-300 hover:-translate-y-1 w-full sm:w-auto mt-6">
                  <a
                    href="#"
                    className="py-2 px-8 border-teal-600 border text-teal-600 bg-white rounded-full font-bold transition-all ease-in-out duration-300 hover:bg-teal-600 hover:text-white w-full block text-center"
                  >
                    View Listings
                  </a>
                </div>
                </div>
              </div>
      
              {/* CARD 2 */}
              <div className="shadow-lg pb-8 bg-white rounded-2xl flex flex-col h-full transition-all ease-in-out duration-300 hover:-translate-y-1 group" data-aos="flip-left" data-aos-delay="200">
                <div className="relative overflow-hidden"> 
                  {/* HOVER ICONS */}
                  <div
                    className="absolute inset-0 flex items-center justify-center gap-3 
                  opacity-0 group-hover:opacity-100 group-hover:scale-110 
                  transition-all duration-300 z-10"
                  >
                    <span className="p-4 rounded-full bg-white text-teal-700 hover:bg-teal-900 hover:text-white transition-colors duration-300 shadow-md">
                      <BsTelephone size={18} />
                    </span>
      
                    <span className="p-4 rounded-full bg-white text-teal-700 hover:bg-teal-600 hover:text-white transition-colors duration-300 shadow-md">
                      <BsEnvelope size={18} />
                    </span>
      
                    <span className="p-4 rounded-full bg-white text-teal-700 hover:bg-green-600 hover:text-white transition-colors duration-300 shadow-md">
                      <BsWhatsapp size={18} />
                    </span>
                  </div>
      
                  {/* IMAGE */}
                  <div className="overflow-hidden rounded-t-2xl">
                    <img
                    src="/images/agent-4.webp"
                    alt="Agent"
                    className="object-cover w-full h-[280px] rounded-t-2xl transition-all duration-300 group-hover:scale-110"
                  />
                  </div>
                </div>
      
                <div className="mt-4  flex flex-col justify-center items-center text-center">
                  <h4 className=" hover:text-teal-600 transition-colors duration-300 ease-in-out flex flex-col text-center">
                    <span className="font-bold text-xl">Sarah Johnson</span>
                    <span className="text-teal-700 text-sm">Commercial Specialist</span>
                  </h4>
                 
                  <div className="flex flex-row gap-1 items-center mt-3">
                    <span className="text-sm text-gray-600">
                      <MapPin size={15} />
                    </span>
                    <span className="text-xs text-gray-600">Manhattan</span>
                  </div> 

                  <div className="flex gap-4 text-sm mt-6">
                    <span className="flex items-center gap-1 text-[10px] font-bold py-1 px-4 rounded-full bg-teal-50 text-xs text-teal-600">
                      English
                    </span>
                    <span className="flex items-center gap-1  text-teal-700 text-[10px] font-bold py-1 px-4 rounded-full bg-teal-50 text-sm">
                      Spanish
                    </span>
                  </div>
                 
      
                     {/* Button 2 */}
                <div className="transition-all ease-in-out duration-300 hover:-translate-y-1 w-full sm:w-auto mt-6">
                  <a
                    href="#"
                    className="py-2 px-8 border-teal-600 border text-teal-600 bg-white rounded-full font-bold transition-all ease-in-out duration-300 hover:bg-teal-600 hover:text-white w-full block text-center"
                  >
                    View Listings
                  </a>
                </div>
                </div>
              </div>

                {/* CARD 3 */}
              <div className="shadow-lg pb-8 bg-white rounded-2xl flex flex-col h-full transition-all ease-in-out duration-300 hover:-translate-y-1 group" data-aos="flip-left" data-aos-delay="300">
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
                    <span className="p-4 rounded-full bg-white text-teal-700 hover:bg-teal-900 hover:text-white transition-colors duration-300 shadow-md">
                      <BsTelephone size={18} />
                    </span>
      
                    <span className="p-4 rounded-full bg-white text-teal-700 hover:bg-teal-600 hover:text-white transition-colors duration-300 shadow-md">
                      <BsEnvelope size={18} />
                    </span>
      
                    <span className="p-4 rounded-full bg-white text-teal-700 hover:bg-green-600 hover:text-white transition-colors duration-300 shadow-md">
                      <BsWhatsapp size={18} />
                    </span>
                  </div>
      
                  {/* IMAGE */}
                  <div className="overflow-hidden rounded-t-2xl">
                    <img
                    src="/images/agent-4.webp"
                    alt="Agent"
                    className="object-cover w-full h-[280px] overflow-hidden rounded-t-2xl transition-all duration-300 group-hover:scale-110"
                  />
                  </div>
                </div>
      
                <div className="mt-4  flex flex-col justify-center items-center text-center">
                  <h4 className=" hover:text-teal-600 transition-colors duration-300 ease-in-out flex flex-col text-center">
                    <span className="font-bold text-lg">David Martinez</span>
                    <span className="text-teal-700 text-sm">Luxury Home Advisor</span>
                  </h4>
                 
                  <div className="flex flex-row gap-1 items-center mt-3">
                    <span className="text-sm text-gray-600">
                      <MapPin size={15} />
                    </span>
                    <span className="text-xs text-gray-600">Upper East Side</span>
                  </div>
      
                  
                  <div className="flex gap-4 text-sm mt-6">
                    <span className="flex items-center gap-1 text-[10px] font-bold py-1 px-4 rounded-full bg-teal-50 text-xs text-teal-600">
                      English
                    </span>
                    <span className="flex items-center gap-1  text-teal-700 text-[10px] font-bold py-1 px-4 rounded-full bg-teal-50 text-sm">
                      French
                    </span>
                  </div>
                 
      
                     {/* Button 2 */}
                <div className="transition-all ease-in-out duration-300 hover:-translate-y-1 w-full sm:w-auto mt-6">
                  <a
                    href="#"
                    className="py-2 px-8 border-teal-600 border text-teal-600 bg-white rounded-full font-bold transition-all ease-in-out duration-300 hover:bg-teal-600 hover:text-white w-full block text-center"
                  >
                    View Listings
                  </a>
                </div>
                </div>
              </div>

               {/* CARD 4 */}
              <div className="shadow-lg pb-8 bg-white rounded-2xl flex flex-col h-full transition-all ease-in-out duration-300 hover:-translate-y-1 group" data-aos="flip-left" data-aos-delay="400">
                <div className="relative overflow-hidden">
                  {/* TOP BADGE */}
                  <div className="absolute top-3 right-3 bg-yellow-500 text-gray-600 text-xs font-bold rounded-full py-1 px-2 flex items-center gap-2 z-20">
                    <span className="text-xs">New Agent</span>
                  </div>
      
                  {/* HOVER ICONS */}
                  <div
                    className="absolute inset-0 flex items-center justify-center gap-3 
                  opacity-0 group-hover:opacity-100 group-hover:scale-110 
                  transition-all duration-300 z-10"
                  >
                    <span className="p-4 rounded-full bg-white text-teal-700 hover:bg-teal-900 hover:text-white transition-colors duration-300 shadow-md">
                      <BsTelephone size={18} />
                    </span>
      
                    <span className="p-4 rounded-full bg-white text-teal-700 hover:bg-teal-600 hover:text-white transition-colors duration-300 shadow-md">
                      <BsEnvelope size={18} />
                    </span>
      
                    <span className="p-4 rounded-full bg-white text-teal-700 hover:bg-green-600 hover:text-white transition-colors duration-300 shadow-md">
                      <BsWhatsapp size={18} />
                    </span>
                  </div>
      
                  {/* IMAGE */}
                  <div className="overflow-hidden rounded-t-2xl ">
                    <img
                    src="/images/agent-5.webp"
                    alt="Agent"
                    className="object-cover w-full h-[280px] rounded-t-2xl overflow-hidden transition-all duration-300 group-hover:scale-110"
                  />
                  </div>
                </div>
      
                <div className="mt-4  flex flex-col justify-center items-center text-center">
                  <h4 className=" hover:text-teal-600 transition-colors duration-300 ease-in-out flex flex-col text-center">
                    <span className="font-bold text-xl">Lisa Thompson</span>
                    <span className="text-teal-700 text-sm">Residential Specialist</span>
                  </h4>
                 
                  <div className="flex flex-row gap-1 items-center mt-3">
                    <span className="text-sm text-gray-600">
                      <MapPin size={15} />
                    </span>
                    <span className="text-xs text-gray-600">Queens</span>
                  </div>
                   <span className="flex items-center gap-1 justify-center text-[10px] font-bold py-1 px-4 rounded-full bg-teal-50 text-xs text-teal-600 mt-6">
                      English
                    </span>
                  
      
                 
                  {/* Button  */}
                <div className="transition-all ease-in-out duration-300 hover:-translate-y-1 w-full sm:w-auto mt-6">
                  <a
                    href="#"
                    className="py-2 px-8 border-teal-600 border text-teal-600 bg-white rounded-full font-bold transition-all ease-in-out duration-300 hover:bg-teal-600 hover:text-white w-full block text-center"
                  >
                    View Listings
                  </a>
                </div>
                </div>
              </div>
            </div>
    </div>
  );
}

export default Agentsection;
