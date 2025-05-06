import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const EventDetails = () => {
    const { id } = useParams();
    const data = useLoaderData();

    const event = data.find(e => e.id === id);

    useEffect(() => {
        window.scrollTo(0, 0);
        
          AOS.init({
          duration: 1000,
          once: false, 
        });
    }, []);

    const handleReserveSeat = () => {
        alert(`Seat reserved for "${event.name}"`);
    };

    return (
        <>
            <div  data-aos="zoom-in-down" className="max-w-5xl mx-auto my-10 p-6 bg-base-200 rounded-3xl shadow-xl">
                <div className="text-center mb-20">
                    <h1 className="text-3xl font-bold mb-4">{event.name}</h1>
                    <p className="text-gray-600">{event.description}</p>
                </div>

                <div className="md:flex gap-6">
                    <div className="flex-shrink-0">
                        <img
                            className="w-full md:w-[400px] h-[250px] object-cover rounded-xl"
                            src={event.thumbnail}
                            alt={event.name}
                        />
                    </div>

                    <div className="flex-1 mt-6 md:mt-12 md:ml-6">
                        <p className="mb-3 text-xl">
                            <strong className='mr-2'>Date:</strong> {event.date}
                        </p>
                        <p className="mb-3 text-xl">
                            <strong className='mr-2'>Category:</strong> {event.category}
                        </p>
                        <p className="mb-3 text-xl">
                            <strong className='mr-2'>Location:</strong> {event.location}
                        </p>
                        <p className="mb-3 text-xl">
                            <strong className='mr-2'>Entry Fee:</strong>
                            <span className="text-green-700 font-semibold">{event.entry_fee} Taka</span>
                        </p>
                    </div>
                </div>
            </div>

            <div className='w-11/12  lg:w-[1000px] mx-auto rounded-2xl my-12 mb-44'>
                
                <div className='  mb-7'>
                    <button
                        onClick={handleReserveSeat}
                        className='btn w-full text-white rounded-4xl bg-green-600'
                    >
                        Reserve Your Seat Now
                    </button>
                </div>
            </div>
        </>
    );
};

export default EventDetails;
