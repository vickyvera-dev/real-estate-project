import React from "react";
import {
  BsCalendar3,
  BsChat,
  BsChatText,
  BsClock,
  BsFacebook,
  BsHeart,
  BsLightningCharge,
  BsLink45Deg,
  BsLinkedin,
  BsPhone,
  BsShare,
  BsShieldCheck,
  BsSpeedometer2,
  BsTwitterX,
  BsUniversalAccess,
} from "react-icons/bs";

export default function Blogsdetailsctn() {
  return (
    <section
      id="blog-details"
      className="py-16 border-b border-b-gray-300 overflow-x-hidden"
    >
      {/* ===== TOP SECTION ===== */}
      <div
        className="text-center py-20 px-4 sm:px-10 md:px-16 lg:px-28 pt-36"
        data-aos="zoom-in"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-blue-950">
          Blog
        </h1>
        <p className="text-gray-700 text-base sm:text-lg md:text-xl max-w-4xl mx-auto mt-4 leading-relaxed">
          Odio et unde deleniti. Officiis quo odio sint voluptas consequatur ut
          a odio voluptatem. Sit dolorum debitis veritatis natus dolores.
        </p>
      </div>

      {/* ===== BREADCRUMB ===== */}
      <div className="w-full bg-gray-100 py-5 px-4 sm:px-6">
        <ul className="flex gap-2 text-sm sm:text-base sm:ml-32">
          <li className="text-teal-600">
            <a href="/">Home</a>
          </li>
          <li className="text-gray-600">
            /
            <a href="/blog" className="hover:text-teal-600 ml-1">
              Blog Details
            </a>
          </li>
        </ul>
      </div>

      {/* ===== BLOG CONTENT ===== */}
      <div className="py-12 max-w-7xl mx-auto px-4" data-aos="fade-up">
        <article className="flex flex-col lg:ml-28">
          {/* Hero Image */}
          <div
            className="h-[45vh] sm:h-[55vh] lg:h-[70vh] w-full relative"
            data-aos="zoom-in"
          >
            <img
              src="images/blog-post-3.webp"
              alt="Featured blog"
              className="object-cover rounded-b-2xl h-full w-full"
              loading="lazy"
            />

            <div className="absolute inset-0 rounded-b-2xl bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

            <div className="absolute bottom-4 left-4 flex flex-wrap items-center gap-4 z-10">
              <a
                href="#"
                className="px-4 py-2 text-sm bg-teal-700 text-white rounded-full"
              >
                Web Development
              </a>
              <span className="text-white text-2xl hidden sm:block">•</span>
              <span className="flex items-center gap-2 text-white">
                <BsClock size={16} /> 6 min read
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="mt-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-700 tracking-wide">
              Modern Web Development: Best Practices{" "}
              <br className="hidden sm:block" />
              and Future Trends for 2025
            </h1>
            {/* Author Meta */}
            <div className="flex flex-col md:flex-row justify-between gap-6 mt-8">
              <div className="flex items-center gap-4">
                <img
                  src="images/person-f-8.webp"
                  alt="Author"
                  className="h-16 w-16 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold">Michael Chen</h4>
                  <span className="text-sm text-gray-600">
                    Senior Web Developer
                  </span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                <span className="flex items-center gap-2">
                  <BsCalendar3 size={17} /> Mar 15, 2025
                </span>
                <span className="hidden sm:block text-xl font-bold">•</span>
                <span className="flex items-center gap-2">
                  <BsChatText size={17} /> 18 Comments
                </span>
              </div>
            </div>
            {/* Article Body */}
            <div className="mt-10 space-y-6 text-gray-700">
              <p className="font-bold text-xl lg:w-[84%]">
                The landscape of web development continues to evolve at an
                unprecedented pace, bringing new technologies, frameworks, and
                methodologies that reshape how we build modern web applications.
              </p>

              <p className="text-lg lg:w-[84%]">
                As we delve into 2025, the web development ecosystem has
                transformed dramatically, introducing innovative approaches to
                building faster, more secure, and highly engaging web
                experiences. This comprehensive guide explores the latest trends
                and best practices that are defining the future of web
                development.
              </p>

              <div className="flex flex-col lg:flex-row gap-8 items-start mt-14">
                <div className="flex-1">
                  <h2 className="text-3xl text-[#163535] font-semibold">
                    The Rise of Web Components
                  </h2>

                  <p className="text-lg leading-7 mt-4 lg:w-[75%] tracking-wider">
                    Web Components have become increasingly crucial in modern
                    web development, offering a standardized way to create
                    reusable custom elements. Key advantages include:
                  </p>

                  <ul className="list-disc pl-6 space-y-3 text-lg mt-10">
                    <li>
                      Enhanced code reusability across different frameworks
                    </li>
                    <li>Better encapsulation of functionality</li>
                    <li>Improved maintenance and scalability</li>
                    <li>Framework-agnostic component development</li>
                  </ul>
                </div>

                <div>
                  <div className="flex-1 flex-col shadow-lg items-center rounded-lg">
                    <img
                      src="images/blog-hero-2.webp"
                      alt="Modern web tools"
                      className="rounded-lg w-full max-w-md"
                      loading="lazy"
                    />
                    <div className="text-sm text-gray-600 flex flex-col text-center mb-8 gap-2 mt-8 pb-2">
                      <span>
                        {" "}
                        Modern development environments emphasize collaboration
                        and{" "}
                      </span>
                      <span>efficiency</span>{" "}
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-100 p-6 rounded-xl space-y-4">
                <h3 className="text-3xl">Key Trends in 2025</h3>
                <ul className="space-y-6 mt-8">
                  <li className="flex items-center gap-3">
                    <BsLightningCharge size={25} className="text-teal-700" />
                    <span className="text-lg font-semibold">
                      {" "}
                      Edge Computing and Serverless Architecture{" "}
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <BsShieldCheck size={25} className="text-teal-700" />
                    <span className="text-lg font-semibold">
                      {" "}
                      Enhanced Security Measures{" "}
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <BsPhone size={25} className="text-teal-700" />
                    <span className="text-lg font-semibold">
                      {" "}
                      Progressive Web Apps (PWAs){" "}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col gap-8 lg:w-[84%] mt-8">
              {" "}
              <span className="text-3xl text-[#163535]">
                {" "}
                Performance Optimization{" "}
              </span>{" "}
              <span className="text-lg font-medium text-gray-700">
                {" "}
                Performance remains a critical factor in web development, with
                an increasing focus on Core Web Vitals and user experience
                metrics. Modern applications must be optimized for both speed
                and efficiency.{" "}
              </span>{" "}
            </div>
            <blockquote
              className="relative pl-6 italic text-lg lg:w-[84%] mt-18 bg-white p-4 rounded-lg shadow-lg
            before:content-['“']
            before:absolute
            before:-top-4
            before:-left-2 
            before:text-[6rem]
            before:font-serif
            before:leading-none
            before:text-teal-100
            "
            >
              <span className="font-semibold text-xl text-gray-700">
                "The future of web development lies not just in writing code,
                but in creating seamless, accessible, and performant experiences
                that work for everyone, everywhere."
              </span>
              <div className="block text-lg text-gray-600 mt-4">
                Emily Thompson, Web Performance Architect
              </div>
            </blockquote>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-18">
              {" "}
              <div className="p-6 bg-white shadow-lg rounded-xl transition-all ease-in-out duration-300 hover:-translate-y-2">
                {" "}
                <BsSpeedometer2 size={34} className="text-teal-700" />{" "}
                <h4 className="text-2xl mt-2">Performance Metrics</h4>{" "}
                <p className="text-lg mt-4">
                  {" "}
                  Focus on Core Web Vitals and user-centric performance metrics
                  for better search rankings and user experience.{" "}
                </p>{" "}
              </div>{" "}
              <div className="p-6 bg-white shadow-lg rounded-xl transition-all ease-in-out duration-300 hover:-translate-y-2">
                {" "}
                <BsUniversalAccess size={34} className="text-teal-700" />{" "}
                <h4 className=" mt-2 text-2xl">Accessibility</h4>{" "}
                <p className="text-lg mt-4">
                  {" "}
                  Implementing WCAG guidelines and ensuring web applications are
                  accessible to all users across different devices.{" "}
                </p>{" "}
              </div>{" "}
            </div>
            <div className="flex flex-col gap-4 lg:w-[84%] mt-18">
              <span className="text-3xl text-[#163535]">Looking Forward</span>
              <span className="text-lg font-medium text-gray-700">
                As we continue through 2025, web development practices will
                further evolve, embracing new technologies while maintaining a
                strong foundation in performance, accessibility, and user
                experience. Staying updated with these trends and best practices
                is crucial for developers looking to build modern, scalable web
                applications.
              </span>
            </div>

            {/* Bottom Meta */}
            <div className="mt-18 flex flex-col justify-between gap-8">
              <div>
                <h4 className="text-2xl text-[#163535] mb-2">Related Topics</h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Web Development",
                    "Performance",
                    "Best Practices",
                    "2025",
                  ].map((tag) => (
                    <a
                      key={tag}
                      href="#"
                      className="px-4 text-sm py-2 hover:text-white transition-all ease-in-out duration-200 bg-gray-200 text-teal-700 hover:bg-teal-700 rounded-full"
                    >
                      {tag}
                    </a>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-2xl mb-2 text-[#163535]">Share Article</h4>
                <div className="flex gap-4 text-xl mt-4">
                  <span className="p-2 rounded-full bg-gray-200 text-teal-600 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:bg-teal-700 hover:text-white">
                    <BsTwitterX size={18} />
                  </span>
                  <span className="p-2 rounded-full bg-gray-200 text-teal-600 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:bg-teal-700 hover:text-white">
                    <BsFacebook size={18} />
                  </span>
                  <span className="p-2 rounded-full bg-gray-200 text-teal-600 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:bg-teal-700 hover:text-white">
                    <BsLinkedin size={18} />
                  </span>
                  <span className="p-2 rounded-full bg-gray-200 text-teal-600 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:bg-teal-700 hover:text-white">
                    <BsLink45Deg size={18} />
                  </span>
                </div>
              </div>
            </div>

            <section id="blog-comments" className="mt-16">
              <div data-aos="fade-up" data-aos-delay="100">
                {/* Header */}
                <div className="flex justify-between items-center border-b border-gray-300 pb-4 mb-10">
                  <h3 className="lg:text-3xl text-xl font-semibold">
                    Community Feedback
                  </h3>
                  <div className="flex items-center gap-2 py-2 px-4 bg-gray-100 rounded-full">
                    <span className="text-lg font-semibold">12</span>
                    <span className="uppercase text-lg">Comments</span>
                  </div>
                </div>
                {/* Thread Wrapper */}
                <div className="relative">
                  {/* Vertical Line */}
                  <span className="absolute left-8 top-20 bottom-48 w-[2px] bg-gradient-to-b from-teal-700 via-teal-600 to-transparent blur-[0.5px] "></span>
                  {/* Comment 1*/}
                  <div className="flex gap-5 mt-16">
                    {/* Avatar */}
                    <div className="relative w-16 h-16 shrink-0">
                      <img
                        src="images/person-f-9.webp"
                        alt="Avatar"
                        className="w-16 h-16 object-cover rounded-lg"
                      />
                      <span className="absolute -bottom-30 -right-2 w-3 h-3 bg-green-400 border-2 border-white rounded-full" />
                    </div>
                    {/* Content */}
                    <div className="flex-1 p-8 rounded-lg bg-white shadow-lg transit ease-in-out duration-300 hover:-translate-y-1.5">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-semibold">Thomas Anderson</h4>
                          <span className="flex items-center gap-2 text-sm text-gray-500">
                            <BsClock size={16} /> 2 hours ago
                          </span>
                        </div>
                        <span className="flex items-center gap-2 px-4 py-1 bg-gray-200 rounded-full text-sm">
                          <BsHeart size={14} /> 24
                        </span>
                      </div>
                      <p className="mt-3 text-gray-600">
                        Nullam ac urna eu felis dapibus condimentum sit amet a
                        augue. Sed non neque elit. Sed ut imperdiet nisi.
                        fermentum nunc.
                      </p>
                      <div className="flex gap-3 mt-4">
                        {[
                          {
                            icon: (
                              <BsHeart
                                size={14}
                                className="transition-all duration-300 ease-in-out group-hover:text-red-600 group-hover:font-bold"
                              />
                            ),
                            label: "Like",
                          },
                          { icon: <BsChat size={14} />, label: "Reply" },
                          { icon: <BsShare size={14} />, label: "Share" },
                        ].map((action, i) => (
                          <button
                            key={i}
                            className="flex items-center gap-2 px-3 py-1 text-xs bg-gray-200 rounded-full text-gray-600 hover:bg-teal-50 hover:text-teal-800 transition-all duration-300 ease-in-out hover:font-bold group"
                          >
                            
                            {action.icon} {action.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                  {/* Comment 2 (INDENTED) */}
                  <div className="flex gap-5 mt-16 lg:ml-12 ">
                    
                    {/* Avatar */}
                    <div className="relative w-16 h-16 shrink-0">
                      
                      <img
                        src="images/person-m-9.webp"
                        alt="Avatar"
                        className="w-16 h-16 object-cover rounded-lg"
                      />
                      <span className="absolute -bottom-30 -right-2 w-3 h-3 bg-green-400 border-2 border-white rounded-full" />
                    </div>

                    {/* Content */}
                    <div className="flex-1 lg:p-8 p-3 rounded-lg bg-white shadow-lg transit ease-in-out duration-300 hover:-translate-y-1.5">
                     
                      <div className="flex justify-between items-start">
                        
                        <div>                          
                          <h4 className="font-semibold">
                            Maria Rodriguez
                          </h4>
                          <span className="flex items-center gap-2 text-sm text-gray-500">
                            
                            <BsClock size={16} /> 1 hour ago
                          </span>
                        </div>
                        <span className="flex items-center gap-2 px-4 py-1 bg-gray-200 rounded-full text-sm">
                          
                          <BsHeart size={14} /> 8
                        </span>
                      </div>
                      <p className="mt-3 text-gray-600">
                        
                        Vivamus elementum semper nisi. Aenean vulputate eleifend
                        tellus. Aenean leo ligula, porttitor eu, consequat
                        vitae.
                      </p>
                      <div className="flex gap-3 mt-4">
                       
                        {[
                          {
                            icon: (
                              <BsHeart
                                size={14}
                                className="transition-all duration-300 ease-in-out group-hover:text-red-600 group-hover:font-bold"
                              />
                            ),
                            label: "Like",
                          },
                          { icon: <BsChat size={14} />, label: "Reply" },
                          { icon: <BsShare size={14} />, label: "Share" },
                        ].map((action, i) => (
                          <button
                            key={i}
                            className="flex items-center gap-2 px-3 py-1 text-xs bg-gray-200 rounded-full text-gray-600 hover:bg-teal-50 hover:text-teal-800 transition-all duration-300 ease-in-out hover:font-bold group"
                          >
                            
                            {action.icon} {action.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Comment 3 (INDENTED) */}
                  <div className="flex gap-5 mt-16 lg:ml-12">
                    
                    {/* Avatar */}
                    <div className="relative w-16 h-16 shrink-0">
                      
                      <img
                        src="images/person-f-9.webp"
                        alt="Avatar"
                        className="w-16 h-16 object-cover rounded-lg"
                      />
                      <span className="absolute -bottom-30 -right-2 w-3 h-3 bg-green-400 border-2 border-white rounded-full" />
                    </div>

                    {/* Content */}
                    <div className="flex-1 lg:p-8 p-3 rounded-lg bg-white shadow-lg transit ease-in-out duration-300 hover:-translate-y-1.5">
                    
                      <div className="flex justify-between items-start">
                        
                        <div>
                          
                          <h4 className="font-semibold">Alex Chen</h4>
                          <span className="flex items-center gap-2 text-sm text-gray-500">
                            
                            <BsClock size={16} /> 30 minutes ago
                          </span>
                        </div>
                        <span className="flex items-center gap-2 px-4 py-1 bg-gray-200 rounded-full text-sm">
                          
                          <BsHeart size={14} /> 5
                        </span>
                      </div>
                      <p className="mt-3 text-gray-600">
                        
                        Cras dapibus. Vivamus elementum semper nisi. Aenean
                        vulputate eleifend tellus.
                      </p>
                      <div className="flex gap-3 mt-4">
                      
                        {[
                          {
                            icon: (
                              <BsHeart
                                size={14}
                                className="transition-all duration-300 ease-in-out group-hover:text-red-600 group-hover:font-bold"
                              />
                            ),
                            label: "Like",
                          },
                          { icon: <BsChat size={14} />, label: "Reply" },
                          { icon: <BsShare size={14} />, label: "Share" },
                        ].map((action, i) => (
                          <button
                            key={i}
                            className="flex items-center gap-2 px-3 py-1 text-xs bg-gray-200 rounded-full text-gray-600 hover:bg-teal-50 hover:text-teal-800 transition-all duration-300 ease-in-out hover:font-bold group"
                          >
                            {" "}
                            {action.icon} {action.label}{" "}
                          </button>
                        ))}{" "}
                      </div>{" "}
                    </div>
                  </div>

                  {/* Comment 4 */}
                  <div className="flex gap-5 mt-16">
                    
                    {/* Avatar */}
                    <div className="relative w-16 h-16 shrink-0">
                      
                      <img
                        src="images/person-f-13.webp"
                        alt="Avatar"
                        className="w-16 h-16 object-cover rounded-lg"
                      />{" "}
                      <span className="absolute -bottom-30 -right-2 w-3 h-3 bg-green-400 border-2 border-white rounded-full" />
                    </div>{" "}
                    {/* Content */}
                    <div className="flex-1 lg:p-8 p-3 rounded-lg bg-white shadow-lg transit ease-in-out duration-300 hover:-translate-y-1.5">
                      {" "}
                      <div className="flex justify-between items-start">
                        {" "}
                        <div>
                          {" "}
                          <h4 className="font-semibold">Emily Watson</h4>{" "}
                          <span className="flex items-center gap-2 text-sm text-gray-500">
                            {" "}
                            <BsClock size={16} /> 3 hours ago{" "}
                          </span>{" "}
                        </div>{" "}
                        <span className="flex items-center gap-2 px-4 py-1 bg-gray-200 rounded-full text-sm">
                          {" "}
                          <BsHeart size={14} /> 15{" "}
                        </span>{" "}
                      </div>{" "}
                      <p className="mt-3 text-gray-600">
                        {" "}
                        Maecenas tempus, tellus eget condimentum rhoncus, sem
                        quam semper libero, sit amet adipiscing sem neque sed
                        ipsum.{" "}
                      </p>{" "}
                      <div className="flex gap-3 mt-4">
                        {" "}
                        {[
                          {
                            icon: (
                              <BsHeart
                                size={14}
                                className="transition-all duration-300 ease-in-out group-hover:text-red-600 group-hover:font-bold"
                              />
                            ),
                            label: "Like",
                          },
                          { icon: <BsChat size={14} />, label: "Reply" },
                          { icon: <BsShare size={14} />, label: "Share" },
                        ].map((action, i) => (
                          <button
                            key={i}
                            className="flex items-center gap-2 px-3 py-1 text-xs bg-gray-200 rounded-full text-gray-600 hover:bg-teal-50 hover:text-teal-800 transition-all duration-300 ease-in-out hover:font-bold group"
                          >
                            {" "}
                            {action.icon} {action.label}{" "}
                          </button>
                        ))}{" "}
                      </div>{" "}
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
            </section>

            <div
              className="mt-16 max-w-4xl mx-auto"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <form method="post" role="form">
                <div className="flex justify-center items-center text-center flex-col">
                  <h3 className="text-3xl font-semibold text-gray-700">
                    Leave a Comment
                  </h3>
                  <p className="text-lg text-gray-600 mt-4">
                    Your email address will not be published. Required fields
                    are marked *
                  </p>
                </div>
                <div className="space-y-12 mt-4">
                  {/* --- Row 1 --- */}
                  <div className="flex flex-col lg:flex-row gap-4 w-full">
                    {/* First Name */}
                    <div className="w-full">
                      <label htmlFor="name">Full Name *</label>
                      <div className="border border-gray-300 flex items-center gap-2 hover:border-teal-700 rounded-md py-4 p-2">
                        <input
                          type="text"
                          name="name"
                          id="name"
                          placeholder="Enter your full name"
                          required
                          className="w-full outline-none"
                        />
                      </div>
                    </div>
                    {/* Email */}
                    <div className="w-full">
                      {" "}
                      <label htmlFor="email">Email Address *</label>
                      <div className="border border-gray-300 flex items-center gap-2 hover:border-teal-700 rounded-md py-4 p-2">
                        <input
                          type="email"
                          name="email"
                          id="email"
                          placeholder="Enter your email address"
                          required
                          className="w-full outline-none"
                        />
                      </div>
                    </div>
                  </div>
                  {/* Subject */}
                  <div>
                    <label htmlFor="website">Website</label>
                    <div className="border border-gray-300 flex items-center gap-2 hover:border-teal-700 rounded-md py-4 p-2">
                      <input
                        type="url"
                        name="website"
                        id="website"
                        placeholder="Your website (optional)"
                        className="w-full outline-none"
                      />
                    </div>
                  </div>
                  {/* Message */}
                  <div>
                    <label htmlFor="comment">Your Comment *</label>{" "}
                    <div className="border border-gray-300 flex items-start gap-2 hover:border-teal-700 rounded-md p-2">
                      <textarea
                        name="comment"
                        id="comment"
                        rows="5"
                        placeholder="Write your thoughts here..."
                        required
                        className="w-full outline-none resize-none"
                      ></textarea>{" "}
                    </div>{" "}
                  </div>{" "}
                  {/* Button */}{" "}
                  <div className="flex justify-center mt-8 hover:-translate-y-1 transition">
                    {" "}
                    <button
                      type="submit"
                      className="w-40 h-10 bg-teal-700 text-white rounded-lg text-lg"
                    >
                      {" "}
                      Post Comment{" "}
                    </button>{" "}
                  </div>{" "}
                </div>{" "}
              </form>{" "}
            </div>
            {/* COMMENTS + FORM REMAIN UNCHANGED EXCEPT RESPONSIVE SAFETY */}
            {/* All widths, spacing, avatars, vertical line, and form layout are preserved */}
          </div>
        </article>
      </div>
    </section>
  );
}
