import { MapPin, Zap } from "lucide-react";
import React from "react";
import {
  BsAspectRatio,
  BsDoorOpen,
  BsDroplet,
  BsGem,
  BsGeo,
  BsLightningCharge,
  BsLightningChargeFill,
  BsRulers,
  BsStarFill,
} from "react-icons/bs";
import { Link } from "react-router-dom";

function Featuredproperty() {
  return (
    <div className="w-full bg-[#fefefe] py-10 lg:px-22 lg:pl-26 px-6">
      <div data-aos="fade-up" data-aos-delay="100">
        <h1 className="text-3xl font-medium pb-2 relative text-[#1f2f31] text-center">
          Featured Properties
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

        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-6 w-full items-stretch" data-aos="zoom-in" data-aos-delay="150">
          {/* Left Section */}
          <div className="md:col-span-2 shadow-lg bg-white rounded-2xl flex flex-col h-full transition-all ease-in-out duration-300 hover:-translate-y-1">
            {/* Image */}
            <div className="overflow-hidden rounded-t-2xl w-full relative">
              <Link to="/propertiesdetail">
                <img
                  src="/images/property-exterior-6.webp"
                  alt="Featured Property"
                  className="object-cover w-full h-98 rounded-t-2xl transition-transform duration-500 hover:scale-105"
                />
              </Link>
              {/* Featured + Premium tags */}
              <div className="absolute left-4 top-4 flex gap-2">
                <span className="bg-teal-700 text-white font-extrabold rounded-full py-1 px-3 text-xs">
                  FEATURED
                </span>
                <span className="bg-blue-800 text-white font-extrabold rounded-full py-1 px-3 text-xs">
                  PREMIUM
                </span>
              </div>
              {/* Beds, Baths, Area */}
              <div className="absolute left-4 bottom-2 flex flex-wrap gap-2">
                <div className="flex items-center py-1 px-3 bg-gray-700 text-white rounded-full gap-2 text-xs">
                  <BsDoorOpen className="h-4 w-4" /> 5 Beds
                </div>
                <div className="flex items-center py-1 px-3 bg-gray-700 text-white rounded-full gap-2 text-xs">
                  <BsDroplet className="h-4 w-4" /> 4 Baths
                </div>
                <div className="flex items-center py-1 px-3 bg-gray-700 text-white rounded-full gap-2 text-xs">
                  <BsAspectRatio className="h-4 w-4" /> 4,900 sq ft
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-between flex-1 px-5 py-4">
              {/* Title and Price */}
              <div className="flex flex-col lg:flex-row justify-between lg:items-center">
                <div>
                  <h1 className="font-bold text-gray-600 hover:text-teal-700 text-2xl">
                    Seaside Villa with Infinity Pool
                  </h1>
                  <p className="flex items-center gap-1 text-sm text-gray-500 mt-1">
                    <MapPin size={18} className="text-teal-700" />
                    Coronado, CA 92118
                  </p>
                </div>
                <button className="mt-2 lg:mt-0 py-3 px-5 rounded-2xl font-bold text-white bg-teal-700 text-xl">
                  $3,760,000
                </button>
              </div>

              {/* Description */}
              <p className="mt-3 text-gray-500 text-lg flex-grow">
                Praesent commodo cursus magna, fusce dapibus tellus ac cursus
                commodo, vestibulum id ligula porta felis euismod porta semper.
              </p>

              {/* Actions */}
              <div className="w-full flex flex-col lg:flex-row gap-2 lg:items-center justify-between pb-3 mt-4">
                <div className="flex flex-wrap gap-2">
                  <div className="flex flex-col lg:flex-row gap-2 lg:items-center w-full">
                    <Link to="/propertiesdetail" className="rounded-full bg-teal-700 text-white font-bold py-2 px-6 hover:-translate-y-1 transition-all">
                      ARRANGE VISIT
                    </Link>
                    <Link to="/propertiesdetail" className="rounded-full text-teal-700 bg-white font-bold py-2 px-6 border border-teal-700 hover:bg-teal-100 hover:-translate-y-1 transition-all">
                      MORE PHOTOS
                    </Link>
                  </div>
                </div>
                <div className="flex gap-2 items-center text-sm">
                  <button className="text-teal-700 bg-teal-100 px-4 py-2 rounded-full font-bold">
                    FOR SALE
                  </button>
                  <p className="text-gray-500">Listed 2 days ago</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - Responsive Cards */}
          <div className="md:col-span-1 w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 md:grid-cols-1 gap-6 w-full h-full">
            {/* Card 1 */}           
            <Link to="/propertiesdetail" className="bg-white shadow-md rounded-2xl flex flex-row overflow-hidden h-full gap-3">
              <div className="relative">
                <div className="absolute top-2 left-2 bg-gray-600 text-white text-xs font-bold rounded-full py-1 px-2 flex-row flex items-center gap-2">
                  <BsLightningChargeFill
                    size={12}
                    className="fill-white text-white"
                  />
                  <span>Hot</span>
                </div>
               <div className="lg:w-40 w-20 h-full">
                 <img
                  src="/images/property-interior-2.webp"
                  alt="Urban Loft with Skyline Views"
                  className="object-cover w-full h-full"
                />
               </div>
              </div>

               <div className="flex flex-col gap-4 w-full">
                <div className="w-full">
                  <h1 className="font-semibold text-lg text-gray-700 hover:text-teal-700">
                    Urban Loft with Skyline Views
                  </h1>
                  <p className="flex items-center gap-2 text-sm text-gray-500 mt-2">
                    <BsGeo className="h-4 w-4 text-teal-700" /> Denver, CO 80203
                  </p>
                  <div className="flex gap-4 text-sm mt-2">
                    <span className="flex items-center gap-1">
                      <BsDoorOpen className="h-4 w-4 text-teal-700" /> 2
                    </span>
                    <span className="flex items-center gap-1">
                      <BsDroplet className="h-4 w-4 text-teal-700" /> 2
                    </span>
                    <span className="flex items-center gap-1">
                      <BsRulers className="h-4 w-4 text-teal-700" /> 1200 sqft
                    </span>
                  </div>
                </div>
                <div className="flex justify-between items-center mt-4 pb-2 mr-2">
                  <span className="font-bold text-gray-700 text-lg">
                    $689,000
                  </span>
                  <Link
                    to="/propertiesdetail"
                    className="bg-teal-700 text-white font-bold rounded-full py-2 px-3 text-xs hover:-translate-y-1 transition-all"
                  >
                    DETAILS
                  </Link>
                </div>
              </div>
            </Link>

            {/* Card 2 */}           
            <Link to="/propertiesdetail" className="bg-white shadow-md rounded-2xl flex flex-row overflow-hidden h-full gap-3">
              <div className="relative">
                <div className="absolute top-2 left-2 bg-green-700 text-white text-xs font-bold rounded-full py-1 px-2 flex-row flex items-center gap-2">
                  <BsStarFill size={12} className="fill-white text-white" />
                  <span>New</span>
                </div>
                <div className="lg:w-40 w-20 h-full">
                  <img
                  src="/images/property-exterior-3.webp"
                  alt="Charming Suburban Retreat"
                  className="object-cover w-full h-full"
                />
                </div>
              </div>

              <div className="flex flex-col gap-4 w-full">
                <div>
                  <h1 className="font-semibold text-lg text-gray-700 hover:text-teal-700">
                    Charming Suburban Retreat
                  </h1>
                  <p className="flex items-center gap-2 text-sm text-gray-500 mt-1">
                    <BsGeo className="h-4 w-4 text-teal-700" /> Austin, TX 78745
                  </p>
                  <div className="flex gap-4 text-sm mt-2">
                    <span className="flex items-center gap-1">
                      <BsDoorOpen className="h-4 w-4 text-teal-700" /> 4
                    </span>
                    <span className="flex items-center gap-1">
                      <BsDroplet className="h-4 w-4 text-teal-700" /> 3
                    </span>
                    <span className="flex items-center gap-1">
                      <BsRulers className="h-4 w-4 text-teal-700" /> 2,350 sqft
                    </span>
                  </div>
                </div>
                

                <div className="flex justify-between items-center mt-4 pb-2 mr-2">
                  <span className="font-bold text-gray-700 text-lg">
                    $545,000
                  </span>
                  <Link
                    to="/propertiesdetail"
                    className="bg-teal-700 text-white font-bold rounded-full py-2 px-3 text-xs hover:-translate-y-1 transition-all"
                  >
                    DETAILS
                  </Link>
                </div>
              </div>
            </Link>

            {/* Card 3 */}            
            <Link to="/propertiesdetail" className="bg-white shadow-md rounded-2xl flex flex-row overflow-hidden h-full gap-3">
              <div className="relative">
                <div className="absolute top-2 left-2 bg-teal-700 text-white  font-bold rounded-full py-1 px-2 flex-row flex items-center gap-2">
                  <BsGem size={12} className="fill-white text-white" />
                  <span className="text-[8px] lg:text-xs">Featured</span>
                </div>
               <div className="lg:w-40 w-20  h-full">
                 <img
                  src="/images/property-interior-7.webp"
                  alt="Glass-Roof Penthouse Suite"
                  className="object-cover w-full h-full"
                />
               </div>
              </div>

              <div className="flex flex-col gap-4 py-2 w-full">
                <div>
                  <h1 className="font-semibold text-lg text-gray-700 hover:text-teal-700 mb-2">
                    Glass-Roof Penthouse Suite
                  </h1>
                  <p className="flex items-center gap-2 text-sm text-gray-500 mt-2">
                    <BsGeo className="h-4 w-4 text-teal-700" /> Miami, FL 33131
                  </p>
                  <div className="flex gap-4 text-sm mt-2">
                    <span className="flex items-center gap-1">
                      <BsDoorOpen className="h-4 w-4 text-teal-700" /> 3
                    </span>
                    <span className="flex items-center gap-1">
                      <BsDroplet className="h-4 w-4 text-teal-700" /> 3
                    </span>
                    <span className="flex items-center gap-1">
                      <BsRulers className="h-4 w-4 text-teal-700" /> 2,120 sqft
                    </span>
                  </div>
                </div>
                <div className="flex justify-between items-center mt-4 pb-2 mr-2">
                  <span className="font-bold text-gray-700 text-lg">
                    $1,290,000
                  </span>
                  <Link
                    to="/propertiesdetail"
                    className="bg-teal-700 text-white font-bold rounded-full py-2 px-3 text-xs hover:-translate-y-1 transition-all"
                  >
                    DETAILS
                  </Link>
                </div>
              </div>
            </Link>
          </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 w-full">
          {/*card1*/}
          <div className="shadow-lg pb-8 bg-white rounded-2xl flex flex-col h-full transition-all ease-in-out duration-300 hover:-translate-y-1" data-aos="fade-up" data-aos-delay="200">
            <div className="relative">
                <div className="absolute top-2 left-2 bg-blue-700 text-white text-xs font-bold rounded-full py-1 px-2 flex-row flex items-center gap-2">
                 
                  <span>Exclusive</span>
                </div>
                <img
                  src="/images/property-exterior-8.webp"
                  alt="Charming Suburban Retreat"
                  className="object-cover w-full h-50  rounded-t-2xl "
                />
              </div>

              <div className="mt-4 mx-4">
                <h4 className="font-bold text-lg hover:text-teal-600 transition-colors duration-300 ease-in-out">Modern Courtyard Residence</h4>
                <div className="flex flex-row gap-1 items-center mt-3">
                  <span className="text-sm text-gray-600"><MapPin size={15}/></span>
                  <span className="text-xs text-gray-600">Scottsdale, AZ 85251</span>
                  </div>

                  <div className="flex gap-4 text-sm mt-3">
                    <span className="flex items-center gap-1">
                      <BsDoorOpen className="h-4 w-4 text-teal-700" /> 4
                    </span>
                    <span className="flex items-center gap-1">
                      <BsDroplet className="h-4 w-4 text-teal-700" /> 3
                    </span>
                    <span className="flex items-center gap-1">
                      <BsAspectRatio className="h-4 w-4 text-teal-700"/>2,350 sqft
                    </span>
                  </div>

                  <div className="flex justify-between items-center mt-4">
                  <span className="font-bold text-gray-700 text-lg">
                    $1,025,000
                  </span>
                  <Link
                    to="/propertiesdetail"
                    className="border-teal-700 border text-teal-700 font-bold rounded-full py-2 px-3 text-xs hover:-translate-y-1 transition-all"
                  >
                    VIEW
                  </Link>
                </div>
              </div>              
          </div>

          {/*card2*/}
          <div className="shadow-lg pb-8 bg-white rounded-2xl flex flex-col h-full transition-all ease-in-out duration-300 hover:-translate-y-1" data-aos="fade-up" data-aos-delay="250">
            <div className="relative">
                <div className="absolute top-2 left-2 bg-gray-600 text-white text-xs font-bold rounded-full py-1 px-2 flex-row flex items-center gap-2">
                 
                  <span>Hot</span>
                </div>
                <img
                  src="/images/property-interior-10.webp"
                  alt="Charming Suburban Retreat"
                  className="object-cover w-full h-50  rounded-t-2xl "
                />
              </div>

              <div className="mt-4 mx-4">
                <h4 className="font-bold text-lg hover:text-teal-600 transition-colors duration-300 ease-in-out">Cozy Lakeview Townhouse</h4>
                <div className="flex flex-row gap-1 items-center mt-3">
                  <span className="text-sm text-gray-600"><MapPin size={15}/></span>
                  <span className="text-xs text-gray-600">Madison, WI 53703</span>
                  </div>

                  <div className="flex gap-4 text-sm mt-3">
                    <span className="flex items-center gap-1">
                      <BsDoorOpen className="h-4 w-4 text-teal-700" /> 3
                    </span>
                    <span className="flex items-center gap-1">
                      <BsDroplet className="h-4 w-4 text-teal-700" /> 2
                    </span>
                    <span className="flex items-center gap-1">
                      <BsAspectRatio className="h-4 w-4 text-teal-700"/>1,780 sq ft
                    </span>
                  </div>

                  <div className="flex justify-between items-center mt-4">
                  <span className="font-bold text-gray-700 text-lg">
                   $429,000
                  </span>
                  <Link
                    to="/propertiesdetail"
                    className="border-teal-700 border text-teal-700 font-bold rounded-full py-2 px-3 text-xs hover:-translate-y-1 transition-all"
                  >
                    VIEW
                  </Link>
                </div>
              </div>                
          </div>

          {/*card3*/}
          <div className="shadow-lg pb-8 bg-white rounded-2xl flex flex-col h-full transition-all ease-in-out duration-300 hover:-translate-y-1" data-aos="fade-up" data-aos-delay="300">
            <div className="relative">
                <div className="absolute top-2 left-2 bg-green-700 text-white text-xs font-bold rounded-full py-1 px-2 flex-row flex items-center gap-2">
                 
                  <span>New</span>
                </div>
                <img
                  src="/images/property-exterior-10.webp"
                  alt="Charming Suburban Retreat"
                  className="object-cover w-full h-50  rounded-t-2xl "
                />
              </div>

              <div className="mt-4 mx-4">
                <h4 className="font-bold text-lg hover:text-teal-600 transition-colors duration-300 ease-in-out">Garden Home Near Downtown</h4>
                <div className="flex flex-row gap-1 items-center mt-3">
                  <span className="text-sm text-gray-600"><MapPin size={15}/></span>
                  <span className="text-xs text-gray-600">Raleigh, NC 27601</span>
                  </div>

                  <div className="flex gap-4 text-sm mt-3">
                    <span className="flex items-center gap-1">
                      <BsDoorOpen className="h-4 w-4 text-teal-700" /> 3
                    </span>
                    <span className="flex items-center gap-1">
                      <BsDroplet className="h-4 w-4 text-teal-700" /> 2
                    </span>
                    <span className="flex items-center gap-1">
                      <BsAspectRatio className="h-4 w-4 text-teal-700"/>1,920 sq ft
                    </span>
                  </div>

                  <div className="flex justify-between items-center mt-4">
                  <span className="font-bold text-gray-700 text-lg">
                    $512,000
                  </span>
                  <Link
                    to="/propertiesdetail"
                    className="border-teal-700 border text-teal-700 font-bold rounded-full py-2 px-3 text-xs hover:-translate-y-1 transition-all"
                  >
                    VIEW
                  </Link>
                </div>
              </div>              
          </div>
        </div>
      </div>
    </div>
  );
}
export default Featuredproperty;
