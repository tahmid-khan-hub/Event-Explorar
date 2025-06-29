import React, { use, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../../Provider/AuthProvider";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Loading from "../Loading/Loading";
import { toast } from "react-toastify";
import AOS from "aos";
import "aos/dist/aos.css";

const Register = () => {
  const { createUser, setUser, updateUser, googleSignIn } = use(AuthContext);
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
      AOS.init({
        duration: 1000,
        once: false,
      });
    }, []);

  useEffect(() => {
      const timeout = setTimeout(() => {
        setLoading(false);
      }, 500);
  
      return () => clearTimeout(timeout);
    }, []);

  useEffect(()=>{
    document.title = "EventExplorer - Register"
  },[])

  if(loading) return <Loading></Loading>;

  const handleRegister = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const photo = e.target.photo.value;
    const password = e.target.password.value;

    if (password.length < 6) {
      toast.error("Password must be 6 character or longer");
      return;
    } else if (!/[a-z]/.test(password) || !/[A-Z]/.test(password)) {
      toast.error("Password must include both uppercase and lowercase letters");
      return;
    }

    console.log(name, email, photo, password);

    createUser(email, password)
      .then((res) => {
        const user = res.user;

        updateUser({ displayName: name, photoURL: photo })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photo });
            navigate("/");
            toast.success("Registration successfull")
          })
          .catch((err) => {
            console.log(err);
            setUser(user);
            toast.error("Enter valid Name and PhotoURL")
          });
      })
      .catch((err) => {
        console.log(err);
        toast.error("Already have an account")
      });
  };

  const handleGoogleRegister = () => {
    googleSignIn()
      .then((res) => {
        console.log(res);
        navigate(`${location.state ? location.state : "/"}`);
        toast.success("Registration successfull")
      })
      .catch((err) => {
        console.log(err);
        toast.error("Already have an account")
      });
  };

  return (
    <div data-aos="zoom-in" className="card bg-base-100 w-full max-w-sm mx-auto mb-56 mt-24 shrink-0 shadow-2xl text-center ">
      <div className="card-body">
        <h1 className="text-2xl font-bold mb-3">Register</h1>
        <form onSubmit={handleRegister} className="fieldset">
          {/* name */}
          <label className="label">Name</label>
          <input
            type="text"
            className="input mb-3 border-1 border-purple-400"
            name="name"
            placeholder="Enter your name"
            required
          />
          {/* photo */}
          <label className="label">PhotoURL</label>
          <input
            type="text"
            className="input mb-3 border-1 border-purple-400"
            name="photo"
            placeholder="Enter your PhotoURL"
            required
          />
          {/* email */}
          <label className="label">Email</label>
          <input
            type="email"
            className="input mb-3 border-1 border-purple-400"
            name="email"
            placeholder="Enter your Email"
            required
          />
          {/* password */}
          <label className="label">Password</label>
          <div className="flex relative">
            <input
              type={`${show ? "text" : "password"}`}
              className="input mb-3 border-1 border-purple-400"
              name="password"
              placeholder="Enter your Password"
              required
            />
            <span
              onClick={() => setShow(!show)}
              className="absolute right-7 top-2 cursor-pointer"
            >
              {show ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
            </span>
          </div>

          <button className="btn btn-primary px-6 py-2 rounded-md text-white bg-gradient-to-r from-purple-400 to-purple-500 hover:from-purple-500 hover:to-purple-600 mt-4">
            Register
          </button>
        </form>


        <p className="mt-3 font-semibold ">
          Already have an account? Please{" "}
          <Link to={`/login`} className="text-purple-600 font-bold">
            Login
          </Link>
        </p>

        {/* Google */}
        <button
          onClick={handleGoogleRegister}
          className="btn my-4 text-white bg-gradient-to-r from-purple-400 to-purple-500 hover:from-purple-500 hover:to-purple-600"
        >
          <svg
            aria-label="Google logo"
            width="16"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <g>
              <path d="m0 0H512V512H0" fill="#fff"></path>
              <path
                fill="#34a853"
                d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
              ></path>
              <path
                fill="#4285f4"
                d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
              ></path>
              <path
                fill="#fbbc02"
                d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
              ></path>
              <path
                fill="#ea4335"
                d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
              ></path>
            </g>
          </svg>
          Register with Google
        </button>
      </div>
    </div>
  );
};

export default Register;
