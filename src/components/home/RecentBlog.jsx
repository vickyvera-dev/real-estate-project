import { ArrowRight, MapPin } from "lucide-react";
import React from "react";
import { BsAspectRatio, BsDoorOpen, BsDroplet } from "react-icons/bs";
import { Link } from "react-router-dom";

function RecentBlog() {
  return (
    <div className="w-full bg-[#ffffff] mt-30">
      
      <div className="bg-gray-100 w-full py-10 lg:px-22 lg:pl-26 px-6 ">
        <div>
          <div data-aos="fade-up">
            <h1 className="text-3xl font-medium pb-2 relative text-[#1f2f31] text-center">
              Recent Blog Posts
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 w-full">
          {/*card1*/}
          <div className="shadow-lg pb-8 bg-white rounded-2xl flex flex-col h-full transition-all ease-in-out duration-300 hover:-translate-y-1"  data-aos="fade-up" data-aos-delay="100">
            <div className="relative overflow-hidden rounded-t-2xl">
              <div className="absolute top-3 left-3 bg-teal-700 text-white text-sm font-bold rounded-lg py-2 px-3 flex items-center gap-2 z-20">
                <span>DECEMBER 12</span>
              </div>

              <img
                src="/images/blog-post-1.webp"
                alt="Charming Suburban Retreat"
                className="object-cover w-full h-65 rounded-t-2xl transition-all ease-in-out duration-300 hover:scale-125"
              />
            </div>

            <Link to="/blogdetail"  className="mt-6 mx-4">
              <h3 className="text-xl hover:text-teal-600 transition-colors duration-300 font-semibold tracking-wide">
                Eum ad dolor et. Autem aut fugiat debitis
              </h3>

              <Link to="/blogdetail" className="flex flex-row gap-1 items-center mt-4">
                <span className="text-teal-600 underline text-sm">
                  READ MORE
                </span>
                <span className="text-teal-600">
                  <ArrowRight size={15} />
                </span>
              </Link>
            </Link>
          </div>

          {/*card2*/}
          <div className="shadow-lg pb-8 bg-white rounded-2xl flex flex-col h-full transition-all ease-in-out duration-300 hover:-translate-y-1" data-aos="fade-up" data-aos-delay="200">
            <div className="relative overflow-hidden rounded-t-2xl">
              <div className="absolute top-3 left-3 bg-teal-700 text-white text-sm font-bold rounded-lg py-2 px-3 flex items-center gap-2 z-20">
                <span>JULY 17</span>
              </div>

              <img
                src="/images/blog-post-2.webp"
                alt="Charming Suburban Retreat"
                className="object-cover w-full h-65 rounded-t-2xl transition-all ease-in-out duration-300 hover:scale-125"
              />
            </div>

            <Link to="/blogdetail"  className="mt-6 mx-4">
              <h3 className="text-xl hover:text-teal-600 transition-colors duration-300 font-semibold tracking-wide">
                Eum ad dolor et. Autem aut fugiat debitis
              </h3>

              <Link to="/blogdetail"  className="flex flex-row gap-1 items-center mt-4">
                <span className="text-teal-600 underline text-sm">
                  READ MORE
                </span>
                <span className="text-teal-600">
                  <ArrowRight size={15} />
                </span>
              </Link>
            </Link>
          </div>

          {/*card3*/}
          <div className="shadow-lg pb-8 bg-white rounded-2xl flex flex-col h-full transition-all ease-in-out duration-300 hover:-translate-y-1" data-aos="fade-up" data-aos-delay="300">
            <div className="relative overflow-hidden rounded-t-2xl">
              <div className="absolute top-3 left-3 bg-teal-700 text-white text-sm font-bold rounded-lg py-2 px-3 flex items-center gap-2 z-20">
                <span>SEPTEMBER 05</span>
              </div>

              <img
                src="/images/blog-post-3.webp"
                alt="Charming Suburban Retreat"
                className="object-cover w-full h-65 rounded-t-2xl transition-all ease-in-out duration-300 hover:scale-125"
              />
            </div>

            <Link to="/blogdetail"  className="mt-6 mx-4">
              <h3 className="text-xl hover:text-teal-600 transition-colors duration-300 font-semibold tracking-wide">
                Et repellendus molestiae qui est sed omnis
              </h3>

              <Link to="/blogdetail"  className="flex flex-row gap-1 items-center mt-4">
                <span className="text-teal-600 underline text-sm">
                  READ MORE
                </span>
                <span className="text-teal-600">
                  <ArrowRight size={15} />
                </span>
              </Link>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default RecentBlog;
