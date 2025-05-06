import React from "react";
import { FaUserCircle } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const testimonials = [
  {
    name: "Samia Islam",
    rating: 5,
    text: "The art exhibition was amazing and well-organized. I found it through this platform! Definitely worth checking out.",
  },
  {
    name: "Arif Hossain",
    rating: 4,
    text: "I never miss a tech workshop now — this site makes it easy to stay updated. I've learned so many valuable skills! Really grateful for this resource.",
  },
  {
    name: "Riya Begum",
    rating: 5,
    text: "Loved the local music night! The reviews helped me decide to go. I'm already looking forward to the next one!",
  },
  {
    name: "Azaz Ahmed",
    rating: 5,
    text: "The local eSports tournament was epic! Found it last minute thanks to this platform. Smooth registration and great crowd.",
  },
];

const Ratings = () => {

  useEffect(() => {
      AOS.init({
      duration: 1000,
      once: false, 
    });
  }, []);

  return (
    <section className="px-4 py-12 bg-gray-50 text-center my-24">
      <h2 className="text-3xl font-bold mb-8">What Our Users Say</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {testimonials.map((user, index) => (
          <div data-aos="flip-up"
            key={index}
            className="bg-white rounded-2xl shadow-md p-6 max-w-xs text-left"
          >
            <p className="text-gray-700 mb-12">"{user.text}"</p>
            <div className="flex items-center gap-3 ">
              
              <FaUserCircle className="w-10 h-10 text-gray-400"></FaUserCircle>
              <div>
                <p className="font-semibold">{user.name}</p>
                <p className="text-yellow-500">
                  {"⭐".repeat(user.rating)}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Ratings;
