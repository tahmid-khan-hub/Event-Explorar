import React from 'react';
import { useLoaderData } from 'react-router';
import Card from '../Card/Card';


const UpcomingEvents = () => {

    const data = useLoaderData();
    console.log(data);


    return (
        
        <>
            <h1 className="text-3xl font-bold mt-24 text-center">Upcoming Events</h1>
            <p className='text-gray-600 mt-3 mb-9 text-center'>Discover the latest events happening near you. Stay informed and join the experiences that matter.</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            {
                data.map((card, index) => <Card key={index} card={card}></Card>)
            }
            </div>
        </>
    );
};

export default UpcomingEvents;