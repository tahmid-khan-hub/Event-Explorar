import React, { useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Loading from '../Loading/Loading';

const Faq = () => {

    const [loading, setLoading] = useState(true)

    useEffect(() => {
          const timeout = setTimeout(() => {
            setLoading(false);
          }, 500);
      
          return () => clearTimeout(timeout);
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = "EventExplorer - FaQ"
          AOS.init({
          duration: 1000,
          once: false, 
        });
      }, []);

    if(loading) return <Loading></Loading>

    return (
        <div className='max-w-11/12 mx-auto md:max-w-[1300px] md:mx-auto'>
            <h1 className='text-3xl font-semibold text-center mt-12'>FaQ</h1>

            {/* 1 */}
            <div data-aos="zoom-in" className='mt-11  mb-11 p-3 rounded-3xl bg-gray-50 border-1  border-purple-500 shadow-md shadow-purple-400'>
                <h2 className='font-semibold text-xl border-b-2 border-gray-300 pb-2 mb-2 pl-2'>Can I search for specific types of events (e.g., conferences, art)?</h2>
                <p className='pl-2 mt-5 text-gray-700'>Yes! We have a comprehensive categorization system. You can browse events by categories like conferences, workshops, gaming, art exhibitions, music, and more.</p>
            </div>

            {/* 2 */}
            <div data-aos="zoom-in" className='mb-11  mt-5 p-3 rounded-3xl bg-gray-50 border-1  border-purple-500 shadow-md shadow-purple-400'>
                <h2 className='font-semibold text-xl border-b-2 border-gray-300 pb-2 mb-2 pl-2'>How often is the event list updated?</h2>
                <p className='pl-2 mt-5 text-gray-700'>Our platform is updated frequently, often daily, as new events are submitted and existing event details are updated by organizers. We strive to provide the most current information.</p>
            </div>

            {/* 3 */}
            <div data-aos="zoom-in" className='mb-11  mt-5 p-3 rounded-3xl bg-gray-50 border-1  border-purple-500 shadow-md shadow-purple-400'>
                <h2 className='font-semibold text-xl border-b-2 border-gray-300 pb-2 mb-2 pl-2'>Is this platform free to use for finding events?</h2>
                <p className='pl-2 mt-5 text-gray-700'>Yes, our platform is completely free for users to browse and discover local events. You only pay for reserve seats if the event itself has an admission fee. </p>
            </div>

            {/* 4 */}
            <div data-aos="zoom-in" className='mb-11  mt-5 p-3 rounded-3xl bg-gray-50 border-1  border-purple-500 shadow-md shadow-purple-400'>
                <h2 className='font-semibold text-xl border-b-2 border-gray-300 pb-2 mb-2 pl-2'>Can I see feedback from other attendees before deciding to go to an event?</h2>
                <p className='pl-2 mt-5 text-gray-700'>Yes! Once you're on an event's page, you'll find a section for ratings and reviews from other users who have attended. This can give you valuable insights into their experiences.</p>
            </div>

            {/* 5 */}
            <div data-aos="zoom-in" className='mb-11  mt-5 p-3 rounded-3xl bg-gray-50 border-1  border-purple-500 shadow-md shadow-purple-400'>
                <h2 className='font-semibold text-xl border-b-2 border-gray-300 pb-2 mb-2 pl-2'>Why should I create an account?</h2>
                <p className='pl-2 mt-5 text-gray-700'>Creating an account allows you to save events you're interested in, leave feedback and ratings for events you've attended, and potentially receive personalized event recommendations based on your interests.</p>
            </div>
        </div>
    );
};

export default Faq;