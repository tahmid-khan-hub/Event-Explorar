import React from 'react';
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div className='flex flex-col items-center justify-center h-screen'>
            <img src="https://i.ibb.co.com/dwx05fqn/shutterstock-479042983.jpg" />
            <p className='text-center text-2xl my-4'>Oops! The page you're looking for doesn't exist</p>
            <Link className="block mx-auto w-fit" to={`/`}><button className='btn bg-green-600 text-white w-[200px]'>Go Back Home</button></Link>
        </div>
    );
};

export default ErrorPage;