import { Link } from "react-router-dom";
// import {
//   createUserWithEmailAndPassword,
//   sendEmailVerification,
//   updateProfile,
// } from "firebase/auth";
// import auth from "../firebases/firebase.config";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";



const Register = () => {

    const [registerError, setRegisterError] = useState("");
    const [success, setSuccess] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const handleRegister = (e) => {
      e.preventDefault();
      const name = e.target.name.value;
      const email = e.target.email.value;
      const password = e.target.password.value;
      const accepted = e.target.terms.checked;
      console.log("email,password submitted:", name, email, password, accepted);
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

    //   createUserWithEmailAndPassword(auth, email, password)
    //     .then((result) => {
    //       console.log(result.user);
    //       setSuccess("User created successfully");

    //       // update profile
    //       updateProfile(result.user, {
    //         displayName: name,
    //         photoURL: "https://example.com/jane-q-user/profile.jpg",
    //       })
    //         .then(() => console.log("profile updated"))
    //         .catch();

    //       // send verification email
    //       sendEmailVerification(result.user)
    //         .then(() => {
    //           alert("please check your email & verify your account");
    //         })
    //         .catch();
    //     })
    //     .catch((error) => {
    //       // console.error(error);
    //       setRegisterError(error.message);
    //       // console.log("error.message:", error.message);
    //     });
    };

    return (
      <div>
        <h2>Please Register</h2>
        <div className="mx-auto md:w-1/2">
          {/* <h2 className="text-2xl mb-4">Please Register</h2> */}
          <form onSubmit={handleRegister}>
            <input
              className="mb-4 p-2 w-full"
              type="text"
              name="name"
              placeholder="enter name"
              required
            />
            <br />
            <input
              className="mb-4 p-2 w-full"
              type="email"
              name="email"
              placeholder="enter email"
              required
            />
            <br />
            <div className="relative">
              <input
                className=" mb-4 p-2 w-full"
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="enter password"
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
            Already have an account? Please <Link to="/login">Login</Link>{" "}
          </p>
        </div>
      </div>
    );
};

export default Register;