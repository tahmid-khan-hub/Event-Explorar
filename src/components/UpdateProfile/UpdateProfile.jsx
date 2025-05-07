import React, { use } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link } from "react-router";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const UpdateProfile = () => {

  const { user } = use(AuthContext);

  useEffect(() => {
        document.title = "EventExplorer - Profile"
        AOS.init({
        duration: 1000,
        once: false, 
        });
    }, []);

  return (
    <section data-aos="flip-left" className="max-w-2xl mx-auto my-28 md:my-40 p-6 rounded-xl shadow-xl bg-base-200">
      <div className="flex justify-center mb-6">
        <img
          src={user?.photoURL?.trim() ? user.photoURL : 'https://via.placeholder.com/100'}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = 'https://i.ibb.co.com/9mw72Wtz/image.png'; 
          }}
          alt={user.displayName}
          className="w-32 h-32 rounded-full object-cover"
        />
      </div>

      <h2 className="text-3xl font-semibold text-center mb-4">
        {user.displayName}
      </h2>
      <div className="text-center text-gray-700 mb-6">
        <p><span className="font-bold mr-1">Email: </span> {user.email}</p>
        <p className="break-all  overflow-x-auto"><span className="font-bold mr-1">PhotoURL: </span> {user.photoURL}</p>
      </div>
      <p className="mt-12 text-center">Want to update your profile Name and PhotoURL? Click <Link to="/profile" className="text-blue-500 font-bold">here</Link> </p>
    </section>
  );
};

export default UpdateProfile;
