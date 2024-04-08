import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
      <div className="text-center mt-4">
        <h3 className="text-2xl">Oops,Sorry!!</h3>
        <p className="text-xl">404, Page not found.</p>
        <Link className="btn btn-primary mt-2" to="/">
          Go Back to Home
        </Link>
      </div>
    );
};

export default ErrorPage;