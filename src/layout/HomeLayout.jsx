import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer' 
import { Outlet } from 'react-router';
import { ToastContainer } from 'react-toastify';

const HomeLayout = () => {
    return (
        <>

        <ToastContainer/>

        <div className='w-full md:max-w-[1500px] mx-auto bg-purple-200 px-0 md:px-11'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
        </>
    );
};

export default HomeLayout;