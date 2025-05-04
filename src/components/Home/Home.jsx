import React from 'react';
import Slider from '../Slider/Slider';
import Categories from '../Categories/Categories';
import UpcomingEvents from '../UpcomingEvents/UpcomingEvents';
import About from '../About/About';

const Home = () => {
    return (
        <div>
            home
            <Slider></Slider>
            <UpcomingEvents></UpcomingEvents>
            <Categories></Categories>
            <About></About>
        </div>
    );
};

export default Home;