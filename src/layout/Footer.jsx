import { ArrowUp, ChevronRight, Mail, MapPin, Phone, Send } from "lucide-react";
import React from "react";
import {
  BsFacebook,
  BsGithub,
  BsLinkedin,
  BsTwitter,
  BsTwitterX,
  BsYoutube,
} from "react-icons/bs";
import { Link } from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { CgArrowLongUp, CgArrowTopRightO } from "react-icons/cg";

function Footer() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
  }, []);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 pl-8 lg:pl-27 pb-12 bg-gray-50 md:grid-cols-2 sm:grid-cols-2 px-4 pt-8 w-full">
        <div className="col-span-4">
          <h1 className="font-bold text-3xl">TheProperty</h1>
          <p className="text-gray-500 my-5">
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae. Donec velit neque auctor sit amet aliquam vel
            ullamcorper sit amet ligula.
          </p>
          <h4 className="font-semibold">Stay Updateds</h4>
          <label
            htmlFor="email"
            className="flex items-center mt-3 w-full bg-white rounded-full shadow-md"
          >
            <input
              id="email"
              type="email"
              placeholder="Enter Your Email"
              required
              className="flex-1 px-4 py-2 rounded-l-full focus:outline-none focus:ring-2 focus:ring-teal-500 shadow-inner"
            />
            <button
              type="submit"
              className="bg-teal-700 text-white px-4 py-2 rounded-r-full hover:bg-teal-800 transition"
            >
              <Send />
            </button>
          </label>
        </div>

        <div className="col-span-4 lg:gap-28 gap-10 flex flex-row">
          <div className="col-span-2 ">
            <h2 className="font-bold text-lg text-gray-800 border-b-3 pb-1 border-teal-700 w-8 mb-4">
              Company
            </h2>

            <Link
              to={"/about"}
              className="flex gap-2 text-gray-600 mb-3 transition-all duration-300 ease-in-out hover:translate-x-2 hover:text-teal-700"
            >
              <ChevronRight />
              <span>About</span>
            </Link>

            <Link
              to={"/#"}
              className="flex gap-2 text-gray-600 mb-3 transition-all duration-300 ease-in-out hover:translate-x-2 hover:text-teal-700"
            >
              <ChevronRight />
              <span>Careers</span>
            </Link>

            <Link
              to={"/#"}
              className="flex gap-2 text-gray-600 mb-3 transition-all duration-300 ease-in-out hover:translate-x-2 hover:text-teal-700"
            >
              <ChevronRight />
              <span> Press</span>
            </Link>

            <Link
              to={"/#"}
              className="flex gap-2 text-gray-600 mb-3 transition-all duration-300 ease-in-out hover:translate-x-2 hover:text-teal-700"
            >
              <ChevronRight />
              <span>Blog</span>
            </Link>

            <Link
              to={"/#"}
              className="flex gap-2 text-gray-600 mb-3 transition-all duration-300 ease-in-out hover:translate-x-2 hover:text-teal-700"
            >
              <ChevronRight />
              <span>Contact</span>
            </Link>
          </div>

          <div className="col-span-2 max-w-full">
            <h2 className="font-bold text-lg text-gray-800 border-b-3 pb-1 border-teal-700 w-8 mb-4">
              Solutions
            </h2>
            <Link
              to={"/#"}
              className="flex gap-2 text-gray-600 mb-3 transition-all duration-300 ease-in-out hover:translate-x-2 hover:text-teal-700"
            >
              <ChevronRight />
              <span>Digital Strategy</span>
            </Link>

            <Link
              to={"/#"}
              className="flex gap-2 text-gray-600 mb-3 transition-all duration-300 ease-in-out hover:translate-x-2 hover:text-teal-700 max-w-full"
            >
              <ChevronRight />
              <div className="flex flex-row gap-1">
                <span>Cloud </span>
                <span>Computing</span>
              </div>
            </Link>

            <Link
              to={"/#"}
              className="flex gap-2 text-gray-600 mb-3 transition-all duration-300 ease-in-out hover:translate-x-2 hover:text-teal-700"
            >
              <ChevronRight />
              <span> Data Analytics</span>
            </Link>

            <Link
              to={"/#"}
              className="flex gap-2 text-gray-600 mb-3 transition-all duration-300 ease-in-out hover:translate-x-2 hover:text-teal-700"
            >
              <ChevronRight />
              <span>AI Solutions</span>
            </Link>

            <Link
              to={"/#"}
              className="flex gap-2 text-gray-600 mb-3 transition-all duration-300 ease-in-out hover:translate-x-2 hover:text-teal-700"
            >
              <ChevronRight />
              <span>Cybersecurity</span>
            </Link>
          </div>
        </div>

        <div className="col-span-3">
          <div className="w-full">
            {" "}
            <h2 className="font-bold text-lg text-gray-800 border-b-3 pb-1 border-teal-700 w-8 flex gap-1 mb-4">
              Get <span>in</span> <span>Touch</span>
            </h2>
          </div>
          <div className="flex gap-2 text-gray-600 mb-3">
            <span>
              <MapPin size={34} className="p-2 rounded-full bg-gray-200" />
            </span>
            <div className="flex flex-col">
              <span>2847 Maple Avenue</span>
              <span>Los Angeles, CA 90210</span>
              <span>United States</span>
            </div>
          </div>
          <div className="flex gap-2 text-gray-600 mb-3 items-center">
            <span className="p-2 rounded-full bg-gray-200">
              <Phone size={18} />
            </span>{" "}
            <span>+1 (555) 987-6543</span>
          </div>
          <div className="flex gap-2 text-gray-600 mb-4">
            <span className="p-2 rounded-full bg-gray-200">
              <Mail size={18} />
            </span>
            <span>contact@example.com</span>
          </div>

          <div className="flex gap-5 text-gray-600">
            <span className="p-2 rounded-full bg-gray-200 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:bg-teal-700 hover:text-white">
              <BsFacebook />
            </span>
            <span className="p-2 rounded-full bg-gray-200 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:bg-teal-700 hover:text-white">
              <BsTwitterX />
            </span>
            <span className="p-2 rounded-full bg-gray-200 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:bg-teal-700 hover:text-white">
              <BsLinkedin />
            </span>
            <span className="p-2 rounded-full bg-gray-200 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:bg-teal-700 hover:text-white">
              <BsYoutube />
            </span>
            <span className="p-2 rounded-full bg-gray-200 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:bg-teal-700 hover:text-white">
              <BsGithub />
            </span>
          </div>
        </div>
      </div>

      <div className="bg-teal-700 py-10 w-full">
        <div className="flex flex-col lg:flex-row lg:justify-between items-center text-center lg:text-left gap-6 px-6 w-full">
          {/* LEFT */}
          <div className="text-white flex flex-row flex-wrap items-center justify-center gap-1 text-sm ml-[5%]">
            <span>© Copyright</span>
            <span className="font-semibold">MyWebsite</span>
            <span>All Rights Reserved</span>
          </div>

          {/* right*/}
          <div className="flex flex-col items-center lg:items-end gap-2 mr-[5%]">
            <div className="flex flex-row gap-4">
              <a
                href="#"
                className="text-teal-200 transition duration-300 hover:text-teal-50"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-teal-200 transition duration-300 hover:text-teal-50"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-teal-200 transition duration-300 hover:text-teal-50"
              >
                Cookie Policy
              </a>
            </div>

            <div className="text-teal-200 flex items-center text-sm">
              Designed by{" "}
              <a
                href="#"
                className="ml-1 text-teal-50 transition duration-300 hover:border-b"
              >
                BootstrapMade
              </a>
            </div>
          </div>

          {/* SCROLL TO TOP BUTTON */}
          {showButton && (
            <button
              onClick={scrollToTop}
              data-aos="zoom-in"
              className="fixed bottom-4 right-6 bg-teal-600 text-white p-3 rounded-full shadow-lg hover:bg-teal-700 transition z-50"
            >
              <ArrowUp size={20} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Footer;

// function Footersection() {

//   return (
//     <div className='left-0 right-0 text-gray-500 text-sm pt-6 bg-gray-50'>
//       <div className='flex items-center justify-center flex-col pb-4'>

//         <p>© Copyright <span className='font-bold'>MediCare</span> All Rights Reserved</p>
//         <p className='mt-1'>Designed by <a href='/' className='text-teal-600'>BootstrapMade</a></p>
//       </div>

//       </div>
//   )
// }

// export default Footersection
