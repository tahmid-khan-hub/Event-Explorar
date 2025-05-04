import React from 'react';
import { FaPaintBrush } from 'react-icons/fa';
import { MdSportsEsports } from 'react-icons/md';

const Categories = () => {
    return (
        <div>
            <h1 className='text-3xl font-bold'>Categories</h1>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7'>

                {/* gaming */}
                <div className='border-2 rounded-xl shadow-xl text-center p-7'>
                    <MdSportsEsports size={60} className="mx-auto"></MdSportsEsports>
                    <h2 className='text-xl font-semibold'>Gaming</h2>
                </div>
                {/* art */}
                <div className='border-2 rounded-xl shadow-xl text-center p-7'>
                    <FaPaintBrush size={60} className="mx-auto"></FaPaintBrush>
                    <h2 className='text-xl font-semibold'>Art</h2>
                </div>
                {/* technology */}
                <div className='border-2 rounded-xl shadow-xl text-center p-7'>
                    <MdSportsEsports size={60} className="mx-auto"></MdSportsEsports>
                    <h2 className='text-xl font-semibold'>Technology</h2>
                </div>
                {/* business */}
                <div className='border-2 rounded-xl shadow-xl text-center p-7'>
                    <MdSportsEsports size={60} className="mx-auto"></MdSportsEsports>
                    <h2 className='text-xl font-semibold'>Business</h2>
                </div>
                {/* health */}
                <div className='border-2 rounded-xl shadow-xl text-center p-7'>
                    <MdSportsEsports size={60} className="mx-auto"></MdSportsEsports>
                    <h2 className='text-xl font-semibold'>Health</h2>
                </div>
                {/* environment */}
                <div className='border-2 rounded-xl shadow-xl text-center p-7'>
                    <MdSportsEsports size={60} className="mx-auto"></MdSportsEsports>
                    <h2 className='text-xl font-semibold'>Environment</h2>
                </div>
                {/* entertainment */}
                <div className='border-2 rounded-xl shadow-xl text-center p-7'>
                    <MdSportsEsports size={60} className="mx-auto"></MdSportsEsports>
                    <h2 className='text-xl font-semibold'>Entertainment</h2>
                </div>
                {/* photography */}
                <div className='border-2 rounded-xl shadow-xl text-center p-7'>
                    <MdSportsEsports size={60} className="mx-auto"></MdSportsEsports>
                    <h2 className='text-xl font-semibold'>Photography</h2>
                </div>
            </div>
        </div>
    );
};

export default Categories;