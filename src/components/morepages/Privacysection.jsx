import React from "react";
import {
  BsDot,
  BsEnvelope,
  BsEye,
  BsGeoAlt,
  BsLockFill,
  BsPencil,
  BsServer,
  BsShieldCheck,
  BsTelephone,
  BsTrash,
} from "react-icons/bs";

export default function Privacysection() {
  return (
    <div className="w-full">
      <section id="privacy" className="w-full border-b border-b-gray-300">
        {/* ===== TOP SECTION ===== */}
        <div
          className="text-center py-20 px-6 sm:px-10 md:px-16 lg:px-28 pt-36"
          data-aos="zoom-in"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-blue-950">
            Privacy
          </h1>
          <p className="text-gray-700 text-base sm:text-lg md:text-xl max-w-4xl mx-auto mt-4 leading-relaxed">
            Odio et unde deleniti. Officiis quo odio sint voluptas consequatur
            ut a odio voluptatem. Sit dolorum debitis veritatis natus dolores.
            Quasi ratione sint dolorem.
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
                <a href="/privacy" className="hover:text-teal-600">
                  Privacy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div
          className="py-12 max-w-7xl mx-auto px-4"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div>
            <div>
              <div className="flex justify-center flex-col lg:ml-28 ml-0">
                <div
                  className="border-l-4 border-l-teal-600 rounded-lg bg-teal-50 w-full p-4 lg:w-[84%]"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <p className="text-lg text-gray-700">
                    <strong className="text-lg">Last updated:</strong>
                    <span className="text-lg text-gray-500">
                      {" "}
                      December 15, 2024
                    </span>
                  </p>
                </div>

                <div data-aos="fade-up" data-aos-delay="300">
                  <div className="flex flex-col mt-6 gap-2">
                    <h3 className="text-3xl text-[#163535] mt-6">
                      Information We Collect
                    </h3>
                    <div className="h-1 w-15 bg-teal-600"></div>
                  </div>
                  <p className="mt-4 lg:w-[84%] text-[#323b3b] text-lg w-full">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>

                  <h4 className="text-3xl text-[#163535] mt-6">
                    Personal Information
                  </h4>
                  <ul className="mt-3  text-[#323b3b] text-lg space-y-2">
                    <li className="flex flex-row items-center">
                      <span>
                        <BsDot size={28} />
                      </span>
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum
                    </li>
                    <li className="flex flex-row items-center">
                      <span>
                        <BsDot size={28} />
                      </span>{" "}
                      Excepteur sint occaecat cupidatat non proident sunt in
                      culpa
                    </li>
                    <li className="flex flex-row items-center">
                      {" "}
                      <span>
                        <BsDot size={28} />
                      </span>{" "}
                      Qui officia deserunt mollitia animi id est laborum
                    </li>
                    <li className="flex flex-row items-center">
                      {" "}
                      <span>
                        <BsDot size={28} />
                      </span>{" "}
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem
                    </li>
                  </ul>

                  <h4 className="text-3xl text-[#163535] mt-6">Usage Data</h4>
                  <p className="text-[#323b3b] mt-4 text-lg lg:w-[84%] w-full">
                    Accusantium doloremque laudantium, totam rem aperiam eaque
                    ipsa quae ab illo inventore veritatis et quasi architecto
                    beatae vitae dicta sunt explicabo. Nemo enim ipsam
                    voluptatem quia voluptas sit aspernatur.
                  </p>
                </div>

                <div
                  class="aos-init aos-animate"
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  <div className="flex flex-col mt-6 gap-2">
                    <h3 className="text-3xl text-[#163535] mt-6">
                      How We Use Your Information
                    </h3>
                    <div className="h-1 w-15 bg-teal-600"></div>
                  </div>

                  <p className="text-[#323b3b] mt-4 text-lg lg:w-[84%] w-full">
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                    qui blanditiis praesentium voluptatum deleniti atque
                    corrupti quos dolores et quas molestias excepturi sint
                    occaecati cupiditate non provident.
                  </p>

                  <div className="border border-gray-200 p-8 mt-6 rounded-lg mb-4 lg:w-[84%] w-full">
                    <h4 className="text-3xl text-[#163535]">Primary Uses</h4>
                    <ol className="text-[#323b3b] mt-4 space-y-3 list-decimal list-outside text-lg">
                      <li>
                        Similique sunt in culpa qui officia deserunt mollitia
                      </li>
                      <li>
                        Et harum quidem rerum facilis est et expedita distinctio
                      </li>
                      <li>Nam libero tempore cum soluta nobis est eligendi</li>
                      <li>
                        Temporibus autem quibusdam et aut officiis debitis
                      </li>
                    </ol>
                  </div>
                </div>

                <div
                  className=" aos-init aos-animate"
                  data-aos="fade-up"
                  data-aos-delay="500"
                >
                  <div className="flex flex-col mt-4 gap-2">
                    <h3 className="text-3xl text-[#163535] mt-6">
                      Information Sharing and Disclosure
                    </h3>
                    <div className="h-1 w-15 bg-teal-600"></div>
                  </div>

                  <p className="text-[#323b3b] lg:w-[84%] w-full mt-4 text-lg">
                    Neque porro quisquam est qui dolorem ipsum quia dolor sit
                    amet consectetur adipisci velit sed quia non numquam eius
                    modi tempora incidunt ut labore et dolore magnam aliquam
                    quaerat voluptatem.
                  </p>

                  <div
                    className="py-14 px-6 lg:w-[84%] w-full bg-teal-700 my-8 rounded-2xl text-center flex justify-center flex-col gap-3 text-white items-center"
                    data-aos="fade-up"
                    data-aos-delay="600"
                  >
                    <BsShieldCheck size={45} className="mb-3" />
                    <h4 className="text-2xl">We Never Sell Your Data</h4>
                    <p className="text-lg ">
                      Ut enim ad minima veniam, quis nostrum exercitationem
                      ullam corporis suscipit laboriosam nisi ut aliquid ex ea
                      commodi consequatur.
                    </p>
                  </div>
                </div>

                <div
                  class="aos-init aos-animate"
                  data-aos="fade-up"
                  data-aos-delay="700"
                >
                  <div className="flex flex-col mt-4 gap-2">
                    <h3 className="text-3xl text-[#163535] mt-6">
                      Data Security
                    </h3>
                    <div className="h-1 w-15 bg-teal-600"></div>
                  </div>

                  <p className="text-[#323b3b] lg:w-[84%] text-lg mt-4 w-full">
                    Quis autem vel eum iure reprehenderit qui in ea voluptate
                    velit esse quam nihil molestiae consequatur vel illum qui
                    dolorem eum fugiat quo voluptas nulla pariatur.
                  </p>

                  <div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:grid-cols-2 mt-6 lg:w-[84%] w-full">
                      <div
                        className="aos-init aos-animate"
                        data-aos="fade-right"
                        data-aos-delay="800"
                      >
                        <div
                          class="flex flex-col items-center text-center border border-gray-300 py-14 px-6 
                transition-all duration-300 rounded-lg
                hover:-translate-y-2 hover:shadow-xl"
                        >
                          <BsLockFill size={45} className="text-teal-800" />
                          <h5 className="text-2xl text-[#163535] my-4">
                            Encryption
                          </h5>
                          <p className="text-[#323b3b] text-[16px]">
                            Excepteur sint occaecat cupidatat non proident sunt
                            in culpa qui officia deserunt.
                          </p>
                        </div>
                      </div>
                      <div
                        className="aos-init aos-animate"
                        data-aos="fade-left"
                        data-aos-delay="900"
                      >
                        <div
                          class="flex flex-col items-center text-center border border-gray-300 py-14 px-6 
                transition-all duration-300 rounded-lg
                hover:-translate-y-2 hover:shadow-xl"
                        >
                          <BsServer size={45} className="text-teal-800" />

                          <h5 className="text-[#163535] my-4 text-2xl">
                            Secure Storage
                          </h5>
                          <p className="text-[#323b3b] text-[16px]">
                            Mollitia animi id est laborum et dolorum fuga et
                            harum quidem rerum facilis.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="aos-init aos-animate"
                  data-aos="fade-up"
                  data-aos-delay="1000"
                >
                  <div className="flex flex-col mt-4 gap-2">
                    <h3 className="text-3xl text-[#163535] mt-6">
                      Your Rights
                    </h3>
                    <div className="h-1 w-15 bg-teal-600"></div>
                  </div>

                  <p className="text-[#323b3b] text-lg mt-4 lg:w-[84%] w-full">
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium totam rem
                    aperiam eaque ipsa quae ab illo inventore veritatis.
                  </p>

                  <div className="mt-8 lg:w-[84%] w-full">
                    <div
                      class="flex flex-row items-left text-left border border-gray-300 py-14 px-6 
                transition-all duration-300 rounded-lg
                hover:-translate-y-2 hover:shadow-xl  gap-4"
                    >
                      <BsEye size={35} className="text-gray-600" />
                      <div className="">
                        <h5 className="text-xl text-gray-600 font-medium">
                          Right to Access
                        </h5>
                        <p className="text-lg">
                          Et quasi architecto beatae vitae dicta sunt explicabo
                          nemo enim ipsam voluptatem.
                        </p>
                      </div>
                    </div>

                    <div
                      class="flex flex-row items-left text-left border border-gray-300 py-14 px-6 
                transition-all duration-300 rounded-lg
                hover:-translate-y-2 hover:shadow-xl  gap-4 mt-8"
                    >
                      <BsPencil size={35} className="text-gray-600" />
                      <div>
                        <h5 className="text-xl text-gray-600 font-medium">
                          Right to Rectification
                        </h5>
                        <p className="text-lg">
                          Quia voluptas sit aspernatur aut odit aut fugit sed
                          quia consequuntur magni.
                        </p>
                      </div>
                    </div>

                    <div
                      class="flex flex-row items-left text-left border border-gray-300 py-14 px-6 
                transition-all duration-300 rounded-lg
                hover:-translate-y-2 hover:shadow-xl  gap-4 mt-8"
                    >
                      <BsTrash size={35} className="text-gray-600" />
                      <div>
                        <h5 className="text-xl text-gray-600 font-medium">
                          Right to Erasure
                        </h5>
                        <p className="text-lg">
                          Dolores eos qui ratione voluptatem sequi nesciunt
                          neque porro quisquam est.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="" data-aos="fade-up" data-aos-delay="1100">
                  <div className="flex flex-col mt-4 gap-2">
                    <h3 className="text-3xl text-[#163535] mt-6">
                      Cookies and Tracking
                    </h3>
                    <div className="h-1 w-15 bg-teal-600"></div>
                  </div>

                  <p className="mt-4 text-[#323b3b] text-lg w-full lg:w-[84%]">
                    Qui dolorem ipsum quia dolor sit amet consectetur adipisci
                    velit sed quia non numquam eius modi tempora incidunt ut
                    labore et dolore magnam aliquam quaerat voluptatem.
                  </p>

                  <div className="mt-4">
                    <h4 className="text-3xl text-[#163535] mt-6">
                      Types of Cookies We Use
                    </h4>

                    <div className="border w-full lg:w-[84%] border-gray-300 p-4 sm:p-6 mt-4 rounded-md bg-white overflow-x-auto">
                      <table className="w-full min-w-[600px] border-collapse">
                        <thead>
                          <tr className="text-left border-b border-gray-200">
                            <th className="p-2 sm:p-3 font-bold text-gray-700 text-sm sm:text-base lg:text-lg whitespace-nowrap">
                              Cookie Type
                            </th>
                            <th className="p-2 sm:p-3 font-bold text-gray-700 text-sm sm:text-base lg:text-lg">
                              Purpose
                            </th>
                            <th className="p-2 sm:p-3 font-bold text-gray-700 text-sm sm:text-base lg:text-lg whitespace-nowrap">
                              Duration
                            </th>
                          </tr>
                        </thead>

                        <tbody className="divide-y divide-gray-200 text-sm sm:text-base">
                          <tr>
                            <td className="p-2 sm:p-3 whitespace-nowrap">
                              Essential
                            </td>
                            <td className="p-2 sm:p-3">
                              Ut enim ad minima veniam quis nostrum
                            </td>
                            <td className="p-2 sm:p-3 whitespace-nowrap">
                              Session
                            </td>
                          </tr>

                          <tr>
                            <td className="p-2 sm:p-3 whitespace-nowrap">
                              Analytics
                            </td>
                            <td className="p-2 sm:p-3">
                              Exercitationem ullam corporis suscipit
                            </td>
                            <td className="p-2 sm:p-3 whitespace-nowrap">
                              2 Years
                            </td>
                          </tr>

                          <tr>
                            <td className="p-2 sm:p-3 whitespace-nowrap">
                              Marketing
                            </td>
                            <td className="p-2 sm:p-3">
                              Laboriosam nisi ut aliquid ex ea commodi
                            </td>
                            <td className="p-2 sm:p-3 whitespace-nowrap">
                              1 Year
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>

                <div className="" data-aos="fade-up" data-aos-delay="1200">
                  <div className="flex flex-col mt-4 gap-2">
                    <h3 className="text-3xl text-[#163535] mt-6">
                      Changes to This Privacy Policy
                    </h3>
                    <div className="h-1 w-15 bg-teal-600"></div>
                  </div>

                  <p className="text-[#323b3b] text-lg lg:w-[84%] w-full mt-4">
                    Quis autem vel eum iure reprehenderit qui in ea voluptate
                    velit esse quam nihil molestiae consequatur vel illum qui
                    dolorem eum fugiat quo voluptas nulla pariatur.
                  </p>
                </div>

                <div class="mt-4" data-aos="fade-up" data-aos-delay="1300">
                  <h3 className="text-3xl text-[#163535] mt-6">Contact Us</h3>
                  <p className="text-[#323b3b] lg:w-[84%] text-lg mt-4">
                    Excepteur sint occaecat cupidatat non proident sunt in culpa
                    qui officia deserunt mollitia animi id est laborum sed ut
                    perspiciatis unde omnis.
                  </p>

                  <div className="space-y-2 mt-4">
                    <div className="flex flex-row gap-4 items-center">
                      <BsEnvelope size={18} className="text-teal-700" />
                      <span className="text-lg text-[#323b3b]">
                        privacy@example.com
                      </span>
                    </div>
                    <div className="flex flex-row gap-4 items-center">
                      <BsGeoAlt size={18} className="text-teal-700" />
                      <span className="text-lg text-[#323b3b]">
                        1234 Privacy Street, Legal City, LC 12345
                      </span>
                    </div>
                    <div className="flex flex-row gap-4 items-center">
                      <BsTelephone size={18} className="text-teal-700" />
                      <span className="text-lg text-[#323b3b]">
                        +1 (555) 123-4567
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
