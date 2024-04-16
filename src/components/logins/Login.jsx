import { Link } from "react-router-dom";


const Login = () => {

    const handleLogin = (e) => {
      e.preventDefault();
      const email = e.target.email.value;
      const password = e.target.password.value;
      console.log("email,password:", email, password);

      // reset error
    //   setRegisterError("");
    //   setSuccess("");

    //   // add Validation
    //   signInWithEmailAndPassword(auth, email, password)
    //     .then((result) => {
    //       console.log(result.user);
    //       if (result.user.emailVerified) {
    //         setSuccess("User logged in successfully");
    //       } else alert("please verify your email address");
    //     })
    //     .catch((error) => {
    //       console.error(error);
    //       setRegisterError(error.message);
    //     });
    };

    return (
      <div>
        <h2>Please Login</h2>
        <div className="mx-auto md:w-1/2">
          {/* <h2 className="text-2xl mb-4">Please Login</h2> */}
          <form onSubmit={handleLogin}>
            <input
              className="mb-4 p-2 w-full"
              type="email"
              name="email"
              //   ref={emailRef}
              placeholder="enter email"
              required
            />
            <br />
            <div className="relative">
              <input
                className=" mb-4 p-2 w-full"
                type="password"
                name="password"
                placeholder="enter password"
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
          {/* {registerError && <p className="text-red-700"> {registerError} </p>} */}
          {/* {success && <p className="text-green-700"> {success} </p>} */}
          <p>
            New to register?Please <Link to="/register">Register</Link>{" "}
          </p>
        </div>
      </div>
    );
};

export default Login;