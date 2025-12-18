import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useState } from "react";
import {
  BsCalendar,
  BsCarFront,
  BsCheckCircle,
  BsDroplet,
  BsEnvelope,
  BsFacebook,
  BsHouse,
  BsPrinter,
  BsRulers,
  BsTelephone,
  BsTree,
  BsTwitter,
  BsWhatsapp,
} from "react-icons/bs";

/* ===========================
   INTERNAL IMAGE LENS ZOOM
=========================== */
// function ImageLensZoom({ src }) {
//   const [show, setShow] = useState(false);
//   const [pos, setPos] = useState({ x: 0, y: 0 });

//   const handleMove = (e) => {
//     const rect = e.currentTarget.getBoundingClientRect();
//     const x = e.clientX - rect.left;
//     const y = e.clientY - rect.top;
//     setPos({ x, y });
//   };

//   return (
//     <div
//       className="relative overflow-hidden rounded-xl shadow-md cursor-zoom-in"
//       onMouseEnter={() => setShow(true)}
//       onMouseLeave={() => setShow(false)}
//       onMouseMove={handleMove}
//     >
//       <img
//         src={src}
//         alt="Main Property"
//         className="w-full h-[450px] object-cover"
//         draggable={false}
//       />

//       {show && (
//         <div
//           className="absolute pointer-events-none rounded-full border-2 border-white shadow-xl"
//           style={{
//             width: 200,
//             height: 200,
//             left: pos.x - 100,
//             top: pos.y - 100,
//             backgroundImage: `url(${src})`,
//             backgroundRepeat: "no-repeat",
//             backgroundSize: "250%",
//             backgroundPosition: `-${pos.x * 2.5 - 100}px -${
//               pos.y * 2.5 - 100
//             }px`,
//           }}
//         />
//       )}
//     </div>
//   );
// }

function ImageLensZoom({ src, zoom = 2.8, height = 450 }) {
  const [pos, setPos] = useState({ x: 50, y: 50 });
  const [hover, setHover] = useState(false);

  const handleMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    setPos({ x, y });
  };

  return (
    <div
      className="relative overflow-hidden rounded-xl shadow-md cursor-zoom-in"
      style={{ height }}
      onMouseMove={handleMove}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => {
        setHover(false);
        setPos({ x: 50, y: 50 });
      }}
    >
      <img
        src={src}
        alt="Property"
        className="w-full h-full object-cover transition-transform duration-200"
        style={{
          transform: hover ? `scale(${zoom})` : "scale(1)",
          transformOrigin: `${pos.x}% ${pos.y}%`,
        }}
      />
    </div>
  );
}

