import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
const Register = () => {
  return (
    <div>
      <div className=" hero">
        <div className="">
          <div className="text-center mb-5 ">
            <h1 className="text-3xl md:text-4xl font-bold text-blue-300">
              Register Here!
            </h1>
          </div>
          <div className=" card border-2 border-blue-300  shadow-xl shadow-blue-300 mx-2 md:mx-5">
            <form className="card-body">
              {/* Name */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Your Name..."
                  className="input input-bordered"
                />
              </div>

              {/* photo */}
              <div className="form-control  ">
                <label className="label">
                  <span className="label-text">Photo</span>
                </label>
                <input
                  type="file"
                  required
                  className="file-input file-input-bordered file-input-info w-full "
                />
              </div>

              {/* Email */}
              <div className="form-control  ">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  required
                  className="input input-bordered"
                />
              </div>
              {/* Password */}
              <div className="form-control  ">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  required
                  className="input input-bordered"
                />
              </div>
              <label className="label">
                Already Have an account ?
                <Link to="/login">
                  <span className=" text-blue-600 link link-hover mx-1">
                    Login Here..
                  </span>
                </Link>
              </label>
              {/* <input type="submit" /> */}
              <div className="form-control mt-6 text-center">
                <button className="btn btn-outline hover:bg-blue-300 hover:text-black normal-case ">
                  Register
                </button>
              </div>
            </form>
            <button className=" mb-2 mx-2 btn btn-outline normal-case text-[#29465B] border-none  hover:bg-slate-400 hover:text-black">
              <FcGoogle></FcGoogle>
              Log in with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
