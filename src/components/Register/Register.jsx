import React, { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../../Provider/AuthProvider";

const Register = () => {

  const {createUser} = use(AuthContext)


  const handleRegister = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const photo = e.target.photo.value;
    const password = e.target.password.value;

    console.log(name, email, photo, password);

    createUser(email, password)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err)
      })
  };

  return (
    <div className="card bg-base-100 w-full max-w-sm mx-auto mb-56 mt-24 shrink-0 shadow-2xl text-center ">
      <div className="card-body">
        <h1 className="text-2xl font-bold mb-3">Register</h1>
        <form onSubmit={handleRegister} className="fieldset">
          {/* name */}
          <label className="label">Name</label>
          <input
            type="text"
            className="input mb-3"
            name="name"
            placeholder="Enter your name"
            required
          />
          {/* photo */}
          <label className="label">PhotoURL</label>
          <input
            type="text"
            className="input mb-3"
            name="photo"
            placeholder="Enter your PhotoURL"
            required
          />
          {/* email */}
          <label className="label">Email</label>
          <input
            type="email"
            className="input mb-3"
            name="email"
            placeholder="Enter your Email"
            required
          />
          {/* password */}
          <label className="label">Password</label>
          <input
            type="password"
            className="input mb-3"
            name="password"
            placeholder="Enter your Password"
            required
          />

          <button className="btn btn-neutral mt-4">Register</button>
        </form>
        <p className="mt-3 font-semibold ">
          Already have an account? Please{" "}
          <Link to={`/login`} className="text-blue-500 font-bold">Login</Link>
        </p>

        {/* Google */}
        <button className="btn my-4 bg-white text-black border-[#e5e5e5]">
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
      </div>
    </div>
  );
};

export default Register;
