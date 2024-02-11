import { Link, NavLink } from "react-router-dom";
// import useAuth from "../../Hooks/useAuth";
import { useContext } from "react";
import { toast } from "react-toastify";
import { context } from "../ContextProvider/Provider";

const Navbar = () => {
  const { user, logOutUser } = useContext(context);
  const handleLogOut = () => {
    logOutUser()
      .then(() => toast("Successfully Logged Out !"))
      .catch((err) => toast(err.code));
  };

  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? " bg-blue-300 text-black" : ""
          }
        >
          Home
        </NavLink>
      </li>
      {user ? (
        <>
          <li>
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                isActive ? " bg-blue-300 text-black" : ""
              }
            >
              Dashboard
            </NavLink>
          </li>
          <li className="hidden lg:flex">
            <p>{user?.displayName}</p>
          </li>
          <li className="lg:hidden">
            <Link onClick={handleLogOut} className="">
              Log Out
            </Link>
          </li>
          <li>
            <div className="dropdown dropdown-end p-1 mr-5 hidden lg:flex">
              <label tabIndex={0} className="avatar">
                <div className="w-8 rounded-full ">
                  <img
                    className=""
                    alt="https://i.ibb.co/N1nwWNp/a.png"
                    src={user?.photoURL}
                  />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="mt-28 z-[10] p-2 shadow menu menu-horizontal dropdown-content  w-24 rounded-lg bg-blue-300 hidden lg:flex text-black"
              >
                <li>
                  <Link onClick={handleLogOut} className="bg-slate-200">
                    Log Out
                  </Link>
                </li>
              </ul>
            </div>
          </li>
        </>
      ) : (
        <>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? " bg-blue-300 text-black" : ""
              }
              to={"/login"}
            >
              Login
            </NavLink>
          </li>
        </>
      )}
    </>
  );
  return (
    <div className="">
      <div className=" navbar border-2 bg-blue-200">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {links}
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost text-xl">
            TMS
          </Link>
        </div>
        {user && (
          <div className="navbar-end lg:hidden">
            <p>{user?.displayName}</p>
            <div className="w-8 avatar rounded-full ">
              <img className="rounded-full" src={user?.photoURL} />
            </div>
          </div>
        )}

        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
