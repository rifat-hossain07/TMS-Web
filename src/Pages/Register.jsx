import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { useForm } from "react-hook-form";
import { updateProfile } from "firebase/auth";
import useAuth from "../Hooks/useAuth";
import axios from "axios";
import { toast } from "react-toastify";
const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
// console.log(image_hosting_key);
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const Register = () => {
  const { register, handleSubmit, reset } = useForm();
  const { createUser, googleLogIn } = useAuth();
  const [registerError, setRegisterError] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const onSubmit = async (data) => {
    setRegisterError("");
    // host photo
    const photoFile = { image: data.photo[0] };
    // console.log(photoFile);

    const email = data.email;
    const password = data.password;
    const Name = data.name;

    // password Validation
    if (password.length < 6) {
      setRegisterError(
        "Registration Failed !  Password must be more than 6 character !"
      );
      return;
    }
    const res = await axios.post(image_hosting_api, photoFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    const photo = res.data.data.display_url;
    createUser(email, password)
      .then((result) => {
        updateProfile(result?.user, {
          displayName: Name,
          photoURL: photo,
        }).then(() => {
          toast(`${Name} Successfully Registered and Logged In!`);
          navigate(location?.state ? location.state : "/");
          window.location.reload(true);
        });
      })
      .catch((error) => setRegisterError(error.code));
    reset();
  };

  const handleGoogleReg = () => {
    setRegisterError("");
    googleLogIn()
      .then(() => {
        toast("Successfully! Registered & Logged In!");
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => setRegisterError(error));
  };
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
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              {/* Name */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Your Name..."
                  className="input input-bordered"
                  {...register("name")}
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
                  {...register("photo")}
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
                  {...register("email", { required: true })}
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
                  {...register("password", { required: true })}
                />
              </div>

              {registerError && (
                <p className="text-red-600 font-semibold">{registerError}</p>
              )}
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
            <button
              onClick={handleGoogleReg}
              className=" mb-2 mx-2 btn btn-outline normal-case text-[#29465B] border-none  hover:bg-slate-400 hover:text-black"
            >
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
