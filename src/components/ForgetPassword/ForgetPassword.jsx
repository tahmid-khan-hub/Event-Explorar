import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import Loading from "../Loading/Loading";
import AOS from "aos";
import "aos/dist/aos.css";

const ForgetPassword = () => {
  const location = useLocation();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (location.state?.email) {
      setEmail(location.state.email);
    }
  }, [location.state]);

  useEffect(() => {
    document.title = "EventExplorer - ForgetPassword";
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  const handleResetPassword = (e) => {
    e.preventDefault();

    window.location.href = "https://mail.google.com";
  };

  if (loading) return <Loading></Loading>;

  return (
    <div>
      <div data-aos="zoom-in" className="card bg-base-100 w-full max-w-sm mx-auto mt-24 mb-32 shadow-xl p-6">
        <h2 className="text-2xl font-bold text-center mb-4">Reset Password</h2>
        <p className="text-center mb-5">Here, The Reset button will redirect you to Your Email</p>
        <form onSubmit={handleResetPassword}>
          <label className="label">Email</label>
          <input
            type="email"
            className="input mb-3 w-full"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button
            type="submit"
            className="btn btn-primary px-4 mt-5 py-2 text-white w-full"
          >
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgetPassword;
