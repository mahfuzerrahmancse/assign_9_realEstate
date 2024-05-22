import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../components/homes/Home";
import ErrorPage from "../components/errorPages/ErrorPage";
import About from "../components/about/About";
import Login from "../components/logins/Login";
import Register from "../components/registers/Register";
import ProfileUpdate from "../components/profiles/ProfileUpdate";
import ProfileUser from "../components/profiles/ProfileUser";
import PrivateRoute from "./PrivateRoute";
import PropertyDetail from "../components/showHospitality/PropertyDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/propertyDetail/:id",
        element: (
          <PrivateRoute>
            <PropertyDetail />
          </PrivateRoute>
        ),
      },
      {
        path: "/about",
        element: (
          <PrivateRoute>
            <About />
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/updateProfile",
        element: <ProfileUpdate />,
      },
      {
        path: "/userProfile",
        element: <ProfileUser />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

export default router;
