import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div
      className="hero md:h-[500px] bg-cover text-black"
      style={{
        backgroundImage:
          "url(https://i.ibb.co/ck7bpMF/16078483-low-poly-banner-design-1711.jpg)",
      }}
    >
      <div className="hero-content flex-col-reverse md:flex-row-reverse ">
        <div data-aos="fade-up" data-aos-duration="1000">
          <img
            src="/banner.png"
            className=" md:max-w-xs lg:max-w-lg rounded-lg bg-transparent"
          />
        </div>
        <div
          data-aos="fade-down"
          data-aos-duration="1000"
          className="w-full  md:w-1/2 text-center md:text-left"
        >
          <h1 className="text-2xl lg:text-5xl font-bold ">
            Manage Your Tasks!
          </h1>
          <p className="lg:py-6">
            Effortlessly organize tasks, track progress, and boost productivity.
            Our intuitive platform streamlines task management, empowering you
            to achieve more in less time. Simplify your workflow today!
          </p>
          <Link
            className="btn btn-outline text-black hover:bg-blue-300 hover:text-black "
            to="/dashboard"
          >
            Let{"'"}s Explore
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
