import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { AuthContext } from "../../providers/AuthProvider";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  // console.log("name:", createUser);
  const location = useLocation();
  const navigate = useNavigate();

    const [registerError, setRegisterError] = useState("");
    const [success, setSuccess] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const handleRegister = (e) => {
      e.preventDefault();
      const name = e.target.name.value;
      const photo = e.target.photoUrl.value;
      const email = e.target.email.value;
      const password = e.target.password.value;
      const accepted = e.target.terms.checked;
      console.log(
        "name,photo,email,password submitted:",
        name,
        photo,
        email,
        password,
        accepted
      );
      // reset error
      setRegisterError("");
      setSuccess("");

      if (password.length < 6) {
        setRegisterError(
          "Password should be at least 6 characters or longer!!"
        );
        return;
      } else if (!/[A-Z]/.test(password)) {
        setRegisterError(
          "Your password should have at least one upper case character."
        );
        return;
      } else if (!accepted) {
        setRegisterError("Please accept our terms and conditions!!");
        return;
      }

      // create user in firebase
      createUser(email, password)
        .then((result) => {
          console.log('result user:',result.user);
          setSuccess("User created successfully");
          navigate(location.state ? location.state : '/');
          
        })

        .catch((error) => {
          console.error("error user:", error);
          setRegisterError(error.message);
          console.log("error.message:", error.message);
        });
    };

    return (
      <div>
        <h2 className="text-2xl py-4 text-center">Please Register</h2>
        <div className="mx-auto md:w-1/2">
          <form onSubmit={handleRegister}>
            <input
              className="mb-4 p-2 w-full"
              type="text"
              name="name"
              placeholder="Enter Name"
            />
            <br />
            <input
              className="mb-4 p-2 w-full"
              type="text"
              name="photoUrl"
              placeholder="Enter Photo Url"
            />
            <br />
            <input
              className="mb-4 p-2 w-full"
              type="email"
              name="email"
              placeholder="Enter Email"
              required
            />
            <br />
            <div className="relative">
              <input
                className=" mb-4 p-2 w-full"
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter Password"
                required
              />
              <span
                className="absolute top-3 right-4"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
              </span>
            </div>
            <br />
            <div className="">
              <input type="checkbox" name="terms" id="" />
              <label className="ml-2" htmlFor="terms">
                Accept our <a href="">terms and conditions</a>{" "}
              </label>
            </div>
            <br />
            <input
              className="btn btn-secondary mb-4 w-full"
              type="submit"
              value="Register"
            />
          </form>
          {registerError && <p className="text-red-700"> {registerError} </p>}
          {success && <p className="text-green-700"> {success} </p>}
          <p>
            Already have an account? Please{" "}
            <Link className="text-blue-600" to="/login">
              Login here
            </Link>{" "}
          </p>
        </div>
      </div>
    );
};

export default Register;