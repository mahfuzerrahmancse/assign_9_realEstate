

const ProfileUpdate = () => {
    return (
      <div>
        <h2 className="text-2xl font-bold text-center my-4">
          User Update
        </h2>
        <div className="card card-compact max-w-[800px] m-auto justify-center bg-base-100 shadow-xl">
          <div className="card-body">
            <div className="mx-auto md:w-2/3">
              <form >
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
                    type="password"
                    name="password"
                    placeholder="Enter Password"
                    required
                  />
                  
                </div>
                <br />
                
                <input
                  className="btn btn-secondary mb-4 w-full"
                  type="submit"
                  value="Update"
                />
              </form>
              
            </div>
            
          </div>
        </div>
      </div>
    );
};

export default ProfileUpdate;