/* ===========================
   MAIN COMPONENT
=========================== */
function PropertyDetailsctn() {
  const images = [
    "images/property-exterior-3.webp",
    "images/property-interior-4.webp",
    "images/property-interior-2.webp",
    "images/property-exterior-10.webp",
    "images/property-exterior-5.webp",
    "images/property-interior-8.webp",
    "images/property-exterior-8.webp",
    "images/property-interior-7.webp",
    "images/property-exterior-6.webp",
    "images/property-interior-6.webp",
    "images/property-exterior-1.webp",
    "images/property-exterior-9.webp",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const currentImage = images[currentIndex];

  const goPrev = () =>
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  const goNext = () =>
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  return (
    <section
      id="property-details"
      className="py-12 bg-gray-50 border-b border-b-gray-300"
    >
      {/* ===== TOP SECTION ===== */}{" "}
      <div
        className="text-center py-20 px-6 sm:px-10 md:px-16 lg:px-28 pt-36"
        data-aos="zoom-in"
      >
        
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-blue-950">
          
          Property Details
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
             /
              <a href="/about" className="hover:text-teal-600">                
                Property Details
              </a>
            </li>
          </ul>
        </div>
      </div>


      {/* CONTENT */}
      <div className="max-w-7xl mx-auto px-4 mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-[67%_33%] gap-8 bg-white">
          {/* LEFT */}
          <div className="p-2">
            {/* IMAGE */}
            <div className="mb-8 relative">
              <ImageLensZoom src={currentImage} />

              {/* NAV BUTTONS */}
              <div className="absolute inset-0 flex items-center justify-between px-4 pointer-events-none">
                <button
                  onClick={goPrev}
                  className="pointer-events-auto bg-white/80 p-2 rounded-full shadow"
                >
                  <ChevronLeft />
                </button>
                <button
                  onClick={goNext}
                  className="pointer-events-auto bg-white/80 p-2 rounded-full shadow"
                >
                  <ChevronRight />
                </button>
              </div>
            </div>
            {/* THUMBNAILS */}
            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
              {images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  onClick={() => setCurrentIndex(i)}
                  className={`h-20 w-full object-cover rounded-lg cursor-pointer border-2 ${
                    currentIndex === i
                      ? "border-blue-500"
                      : "border-transparent"
                  }`}
                />
              ))}
            </div>
            {/* DESCRIPTION */}
            <div
              className=" border-t border-t-gray-300 pt-8 mt-8"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <h3 className="text-xl font-semibold mb-3">
                About This Property
              </h3>
              <p className="text-gray-600 mb-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <p className="text-gray-600 mb-2">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum. Sed ut perspiciatis unde omnis iste
                natus error sit voluptatem accusantium doloremque laudantium.
              </p>
              <p className="text-gray-600">
                Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis
                et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
                ipsam voluptatem quia voluptas sit aspernatur aut odit aut
                fugit.
              </p>
            </div>
            {/* AMENITIES */}
            <div
              className="border-t border-t-gray-300 pt-8 mt-8 bg-white"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <h3 className="text-xl font-semibold mb-4">
                Amenities & Features
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <h4 className="text-lg mb-2">Interior Features</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex flex-row items-center gap-4">
                      <BsCheckCircle size={15} /> <span>Hardwood Floors</span>
                    </li>
                    <li className="flex flex-row items-center gap-4">
                      <BsCheckCircle size={15} /> <span>Updated Kitchen</span>
                    </li>
                    <li className="flex flex-row items-center gap-4">
                      <BsCheckCircle size={15} /> <span>Walk-in Closets</span>
                    </li>
                    <li className="flex flex-row items-center gap-4">
                      <BsCheckCircle size={15} />
                      <span>Central Air Conditioning</span>
                    </li>
                    <li className="flex flex-row items-center gap-4">
                      <BsCheckCircle size={15} /> <span>Fireplace</span>
                    </li>
                    <li className="flex flex-row items-center gap-4">
                      <BsCheckCircle size={15} /> <span>High Ceilings</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg mb-2">Exterior Features</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex flex-row items-center gap-4">
                      <BsCheckCircle size={15} /> <span>2-Car Garage</span>
                    </li>
                    <li className="flex flex-row items-center gap-4">
                      <BsCheckCircle size={15} /> <span>Swimming Pool</span>
                    </li>
                    <li className="flex flex-row items-center gap-4">
                      <BsCheckCircle size={15} /> <span>Garden</span>
                    </li>
                    <li className="flex flex-row items-center gap-4">
                      <BsCheckCircle size={15} /> <span>Patio / Deck</span>
                    </li>
                    <li className="flex flex-row items-center gap-4">
                      <BsCheckCircle size={15} /> <span>Security System</span>
                    </li>
                    <li className="flex flex-row items-center gap-4">
                      <BsCheckCircle size={15} /> <span>Sprinkler System</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* MAP */}
            <div
              className="bg-white border-t border-t-gray-300 pt-8 mt-8"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <h3 className="text-xl font-semibold mb-4">Location</h3>
              <div className="map-container">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2965.0824050173574!2d-87.63000000000002!3d41.88844360000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e2c3cd0f4cbed%3A0xafe0a6ad09c0c000!2sChicago%2C%20IL%2C%20USA!5e0!3m2!1sen!2sus!4v1234567890123"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
              <div
                className="bg-white mt-8"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <h3 className="text-xl font-semibold mb-3">
                  Neighborhood Information
                </h3>
                <p className="text-gray-600 mb-2">
                  Located in the heart of downtown, this property offers easy
                  access to shopping, dining, and entertainment. Public
                  transportation and major highways are just minutes away.
                </p>
              </div>
            </div>
          </div>
          {/* RIGHT SIDEBAR */}
          <div className="space-y-8 bg-white p-6 rounded-xl shadow-md self-start sticky top-0">
            {/* OVERVIEW CARD */}
            <div>
              <div className="text-3xl font-bold text-teal-700">$875,000</div>
              <div className="mt-4">
                <div className="text-teal-600 font-semibold px-4 py-2 text-xs rounded-full bg-teal-50 inline-block">
                  FOR SALE
                </div>
              </div>
              <div className="mt-4">
                <h4 className="font-semibold text-lg text-gray-600">
                  1234 Maple Street
                </h4>
                <p className="text-gray-600">Chicago, IL 60601</p>
              </div>

              {/* STATS */}
              <div className="grid grid-cols-2 gap-4 mt-8 text-gray-700 border-t border-t-gray-300 pt-4">
                <div className="flex flex-row items-center gap-4">
                  <BsHouse size={20} className="text-teal-700" />
                  <p className="flex flex-col">
                    <strong className="font-bold text-lg">4</strong>
                    <span className="uppercase text-gray-500 text-sm">
                      Bedrooms
                    </span>
                  </p>
                </div>
                <div className="flex flex-row items-center gap-4">
                  <BsDroplet size={20} className="text-teal-700" />
                  <p className="flex flex-col">
                    <strong className="font-bold text-lg">3</strong>
                    <span className="uppercase text-gray-500 text-sm">
                      Bathrooms
                    </span>
                  </p>
                </div>
                <div className="flex flex-row items-center gap-4">
                  <BsRulers size={20} className="text-teal-700" />
                  <p className="flex flex-col">
                    <strong className="text-lg font-bold">2,450</strong>
                    <span className="uppercase text-gray-500 text-sm">
                      Sq Ft
                    </span>
                  </p>
                </div>
                <div className="flex flex-row items-center gap-4">
                  <BsTree size={20} className="text-teal-700" />
                  <p className="flex flex-col">
                    <strong className="text-lg font-bold">0.25</strong>
                    <span className="uppercase text-gray-500 text-sm">
                      Acre Lot
                    </span>
                  </p>
                </div>
                <div className="flex flex-row items-center gap-4">
                  <BsCalendar size={20} className="text-teal-700" />
                  <p className="flex flex-col">
                    <strong className="text-lg font-bold">2018</strong>
                    <span className="uppercase text-gray-500 text-sm">
                      Year Built
                    </span>
                  </p>
                </div>
                <div className="flex flex-row items-center gap-4">
                  <BsCarFront size={20} className="text-teal-700" />
                  <p className="flex flex-col">
                    <strong className="text-lg font-bold">2</strong>
                    <span className="uppercase text-gray-500 text-sm">
                      Car Garage
                    </span>
                  </p>
                </div>
              </div>
            </div>

            {/* AGENT INFO */}
            <div className="bg-gray-50 p-6 rounded-xl border-t-4 border-t-teal-700">
              <div className="flex items-center gap-4">
                <img
                  src="images/agent-3.webp"
                  className="w-15 h-15 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-bold text-lg">Sarah Johnson</h4>
                  <p className="text-gray-600 text-sm italic">
                    Licensed Real Estate Agent
                  </p>
                  <p className="text-gray-600 text-sm flex flex-row items-center">
                    <BsTelephone size={15} className="text-teal-600" /> +1 (555)
                    123-4567
                  </p>
                  <p className="text-gray-600 text-sm flex flex-row items-center gap-1">
                    <BsEnvelope size={15} className="text-teal-600" />
                    sarah@example.com
                  </p>
                </div>
              </div>
            </div>

            {/* CONTACT FORM */}
            <div>
              <h4 className="font-semibold mb-4 text-lg">Schedule a Tour</h4>
              <form className="space-y-4">
                <input
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-0 focus:outline-none"
                  type="text"
                  placeholder="Your Name"
                  required
                />
                <input
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-0 focus:outline-none"
                  type="email"
                  placeholder="Your Email"
                  required
                />
                <input
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-0 focus:outline-none"
                  type="tel"
                  placeholder="Your Phone"
                  required
                />
                <input
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-0 focus:outline-none"
                  type="text"
                  defaultValue="Schedule a Tour for date:"
                  required
                />
                <textarea
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-0 focus:outline-none"
                  rows="4"
                  placeholder="Your Message"
                  required
                ></textarea>
                <button
                  type="submit"
                  className="w-full py-2 bg-teal-700 text-white font-semibold rounded-lg"
                >
                  Schedule Tour
                </button>
              </form>
            </div>
            {/* SHARE BUTTONS */}
            <div className="bg-white p-6">
              <h5 className="font-semibold mb-3">Share This Property</h5>
              <div className="flex gap-3">
                <button className="p-2 bg-blue-500 text-white rounded-lg">
                  <BsFacebook size={18} />
                </button>
                <button className="p-2 bg-blue-400 text-white rounded-lg">
                  <BsTwitter size={18} />
                </button>
                <button className="p-2 bg-green-500 text-white rounded-lg">
                  <BsWhatsapp size={18} />
                </button>
                <button className="p-2 bg-red-500 text-white rounded-lg">
                  <BsEnvelope size={18} />
                </button>
                <button className="p-2 bg-gray-900 text-white rounded-lg">
                  <BsPrinter />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PropertyDetailsctn;
