import React, { use, useState } from "react";
import { Link, useLoaderData, useNavigate, useParams } from "react-router";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { toast } from "react-toastify";

const EventDetails = () => {
  const { bookEvent, bookings } = use(AuthContext);

  const { id } = useParams();
  const data = useLoaderData();

  const event = data.find((e) => e.id === id);

  const [booked, setBooked] = useState(bookings[id] || false);

  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);

    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  const handleReserveSeat = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;

    console.log(name, email);

    if (name && email) {
      setBooked(true);
      bookEvent(id);
      navigate("/bookings");
    }

    if(name && email){
        toast.success("Seat Booked Successfully !");
        return;
    }
  };


  return (
    <>
      <div
        data-aos="zoom-in-down"
        className="max-w-5xl mx-auto my-10 p-6 bg-base-200 rounded-3xl shadow-xl"
      >
        <div className="text-center mb-20">
          <h1 className="text-3xl font-bold mb-4">{event.name}</h1>
          <p className="text-gray-600">{event.description}</p>
        </div>

        <div className="md:flex gap-6">
          <div className="flex-shrink-0">
            <img
              className="w-full md:w-[400px] h-[250px] object-cover rounded-xl"
              src={event.thumbnail}
              alt={event.name}
            />
          </div>

          <div className="flex-1 mt-6 md:mt-12 md:ml-6">
            <p className="mb-3 text-xl">
              <strong className="mr-2">Date:</strong> {event.date}
            </p>
            <p className="mb-3 text-xl">
              <strong className="mr-2">Category:</strong> {event.category}
            </p>
            <p className="mb-3 text-xl">
              <strong className="mr-2">Location:</strong> {event.location}
            </p>
            <p className="mb-3 text-xl">
              <strong className="mr-2">Entry Fee:</strong>
              <span className="text-green-700 font-semibold">
                {event.entry_fee} Taka
              </span>
            </p>
          </div>
        </div>
      </div>

      <div className="w-11/12  lg:w-[1000px] mx-auto rounded-2xl my-12 mt-24 mb-44">
        <div className="  mb-7">
          <h1 className="text-3xl text-center font-semibold">Reserve Seat</h1>
          <p className="text-center mt-2 mb-12">
            You can reserve your seat for this upcoming event. For that you need
            to submit this form
          </p>

          <form
            onSubmit={handleReserveSeat}
            data-aos="zoom-in-down"
            className="fieldset rounded-xl py-11 px-3 md:px-0 w-11/12 md:w-[600px] mx-auto shadow-xl bg-base-200"
          >
            <input
              type="text"
              className="input mb-3 mx-auto"
              name="name"
              placeholder="Enter your Name"
              required
            />
            <input
              type="email"
              className="input mb-3 mx-auto"
              name="email"
              placeholder="Enter your Email"
              required
            />

            {booked ? (
              <button disabled className="btn mt-5 w-[200px] mx-auto">
                {" "}
                Seat already booked
              </button>
            ) : (
              <button className="btn mt-5 w-[200px] btn-primary px-6 py-2 rounded-md text-white bg-blue-500 hover:bg-blue-600 mx-auto">
                Reserve Your Seat Now
              </button>
            )}
          </form>
        </div>
      </div>
    </>
  );
};

export default EventDetails;
