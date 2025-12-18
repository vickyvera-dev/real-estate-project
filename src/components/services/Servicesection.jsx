import { ArrowRight, MapPin } from 'lucide-react'
import React from 'react'
import { BsArrowsAngleExpand, BsCheck, BsCurrencyDollar, BsGraphUp, BsHeart, BsHouse, BsHouseDoor, BsImages, BsKey, BsTelephone, BsTools, BsWater } from 'react-icons/bs'

 function Servicesection() {
  return (
    <div  className="border-b border-b-gray-300 bg-white">
        {/* ===== TOP SECTION ===== */}
      <div
        className="text-center py-20 px-6 sm:px-10 md:px-16 lg:px-28 pt-36"
        data-aos="zoom-in"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-blue-950">
          Services
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
                Services
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto lg:px-0 px-4 mt-15'>
    
          {/* CARD 1*/}
            <div className="shadow-lg bg-white rounded-3xl flex flex-col h-full transition-all ease-in-out duration-300 hover:-translate-y-1 group" data-aos="fade-up" data-aos-delay="200">
              
              <div className="mt-4  flex flex-col justify-left space-y-4 mb-4 p-6">
               <span className='w-20 h-20 rounded-full bg-teal-700 text-white flex items-center justify-center '><BsHouseDoor  size={34}/></span>
                <h3 className='font-bold text-2xl text-gray-700'>Buy Your Dream Home</h3>
                <p className='text-lg text-gray-500 tracking-wide'>Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation.</p>
                <div className='flex flex-row gap-6'>
                  <div>
                    <h2 className='font-bold text-2xl text-teal-700'>2,500+</h2>
                    <p className='text-sm text-gray-500'>Properties Sold</p>
                    </div>

                    <div>
                    <h2 className='font-bold text-2xl text-teal-700'>98%</h2>
                    <p className='text-sm text-gray-500'>Client Satisfaction</p>
                    </div>
                </div>

                <div className='flex flex-row gap-1.5 items-center'>
                  <span className='transition-all ease-in-out duration-300 hover:text-gray-700 text-teal-700 text-sm font-bold'>Learn More</span> <span className='transition-all ease-in-out duration-300 group-hover:-translate-x-1.5 group-hover:text-gray-700 text-gray-500'><ArrowRight size={18}/></span>
                </div>
              </div>

               {/* IMAGE */}
                <div className="w-full h-[280px] rounded-b-2xl overflow-hidden">
                  <img
                    src="/images/property-exterior-1.webp"
                    alt="Agent"
                    className="object-cover w-full h-full transition-all duration-300 group-hover:scale-110"
                  />
                </div>              
            </div>

            {/* CARD 2 */}
            <div className="shadow-lg bg-white rounded-3xl flex flex-col h-full transition-all ease-in-out duration-300 hover:-translate-y-1 group" data-aos="fade-left" data-aos-delay="200">
              
              <div className="mt-4  flex flex-col justify-left space-y-4 mb-4 p-6">
               <span className='w-20 h-20 rounded-full bg-teal-700 text-white flex items-center justify-center '> <BsCurrencyDollar size={34}/></span>
                <h3 className='font-bold text-2xl text-gray-700'>Sell Your Property</h3>
                <p className='text-lg text-gray-500 tracking-wide'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa quae ab illo inventore veritatis.</p>
                <div className='flex flex-row gap-6'>
                  <div>
                    <h2 className='font-bold text-2xl text-teal-700'>45</h2>
                    <p className='text-sm text-gray-500'>Days Average Sale</p>
                    </div>

                    <div>
                    <h2 className='font-bold text-2xl text-teal-700'>$2.5M+</h2>
                    <p className='text-sm text-gray-500'>Highest Sale Price</p>
                    </div>
                </div>

                <a href='#' className='flex flex-row gap-1.5 items-center'>
                  <span className='transition-all ease-in-out duration-300 hover:text-gray-700 text-teal-700 text-sm font-bold'>Get Valuation</span> <span className='transition-all ease-in-out duration-300 group-hover:-translate-x-1.5 group-hover:text-gray-700 text-gray-500'><ArrowRight size={18}/></span>
                </a>
              </div>

               {/* IMAGE */}
                <div className="w-full h-[280px] rounded-b-2xl overflow-hidden">
                  <img
                    src="/images/property-exterior-7.webp"
                    alt="Agent"
                    className="object-cover w-full h-full transition-all duration-300 group-hover:scale-110"
                  />
                </div>              
            </div>

      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3  gap-8 max-w-7xl mx-auto py-24 lg:px-0 px-4">
           {/*CARD 1*/}
          <div className="group">
            <div className="flex flex-col justify-center text-center items-center border border-gray-300 group-hover:border-teal-700 p-6 rounded-2xl space-y-4" data-aos="zoom-in" data-aos-delay="100">
              <div className="w-20 h-20 rounded-full group-hover:bg-teal-700 bg-teal-100 text-teal-700 group-hover:text-white flex items-center justify-center">
                <BsKey size={38}/>
              </div>
              <h4 className='font-bold text-2xl text-gray-700 mt-4'>Rental Services</h4>
              <p className='text-lg text-gray-500 tracking-wide'>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum.</p>
              <div className="mt-4">

                <div className="flex flex-row gap-2 items-center text-lg text-gray-700">
                  <BsCheck size={18}  className='text-teal-700'/>
                  <span>Tenant Screening</span>
                </div>
                <div className="flex flex-row gap-2 items-center text-lg text-gray-700">
                  <BsCheck size={18}  className='text-teal-700'/>
                  <span>Property Marketing</span>
                </div>
                <div className="flex flex-row gap-2 items-center text-lg text-gray-700">
                 <BsCheck size={18}  className='text-teal-700'/>
                  <span>Lease Management</span>
                </div>
              </div>
              <a href="service-details.html" className='flex flex-row gap-1.5 items-center'><span className='transition-all ease-in-out duration-300 hover:text-gray-700 text-teal-700 text-sm font-bold'>Explore Rentals</span> <ArrowRight className='transition-all ease-in-out duration-300 group-hover:-translate-x-1.5 group-hover:text-gray-700 text-gray-500'/></a>
            </div>
          </div>

             {/*CARD 2*/}
          <div className="group">
            <div className="flex flex-col justify-center text-center items-center border border-gray-300 group-hover:border-teal-700 p-6 rounded-2xl space-y-4" data-aos="zoom-in" data-aos-delay="200">
              <div className="w-20 h-20 rounded-full group-hover:bg-teal-700 bg-teal-100 text-teal-700 group-hover:text-white flex items-center justify-center">
                <BsGraphUp size={38}/>
              </div>
              <h4 className='font-bold text-2xl text-gray-700 mt-4'>Investment Consulting</h4>
              <p className='text-lg text-gray-500 tracking-wide'>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id.</p>
              <div className="mt-4">
                <div className="flex flex-row gap-2 items-center text-lg text-gray-700">
                  <BsCheck size={18}  className='text-teal-700'/>
                  <span>Market Analysis</span>
                </div>
                <div className="flex flex-row gap-2 items-center text-lg text-gray-700">
                 <BsCheck size={18}  className='text-teal-700'/>
                  <span>ROI Calculations</span>
                </div>
                <div className="flex flex-row gap-2 items-center text-lg text-gray-700">
                  <BsCheck size={18}  className='text-teal-700'/>
                  <span>Portfolio Planning</span>
                </div>
              </div>
              
              <a href="service-details.html" className='flex flex-row gap-1.5 items-center'><span className='transition-all ease-in-out duration-300 hover:text-gray-700 text-teal-700 text-sm font-bold'>Start Investing</span> <ArrowRight className='transition-all ease-in-out duration-300 group-hover:-translate-x-1.5 group-hover:text-gray-700 text-gray-500'/></a>              
            </div>
          </div>


        {/*CARD 3*/}
          <div className="group">
            <div className="flex flex-col justify-center text-center items-center border border-gray-300 group-hover:border-teal-700 p-6 rounded-2xl space-y-4" data-aos="zoom-in" data-aos-delay="300">
              <div  className="w-20 h-20 rounded-full group-hover:bg-teal-700 bg-teal-100 text-teal-700 group-hover:text-white flex items-center justify-center">
                <BsTools size={38}/>
              </div>
              <h4 className='font-bold text-2xl text-gray-700 mt-4'>Property Management</h4>
              <p className='text-lg text-gray-500 tracking-wide'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
              <div className="mt-4">
                <div className="flex flex-row gap-2 items-center text-lg text-gray-700">
                  <BsCheck size={18}  className='text-teal-700'/>
                  <span>Maintenance Coordination</span>
                </div>
                <div className="flex flex-row gap-2 items-center text-lg text-gray-700">
                  <BsCheck size={18}  className='text-teal-700'/>
                  <span>Rent Collection</span>
                </div>
                <div className="flex flex-row gap-2 items-center text-lg text-gray-700">
                  <BsCheck size={18}  className='text-teal-700'/>
                  <span>24/7 Support</span>
                </div>
              </div>
               <a href="service-details.html" className='flex flex-row gap-1.5 items-center'><span className='transition-all ease-in-out duration-300 hover:text-gray-700 text-teal-700 text-sm font-bold'>Manage Property</span> <ArrowRight className='transition-all ease-in-out duration-300 group-hover:-translate-x-1.5 group-hover:text-gray-700 text-gray-500'/></a>  
              </div>
          </div>

        </div>

        <div className="py-8  text-white max-w-7xl mx-auto lg:px-0 px-4" data-aos="fade-up" data-aos-delay="400">
          <div className="flex lg:flex-row flex-col lg:justify-between justify-center gap-6 lg:gap-0 items-center bg-teal-700 p-12 rounded-lg">
            <div className="w-[75%] space-y-5">
              <h3 className='text-white font-bold text-2xl'>Ready to Take the Next Step?</h3>
              <p className='text-lg text-white'>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam.</p>
            </div>
            <div className="h-15 w-60 rounded-lg bg-white flex items-center justify-center">
              <a href="#contact" class="text-teal-700 font-bold text-lg">Get Free Consultation</a>
            </div>
          </div>
        </div>
    </div>
  )
}
export default Servicesection