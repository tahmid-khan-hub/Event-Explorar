import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Slider = () => {
  return (
    <div className="w-11/12 md:max-w-[1309px] mx-auto mt-9">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        loop
        className="w-full h-[300px] md:h-[600px] max-w-[1300px] mx-auto rounded-3xl overflow-hidden"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="relative w-full h-full">
            <img
              src="https://i.ibb.co.com/TMCw1hk2/image.png"
              alt="Slide 1"
              className="absolute inset-0 w-full h-full object-cover "
            />
            <div className="absolute inset-0 bg-opacity-50"></div>
            <div className="relative z-10 flex flex-col h-full text-white px-4 justify-center md:ml-16 text-center md:text-left ">
              <div className="max-w-[1009px]">
                <h2 className="text-2xl md:text-4xl font-bold mb-5 md:mt-24">
                  Where Ideas Ignite and Innovation Begins
                </h2>
                <p className="text-sm md:text-lg ">
                  Join conferences and workshops happening around you. Learn,
                  network, grow —{" "}
                  <span className="hidden md:block">
                    gain insights from industry leaders, discover emerging
                    trends, build meaningful connections, and take your skills
                    to the next level.
                  </span>
                </p>
                <button className="hidden md:block btn mb-10 md:mb-24 mt-3">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="relative w-full h-full">
            <img
              src="https://i.ibb.co.com/tMPhXPzn/image.png"
              alt="Slide 2"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-opacity-50"></div>
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-black px-4">
              <div className="max-w-[1009px]">
                <h2 className="text-2xl md:text-4xl font-bold mb-5 mt-10 md:mt-24">
                Experience the Power of Art
                </h2>
                <p className="text-sm md:text-lg mb-10 md:mb-24">
                Discover exhibitions, workshops, and creative spaces — <span className="hidden md:block">connect with artists, explore diverse styles, express yourself, and be inspired by the limitless world of visual and performing arts.</span>
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div className="relative w-full h-full">
            <img
              src="https://i.ibb.co.com/9kFGCcr5/image.png"
              alt="Slide 3"
              className="absolute inset-0 w-full h-full object-cover "
            />
            <div className="absolute inset-0 bg-opacity-50"></div>
            <div className="relative z-10 flex flex-col justify-center md:ml-28 text-center md:text-right h-full  text-white px-4">
              <div className="max-w-[1009px]">
                <h2 className="text-2xl md:text-4xl font-bold mb-5 ">
                  Dive Into the World of Gaming
                </h2>
                <p className="text-sm md:text-lg ">
                  From epic tournaments to immersive experiences —{" "}
                  <span className="hidden md:block">
                    connect with fellow gamers, explore new titles, meet
                    developers, and be part of a vibrant, ever-evolving gaming
                    community.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
