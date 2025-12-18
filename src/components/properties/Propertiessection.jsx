import { ChevronDown, MapPin } from "lucide-react";
import React from "react";
import {
  BsArrowsAngleExpand,
  BsEnvelope,
  BsGrid3X3Gap,
  BsHeart,
  BsHeartFill,
  BsHouse,
  BsImages,
  BsList,
  BsTelephone,
  BsWater,
  BsWhatsapp,
} from "react-icons/bs";

export default function Propertiessection() {
  return (
    <div className="border-b border-b-gray-300">
      {/* ===== TOP SECTION ===== */}
      <div
        className="text-center py-20 px-6 sm:px-10 md:px-16 lg:px-28 pt-36"
        id="properties"
        data-aos="zoom-in"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-blue-950">
          Properties
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
                Properties
              </a>
            </li>
          </ul>
        </div>
      </div>


      <div className="grid grid-cols-1 lg:grid-cols-[70%_30%] max-w-7xl mx-auto gap-8 lg:px-0 px-4 mt-15" data-aos="fade-up" data-aos-delay="200">
        {/*left section*/}
        <div className="mb-4">
          <div className="flex flex-col lg:flex-row justify-between items-center mb-4 w-full">
            <div className="flex flex-col lg:flex-row gap-4 w-full lg:mb-0 mb-4">
              <span className="flex flex-row gap-1 lg:py-1 py-2 px-3 justify-center bg-teal-600 items-center text-white rounded text-sm">
                <BsGrid3X3Gap size={18} className="text-white" />
                Grid
              </span>

              <span className="flex flex-row gap-1 lg:py-1 py-2 justify-center px-3 bg-white items-center text-gray-500 border border-gray-300 rounded text-sm transition-all ease-in-out duration-300 hover:bg-gray-400 hover:border-gray-400">
                <BsList size={18} />
                List
              </span>
            </div>

            <div className="lg:w-[30%] w-full">
               <div className="relative inline-block w-full">
      <select
        className="py-2 pl-3 pr-10 appearance-none border border-gray-300 rounded-md
                   focus:outline-none focus:ring-1 focus:ring-gray-300 focus:border-gray-300
                   text-gray-700 w-full"
      >
        <option>Sort by: Newest</option>
        <option>Price: Low to High</option>
        <option>Price: High to Low</option>
        <option>Most Viewed</option>
      </select>

      <ChevronDown
        className="w-5 h-5 text-gray-500 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none"
      />
    </div>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2  gap-4">
            {/* CARD 1*/}
            <div className="shadow-lg pb-8 bg-white rounded-2xl flex flex-col h-full transition-all ease-in-out duration-300 hover:-translate-y-1 group">
              <div className="relative overflow-hidden flex flex-row gap-6">
                {/* TOP BADGE */}
                <div className="absolute top-3 left-3 text-white bg-orange-400 text-xs font-bold rounded-full py-1 px-2 flex items-center gap-2 z-20">
                  <span className="text-xs">Featured</span>
                </div>

                <div className="absolute top-3 left-20 text-white bg-teal-700 text-xs font-bold rounded-full py-1 px-2 flex items-center gap-2 z-20">
                  <span className="text-xs">For Sale</span>
                </div>

                {/* HOVER ICONS */}
                <div
                  className="absolute flex flex-col items-center right-3 top-3 gap-3 
opacity-0 group-hover:opacity-100 group-hover:scale-110 
transition-all duration-300 z-10"
                >
                  <span className="p-3 rounded-full bg-white text-gray-700 hover:bg-red-600 hover:text-white transition-colors duration-300 shadow-md">
                    <BsHeart size={14} />
                  </span>

                  <span className="p-3 rounded-full bg-white text-teal-700 hover:bg-teal-900  hover:text-white transition-colors duration-300 shadow-md">
                    <BsImages size={14} />
                  </span>
                </div>

                {/* IMAGE */}
                <div className="w-full h-[280px] rounded-t-2xl overflow-hidden">
                  <img
                    src="/images/property-exterior-1.webp"
                    alt="Agent"
                    className="object-cover w-full h-full transition-all duration-300 group-hover:scale-110"
                  />
                </div>
              </div>

              <div className="mt-4  flex flex-col justify-left">
                <div className="ml-6">
                  <h4 className="text-lg hover:text-teal-600 transition-colors duration-300 ease-in-out flex flex-col text-left">
                    <span className="text-2xl text-teal-600 font-bold">
                      $875,000
                    </span>
                    <span className="text-gray-700 text-xl font-medium">
                      Modern Family Home with Garden
                    </span>
                  </h4>

                  <div className="flex flex-row gap-1 items-center mt-3">
                    <span className="text-sm text-gray-600">
                      <MapPin size={15} />
                    </span>
                    <span className="text-sm text-gray-600">
                      2847 Oak Street, Beverly Hills, CA 90210
                    </span>
                  </div>
                  <div className="flex flex-row items-center gap-4 mt-3">
                    <div className="flex flex-row items-center gap-2">
                      <span>
                        <BsHouse size={15} className="text-teal-700" />
                      </span>
                      <span className="text-xs">4 Bed</span>
                    </div>

                    <div className="flex flex-row items-center gap-2">
                      <span>
                        <BsWater size={15} className="text-teal-700" />
                      </span>
                      <span className="text-xs">3 Bath</span>
                    </div>

                    <div className="flex flex-row items-center gap-2">
                      <span>
                        <BsArrowsAngleExpand
                          size={15}
                          className="text-teal-700"
                        />
                      </span>
                      <span className="text-xs">2,400 sqft</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 mt-6 ml-4">
                    <img
                      src="/images/agent-3.webp"
                      className="w-10 h-10 rounded-full object-cover"
                    />

                    <div>
                      <p className="font-medium">Sarah Johnson</p>
                      <p className="text-xs text-gray-500 flex flex-row gap-1 mt-1">
                        <span>
                          <BsTelephone />
                        </span>
                        <span>+1 (555) 345-6789</span>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="w-full mt-8 px-8 ">
                  <a
                    href="#"
                    className="w-full block bg-teal-700 text-white font-bold rounded-lg py-3 text-xs text-center hover:-translate-y-1 transition-all"
                  >
                    View Details
                  </a>
                </div>
              </div>
            </div>

            {/* CARD 2 */}
            <div className="shadow-lg pb-8 bg-white rounded-2xl flex flex-col h-full transition-all ease-in-out duration-300 hover:-translate-y-1 group">
              <div className="relative overflow-hidden flex flex-row gap-6">
                {/* TOP BADGE */}
                <div className="absolute top-5 left-3 text-white bg-green-400 text-xs font-bold rounded-full py-1 px-2 flex items-center gap-2 z-20">
                  <span className="text-xs">New</span>
                </div>

                <div className="absolute top-5 left-15 text-white bg-teal-700 text-xs font-bold rounded-full py-1 px-2 flex items-center gap-2 z-20">
                  <span className="text-xs">For Sale</span>
                </div>

                {/* HOVER ICONS */}
                <div
                  className="absolute flex flex-col items-center right-3 top-3 gap-3 
opacity-0 group-hover:opacity-100 group-hover:scale-110 
transition-all duration-300 z-10"
                >
                  <span className="p-3 rounded-full bg-white text-teal-700 hover:bg-red-600 hover:text-white transition-colors duration-300 shadow-md">
                    <BsHeart size={14} />
                  </span>

                  <span className="p-3 rounded-full bg-white text-teal-700 hover:bg-teal-900  hover:text-white transition-colors duration-300 shadow-md">
                    <BsImages size={14} />
                  </span>
                </div>

                {/* IMAGE */}
                <div className="w-full h-[280px] rounded-t-2xl overflow-hidden">
                  <img
                    src="/images/property-exterior-7.webp"
                    alt="Agent"
                    className="object-cover w-full h-full transition-all duration-300 group-hover:scale-110"
                  />
                </div>
              </div>

              <div className="mt-4  flex flex-col justify-left">
                <div className="ml-6">
                  <h4 className="text-lg hover:text-teal-600 transition-colors duration-300 ease-in-out flex flex-col text-left">
                    <span className="text-2xl text-teal-600 font-bold">
                      $1,250,000
                    </span>
                    <span className="text-gray-700 text-xl font-medium">
                      Downtown Luxury Condominium
                    </span>
                  </h4>

                  <div className="flex flex-row gap-1 items-center mt-3">
                    <span className="text-sm text-gray-600">
                      <MapPin size={15} />
                    </span>
                    <span className="text-sm text-gray-600">
                      1542 Main Avenue, Manhattan, NY 10001
                    </span>
                  </div>
                  <div className="flex flex-row items-center gap-4 mt-3">
                    <div className="flex flex-row items-center gap-2">
                      <span>
                        <BsHouse size={15} className="text-teal-700" />
                      </span>
                      <span className="text-xs">2 Bed</span>
                    </div>

                    <div className="flex flex-row items-center gap-2">
                      <span>
                        <BsWater size={15} className="text-teal-700" />
                      </span>
                      <span className="text-xs">2 Bath</span>
                    </div>

                    <div className="flex flex-row items-center gap-2">
                      <span>
                        <BsArrowsAngleExpand
                          size={15}
                          className="text-teal-700"
                        />
                      </span>
                      <span className="text-xs">1,800 sqft</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 mt-6 ml-4">
                    <img
                      src="/images/agent-4.webp"
                      className="w-10 h-10 rounded-full object-cover"
                    />

                    <div>
                      <p className="font-medium">Michael Chen</p>
                      <p className="text-xs text-gray-500 flex flex-row gap-1 mt-1">
                        <span>
                          <BsTelephone />
                        </span>
                        <span>+1 (555) 345-6789</span>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="w-full mt-8 px-8 ">
                  <a
                    href="#"
                    className="w-full block bg-teal-700 text-white font-bold rounded-lg py-3 text-xs text-center hover:-translate-y-1 transition-all"
                  >
                    View Details
                  </a>
                </div>
              </div>
            </div>

            {/* CARD 3 */}
            <div className="shadow-lg pb-8 bg-white rounded-2xl flex flex-col h-full transition-all ease-in-out duration-300 hover:-translate-y-1 group">
              <div className="relative overflow-hidden">
                {/* TOP BADGE */}
                <div className="absolute top-5 left-3 text-white bg-blue-400 text-xs font-bold rounded-full py-1 px-2 flex items-center gap-2 z-20">
                  <span className="text-xs">For Rent</span>
                </div>

                {/* HOVER ICONS */}
                <div
                  className="absolute flex flex-col items-center right-3 top-3 gap-3 
opacity-0 group-hover:opacity-100 group-hover:scale-110 
transition-all duration-300 z-10"
                >
                  <span className="p-3 rounded-full bg-white text-teal-700 hover:bg-red-600 hover:text-white transition-colors duration-300 shadow-md">
                    <BsHeart size={14} />
                  </span>

                  <span className="p-3 rounded-full bg-white text-teal-700 hover:bg-teal-900  hover:text-white transition-colors duration-300 shadow-md">
                    <BsImages size={14} />
                  </span>
                </div>

                {/* IMAGE */}
                <div className="w-full h-[280px] rounded-t-2xl overflow-hidden">
                  <img
                    src="/images/property-exterior-3 (1).webp"
                    alt="Agent"
                    className="object-cover w-full h-full transition-all duration-300 group-hover:scale-110"
                  />
                </div>
              </div>

              <div className="mt-4  flex flex-col justify-left">
                <div className="ml-6">
                  <h4 className="text-lg hover:text-teal-600 transition-colors duration-300 ease-in-out flex flex-col text-left">
                    <span className="text-2xl text-teal-600 font-bold">
                      $4,500{" "}
                      <span className="text-xl text-gray-700 font-medium">
                        /month
                      </span>
                    </span>
                    <span className="text-gray-700 text-xl font-medium">
                      Spacious Suburban Villa
                    </span>
                  </h4>

                  <div className="flex flex-row gap-1 items-center mt-3">
                    <span className="text-sm text-gray-600">
                      <MapPin size={15} />
                    </span>
                    <span className="text-sm text-gray-600">
                      789 Pine Ridge Drive, Austin, TX 73301
                    </span>
                  </div>
                  <div className="flex flex-row items-center gap-4 mt-3">
                    <div className="flex flex-row items-center gap-2">
                      <span>
                        <BsHouse size={15} className="text-teal-700" />
                      </span>
                      <span className="text-xs">5 Bed</span>
                    </div>

                    <div className="flex flex-row items-center gap-2">
                      <span>
                        <BsWater size={15} className="text-teal-700" />
                      </span>
                      <span className="text-xs">4 Bath</span>
                    </div>

                    <div className="flex flex-row items-center gap-2">
                      <span>
                        <BsArrowsAngleExpand
                          size={15}
                          className="text-teal-700"
                        />
                      </span>
                      <span className="text-xs">3,200 sqft</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 mt-6 ml-4">
                    <img
                      src="/images/agent-5.webp"
                      className="w-10 h-10 rounded-full object-cover"
                    />

                    <div>
                      <p className="font-medium">Emma Rodriguez</p>
                      <p className="text-xs text-gray-500 flex flex-row gap-1 mt-1">
                        <span>
                          <BsTelephone />
                        </span>
                        <span>+1 (555) 345-6789</span>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="w-full mt-8 px-8 ">
                  <a
                    href="#"
                    className="w-full block bg-teal-700 text-white font-bold rounded-lg py-3 text-xs text-center hover:-translate-y-1 transition-all"
                  >
                    View Details
                  </a>
                </div>
              </div>
            </div>

            {/* CARD 4 */}
            <div className="shadow-lg pb-8 bg-white rounded-2xl flex flex-col h-full transition-all ease-in-out duration-300 hover:-translate-y-1 group">
              <div className="relative overflow-hidden">
                {/* TOP BADGE */}
                <div className="absolute top-5 left-3 text-white bg-orange-400 text-xs font-bold rounded-full py-1 px-2 flex items-center gap-2 z-20">
                  <span className="text-xs">Open House</span>
                </div>

                <div className="absolute top-5 left-28 text-white bg-teal-700 text-xs font-bold rounded-full py-1 px-2 flex items-center gap-2 z-20">
                  <span className="text-xs">For Sale</span>
                </div>

                {/* HOVER ICONS */}
                <div
                  className="absolute flex flex-col items-center right-3 top-3 gap-3 
opacity-0 group-hover:opacity-100 group-hover:scale-110 
transition-all duration-300 z-10"
                >
                  <span className="p-3 rounded-full bg-white text-teal-700 hover:bg-red-600 hover:text-white transition-colors duration-300 shadow-md">
                    <BsHeart size={14} />
                  </span>

                  <span className="p-3 rounded-full bg-white text-teal-700 hover:bg-teal-900  hover:text-white transition-colors duration-300 shadow-md">
                    <BsImages size={14} />
                  </span>
                </div>

                {/* IMAGE */}
                <div className="w-full h-[280px] rounded-t-2xl overflow-hidden">
                  <img
                    src="/images/property-interior-4.webp"
                    alt="Agent"
                    className="object-cover w-full h-full transition-all duration-300 group-hover:scale-110"
                  />
                </div>
              </div>

              <div className="mt-4  flex flex-col justify-left">
                <div className="ml-6">
                  <h4 className="text-lg hover:text-teal-600 transition-colors duration-300 ease-in-out flex flex-col text-left">
                    <span className="text-2xl text-teal-600 font-bold">
                      $695,000
                    </span>
                    <span className="text-gray-700 text-xl font-medium">
                      Waterfront Townhouse with Dock
                    </span>
                  </h4>

                  <div className="flex flex-row gap-1 items-center mt-3">
                    <span className="text-sm text-gray-600">
                      <MapPin size={15} />
                    </span>
                    <span className="text-xs text-gray-600">
                      {" "}
                      456 Harbor View Lane, Miami, FL 33101
                    </span>
                  </div>
                  <div className="flex flex-row items-center gap-4 mt-3">
                    <div className="flex flex-row items-center gap-2">
                      <span>
                        <BsHouse size={15} className="text-teal-700" />
                      </span>
                      <span className="text-xs">3 Bed</span>
                    </div>

                    <div className="flex flex-row items-center gap-2">
                      <span>
                        <BsWater size={15} className="text-teal-700" />
                      </span>
                      <span className="text-xs">2 Bath</span>
                    </div>

                    <div className="flex flex-row items-center gap-2">
                      <span>
                        <BsArrowsAngleExpand
                          size={15}
                          className="text-teal-700"
                        />
                      </span>
                      <span className="text-xs">2,100 sqft</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 mt-6 ml-4">
                    <img
                      src="/images/agent-7.webp"
                      className="w-10 h-10 rounded-full object-cover"
                    />

                    <div>
                      <p className="font-medium">David Williams</p>
                      <p className="text-xs text-gray-500 flex flex-row gap-1 mt-1">
                        <span>
                          <BsTelephone />
                        </span>
                        <span>+1 (555) 345-6789</span>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="w-full mt-8 px-8 ">
                  <a
                    href="#"
                    className="w-full block bg-teal-700 text-white font-bold rounded-lg py-3 text-xs text-center hover:-translate-y-1 transition-all"
                  >
                    View Details
                  </a>
                </div>
              </div>
            </div>

            <ul className="flex flex-row justify-center mt-4" data-aos="fade-up" data-aos-delay="300">
            <li className="border border-gray-300 px-4 py-2 rounded-l-lg">
              <a className="text-lg text-gray-500" href="#" tabindex="-1">
                Previous
              </a>
            </li>
            <li className=" px-4 py-2 transition-all ease-in-out duration-300 hover:z-3  text-white bg-teal-600">
              <a class="text-lg" href="#">
                1
              </a>
            </li>
            <li
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="border border-gray-300 transition-all duration-300 hover:border-gray-500 hover:bg-teal-50 h-full px-4 py-2 text-lg text-gray-500"
            >
              2
            </li>

            <li
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="border border-gray-300 transition-all duration-300 hover:border-gray-500 hover:bg-teal-50 px-4 py-2 text-lg text-gray-500"
            >
              3
            </li>
            <li className=" border border-gray-300 px-4 py-2 rounded-r-lg transition-all ease-in-out duration-300 hover:border hover:border-gray-500 hover:z-3 hover:bg-teal-50">
              <a className="text-lg text-gray-500" href="#">
                Next
              </a>
            </li>
          </ul>
          </div>

          
        </div>

        {/*right section*/}
   <div>
    <div className=" w-full h-auto rounded-2xl flex flex-col">
        <div className="flex flex-col bg-white shadow-lg  p-8 ">
          <h1 className="text-2xl text-gray-700 border-b border-b-gray-300 pb-2">Filter Properties</h1>
          <div className="flex flex-col gap-2 mt-4">            
             <label className="text-sm font-bold">Property Type</label>
            <div className="relative inline-block w-full">
              <select className="py-2 pl-3 pr-10 appearance-none border border-gray-300 rounded-md
                   focus:outline-none focus:ring-1 focus:ring-gray-300 focus:border-gray-300
                   text-gray-700 w-full">
                    <option>All Types</option>
                    <option>House</option>
                    <option>Apartment</option>
                    <option>Condo</option>
                    <option>Townhouse</option>
                    <option>Commercial</option>
                  </select>

                  <ChevronDown
        className="w-5 h-5 text-gray-500 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none"
      />
            </div>
          </div>
         <div className="mt-5 w-full">
  <label className="text-sm font-bold">Price Range</label>

  <div className="flex flex-row gap-3 w-full mt-2">
    
    {/* Min Price */}
    <div className="w-full">
      <input
        type="number"
        placeholder="Min Price"
        className="w-full py-2 px-3 border border-gray-300 rounded-md
                   focus:outline-none focus:ring-1 focus:ring-gray-300 focus:border-gray-300
                   text-gray-700"
      />
    </div>

    {/* Max Price */}
    <div className="w-full">
      <input
        type="number"
        placeholder="Max Price"
        className="w-full py-2 px-3 border border-gray-300 rounded-md
                   focus:outline-none focus:ring-1 focus:ring-gray-300 focus:border-gray-300
                   text-gray-700"
      />
    </div>

  </div>
</div>


         <div className="mt-5 w-full">
                  <label className="text-sm font-bold">Bedrooms</label>
                  <div className="flex flex-row gap-2">
                    <button className="py-2 justify-center px-3 bg-teal-700 items-center rounded text-sm text-white">Any</button>
                    <button className="py-2 justify-center px-3 bg-white items-center text-gray-500 border border-gray-300 rounded text-sm transition-all ease-in-out duration-300 hover:bg-gray-400 hover:border-gray-400">1+</button>
                    <button className="py-2 justify-center px-3 bg-white items-center text-gray-500 border border-gray-300 rounded text-sm transition-all ease-in-out duration-300 hover:bg-gray-400 hover:border-gray-400">2+</button>
                    <button className="py-2 justify-center px-3 bg-white items-center text-gray-500 border border-gray-300 rounded text-sm transition-all ease-in-out duration-300 hover:bg-gray-400 hover:border-gray-400">3+</button>
                    <button className="py-2 justify-center px-3 bg-white items-center text-gray-500 border border-gray-300 rounded text-sm transition-all ease-in-out duration-300 hover:bg-gray-400 hover:border-gray-400">4+</button>
                  </div>
                </div>

                <div className="mt-5 w-full">
                  <label className="text-sm font-bold">Bathrooms</label>
                  <div className="flex flex-row gap-2">
                    <button className="py-2 justify-center px-3 bg-teal-700 items-center rounded text-sm text-white">Any</button>
                    <button className="py-2 justify-center px-3 bg-white items-center text-gray-500 border border-gray-300 rounded text-sm transition-all ease-in-out duration-300 hover:bg-gray-400 hover:border-gray-400">1+</button>
                    <button className="py-2 justify-center px-3 bg-white items-center text-gray-500 border border-gray-300 rounded text-sm transition-all ease-in-out duration-300 hover:bg-gray-400 hover:border-gray-400">2+</button>
                    <button className="py-2 justify-center px-3 bg-white items-center text-gray-500 border border-gray-300 rounded text-sm transition-all ease-in-out duration-300 hover:bg-gray-400 hover:border-gray-400">3+</button>
                  </div>
                </div>

                <div className="flex flex-col gap-2 mt-5">
                  <label className="text-sm font-bold">Location</label>
                  <input type="text" placeholder="Enter city or neighborhood" className="w-full py-2 px-3 border border-gray-300 rounded-md
                   focus:outline-none focus:ring-1 focus:ring-gray-300 focus:border-gray-300
                   text-gray-700"/>
                </div>

                <div className="mt-5">
                  <label className="text-sm font-bold">Features</label>
                  <div className="features-filter">
                    <div className="flex flex-row gap-2">
                      <input className="form-check-input" type="checkbox" id="garage"/>
                      <label className="form-check-label" for="garage">Garage</label>
                    </div>
                    <div className="flex flex-row gap-2">
                      <input className="form-check-input" type="checkbox" id="pool"/>
                      <label className="form-check-label" for="pool">Swimming Pool</label>
                    </div>
                    <div className="flex flex-row gap-2">
                      <input className="form-check-input" type="checkbox" id="balcony"/>
                      <label className="form-check-label" for="balcony">Balcony</label>
                    </div>
                    <div className="flex flex-row gap-2">
                      <input className="form-check-input" type="checkbox" id="garden"/>
                      <label className="form-check-label" for="garden">Garden</label>
                    </div>
                  </div>
                </div>

                <button className="text-white font-bold py-2 bg-teal-700 rounded-lg mt-4">Apply Filters</button>
        </div>

        <div className="mt-8 bg-white shadow-lg  p-8 ">
                <h5 className="text-xl text-gray-700 border-b border-b-gray-300 pb-2">Featured Properties</h5>

                <div className="mt-8">
                  <div className="flex flex-row gap-10">
                    <div className="w-30 h-20 rounded-2xl">
                      <img src="/images/property-exterior-8.webp" alt="Property" className="object-cover w-full h-full rounded-2xl"/>
                    </div>
                    <div>
                      <h6 className="mb-1">Luxury Penthouse</h6>
                      <p className="text-gray-400 mb-1">Manhattan, NY</p>
                      <strong className="text-teal-700">$2,850,000</strong>
                    </div>
                  </div>
                </div>

                <div className=" mt-8">
                  <div className="flex flex-row gap-10">
                    <div className="w-30 h-20 rounded-2xl">
                      <img src="/images/property-interior-7.webp" alt="Property" className="object-cover w-full h-full rounded-2xl"/>
                    </div>
                    <div className="">
                      <h6 className="mb-1">Modern Studio</h6>
                      <p className="text-gray-400 mb-1">Brooklyn, NY</p>
                      <strong className="text-teal-700">$3,200/mo</strong>
                    </div>
                  </div>
                </div>

                <div className=" mt-8">
                  <div className="flex flex-row gap-10">
                    <div className="w-30 h-20 rounded-2xl">
                      <img src="/images/property-exterior-9.webp" alt="Property" className="object-cover w-full h-full rounded-2xl"/>
                    </div>
                    <div className="flex flex-col">
                      <h6 className="mb-1">Family Home</h6>
                      <p className="text-gray-400">Queens, NY</p>
                      <strong className="text-teal-700">$895,000</strong>
                    </div>
                  </div>
                </div>

              </div>
        </div>
        </div>     
      </div>
    </div>
  );
}
