import React, { useEffect } from "react";
import { Link } from 'react-router';

const CategoryDetails = ({ category }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div
      data-aos="zoom-in-down"
      className="max-w-11/12 mx-auto my-10 p-6 bg-base-200 rounded-3xl shadow-xl"
    >
      <div className="md:flex gap-6">
        <div className="flex-shrink-0">
          <img
            className="w-full md:w-[400px] h-[250px] object-cover rounded-xl"
            src={category.thumbnail}
            alt={category.name}
          />
        </div>

        <div className="flex-1 mt-6 md:mt-7 md:ml-6">
          <p className="mb-3 text-xl">
            <strong className="mr-2">Date:</strong> {category.date}
          </p>
          <p className="mb-3 text-xl">
            <strong className="mr-2">Category:</strong> {category.category}
          </p>
          <p className="mb-3 text-xl">
            <strong className="mr-2">Location:</strong> {category.location}
          </p>
          <p className="mb-3 text-xl">
            <strong className="mr-2">Entry Fee:</strong>
            <span className="text-green-700 font-semibold">
              {category.entry_fee} Taka
            </span>
          </p>
          <Link to={`/eventDetails/${category.id}`}>
            <button className="btn mt-1 w-full font-semibold py-2 px-4 rounded-xl ">
              View More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CategoryDetails;
