import React from 'react';
import { Link } from 'react-router';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Card = ({card}) => {

    useEffect(() => {
        AOS.init({
          duration: 1000,
          once: false, 
        });
      }, []);

    return (
        <div data-aos="zoom-in" className="bg-white mx-2 md:mx-0 rounded-2xl shadow-md overflow-hidden flex flex-col">
    <img
        src={card.thumbnail}
        alt={card.name}
        className="w-full h-56 object-cover p-3 rounded-2xl mt-3"
    />
    <div className="p-4 flex flex-col flex-grow ">
        <h3 className="text-xl font-semibold">{card.name}</h3>
        <p className="text-sm text-gray-600">{card.date} — {card.location}</p>
        <p className="mt-2 text-gray-700 line-clamp-3">{card.description}</p>
        <div className="mt-4 flex justify-between items-center">
            <span className="text-sm text-blue-600 font-medium">{card.category}</span>
        </div>
        <Link to={`/eventDetails/${card.id}`}>
        <button className="btn mt-8 w-full btn-primary font-semibold py-2 px-6 rounded-md text-white bg-gradient-to-r from-purple-400 to-purple-500 hover:from-purple-500 hover:to-purple-600">
            View More
        </button>
        </Link>
    </div>
</div>
    );
};

export default Card;