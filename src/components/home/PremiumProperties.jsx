import React from "react";
import { ChevronDown, Search, Star } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect,} from "react";
import CountUp from "react-countup";
import { useState } from "react";
import Premiumestate from "./Premiumestate";
import Featuredproperty from "./Featuredproperty";
import Featuredservices from "./Featuredservices";
import FeaturedAgents from "./FeaturedAgents";

import Testimonialsection from "./Testimonialsection";
import Whyus from "./Whyus";
import RecentBlog from "./RecentBlog";
import PropertyJourney from "./PropertyJourney";


function PremiumProperties() {

  useEffect(() => {
        AOS.init({
        duration: 1000,
        delay: 50,
        });
        }, []);
  return (
   <div className="left-0 right-0">
      <div className="bg-gray-100 w-full py-10 lg:px-22 lg:pl-26 px-6 ">
      <div
        className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1 gap-30 lg:gap-10 md:gap-20 w-full  justify-items-center pt-34"
        data-aos="fade-right"
      >
        {/* ===== LEFT SECTION ===== */}
        <div className="w-full" data-aos="fade-right" data-aos-delay="400">
          {/* Premium Button */}
          <div>
            <button className="px-4 py-2 bg-teal-700 text-white rounded-full flex items-center gap-2 text-sm">
              <Star size={20} className="fill-white" />
              <span>Premium Property</span>
            </button>
          </div>

          {/* Title and Description */}
          <div className="mt-6">
            <h1 className="lg:text-5xl sm:text-4xl font-bold lg:text-left text-center text-gray-800 leading-tight tracking-wide mb-6">
              Discover Your Perfect Home in the Heart of the City
            </h1>
            <p className="lg:text-lg lg:text-left text-center text-gray-500 leading-8">
              Explore our curated selection of premium properties, handpicked to
              offer you the best in urban living. Whether you're looking for a
              modern apartment, a cozy townhouse, or a luxurious penthouse, we
              have something to suit every lifestyle.
            </p>
          </div>

          {/* Search Form */}
          <div
            className="rounded-lg bg-white shadow-lg p-6 w-full lg:max-w-2xl mt-8"
            data-aos="zoom-in"
          >
            <form>
              {/* Location Input */}
              <label className="border border-gray-400 flex flex-col hover:shadow-sm hover:shadow-teal-300 hover:border-teal-700 rounded-md p-2">
                <span className="ml-1 text-gray-600 text-sm mb-1">
                  Location
                </span>
                <input
                  type="text"
                  id="location"
                  placeholder="Enter your location"
                  required
                  autoComplete="location"
                  className="border-0 focus:ring-0 rounded-md focus:outline-none px-2 py-1"
                />
              </label>

              {/* Property Type & Price Range */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                {/* Property Type */}
                <label className="border border-gray-400 relative flex flex-col hover:border-teal-700 rounded-md hover:shadow-sm hover:shadow-teal-300 p-2">
                  <span className="ml-1 text-gray-600 text-sm mb-1">
                    Property Type
                  </span>
                  <select className="border-0 focus:ring-0 rounded-md focus:outline-none appearance-none px-2 py-1">
                    <option value="">Select Type</option>
                    <option value="house">House</option>
                    <option value="apartment">Apartment</option>
                    <option value="condo">Condo</option>
                    <option value="townhouse">Townhouse</option>
                    <option value="land">Land</option>
                  </select>
                  <span className="absolute right-3 top-1/2 pointer-events-none -translate-y-1/2">
                    <ChevronDown size={18} />
                  </span>
                </label>

                {/* Price Range */}
                <label className="border border-gray-400 relative flex flex-col hover:border-teal-700 rounded-md hover:shadow-sm hover:shadow-teal-300 p-2">
                  <span className="ml-1 text-gray-600 text-sm mb-1">
                    Price Range
                  </span>
                  <select className="border-0 focus:ring-0 rounded-md focus:outline-none appearance-none px-2 py-1">
                    <option value="">Select Range</option>
                    <option value="under-200">Under $200K</option>
                    <option value="200-500">$200K - $500K</option>
                    <option value="500-800">$500K - $800K</option>
                    <option value="800-1.2">$800K - $1.2M</option>
                    <option value="above-1.2">Above $1.2M</option>
                  </select>
                  <span className="absolute right-3 top-1/2 pointer-events-none -translate-y-1/2">
                    <ChevronDown size={18} />
                  </span>
                </label>
              </div>

              {/* Bedrooms & Bathrooms */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                {/* Bedrooms */}
                <label className="border border-gray-400 relative flex flex-col hover:border-teal-700 rounded-md hover:shadow-sm hover:shadow-teal-300 p-2">
                  <span className="ml-1 text-gray-600 text-sm mb-1">
                    Bedrooms
                  </span>
                  <select className="border-0 focus:ring-0 rounded-md focus:outline-none appearance-none px-2 py-1">
                    <option value="">Select Bedrooms</option>
                    <option value="1">1 Bedroom</option>
                    <option value="2">2 Bedrooms</option>
                    <option value="3">3 Bedrooms</option>
                    <option value="4">4 Bedrooms</option>
                    <option value="5+">5+ Bedrooms</option>
                  </select>
                  <span className="absolute right-3 top-1/2 pointer-events-none -translate-y-1/2">
                    <ChevronDown size={18} />
                  </span>
                </label>

                {/* Bathrooms */}
                <label className="border border-gray-400 relative flex flex-col hover:border-teal-700 rounded-md hover:shadow-sm hover:shadow-teal-300 p-2">
                  <span className="ml-1 text-gray-600 text-sm mb-1">
                    Bathrooms
                  </span>
                  <select className="border-0 focus:ring-0 rounded-md focus:outline-none appearance-none px-2 py-1">
                    <option value="">Select Bathrooms</option>
                    <option value="1">1 Bathroom</option>
                    <option value="2">2 Bathrooms</option>
                    <option value="3">3 Bathrooms</option>
                    <option value="4+">4+ Bathrooms</option>
                  </select>
                  <span className="absolute right-3 top-1/2 pointer-events-none -translate-y-1/2">
                    <ChevronDown size={18} />
                  </span>
                </label>
              </div>

              {/* Search Button */}
              <button
                type="submit"
                className="rounded-xl bg-teal-700 flex items-center gap-2 text-white w-full py-4 justify-center font-bold mt-2"
              >
                <Search />
                <span>Search Properties</span>
              </button>
            </form>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-3  sm:grid-cols-3 gap-6 mt-10">
            <div>
              <h2 className="lg:text-4xl sm:text-2xl font-bold text-teal-700 flex mb-2">
                <CountUp end={2847} duration={3} />+
              </h2>
              <p className="text-gray-500 text-md">Properties Listed</p>
            </div>
            <div>
              <h2 className="lg:text-4xl sm:text-2xl font-bold text-teal-700 flex mb-2">
                <CountUp end={156} duration={3} />+
              </h2>
              <p className="text-gray-500 text-md">Verified Agents</p>
            </div>
            <div>
              <h2 className="lg:text-4xl sm:text-2xl font-bold text-teal-700 flex mb-2">
                <CountUp end={98} duration={3} />%
              </h2>
              <p className="text-gray-500 text-md">Client Satisfaction</p>
            </div>
          </div>
        </div>

        {/* ===== RIGHT SECTION ===== */}
        <div
          className="relative w-full h-full flex justify-center items-center lg:-mt-20"
          data-aos="fade-left"
          data-aos-delay="400"
        >
          {/* Outer wrapper — no overflow hidden */}
          <div className="relative w-full rounded-2xl shadow-md shadow-gray-300 ">
            {/* Main Image */}
            <img
              src="/images/property-exterior-3.webp"
              alt="premium property"
              className="rounded-2xl object-cover w-full lg:h-[70vh] h-[60vh]"
            />

            {/* Floating Interior Image */}
            <div className="absolute -top-12 left-8 rounded-2xl z-20">
              <img
                src="/images/property-interior-7.webp"
                alt="interior"
                className="w-48 h-48 rounded-2xl border-4 border-amber-50 object-cover shadow-lg"
              />
            </div>

            {/* Price Tag */}
            <div className="flex bg-amber-50 rounded-2xl py-4 px-8 absolute right-5 top-5 flex-col shadow-md z-20">
              <span className="text-teal-700 font-bold text-lg">$850,000</span>
              <span className="text-gray-600 text-sm font-medium">FEATURED</span>
            </div>

            {/* Agent Info */}
            <div>
              <div className="flex bg-amber-50 rounded-2xl py-5 px-8 absolute left-8 -bottom-10 shadow-xl flex-row gap-4 items-center z-20">
              <img
                src="/images/agent-4.webp"
                alt="agent"
                className="w-14 h-14 rounded-full border-2 border-teal-700 object-cover"
              />
              <div className="flex flex-col items-start">
                <h2 className="font-medium text-teal-700 text-lg">Sarah Johnson</h2>
                <p className="text-gray-500 text-sm">Top Real Estate Agent</p>
                <div className="flex flex-row mt-2 items-center">
                  <Star size={12} className="text-yellow-400 fill-amber-400" />
                  <Star size={12} className="text-yellow-400 fill-amber-400" />
                  <Star size={12} className="text-yellow-400 fill-amber-400" />
                  <Star size={12} className="text-yellow-400 fill-amber-400" />
                  <Star size={12} className="text-yellow-400 fill-amber-400" />
                  <span className="text-sm text-gray-500 ml-2">
                    4.9 (127 reviews)
                  </span>
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
     <Premiumestate/>
     <Featuredproperty/>
     <Featuredservices/>
     <FeaturedAgents/>
     <Testimonialsection/>
     <Whyus/>
     <RecentBlog/>
     <PropertyJourney/>
   </div>
  );
}

export default PremiumProperties;
