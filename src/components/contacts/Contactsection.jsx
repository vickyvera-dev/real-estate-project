import React from "react";
import {
  BsChatDots,
  BsEnvelope,
  BsGeoAlt,
  BsHeadset,
  BsPerson,
  BsTextLeft,
} from "react-icons/bs";

function Contactsection() {
  return (
    <div className="border-b border-b-gray-300">
      {/* ===== TOP SECTION ===== */}
      <div
        className="text-center py-20 px-6 sm:px-10 md:px-16 lg:px-28 pt-36"
        data-aos="zoom-in"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-blue-950">
          Contact
        </h1>
        <p className="text-gray-700 text-base sm:text-lg md:text-xl max-w-4xl mx-auto mt-4 leading-relaxed">
          Odio et unde deleniti. Officiis quo odio sint voluptas consequatur ut
          a odio voluptatem. Sit dolorum debitis veritatis natus dolores. Quasi
          ratione sint dolorem.
        </p>
      </div>

      {/* ===== BREADCRUMB ===== */}
      <div className="w-full bg-gray-100 py-5 px-6">
        <div className="flex flex-col sm:flex-row gap-2 sm:ml-32">
          <ul className="flex gap-2 text-sm sm:text-base">
            <li className="text-teal-600">
              <a href="/">Home</a>
            </li>
            <li className="text-gray-600">
              /{" "}
              <a href="/contact" className="hover:text-teal-600">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* ===== INFO CARDS ===== */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto px-4 py-16">

        {/* Card 1 */}
        <div className="transition-all duration-500 hover:-translate-y-2" data-aos="fade-up" data-aos-delay="100">
          <div className="p-6 shadow rounded-lg bg-white" data-aos="fade-up" data-aos-delay="100">
            <div className="flex gap-4 items-start">
              <div className="p-4 rounded-full bg-teal-100 text-teal-700 mt-2">
                <BsGeoAlt size={20} />
              </div>
              <div>
                <h4 className="text-lg font-bold text-gray-600">Our Address</h4>
                <p className="text-lg text-gray-500">
                  1842 Maple Avenue, Portland, Oregon 97204
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="transition-all duration-500 hover:-translate-y-2" data-aos="fade-up" data-aos-delay="200">
          <div className="p-6 shadow rounded-lg bg-white" data-aos="fade-up" data-aos-delay="200">
            <div className="flex gap-4 items-start">
              <div className="p-4 rounded-full bg-teal-100 text-teal-700 mt-2">
                <BsEnvelope size={20} />
              </div>
              <div>
                <h4 className="text-lg font-bold text-gray-600">Email Address</h4>
                <p className="text-lg text-gray-500">info@example.com</p>
                <p className="text-lg text-gray-500">contact@example.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="transition-all duration-500 hover:-translate-y-2" data-aos="fade-up" data-aos-delay="300">
          <div className="p-6 shadow rounded-lg bg-white" data-aos="fade-up" data-aos-delay="300">
            <div className="flex gap-4 items-start">
              <div className="p-4 rounded-full bg-teal-100 text-teal-700 mt-2">
                <BsHeadset size={20} />
              </div>
              <div>
                <h4 className="text-lg font-bold text-gray-600">Hours of Operation</h4>
                <p className="text-lg text-gray-500">Sunday–Fri: 9 AM – 6 PM</p>
                <p className="text-lg text-gray-500">Saturday: 9 AM – 4 PM</p>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* ===== MAP + FLOATING FORM ===== */}
      <div className="relative pb-38 mb-70 rounded-lg">
        <div className="relative" data-aos="fade-up" data-aos-delay="400">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d48389.78314118045!2d-74.006138!3d40.710059!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a22a3bda30d%3A0xb89d1fe6bc499443!2sDowntown%20Conference%20Center!5e0!3m2!1sen!2sus!4v1676961268712!5m2!1sen!2sus"
            width="100%"
            height="500"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* Floating Card */}
        <div
          className="absolute -bottom-42 left-1/2 -translate-x-1/2
          w-[90%] md:w-[70%] lg:w-[75%]
          p-8 bg-white shadow-lg rounded-lg" data-aos="fade-up" data-aos-delay="500"
        >
          <div className="flex flex-col items-center mb-8">
            <h2 className="text-center font-bold text-gray-600 text-2xl mb-2">
              Get in Touch
            </h2>
            <div className="h-1 w-10 bg-teal-700"></div>
          </div>

          <form action="forms/contact.php" method="post">
            <div className="space-y-12 mt-4">

              {/* --- Row 1 --- */}
              <div className="flex flex-row gap-4 w-full">
                {/* First Name */}
                <div className="w-full">
                  <div className="border border-gray-300 flex items-center gap-2 hover:border-teal-700 rounded-md py-4 p-2">
                    <BsPerson className="text-gray-600 text-lg" />
                    <input
                      type="text"
                      name="name"
                      placeholder="First Name"
                      required
                      className="w-full outline-none"
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="w-full">
                  <div className="border border-gray-300 flex items-center gap-2 hover:border-teal-700 rounded-md py-4 p-2">
                    <BsEnvelope className="text-gray-600 text-lg " />
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      required
                      className="w-full outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Subject */}
              <div>
                <div className="border border-gray-300 flex items-center gap-2 hover:border-teal-700 rounded-md py-4 p-2">
                  <BsTextLeft className="text-gray-600 text-lg" />
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    required
                    className="w-full outline-none"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <div className="border border-gray-300 flex items-start gap-2 hover:border-teal-700 rounded-md p-2">
                  <BsChatDots className="text-gray-600 text-xl mt-1" />
                  <textarea
                    name="message"
                    placeholder="Write Message..."
                    required
                    style={{ height: "180px" }}
                    className="w-full outline-none resize-none"
                  ></textarea>
                </div>
              </div>

              {/* Button */}
              <div className="flex justify-center mt-8 hover:-translate-y-1 transition">
                <button
                  type="submit"
                  className="w-40 h-10 bg-teal-700 text-white rounded-lg text-lg"
                >
                  SEND MESSAGE
                </button>
              </div>

            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contactsection;
