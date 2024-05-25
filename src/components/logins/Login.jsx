import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Login = () => {
  const { signInUser, signInGoogle, signInGithub } = useContext(AuthContext);
  // console.log("sign In User:", signInUser);
  // console.log("sign In Google:", signInGoogle);

  const location = useLocation();
  const navigate = useNavigate();

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

      // sign in user email & password based in firebase
      signInUser(email, password)
        .then((result) => {
          console.log("sign In result User:", result.user);
          setSuccess("User logged in successfully");
          navigate(location?.state ? location.state : '/');
        })
        .catch((error) => {
          console.error("sign In error User:", error);
          setLoginError("Please provide valid Email & Password");
        });      
    };
    const handleGoogle = () => {
      // console.log('google sign in:');

      signInGoogle()
      .then( result => {
        console.log('google logged in:',result.user);
      } )
      .catch( error => {
        console.error(error);
      } )
    }
    const handleGithub = () => {
      // console.log('github connected');

      signInGithub()
      .then( result => {
        console.log('sign in github:',result.user);
      } )
      .catch( error => {
        console.error(error);
      } )
    }

    return (
      <div>
        <h2 className="text-2xl py-4 text-center">Please Login</h2>
        <div className="mx-auto md:w-1/2">
          <form onSubmit={handleLogin}>
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
                type="password"
                name="password"
                placeholder="Enter Password"
                required
              />
            </div>
            <br />
            <label className="label">
              <a className="label-text-alt link link-hover">Forget Password</a>
            </label>

            <input
              className="btn btn-secondary mb-4 w-full"
              type="submit"
              value="Login"
            />
          </form>
          <div className="my-2">
            <p className="text-center font-semibold pb-2">... OR ...</p>
            <div className="grid grid-cols-1 gap-4">
              <button onClick={handleGoogle} className="btn btn-secondary ">
                Google
              </button>
              <button onClick={handleGithub} className="btn btn-secondary">
                Github
              </button>
            </div>
          </div>
          {loginError && <p className="text-red-700"> {loginError} </p>}
          {success && <p className="text-green-700"> {success} </p>}
          <p>
            New to register? Please{" "}
            <Link className="text-blue-600" to="/register">
              Register here
            </Link>{" "}
          </p>
        </div>
      </div>
    );
};

export default Login;