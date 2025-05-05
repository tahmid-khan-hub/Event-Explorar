import React from 'react';
import { Link } from 'react-router';

const Card = ({card}) => {

    console.log(card.thumbnail);

    return (
        <div className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col">
    <img
        src={card.thumbnail}
        alt={card.name}
        className="w-full h-56 object-cover p-3 rounded-2xl mt-3"
    />
    <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold">{card.name}</h3>
        <p className="text-sm text-gray-600">{card.date} — {card.location}</p>
        <p className="mt-2 text-gray-700 line-clamp-3">{card.description}</p>
        <div className="mt-4 flex justify-between items-center">
            <span className="text-sm text-blue-600 font-medium">{card.category}</span>
            <span className="text-sm text-green-600 font-bold">${card.entry_fee}</span>
        </div>
        <Link to={`/eventDetails/${card.id}`}>
        <button className="btn mt-8 w-full font-semibold py-2 px-4 rounded-xl ">
            View More
        </button>
        </Link>
    </div>
</div>
    );
};

export default Card;