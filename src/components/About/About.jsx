import React from "react";
import { Link } from "react-router";

const About = () => {
  return (
    <section className="p-10 bg-gray-100 rounded-xl shadow-md max-w-3xl mx-auto my-10">
      <h2 className="text-3xl font-bold mb-4 text-center">About Us</h2>
      <p className="text-lg text-gray-700">
        Welcome to <strong>EventExplorer</strong> — your gateway to discovering local events!
        Whether you're into tech conferences, workshops, art exhibitions, or sports, our platform helps you explore what’s happening near you.
        We’re passionate about connecting people to meaningful experiences and supporting local communities.
      </p>
      <div className="text-center mt-6">
        <Link to="/"><button className="btn btn-primary px-6 py-2 rounded-md text-white bg-blue-500 hover:bg-blue-600">
          Explore Events
        </button></Link>
      </div>
    </section>
  );
};

export default About;
