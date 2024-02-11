import { Link } from "react-router-dom";
import Header from "../Components/Shared/Header";
import Button from "../Components/Shared/Button";
import TasksSection from "../Components/TasksSection";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../Hooks/useAuth";
const Dashboard = () => {
  const { user } = useAuth();
  const { data: taskData, refetch } = useQuery({
    queryKey: ["TasksData"],
    queryFn: async () => {
      const res = await axios.get(`http://localhost:5000/tasks/${user?.email}`);
      return res.data;
    },
  });
  console.log(taskData);
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
        {taskData?.length === 0 ? (
          <div className="text-red-400 text-center mt-16 font-bold text-2xl">
            <p>No Task Available !</p>
          </div>
        ) : (
          <div className="flex flex-col md:flex-row justify-center  gap-5 m-5 ">
            {/* To-Do */}
            <div className="md:w-1/3">
              <h2 className="card-title rounded-t-xl bg-blue-300 text-black p-2">
                To-Do List:
              </h2>
              <div className="min-h-screen bg-red-100 rounded-b-xl p-2">
                {taskData
                  ?.filter((task) => task.status === "To-Do")
                  .map((task, index) => (
                    <TasksSection
                      key={task._id}
                      task={task}
                      index={index}
                      refetch={refetch}
                    />
                  ))}
              </div>
            </div>
            {/* On-Going */}
            <div className="md:w-1/3">
              <h2 className="card-title rounded-t-xl bg-blue-300 text-black p-2">
                On-Going List:
              </h2>
              <div className="min-h-screen bg-yellow-100 rounded-b-xl p-2 ">
                {taskData
                  ?.filter((task) => task.status === "On-Going")
                  .map((task, index) => (
                    <TasksSection
                      key={task._id}
                      task={task}
                      index={index}
                      refetch={refetch}
                    />
                  ))}
              </div>
            </div>
            {/* Completed */}
            <div className="md:w-1/3">
              <h2 className="card-title rounded-t-xl bg-blue-300 text-black p-2">
                Completed List:
              </h2>
              <div className="min-h-screen bg-green-100 rounded-b-xl p-2">
                {taskData
                  ?.filter((task) => task.status === "Completed")
                  .map((task, index) => (
                    <TasksSection key={task._id} task={task} index={index} />
                  ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
