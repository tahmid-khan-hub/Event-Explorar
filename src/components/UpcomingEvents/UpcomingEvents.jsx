import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import Card from '../Card/Card';


const UpcomingEvents = () => {

    const data = useLoaderData();
    console.log(data);

    const [displayCard, setDisplayCard] = useState([]);
    const [showAll, setShowAll] = useState(false)

    useEffect(()=>{
        if(showAll){
            setDisplayCard(data);
        }else{
            setDisplayCard(data.slice(0,6))
        }
    },[data, showAll])


    return (
        
        <>
            <h1 className="text-3xl font-bold mt-24 text-center">Upcoming Events</h1>
            <p className='text-gray-600 mt-3 mb-9 text-center'>Discover the latest events happening near you. Stay informed and join the experiences that matter.</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            {
                displayCard.map((card, index) => <Card key={index} card={card}></Card>)
            }
            </div>
            <button className='btn md:ml-[45%] lg:ml-[47%] mt-11 ' onClick={()=> {
                setShowAll(prev => !prev)
                if(showAll) window.scrollTo(0,0)
            }}>{showAll?"Show Less ":"Show All "}</button>
        </>
    );
};

export default UpcomingEvents;