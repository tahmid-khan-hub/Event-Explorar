import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer.jsx/Footer';
import { Outlet } from 'react-router';

const HomeLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default HomeLayout;