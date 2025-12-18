import React from 'react'

 function Blogsection() {
  return (
    <div className='border-b border-b-gray-300'>
        {/* ===== TOP SECTION ===== */}
      <div
        className="text-center py-20 px-6 sm:px-10 md:px-16 lg:px-28 pt-36"
        data-aos="zoom-in"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-blue-950">
          Blog
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
                Blog
              </a>
            </li>
          </ul>
        </div>
      </div>



    <section id="blog-hero" className="py-16">
  <div data-aos="fade-up">
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr_1fr] mx-auto max-w-7xl gap-6 px-4 lg:px-0">

      {/* Left Side Posts */}
      <div>
        <div className="flex flex-col gap-6">

          {/* Side Post 1 */}
          <article data-aos="fade-right" data-aos-delay="100">
            <div className="relative overflow-hidden">
              <img
                src="images/blog-post-3.webp"
                alt="Post Image"
                loading="lazy"
                className="transition-all duration-300 ease-in-out hover:scale-125"
              />
              <span className="absolute top-3 left-3 bg-red-600 text-white text-sm py-2 px-6 rounded">
                Entertainment
              </span>
            </div>

            <div className="mt-4">
              <h3 className="font-semibold text-gray-800 leading-snug">
                <a href="#">
                  Maecenas tempus tellus eget condimentum rhoncus semper quam
                </a>
              </h3>

              <div className="flex items-center gap-3 mt-3 text-gray-500 text-sm">
                <span>March 15, 2025</span>
                <span>•</span>
                <span>3 Comments</span>
              </div>
            </div>
          </article>

          {/* Side Post 2 */}
          <article data-aos="fade-right" data-aos-delay="200">
            <div className="relative overflow-hidden">
              <img
                src="images/blog-post-9.webp"
                alt="Post Image"
                loading="lazy"
                className="transition-all duration-300 ease-in-out hover:scale-125"
              />
              <span className="absolute top-3 left-3 bg-green-600 text-white text-sm py-2 px-6 rounded">
                Technology
              </span>
            </div>

            <div className="mt-4">
              <h3 className="font-semibold text-gray-800 leading-snug">
                <a href="#">
                  Donec pede justo fringilla vel aliquet nec vulputate eget
                </a>
              </h3>

              <div className="flex items-center gap-3 mt-3 text-gray-500 text-sm">
                <span>March 14, 2025</span>
                <span>•</span>
                <span>5 Comments</span>
              </div>
            </div>
          </article>

        </div>
      </div>

      {/* Main Post */}
      <div>
        <article data-aos="fade-up">
          <div className="relative overflow-hidden">
            <img
              src="images/blog-post-7.webp"
              alt="Post Image"
              className="h-[50vh] w-full object-cover transition-all duration-300 ease-in-out hover:scale-125"
            />
            <span className="absolute top-3 left-3 bg-blue-600 text-white text-sm py-2 px-6 rounded">
              Business
            </span>
          </div>

          <div className="mt-4">
            <h2 className="text-3xl font-semibold text-gray-800 leading-snug">
              <a href="#">
                Curabitur ullamcorper ultricies nisi nam eget dui etiam rhoncus
              </a>
            </h2>

            <p className="text-[14px] text-gray-700 tracking-wide mt-4 leading-6">
              Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.
              Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut
              libero venenatis faucibus. Nullam quis ante.
            </p>

            <div className="flex items-center gap-3 mt-4 text-gray-500 text-sm">
              <span>March 16, 2025</span>
              <span>•</span>
              <span>8 Comments</span>
            </div>
          </div>
        </article>
      </div>

      {/* Right Side Posts */}
      <div>
        <div className="flex flex-col gap-6">

          {/* Side Post 3 */}
          <article data-aos="fade-left" data-aos-delay="100">
            <div className="relative overflow-hidden">
              <img
                src="images/blog-post-6.webp"
                alt="Post Image"
                loading="lazy"
                className="transition-all duration-300 ease-in-out hover:scale-125"
              />
              <span className="absolute top-3 left-3 bg-green-600 text-white text-sm py-2 px-6 rounded">
                Technology
              </span>
            </div>

            <div className="mt-4">
              <h3 className="font-semibold text-gray-800 leading-snug">
                <a href="#">
                  Aenean vulputate eleifend tellus aenean leo ligula porttitor
                </a>
              </h3>

              <div className="flex items-center gap-3 mt-3 text-gray-500 text-sm">
                <span>March 13, 2025</span>
                <span>•</span>
                <span>2 Comments</span>
              </div>
            </div>
          </article>

          {/* Side Post 4 */}
          <article data-aos="fade-left" data-aos-delay="200">
            <div className="relative overflow-hidden">
              <img
                src="images/blog-post-9.webp"
                alt="Post Image"
                loading="lazy"
                className="transition-all duration-300 ease-in-out hover:scale-125"
              />
              <span className="absolute top-3 left-3 bg-[#9b59b6] text-white text-sm py-2 px-6 rounded">
                Lifestyle
              </span>
            </div>

            <div className="mt-4">
              <h3 className="font-semibold text-gray-800 leading-snug">
                <a href="#">
                  Etiam sit amet orci eget eros faucibus tincidunt duis leo
                </a>
              </h3>

              <div className="flex items-center gap-3 mt-3 text-gray-500 text-sm">
                <span>March 12, 2025</span>
                <span>•</span>
                <span>4 Comments</span>
              </div>
            </div>
          </article>

        </div>
      </div>

    </div>
  </div>
</section>

<section id="blog-posts" className="blog-posts section py-16">
  <div data-aos="fade-up" data-aos-delay="100">
    <div className="grid grid-cols-1 lg:grid-cols-3 max-w-7xl mx-auto gap-8 px-4">

      {/* === Blog Post 1 === */}
      <article className="space-y-4">
        <div className="overflow-hidden rounded-lg">
          <img
            src="images/blog-post-1.webp"
            alt="Blog Post"
            className="w-full h-60 object-cover transition-all duration-300 hover:scale-105"
          />
        </div>

        <p className="post-category text-sm font-semibold text-gray-500 ">Politics</p>

        <h2 className="title text-xl font-semibold leading-tight">
          <a href="blog-details.html">
            Dolorum optio tempore voluptas dignissimos
          </a>
        </h2>

        <div className="flex items-center gap-4">
          <img src="images/person-f-12.webp" alt="" className="h-14 w-14 rounded-full object-cover" />
          <div className="post-meta">
            <p className="post-author font-semibold text-gray-800">Maria Doe</p>
            <p className="post-date text-gray-500 text-sm">
              <time dateTime="2022-01-01">Jan 1, 2022</time>
            </p>
          </div>
        </div>
      </article>

      {/* === Blog Post 2 === */}
      <article className="space-y-4">
        <div className="overflow-hidden rounded-lg">
          <img
            src="images/blog-post-2.webp"
            alt="Blog Post"
            className="w-full h-60 object-cover transition-all duration-300 hover:scale-105"
          />
        </div>

        <p className="post-category text-sm font-semibold text-gray-500">Sports</p>

        <h2 className="title text-xl font-semibold leading-tight">
          <a href="blog-details.html">
            Nisi magni odit consequatur autem nulla dolorem
          </a>
        </h2>

        <div className="flex items-center gap-4">
          <img src="images/person-f-13.webp" alt="" className="h-14 w-14 rounded-full object-cover" />
          <div className="post-meta">
            <p className="post-author font-semibold text-gray-800">Allisa Mayer</p>
            <p className="post-date text-gray-500 text-sm">
              <time dateTime="2022-01-01">Jun 5, 2022</time>
            </p>
          </div>
        </div>
      </article>

      {/* === Blog Post 3 === */}
      <article className="space-y-4">
        <div className="overflow-hidden rounded-lg">
          <img
            src="images/blog-post-3.webp"
            alt="Blog Post"
            className="w-full h-60 object-cover transition-all duration-300 hover:scale-105"
          />
        </div>

        <p className="post-category text-sm font-semibold text-gray-500 ">Entertainment</p>

        <h2 className="title text-xl font-semibold leading-tight">
          <a href="blog-details.html">
            Possimus soluta ut id suscipit ea ut in quo quia et soluta
          </a>
        </h2>

        <div className="flex items-center gap-4">
          <img src="images/person-m-10.webp" alt="" className="h-14 w-14 rounded-full object-cover" />
          <div className="post-meta">
            <p className="post-author font-semibold text-gray-800">Mark Dower</p>
            <p className="post-date text-gray-500 text-sm">
              <time dateTime="2022-01-01">Jun 22, 2022</time>
            </p>
          </div>
        </div>
      </article>

      {/* === Blog Post 4 === */}
      <article className="space-y-4">
        <div className="overflow-hidden rounded-lg">
          <img
            src="images/blog-post-4.webp"
            alt="Blog Post"
            className="w-full h-60 object-cover transition-all duration-300 hover:scale-105"
          />
        </div>

        <p className="post-category text-sm font-semibold text-gray-500 ">Sports</p>

        <h2 className="title text-xl font-semibold leading-tight">
          <a href="blog-details.html">
            Non rem rerum nam cum quo minus olor distincti
          </a>
        </h2>

        <div className="flex items-center gap-4">
          <img src="images/person-f-14.webp" alt="" className="h-14 w-14 rounded-full object-cover" />
          <div className="post-meta">
            <p className="post-author font-semibold text-gray-800">Lisa Neymar</p>
            <p className="post-date text-gray-500 text-sm">
              <time dateTime="2022-01-01">Jun 30, 2022</time>
            </p>
          </div>
        </div>
      </article>

      {/* === Blog Post 5 === */}
      <article className="space-y-4">
        <div className="overflow-hidden rounded-lg">
          <img
            src="images/blog-post-5.webp"
            alt="Blog Post"
            className="w-full h-60 object-cover transition-all duration-300 hover:scale-105"
          />
        </div>

        <p className="post-category text-sm font-semibold text-gray-500 ">Politics</p>

        <h2 className="title text-xl font-semibold leading-tight">
          <a href="blog-details.html">
            Accusamus quaerat aliquam qui debitis facilis consequatur
          </a>
        </h2>

        <div className="flex items-center gap-4">
          <img src="images/person-m-11.webp" alt="" className="h-14 w-14 rounded-full object-cover" />
          <div className="post-meta">
            <p className="post-author font-semibold text-gray-800">Denis Peterson</p>
            <p className="post-date text-gray-500 text-sm">
              <time dateTime="2022-01-01">Jan 30, 2022</time>
            </p>
          </div>
        </div>
      </article>

      {/* === Blog Post 6 === */}
      <article className="space-y-4">
        <div className="overflow-hidden rounded-lg">
          <img
            src="images/blog-post-6.webp"
            alt="Blog Post"
            className="w-full h-60 object-cover transition-all duration-300 hover:scale-105"
          />
        </div>

        <p className="post-category text-sm font-semibold text-gray-500 ">Entertainment</p>

        <h2 className="title text-xl font-semibold leading-tight">
          <a href="blog-details.html">
            Distinctio provident quibusdam numquam aperiam aut
          </a>
        </h2>

        <div className="flex items-center gap-4">
          <img src="images/person-f-15.webp" alt="" className="h-14 w-14 rounded-full object-cover" />
          <div className="post-meta">
            <p className="post-author font-semibold text-gray-800">Mika Lendon</p>
            <p className="post-date text-gray-500 text-sm">
              <time dateTime="2022-01-01">Feb 14, 2022</time>
            </p>
          </div>
        </div>
      </article>

    </div>
  </div>
</section>


    </div>
  )
}
export default Blogsection