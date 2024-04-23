import { Outlet } from "react-router-dom";
import Footer from "../components/footers/Footer";
import Navbar from "../components/navbars/Navbar";

const Root = () => {
  return (
    <div>
      <Navbar />
      <div className="px-2 pb-2  mb-4 mx-2 bg-gray-200">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Root;
