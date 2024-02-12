import { Link } from "react-router-dom";
// Error page if user visit any page which is not created yet
const Error = () => {
  return (
    <div className="hero min-h-screen bg-blue-300">
      <div className="hero-content flex-col ">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold text-white">Sorry!</h1>
        </div>
        <div className="card flex-shrink-0 w-2/5 shadow-2xl bg-base-100">
          <div className="card-body">
            <div className="text-center space-y-5 ">
              <img src="https://i.ibb.co/wzDF6VX/404.jpg" alt="" />
              <p className="text-xl font-semibold">
                The Page you are looking is under construction!
              </p>
            </div>
          </div>
          <Link
            to="/"
            className=" mb-2 mx-2 btn btn-outline normal-case  border-none  hover:bg-blue-200 hover:text-black"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Error;
