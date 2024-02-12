import { Link } from "react-router-dom";
import Header from "../Components/Shared/Header";
import Button from "../Components/Shared/Button";
import TasksSection from "../Components/TasksSection";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../Hooks/useAuth";
import { toast } from "react-toastify";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
const Dashboard = () => {
  const { user } = useAuth();
  // fetch data using tanstack query and axios to get the task data
  const { data: taskData, refetch } = useQuery({
    queryKey: ["TasksData"],
    queryFn: async () => {
      const res = await axios.get(`http://localhost:5000/tasks/${user?.email}`);
      return res.data;
    },
  });
  // function to sort tasks based on priority
  const sortTasksByPriority = (tasks) => {
    const priorityValues = {
      High: 3,
      Medium: 2,
      Low: 1,
    };
    if (tasks) {
      return tasks.sort((a, b) => {
        const priorityA = priorityValues[a.priority];
        const priorityB = priorityValues[b.priority];
        return priorityB - priorityA;
      });
    } else return [];
  };
  // function to handle Drag end
  const onDragEnd = async (result) => {
    const { source, destination, draggableId } = result;

    // Dropping outside any list
    if (!destination) return;

    if (source.droppableId !== destination.droppableId) {
      // Send API request to update the task status in the database
      const status = { status: destination.droppableId };
      const res = await axios.put(
        `http://localhost:5000/tasks/${draggableId}`,
        status
      );
      if (res.data.modifiedCount > 0) {
        toast(`Successfully! updated your task to 
        ${status.status}`);
        refetch();
      }
    }
  };
  return (
    <div>
      <div>
        {/* Header part using functional component to show header*/}
        <div data-aos="fade-down" data-aos-duration="1000">
          <Header text={`Welcome ${user?.displayName}`} />
        </div>
        {/* Users Card */}
        <div
          data-aos="flip-left"
          data-aos-duration="1000"
          className="flex flex-col lg:flex-row-reverse items-center text-center lg:text-left justify-center mx-auto w-1/2 rounded-xl bg-blue-200 p-4 text-black shadow-lg "
        >
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
        {/* Total Task Count*/}
        <div
          data-aos="fade-down"
          data-aos-duration="1000"
          className="flex flex-col md:flex-row justify-center items-center gap-5 md:my-5"
        >
          <h1 className="text-xl md:text-2xl font-bold mt-5 my-0 md:my-5">
            <span className="text-center  underline">Total Tasks:</span>{" "}
            {taskData?.length}
          </h1>
          {/* Add Task button with functional component button to show button*/}
          <Link to="/addTask">
            <Button text="Add New Task" />
          </Link>
        </div>
        {/* Tasks */}
        {taskData?.length === 0 ? (
          <div className="text-red-400 text-center mt-16 font-bold text-2xl">
            <p>No Task Available !</p>
          </div>
        ) : (
          <div className="flex flex-col md:flex-row justify-center  gap-5 m-5 ">
            {/* Drag and Drop Context to implement react beautiful dnd */}
            <DragDropContext onDragEnd={onDragEnd}>
              {/* To-Do */}
              <div className="md:w-1/3">
                <h2 className="card-title rounded-t-xl bg-blue-300 text-black p-2">
                  To-Do List:
                </h2>
                {/* droppable part */}
                <Droppable droppableId="To-Do">
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.droppableProps}
                      className="min-h-screen bg-red-100 rounded-b-xl p-2"
                    >
                      {sortTasksByPriority(
                        taskData?.filter((task) => task.status === "To-Do")
                      ).map((task, index) => (
                        <TasksSection
                          key={task._id}
                          task={task}
                          index={index}
                          refetch={refetch}
                        />
                      ))}
                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>
              </div>
              {/* On-Going */}
              <div className="md:w-1/3">
                <h2 className="card-title rounded-t-xl bg-blue-300 text-black p-2">
                  On-Going List:
                </h2>
                {/* droppable part */}
                <Droppable droppableId="On-Going">
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.droppableProps}
                      className="min-h-screen bg-yellow-100 rounded-b-xl p-2 "
                    >
                      {sortTasksByPriority(
                        taskData?.filter((task) => task.status === "On-Going")
                      ).map((task, index) => (
                        <TasksSection
                          key={task._id}
                          task={task}
                          index={index}
                          refetch={refetch}
                        />
                      ))}
                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>
              </div>
              {/* Completed */}
              <div className="md:w-1/3">
                <h2 className="card-title rounded-t-xl bg-blue-300 text-black p-2">
                  Completed List:
                </h2>
                {/* droppable part */}
                <Droppable droppableId="Completed">
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.droppableProps}
                      className="min-h-screen bg-green-100 rounded-b-xl p-2"
                    >
                      {taskData
                        ?.filter((task) => task.status === "Completed")
                        .map((task, index) => (
                          <TasksSection
                            key={task._id}
                            task={task}
                            index={index}
                          />
                        ))}
                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>
              </div>
            </DragDropContext>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
