import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer.jsx/Footer';
import { Outlet } from 'react-router';
import { ToastContainer } from 'react-toastify';

const HomeLayout = () => {
    return (
        <>

        <ToastContainer/>

        <div className='max-w-11/12 mx-auto'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
        </>
    );
};

export default HomeLayout;