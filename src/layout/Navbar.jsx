import React, { useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import Footer from "./Footer";
import { RxHamburgerMenu } from "react-icons/rx";
import { CgChevronDown, CgClose } from "react-icons/cg";
import { ChevronDown } from "lucide-react";

function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [isMorePagesOpen, setIsMorePagesOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full">
      {/* ========== DESKTOP NAVBAR ========== */}
      <div className="hidden xl:flex justify-between items-center fixed top-8 left-22 right-18 z-50 bg-white rounded-full shadow-xl px-8 py-4">
        
        {/* LOGO */}
        <Link to="/" className="text-3xl font-bold text-gray-700 mr-12">
          TheProperty
        </Link>

        {/* NAV LINKS */}
        <div className="flex items-center space-x-6 font-bold text-gray-700">
          
           <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "text-teal-600" : "text-gray-700 hover:text-teal-600"
                }
              >
               Home
              </NavLink>
          
           <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "text-teal-600" : "text-gray-700 hover:text-teal-600"
                }
              >
               About
              </NavLink>
          
          <NavLink
                to="/properties" 
                className={({ isActive }) =>
                  isActive ? "text-teal-600" : "text-gray-700 hover:text-teal-600"
                }
              >
               Properties
              </NavLink>
          
          <NavLink
                to="/services"
                className={({ isActive }) =>
                  isActive ? "text-teal-600" : "text-gray-700 hover:text-teal-600"
                }
              >
                Services
              </NavLink>
          
          <NavLink
                to="/agents"
                className={({ isActive }) =>
                  isActive ? "text-teal-600" : "text-gray-700 hover:text-teal-600"
                }
              >
                Agents
              </NavLink>
            
          
              <NavLink
                to="/blogs"
                className={({ isActive }) =>
                  isActive ? "text-teal-600" : "text-gray-700 hover:text-teal-600"
                }
              >
                Blog
              </NavLink>
            
         
         {/* Dropdown */}
          <div className="relative group inline-block">
            <button className=" rounded-b ">
              <a
                href="#"
                className="hover:text-teal-600 flex flex-row items-center gap-1"
              >
                More Pages <CgChevronDown size={20} />
              </a>
            </button>
            <div
              className="absolute left-0  w-52 bg-white shadow-lg rounded opacity-0 invisible 
           group-hover:opacity-100 group-hover:visible transition-all duration-300 z-100"
            >
              <ul className="absolute bg-white text-gray-600 font-medium mt-4 rounded shadow-lg w-56 z-20 py-2">
                  <li>
                    <NavLink
                      to="/propertiesdetail"
                      className={({ isActive }) =>
                        `block px-6 py-2 hover:text-teal-600 ${
                          isActive ? "text-teal-600" : "text-gray-700"
                        }`
                      }
                    >
                      Property Details
                    </NavLink>
                  </li>

                  <li>
                    <NavLink
                      to="/servicedetails"
                      className={({ isActive }) =>
                        `block px-6 py-2 hover:text-teal-600 ${
                          isActive ? "text-teal-600" : "text-gray-700"
                        }`
                      }
                    >
                      Service Details
                    </NavLink>
                  </li>

                  <li>
                    <NavLink
                      to="/agentsdetail"
                      className={({ isActive }) =>
                        `block px-6 py-2 hover:text-teal-600 ${
                          isActive ? "text-teal-600" : "text-gray-700"
                        }`
                      }
                    >
                      Agent Profile
                    </NavLink>
                  </li>

                  <li>
                    <NavLink
                      to="/blogdetail"
                      className={({ isActive }) =>
                        `block px-6 py-2 hover:text-teal-600 ${
                          isActive ? "text-teal-600" : "text-gray-700"
                        }`
                      }
                    >
                      Blog Details
                    </NavLink>
                  </li>

                  <li>
                    <NavLink
                      to="/terms"
                      className={({ isActive }) =>
                        `block px-6 py-2 hover:text-teal-600 ${
                          isActive ? "text-teal-600" : "text-gray-700"
                        }`
                      }
                    >
                      Terms
                    </NavLink>
                  </li>

                  <li>
                    <NavLink
                      to="/privacy"
                      className={({ isActive }) =>
                        `block px-6 py-2 hover:text-teal-600 ${
                          isActive ? "text-teal-600" : "text-gray-700"
                        }`
                      }
                    >
                      Privacy
                    </NavLink>
                  </li>

                 

                

                  <li>
                    <NavLink
                      to="/errorsection"
                      className={({ isActive }) =>
                        `block px-6 py-2 hover:text-teal-600 ${
                          isActive ? "text-teal-600" : "text-gray-700"
                        }`
                      }
                    >
                      404
                    </NavLink>
                  </li>
                </ul>
            </div>
          </div>
            <div className="relative group inline-block">
            <button className="py-2 rounded ">
              <a
                href="#"
                className="hover:text-teal-600 flex items-center gap-1"
              >
                Dropdown <ChevronDown className="w-4 h-4" />
              </a>
            </button>
            <div
              className="absolute left-0 mt-2 w-52 bg-white shadow-lg rounded opacity-0 invisible 
           group-hover:opacity-100 group-hover:visible transition-all duration-300 z-100"
            >
              <ul className="p-3 space-y-3">
                <li className="hover:text-teal-600">Dropdown 1</li>
                <li className="relative group/sub">
                  <button className="w-full text-left flex items-center gap-1 hover:text-teal-600">
                    Deepdropdown <ChevronDown className="w-4 h-4" />
                  </button>
                  <div
                    className="absolute top-0 right-full mr-2 w-52 bg-white shadow-lg rounded opacity-0 invisible
                 group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-300  z-100"
                  >
                    <ul className="p-3 space-y-3">
                      <li className="hover:text-teal-600">Deepdropdown 1</li>
                      <li className="hover:text-teal-600">Deepdropdown 2</li>
                      <li className="hover:text-teal-600">Deepdropdown 3</li>
                      <li className="hover:text-teal-600">Deepdropdown 4</li>
                      <li className="hover:text-teal-600">Deepdropdown 5</li>
                    </ul>
                  </div>
                </li>
                <li className="hover:text-teal-600">Dropdown 2</li>
                <li className="hover:text-teal-600">Dropdown 3</li>
                <li className="hover:text-teal-600">Dropdown 4</li>
              </ul>
            </div>
          </div>

            
              <NavLink
                to="/contacts"
                className={({ isActive }) =>
                  isActive ? "text-teal-600" : "text-gray-700 hover:text-teal-600"
                }
              >
                Contact
              </NavLink>
            
        </div>

        {/* CTA BUTTON */}
        <Link to="/properties" className="bg-teal-700 text-white px-6 py-2 rounded-full ml-8">
          Get Started
        </Link>
      </div>

      {/* ========== MOBILE NAVBAR (HEADER ONLY) ========== */}
      <div className="xl:hidden flex items-center justify-between px-6 py-4 bg-white shadow-md fixed top-0 left-0 right-0 z-50">
        <h1 className="text-blue-950 font-bold text-lg">TheProperty</h1>

        <div className="flex items-center space-x-3">
          <Link to="/propertiesdetail">
            <button className="bg-teal-600 py-2 px-3 rounded-lg text-white text-sm hover:bg-teal-700">
              Get Started
            </button>
          </Link>

          <button onClick={() => setIsOpen(true)}>
            <RxHamburgerMenu size={28} />
          </button>
        </div>
      </div>

      {/* ========== MOBILE MENU ========== */}
      {isOpen && (
        <div className="fixed inset-0 z-50 xl:hidden flex flex-col bg-black/70 backdrop-blur-md">
          <div className="relative flex-1 overflow-y-auto">

            {/* CLOSE BUTTON */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-white"
            >
              <CgClose size={28} />
            </button>

            {/* MENU CONTENT */}
            <ul className="mt-20 h-full pt-4 px-8 space-y-4 flex flex-col text-xl text-gray-700 bg-white rounded-lg mx-4 shadow">

  <NavLink
    to="/"
    onClick={() => setIsOpen(false)}
    className={({ isActive }) =>
      isActive ? "text-teal-600" : "text-gray-700 hover:text-teal-600"
    }
  >
    Home
  </NavLink>

  <NavLink
    to="/about"
    onClick={() => setIsOpen(false)}
    className={({ isActive }) =>
      isActive ? "text-teal-600" : "text-gray-700 hover:text-teal-600"
    }
  >
    About
  </NavLink>

  <NavLink
    to="/properties"
    onClick={() => setIsOpen(false)}
    className={({ isActive }) =>
      isActive ? "text-teal-600" : "text-gray-700 hover:text-teal-600"
    }
  >
    Properties
  </NavLink>

  <NavLink
    to="/services"
    onClick={() => setIsOpen(false)}
    className={({ isActive }) =>
      isActive ? "text-teal-600" : "text-gray-700 hover:text-teal-600"
    }
  >
    Services
  </NavLink>

  <NavLink
    to="/agents"
    onClick={() => setIsOpen(false)}
    className={({ isActive }) =>
      isActive ? "text-teal-600" : "text-gray-700 hover:text-teal-600"
    }
  >
    Agents
  </NavLink>

  {/* DROPDOWN */}
  <li>
    <button
      onClick={() => setIsMorePagesOpen(!isMorePagesOpen)}
      className="flex items-center justify-between w-full hover:text-teal-600"
    >
      <span className={isMorePagesOpen ? "text-teal-600" : "text-gray-700"}>
        More Pages
      </span>

      <CgChevronDown
        size={30}
        className={`transition-transform duration-300 ${
          isMorePagesOpen
            ? "rotate-180 bg-teal-600 text-white p-2 rounded-full"
            : "rotate-0 text-gray-600"
        }`}
      />
    </button>

    {isMorePagesOpen && (
      <ul className="bg-gray-100 mt-2 rounded shadow-md space-y-4 ml-2 px-4 py-2 text-xl">

        <li><NavLink to="/propertiesdetail" onClick={() => setIsOpen(false)} className="hover:text-teal-600">Property Details</NavLink></li>

        <li><NavLink to="/servicedetails" onClick={() => setIsOpen(false)} className="hover:text-teal-600">Service Details</NavLink></li>

        <li><NavLink to="/agentsdetail" onClick={() => setIsOpen(false)} className="hover:text-teal-600">Agent Profile</NavLink></li>

        <li><NavLink to="/blogdetail" onClick={() => setIsOpen(false)} className="hover:text-teal-600">Blog Details</NavLink></li>

        <li><NavLink to="/terms" onClick={() => setIsOpen(false)} className="hover:text-teal-600">Terms</NavLink></li>

        <li><NavLink to="/privacy" onClick={() => setIsOpen(false)} className="hover:text-teal-600">Privacy</NavLink></li>

        <li><NavLink to="/errorsection" onClick={() => setIsOpen(false)} className="hover:text-teal-600">404</NavLink></li>

      </ul>
    )}
  </li>

  <li>
    <NavLink to="/contacts" onClick={() => setIsOpen(false)} className="hover:text-teal-600">
      Contact
    </NavLink>
  </li>

</ul>

          </div>
        </div>
      )}

      {/* PAGE CONTENT */}
      <Outlet />

      {/* FOOTER */}
      <Footer />
    </div>
  );
}

export default Navbar;
