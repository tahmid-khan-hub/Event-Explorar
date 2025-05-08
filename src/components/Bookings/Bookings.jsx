import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { useLoaderData } from "react-router";
import AOS from "aos";
import "aos/dist/aos.css";
import { toast } from "react-toastify";

const Bookings = () => {
  const { user, bookings, setBookings } = use(AuthContext);
  const allEvents = useLoaderData();

  const [bookingEvents, setBookingEvents] = useState([]);

  useEffect(() => {
    const filtered = allEvents.filter((event) => bookings[event.id]);
    setBookingEvents(filtered);
  }, [bookings, allEvents]);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "EventExplorer - Bookings"

    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  const handleCancelBooking = (index) => {
    const removedEvent = bookingEvents[index];
    const id = removedEvent.id;

    setBookingEvents((prev) => prev.filter((_, i) => i !== index));

    setBookings((prev) => {
      const updated = { ...prev };
      delete updated[id];
      return updated;
    });
  };

  return (
    <div className="max-w-5xl mx-auto my-12 px-4">
      <h1 data-aos="zoom-in-up" className="text-3xl font-bold mb-6 text-center">Your Bookings</h1>

      {bookingEvents.length > 0 ? (
        bookingEvents.map((event, index) => (
          <div
            data-aos="zoom-in-up"
            key={event.id}
            className="card bg-base-200 shadow-xl shadow-purple-400 p-4 rounded-xl mb-40 border-1 border-purple-500"
          >
            <h2 className="text-2xl font-bold mb-1">{event.name}</h2>
            <p className="text-gray-600 mb-1">📍 {event.location}</p>
            <p className="text-gray-600 mb-1">🗓 {event.date}</p>
            <p className="text-gray-600 mb-1">
              🎟 Entry Fee:{" "}
              <span className="text-green-700 font-bold">
                {event.entry_fee}
              </span>{" "}
              Taka
            </p>

            <p className="text-green-600 text-right font-semibold mt-11 md:mt-2">
              ✅ Seat Reserved
            </p>
            <p className="text-sm text-right text-gray-400">
              Booked by: {user?.email}
            </p>

            <button
              onClick={() => {handleCancelBooking(index), toast.error('Booking Cancelled !'
              )}}
              className="btn w-[150px] mt-11 md:mt-1 bg-red-500 text-white hover:bg-red-600" 
            >
              Cancel Booking
            </button>
          </div>
        ))
      ) : (
        <div data-aos="zoom-in-up" className="text-center text-xl text-gray-500 mt-20">
          🚫 No reserved seat booked yet.
        </div>
      )}
    </div>
  );
};

export default Bookings;
