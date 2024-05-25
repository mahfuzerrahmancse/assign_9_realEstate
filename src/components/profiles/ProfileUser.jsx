import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Link } from "react-router-dom";


const ProfileUser = () => {

  const {user} = useContext(AuthContext);
  console.log('user detail:',user);


    return (
      <div>
        <h2 className="text-2xl font-bold text-center my-4">User Details</h2>
        <div className="card card-compact max-w-[800px] m-auto justify-center bg-base-100 shadow-xl">
          <div className="card-body mx-auto md:w-2/3">
            <p className="text-lg font-semibold">Name: {user.displayName}</p>
            <div>
              <img src={user.photoURL}></img>
            </div>
            <p className="text-lg font-semibold">Email: {user.email}</p>

            <div className="card-actions flex justify-center items-center ">
              <button className="btn btn-primary w-full">
                {" "}
                <Link to="/updateProfile">Edit</Link>{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default ProfileUser;