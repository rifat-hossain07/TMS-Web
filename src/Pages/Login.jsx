import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

import useAuth from "../Hooks/useAuth";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import Loading from "../Components/Shared/Loading";

const Login = () => {
  const { register, handleSubmit, reset } = useForm();
  const { logInUser, googleLogIn } = useAuth();
  const [logInerror, setLogInError] = useState("");
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  // function to Login user using firebase
  const handleLogin = async (data) => {
    const email = data.email;
    const password = data.password;
    setLogInError("");
    setLoading(true);
    logInUser(email, password)
      .then(() => {
        reset();
        toast("Successfully! Logged In!");
        setLoading(false);
        navigate(location?.state ? location.state : "/");
      })
      .catch((err) => {
        setLogInError(err.code);
        setLoading(false);
      });
  };
  // function to login via google using firebase
  const handleGoogleLog = () => {
    setLogInError("");
    setLoading(true);
    googleLogIn()
      .then(() => {
        toast("Successfully! Registered & Logged In!");
        setLoading(false);
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        setLogInError(error.code);
        setLoading(false);
      });
  };
  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div className="hero min-h-screen ">
          <div className="hero-content flex-col ">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold text-blue-300">Login now!</h1>
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-xl shadow-blue-300 border-2 border-blue-300">
              <form onSubmit={handleSubmit(handleLogin)} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    {...register("email", { required: true })}
                    placeholder="email"
                    name="email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    {...register("password", { required: true })}
                    placeholder="password"
                    name="password"
                    className="input input-bordered"
                    required
                  />
                  {/* showing log in error if have */}
                  {logInerror && (
                    <p className="text-red-600 font-semibold">{logInerror}</p>
                  )}
                  <label className="label">
                    New Here? please
                    {/* sending user to register page if not registered yet */}
                    <Link to="/register">
                      <span className=" text-blue-600 link link-hover ">
                        Register Here
                      </span>
                    </Link>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-outline hover:bg-blue-300 hover:text-black normal-case">
                    Login
                  </button>
                </div>
              </form>
              {/* react icon used below */}
              <button
                onClick={handleGoogleLog}
                className=" mb-2 mx-2 btn btn-outline normal-case  border-none  hover:bg-slate-400 hover:text-black"
              >
                <FcGoogle></FcGoogle>
                Log in with Google
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
