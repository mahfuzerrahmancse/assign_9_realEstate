import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { updateProfile } from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const ProfileUpdate = () => {
  const { user } = useContext(AuthContext);

  const handleUpdate = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photoUrl.value; 

    updateProfile(user, {
      displayName: name,
      photoURL: photo,
    })
      .then(() => {
        toast("Profile updated successfully!");
      })
      .catch((error) => {
        alert("Error updating profile");
        console.error(error);
      });
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-center my-4">User Update</h2>
      <div className="card card-compact max-w-[800px] m-auto justify-center bg-base-100 shadow-xl">
        <div className="card-body">
          <div className="mx-auto md:w-2/3">
            <form onSubmit={handleUpdate}>
              <input
                className="mb-4 p-2 w-full"
                type="text"
                name="name"
                placeholder={user.displayName}
              />
              <br />
              <input
                className="mb-4 p-2 w-full"
                type="text"
                name="photoUrl"
                placeholder={user.photoURL}
              />
              <br />
              <input
                className="mb-4 p-2 w-full"
                type="email"
                name="email"
                value={user.email}
                placeholder="Email"
                disabled
              />
              <br />
              <button className="btn btn-primary w-full px-6 py-3">
                Update
              </button>
            </form>
            <ToastContainer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileUpdate;
