import { Link } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import Header from "../Components/Shared/Header";
import Button from "../Components/Shared/Button";
const Dashboard = () => {
  const { user } = useAuth();

  return (
    <div>
      <div>
        <div>
          <Header text={`Welcome ${user?.displayName}`} />
        </div>
        <div className="flex flex-col lg:flex-row-reverse items-center text-center lg:text-left justify-center mx-auto w-1/2 rounded-xl bg-blue-200 p-4 text-black shadow-lg ">
          <div className="mx-5">
            <img
              className="w-40 bg-slate-300 shadow-lg shadow-blue-200 mx-auto rounded-xl"
              src={user?.photoURL}
              alt="https://i.ibb.co/N1nwWNp/a.png"
            />
          </div>
          <div className="md:text-2xl">
            <h2>
              <span className=" font-medium  underline">Name: </span>
              {user?.displayName}
            </h2>
            <h2>
              <span className=" font-medium underline">E-mail: </span>
              {user?.email}
            </h2>
          </div>
        </div>
        {/* Tasks */}
        <div className="text-center">
          <h1 className="text-center text-2xl md:text-3xl font-bold my-5 underline">
            Tasks:
          </h1>
          <Link to="/addTask">
            <Button text="Add New Task" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
