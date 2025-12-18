import { ChevronDown, CircleCheck, Phone, Search, Star } from "lucide-react";
import React from "react";
import CountUp from "react-countup";
import { BsFillHouseHeartFill, BsGem, BsTrophyFill,  } from "react-icons/bs";
import { BiSolidUserDetail } from "react-icons/bi";
import { Link } from "react-router-dom";

function PropertyJourney() {
  return (
    <div className="w-full bg-[#e2f2f5] py-16 px-4 sm:px-6 border-b border-b-gray-300">
  <div className="w-full py-10 max-w-7xl mx-auto">
    
    <div
      className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20"
      data-aos="fade-right"
    >

      {/* LEFT SECTION */}
      <div className="w-full" data-aos="fade-right" data-aos-delay="400">

        {/* Small Badge */}
        <button className="px-4 py-2 text-teal-700 bg-green-200 font-bold rounded-full flex items-center gap-2 text-xs sm:text-sm">
          Your Property Journey Starts Here
        </button>

        {/* Title + Paragraph */}
        <div className="mt-6">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight text-center lg:text-left">
            Ready to Find Your Perfect Investment?
          </h1>

          <p className="mt-4 text-gray-500 text-center lg:text-left leading-relaxed text-sm sm:text-base lg:text-lg">
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae; Mauris viverra veniam sit amet lacus cursus.
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem.
          </p>
        </div>

        {/* FEATURES */}
       

         <div className="mt-10 space-y-4 flex flex-col">
              <div className="flex flex-row items-center gap-4">
                <CircleCheck className="text-white fill-teal-700" />
                <span className="text-gray-500 text-md">
                  Expert market analysis and insights
                </span>
              </div>
              <div className="flex flex-row items-center gap-4">
                <CircleCheck className="text-white fill-teal-700" />
                <span className="text-gray-500 text-md">
                  Personalized property recommendations
                </span>
              </div>
              <div className="flex flex-row items-center gap-4">
                <CircleCheck className="text-white fill-teal-700" />
                <span className="text-gray-500 text-md">
                  End-to-end transaction support
                </span>
              </div>
            </div>

        {/* BUTTONS - Fully Responsive */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-16">
          
          {/* Get Free Consultations */}
          <Link
            to="/contacts" 
            className="w-full sm:w-auto py-4 px-6 bg-teal-600 text-white rounded-lg font-bold 
            flex justify-center items-center gap-2 transition-all hover:-translate-y-1"
          >
            <BiSolidUserDetail size={22} />
            <span className="text-sm sm:text-base">Get Free Consultations</span>
          </Link>

          {/* Call Button */}
          <Link
            to="/contacts" 
            className="w-full sm:w-auto py-4 px-6 border border-teal-600 text-teal-600 bg-white rounded-lg font-bold 
            flex justify-center items-center gap-2 transition-all hover:-translate-y-1
            group"
          >
            <Phone className="text-teal-600 group-hover:fill-teal-600 transition" />
            <span className="text-sm sm:text-base">Call (555) 123-4567</span>
          </Link>

        </div>
      </div>

      {/* RIGHT SECTION */}
      <div
        className="relative w-full flex justify-center items-center mt-10 lg:mt-0"
        data-aos="fade-right"
        data-aos-delay="400"
      >
        <div className="relative w-full max-w-xl lg:max-w-full rounded-2xl shadow-md shadow-gray-300">

          {/* MAIN IMAGE */}
          <div className="overflow-hidden relative group rounded-2xl">
            <button className="absolute top-3 left-3 font-bold z-20 px-3 py-2 bg-white 
              text-gray-600 rounded-full flex items-center gap-1 text-xs sm:text-sm shadow">
              <Star size={16} className="text-yellow-400 fill-yellow-400" />
              Trusted by 500+ Clients
            </button>

            <img
              src="/images/property-exterior-5.webp"
              alt="premium property"
              className="rounded-2xl object-cover w-full h-[45vh] sm:h-[55vh] lg:h-[70vh] 
              transition-all duration-300 group-hover:scale-110"
            />
          </div>

          {/* CARD 1 */}
          <div className="flex bg-amber-50 rounded-2xl py-4 px-4 absolute bottom-24 right-4 
            shadow-xl flex-row gap-4 items-center z-20 text-sm sm:text-base">
            <span className="py-3 px-3 bg-green-100 rounded-2xl">
              <BsFillHouseHeartFill size={22} className="text-teal-600" />
            </span>
            <div className="flex flex-col items-start">
              <h2 className="font-bold text-teal-700 text-xl">850+</h2>
              <p className="text-gray-500 text-sm">Properties Sold</p>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="flex bg-amber-50 rounded-2xl py-4 px-4 absolute -bottom-10 right-4 
            shadow-xl flex-row gap-4 items-center z-20 text-sm sm:text-base">
            <span className="py-3 px-3 bg-green-100 rounded-2xl">
              <BsTrophyFill size={22} className="text-teal-600" />
            </span>
            <div className="flex flex-col items-start">
              <h2 className="font-bold text-teal-700 text-xl">15</h2>
              <p className="text-gray-500 text-sm">Years Experience</p>
            </div>
          </div>

        </div>
      </div>

    </div>
  </div>
</div>

  );
}
export default PropertyJourney;
