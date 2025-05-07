import React, { useEffect } from 'react';
import Slider from '../Slider/Slider';
import Categories from '../Categories/Categories';
import UpcomingEvents from '../UpcomingEvents/UpcomingEvents';
import Ratings from '../Ratings/Ratings';

const Home = () => {

    useEffect(()=>{
        window.scrollTo(0, 0);
        document.title = "EventExplorer - Home"
    },[])
    return (
        <div>
            <Slider></Slider>
            <UpcomingEvents></UpcomingEvents>
            <Categories></Categories>
            <Ratings></Ratings>
        </div>
    );
};

export default Home;