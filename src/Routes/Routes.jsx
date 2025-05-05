import { createBrowserRouter } from "react-router";
import HomeLayout from "../layout/HomeLayout";
import Home from "../components/Home/Home";
import EventDetails from "../components/EventDetails/EventDetails";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import Faq from "../components/Faq/Faq";
import ErrorPage from "../components/ErrorPage/ErrorPage";

const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout></HomeLayout>,
      children: [
        {
          path: "",
          element: <Home></Home>,
          loader: ()=> fetch("/data.json"),
        },
        {
          path: "eventDetails/:id",
          element: <EventDetails></EventDetails>,
          loader: ()=> fetch("/data.json"),
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
        }
      ]
    },
    {
      path: "*",
      element: <ErrorPage></ErrorPage>
    }
  ]);

export default router;