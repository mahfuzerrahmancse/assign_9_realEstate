


const ProfileUser = () => {
    return (
      <div>
        <h2 className="text-2xl font-bold text-center my-4">User Details</h2>
        <div className="card card-compact max-w-[800px] m-auto justify-center bg-base-100 shadow-xl">
          <div className="card-body mx-auto md:w-2/3">
            <p>
              <span className="text-lg font-semibold">Name:</span> {}
            </p>
            <p>
              <span className="text-lg font-semibold">Photo:</span> {}
            </p>
            <p>
              <span className="text-lg font-semibold">Email:</span> {}
            </p>

            <div className="card-actions flex justify-center items-center ">
              <button className="btn btn-primary w-full">Contact</button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default ProfileUser;