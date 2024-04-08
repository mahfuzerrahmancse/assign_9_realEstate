import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../components/homes/Home";
import ErrorPage from "../components/errorPages/ErrorPage";
import About from "../components/about/About";

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
        path: "/about",
        element: <About />,
      },
    ],
  },
]);

export default router;
