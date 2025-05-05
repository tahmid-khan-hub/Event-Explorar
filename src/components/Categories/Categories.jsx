import React from 'react';
import { FaPaintBrush } from 'react-icons/fa';
import { MdSportsEsports } from 'react-icons/md';
import { GrTechnology } from "react-icons/gr";
import { IoIosBusiness } from "react-icons/io";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import { IoLeafOutline } from "react-icons/io5";
import { MdMovie } from "react-icons/md";
import { MdMonochromePhotos } from "react-icons/md";
import { Link, useLoaderData } from 'react-router';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

  

const Categories = () => {
    const data = useLoaderData();

    useEffect(() => {
    AOS.init({
      duration: 2000,
      once: false, 
    });
  }, []);

    return (
        <div data-aos="fade-up">
            <h1 className='text-3xl font-bold text-center mt-24'>Categories</h1>
            <p className='text-center text-gray-600 mt-5 mb-9'>Browse through our curated categories to easily find events that match your interests. Whether you're looking to learn a new skill, cheer on your favorite team, or immerse yourself in the local arts scene, our platform provides all the details you need.</p>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7'>

                {/* gaming */}
                <Link to={`/Category/${data.category}`}><div  data-aos="fade-up"  className='border-2 rounded-xl shadow-xl text-center p-7'>
                    <MdSportsEsports size={60} className="mx-auto mb-5"></MdSportsEsports>
                    <h2 className='text-xl font-semibold'>Gaming</h2>
                </div></Link>
                {/* art */}
                <Link to={`/Category/${data.category}`}><div  data-aos="fade-up"  className='border-2 rounded-xl shadow-xl text-center p-7'>
                    <FaPaintBrush size={60} className="mx-auto mb-5"></FaPaintBrush>
                    <h2 className='text-xl font-semibold'>Art</h2>
                </div></Link>
                {/* technology */}
                <Link to={`/Category/${data.category}`}><div  data-aos="fade-up"  className='border-2 rounded-xl shadow-xl text-center p-7'>
                    <GrTechnology size={60} className="mx-auto mb-5"></GrTechnology>
                    <h2 className='text-xl font-semibold'>Technology</h2>
                </div></Link>
                {/* business */}
                <Link to={`/Category/${data.category}`}><div  data-aos="fade-up"  className='border-2 rounded-xl shadow-xl text-center p-7'>
                    <IoIosBusiness size={60} className="mx-auto mb-5"></IoIosBusiness>
                    <h2 className='text-xl font-semibold'>Business</h2>
                </div></Link>
                {/* health */}
                <Link to={`/Category/${data.category}`}><div  data-aos="fade-up"  className='border-2 rounded-xl shadow-xl text-center p-7'>
                    <MdOutlineHealthAndSafety size={60} className="mx-auto mb-5"></MdOutlineHealthAndSafety>
                    <h2 className='text-xl font-semibold'>Health</h2>
                </div></Link>
                {/* environment */}
                <Link to={`/Category/${data.category}`}><div   data-aos="fade-up" className='border-2 rounded-xl shadow-xl text-center p-7'>
                    <IoLeafOutline size={60} className="mx-auto mb-5"></IoLeafOutline>
                    <h2 className='text-xl font-semibold'>Environment</h2>
                </div></Link>
                {/* entertainment */}
                <Link to={`/Category/${data.category}`}><div  data-aos="fade-up"  className='border-2 rounded-xl shadow-xl text-center p-7'>
                    <MdMovie size={60} className="mx-auto mb-5"></MdMovie>
                    <h2 className='text-xl font-semibold'>Entertainment</h2>
                </div></Link>
                {/* photography */}
                <Link to={`/Category/${data.category}`}><div  data-aos="fade-up"  className='border-2 rounded-xl shadow-xl text-center p-7'>
                    <MdMonochromePhotos size={60} className="mx-auto mb-5"></MdMonochromePhotos>
                    <h2 className='text-xl font-semibold'>Photography</h2>
                </div></Link>
            </div>
        </div>
    );
};

export default Categories;