import React, { use, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../../Provider/AuthProvider";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Loading from "../Loading/Loading";
import AOS from "aos";
import "aos/dist/aos.css";
import { toast } from "react-toastify";

const Login = () => {

  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState("")

  const {signIn, googleSignIn} = use(AuthContext)

  const location = useLocation();
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
    document.title = "EventExplorer - Login"
  },[])

  if(loading) return <Loading></Loading>;

  const handleLogin = (e) => {
    e.preventDefault();

    const password = e.target.password.value;
    const email = e.target.email.value;

    console.log(password, email);


    signIn(email, password)
      .then(res =>{
        console.log(res);
        navigate(`${location.state? location.state : "/"}`)
        toast.success("Welcome Back!")
      })
      .catch(err =>{
        console.log(err);
        toast.error("Failed to login")
      })
  };

  const handleGoogleLogin = () =>{
    googleSignIn()
      .then(res =>{
        console.log(res);
        navigate(`${location.state? location.state : "/"}`)
        toast.success("Welcome Back!")
      })
      .catch(err =>{
        console.log(err);
        toast.error("Failed to login")
      })
  }

  const handleForgetPassword = () => {
    navigate("/forgetPassword", { state: { email } });
  };  

  return (
    <div data-aos="zoom-in" className="card bg-base-100 w-full max-w-sm mx-auto mb-56 mt-24 shrink-0 shadow-2xl shadow-purple-400 border-1 border-purple-400">
      <div className="card-body">
        <h1 className="text-2xl font-bold mb-3 text-center ">Login now!</h1>
        <form onSubmit={handleLogin} className="fieldset">
          <label className="label">Email</label>
          <input
            type="email"
            className="input mb-3 border-1 border-purple-400"
            name="email"
            placeholder="Enter your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label className="label">Password</label>
          <div className="flex relative">
            <input
              type={`${show ? "text" : "password"}`}
              className="input mb-3 border-1 border-purple-400"
              name="password"
              placeholder="Enter your Password"
              required
            />
            <span onClick={()=> setShow(!show)}  className="absolute right-7 top-2 cursor-pointer">
            {show ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
            </span>
          </div>
          
            <a onClick={handleForgetPassword} className="link link-hover ">Forgot password?</a>
          

          <button className="btn btn-primary px-6 py-2 rounded-md text-white bg-gradient-to-r from-purple-400 to-purple-500 hover:from-purple-500 hover:to-purple-600 mt-4">Login</button>


          {/* Google */}
          <button onClick={handleGoogleLogin} className="btn my-4 text-white bg-gradient-to-r from-purple-400 to-purple-500 hover:from-purple-500 hover:to-purple-600 ">
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
            Login with Google
          </button>
        </form>
        <p className="mt-3 font-semibold ">
          New to this site? Please{" "}
          <Link to={`/register`} className="text-purple-600 font-bold">Register</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
