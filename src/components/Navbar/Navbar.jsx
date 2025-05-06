import React, { use } from "react";
import { Link, NavLink } from "react-router";
import './Navbar.css'
import { AuthContext } from "../../Provider/AuthProvider";
import userimg from "../../assets/user.jpg"

const Navbar = () => {

  const {user, logOut} = use(AuthContext);

  const handleLogOut = () =>{
    logOut()
      .then(res =>{
        console.log(res);
      })
      .catch(err =>{
        console.log(err);
      })
  }

    const links = <>
        <NavLink className="mr-3" to="/">Home</NavLink>
        <NavLink className="mr-3" to="/bookings">Booking</NavLink>
        <NavLink className="mr-3" to="/faq">FaQ</NavLink>
        <NavLink to="/about">About Us</NavLink>
    </>

  return (
    <div className="navbar bg-base-100 ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 -mr-5 -ml-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow "
          >
            {links}

          </ul>
        </div>
        <a className="btn btn-ghost text-xl -ml-3">Event<span className="font-bold text-3xl text-blue-600 -mx-1 mb-1">E</span>xplorer</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {links}
        </ul>
      </div>
      <div className="navbar-end">
        <Link to="/updateProfile"><img className="w-9 h-9 mr-3 object-cover rounded-full " src={`${user? user.photoURL : userimg}`} alt="" title={user ? user.displayName : ""}/></Link>
        
        {user ? <button onClick={handleLogOut} className="btn">Log Out</button> : <Link to="/login"><button className="btn">Login</button></Link>}
      </div>
    </div>
  );
};

export default Navbar;
