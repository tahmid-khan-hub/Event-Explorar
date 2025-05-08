import React, { useEffect } from 'react';
import { useLoaderData, Link } from 'react-router';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaPaintBrush } from 'react-icons/fa';
import { MdSportsEsports, MdMovie, MdMonochromePhotos, MdOutlineHealthAndSafety } from 'react-icons/md';
import { GrTechnology } from 'react-icons/gr';
import { IoIosBusiness } from 'react-icons/io';
import { IoLeafOutline } from 'react-icons/io5';

const Categories = () => {
  const data = useLoaderData();

  const categories = [...new Set(data.map(event => event.category))];

  const categoryIcons = {
    Gaming: <MdSportsEsports size={60} className="mx-auto mb-5" />,
    Art: <FaPaintBrush size={60} className="mx-auto mb-5" />,
    Technology: <GrTechnology size={60} className="mx-auto mb-5" />,
    Business: <IoIosBusiness size={60} className="mx-auto mb-5" />,
    Health: <MdOutlineHealthAndSafety size={60} className="mx-auto mb-5" />,
    Environment: <IoLeafOutline size={60} className="mx-auto mb-5" />,
    Entertainment: <MdMovie size={60} className="mx-auto mb-5" />,
    Photography: <MdMonochromePhotos size={60} className="mx-auto mb-5" />,
  };

  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: false,
    });
  }, []);

  return (
    <div data-aos="fade-up">
      <h1 className="text-3xl font-bold text-center mt-24">Categories</h1>
      <p className="text-center text-gray-600 mt-5 mb-9 px-2 md:px-0">
        Browse through our curated categories to easily find events that match your interests. Whether you're looking to learn a new skill, cheer on your favorite team, or immerse yourself in the local arts scene, our platform provides all the details you need.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7">
        {categories.map(category => (
          <Link to={`/Category/${category}`} key={category}>
            <div
              data-aos="fade-up"
              className="bg-white border-2 border-gray-300 rounded-xl shadow-xl text-center p-7 mx-2 md:mx-0
              transform transition-transform delay-150 duration-300 ease-in-out 
             hover:-translate-y-1 hover:scale-110 hover:bg-blue-300 
             hover:shadow-2xl"
            >
              {categoryIcons[category] || (
                <span className="text-4xl mb-5 block">🎯</span>
              )}
              <h2 className="text-xl -ml-2 md:ml-0 font-semibold">{category}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
