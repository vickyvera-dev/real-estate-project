import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function Testimonialsection() {
  const testimonials = [
    {
      id: 1,
      title: "Labore nostrum eos impedit",
      text: "Beatae magnam dolore quia ipsum. Voluptatem totam et qui dolore dignissimos. Amet quia sapiente laudantium nihil illo et assumenda sit cupiditate. Nam perspiciatis perferendis minus consequatur. Enim ut eos quo.",  
       text2: "Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.",
      image: "/images/person-f-8.webp",
      profile: "/images/person-f-8.webp",
      name: "Matt Brandon",
      role: "Freelancer",
    },
    {
      id: 2,
      title: "Dolorem sit amet",
      text: "Eveniet necessitatibus assumenda quae tempore fuga rem. Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.",
      text2: "Itaque ut explicabo vero occaecati est quam rerum sed. Numquam tempora aut aut quaerat quia illum. Nobis quia autem odit ipsam numquam. Doloribus sit sint corporis eius totam fuga. Hic nostrum suscipit corrupti nam expedita adipisci aut optio.",
      image: "/images/person-f-10.webp",
      profile: "/images/person-f-10.webp",
      name: "Sarah Kelly",
      role: "Designer",
    },
    {
      id: 3,
      title: "Quo fugiat molestiae",
      text: "Asperiores perspiciatis ducimus id temporibus autem pariatur. Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.",
      text2: "Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.",
      image: "/images/person-m-7 (1).webp",
      profile: "/images/person-m-7 (1).webp",
      name: "David Ryan",
      role: "Developer",
    },
    {
      id: 4,
      title: "Quo fugiat molestiae",
      text: "Asperiores perspiciatis ducimus id temporibus autem pariatur, Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.",
      text2: "Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.",
      image: "/images/person-m-9.webp",
      profile: "/images/person-m-9.webp",
      name: "David Ryan",
      role: "Developer",
    },
  ];

  return (
   <div className="w-full bg-[#e2f2f5] py-16 px-6">
     <div  className="max-w-7xl mx-auto">

        {/* HEADER */}
        <h1
          className="text-3xl font-semibold text-center text-[#1f2f31]"
          data-aos="fade-up"
        >
          Testimonials
        </h1>

        <div
          className="relative w-40 mx-auto mt-2 mb-6"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="w-full h-[2px] bg-gray-300"></div>
          <div className="absolute inset-y-0 w-16 h-1 bg-teal-600 translate-x-12 -translate-y-1/2 top-1/2"></div>
        </div>

        <p
          className="text-center text-gray-600 max-w-2xl mx-auto mb-12"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit.
        </p>

      <div className="w-full max-w-7xl mx-auto mt-12 relative pb-16">

      {/* ------- ARROW BUTTONS AT THE BOTTOM -------- */}
     <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex items-center flex-row  z-20 justify-between">
 <div className="group">
   <button className="swiper-button-prev text-gray-700 bg-white p-3 rounded-full group-hover:bg-teal-900">
    <FaChevronRight className="text-gray-700 group-hover:text-white"/>    
  </button>
 </div>

 <div className="group">
   <button className="swiper-button-next text-gray-700 bg-white p-3 rounded-full group-hover:bg-teal-900">
    <FaChevronLeft className="text-gray-700 group-hover:text-white" />
  </button>
 </div>
</div>


      {/* ----------- SLIDER ------------ */}
      <Swiper
  modules={[Navigation, Autoplay]}
  navigation={{
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  }}
  dir="ltr"                      // ADD THIS
  autoplay={{
    delay: 3000,
    disableOnInteraction: false,
  }}
  spaceBetween={20}
  loop={true}
  speed={800}
  breakpoints={{
    0: { slidesPerView: 1 },
    640: { slidesPerView: 1 },
    768: { slidesPerView: 1 },
    1024: { slidesPerView: 1 },
  }}
  className="pb-10"
>

 
        {testimonials.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="bg-white rounded-xl shadow-lg  h-full p-8 flex flex-row gap-4">
             
              <div className="lg:w-[70%] md:w-full sm:w-full">
                <h2 className="text-lg font-semibold">{item.title}</h2>

              <p className="text-gray-600 text-lg italic tracking-wide mt-2">{item.text}</p>
              <p className="text-gray-600 text-lg tracking-wide mt-6 italic">{item.text2}</p>

              <div className="flex items-center gap-3 mt-6">
                <img
                  src={item.profile}
                  className="w-10 h-10 rounded-full object-cover"
                />

                <div>
                  <p className="font-medium">{item.name}</p>
                  <p className="text-xs text-gray-500">{item.role}</p>
                </div>
              </div>
              </div>

               <div className="w-[30%] lg:flex hidden">
                <img
                src={item.image}
                className="w-full h-full rounded-xl object-cover"
              />
               </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    </div>
   </div>
  );
}

