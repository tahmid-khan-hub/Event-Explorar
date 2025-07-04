import { createBrowserRouter } from "react-router";
import HomeLayout from "../layout/HomeLayout";
import Home from "../components/Home/Home";
import EventDetails from "../components/EventDetails/EventDetails";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import Faq from "../components/Faq/Faq";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Category from "../components/Category/Category";
import Loading from "../components/Loading/Loading";
import Profile from "../components/Profile/Profile";
import PrivateRoute from "../Provider/PrivateRoute"
import Bookings from "../components/Bookings/Bookings";
import About from "../components/About/About";
import UpdateProfile from "../components/UpdateProfile/UpdateProfile";
import ForgetPassword from "../components/ForgetPassword/ForgetPassword";

const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout></HomeLayout>,
      children: [
        {
          path: "",
          element: <Home></Home>,
          loader: ()=> fetch("/data.json"),
          hydrateFallbackElement: <Loading></Loading>,
        },
        {
          path: "eventDetails/:id",
          element: <PrivateRoute>
            <EventDetails></EventDetails>
          </PrivateRoute>,
          loader: ()=> fetch("/data.json"),
          hydrateFallbackElement: <Loading></Loading>,
        },
        {
          path: "login",
          element: <Login></Login>,
        },
        {
          path: "register",
          element: <Register></Register>,
        },
        {
          path: "faq",
          element: <Faq></Faq>,
        },
        {
          path: "Category/:category",
          element: <Category></Category>,
          loader: ()=> fetch("/data.json"),
          hydrateFallbackElement: <Loading></Loading>,
        },
        {
          path: "bookings",
          element: <PrivateRoute>
            <Bookings></Bookings>
          </PrivateRoute>,
          loader: ()=> fetch("/data.json"),
          hydrateFallbackElement: <Loading></Loading>,
        },
        {
          path: "profile",
          element: <PrivateRoute>
            <Profile></Profile>
          </PrivateRoute>
        },
        {
          path: "about",
          element: <About></About>,
        },
        {
          path: "updateProfile",
          element: <PrivateRoute>
            <UpdateProfile></UpdateProfile>
          </PrivateRoute>,
        },
        {
          path: "forgetPassword",
          element: <ForgetPassword></ForgetPassword>,
        }
      ]
    },
    {
      path: "*",
      element: <ErrorPage></ErrorPage>
    }
  ]);

export default router;