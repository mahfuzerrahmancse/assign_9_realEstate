
import { Link } from "react-router-dom";

import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";


const Login = () => {
  const { signInUser } = useContext(AuthContext);
  // console.log("sign In User:", signInUser);

    const [loginError, setLoginError] = useState("");
    const [success, setSuccess] = useState("");

    const handleLogin = (e) => {
      e.preventDefault();
      const email = e.target.email.value;
      const password = e.target.password.value;
      console.log("email,password:", email, password);

      // reset error
      setLoginError("");
      setSuccess("");

      // sign in user in firebase
      signInUser(email, password)
        .then((result) => {
          console.log("sign In result User:", result.user);
          // if (result.user.emailVerified) {
          setSuccess("User logged in successfully");
          // } else alert("please verify your email address");
        })
        .catch((error) => {
          console.error("sign In error User:", error);
          setLoginError("Please provide valid Email & Password");
        });
    };

    return (
      <div>
        <h2 className="text-2xl py-4 text-center">Please Login</h2>
        <div className="mx-auto md:w-1/2">
          <form onSubmit={handleLogin}>
            <input
              className="mb-4 p-2 w-full"
              type="email"
              name="email"
              //   ref={emailRef}
              placeholder="Enter Email"
              required
            />
            <br />
            <div className="relative">
              <input
                className=" mb-4 p-2 w-full"
                type="password"
                name="password"
                placeholder="Enter Password"
                required
              />
            </div>
            <br />
            <label className="label">
              <a
                // onClick={handleForgetPassword}
                className="label-text-alt link link-hover"
              >
                Forget Password
              </a>
            </label>

            <input
              className="btn btn-secondary mb-4 w-full"
              type="submit"
              value="Login"
            />
          </form>
          {loginError && <p className="text-red-700"> {loginError} </p>}
          {success && <p className="text-green-700"> {success} </p>}
          <p>
            New to register? Please <Link className="text-blue-600" to="/register">Register here</Link>{" "}
          </p>
        </div>
      </div>
    );
};

export default Login;