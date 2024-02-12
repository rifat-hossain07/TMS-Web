import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Button from "../Components/Shared/Button";
import useAuth from "../Hooks/useAuth";
import axios from "axios";
import { toast } from "react-toastify";

const AddTask = () => {
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();
  const { user } = useAuth();
  // function to handle add task
  const handleAddTask = async (data) => {
    const email = user?.email;
    const title = data.title;
    const description = data.description;
    const deadline = data.deadline;
    const priority = data.priority;
    const status = data.status;
    const tasks = { title, description, deadline, priority, status, email };
    // api to send data to database for adding task
    const res = await axios.post(
      "https://tms-backend-tau.vercel.app/addTask",
      tasks
    );
    if (res.data.insertedId) {
      toast(`Your task added successfully !
      Deadline for this task is: ${deadline}`);
      reset();
      navigate("/dashboard");
    }
  };
  return (
    <div>
      <div className=" flex  justify-center">
        <div className="lg:w-1/2">
          <div className="text-center mb-5 ">
            <h1 className="text-2xl md:text-4xl font-bold ">
              Add your Task Here!
            </h1>
          </div>
          <div className=" card  border-2 border-blue-300 text-black shadow-xl mx-2 md:mx-5">
            <form onSubmit={handleSubmit(handleAddTask)} className="card-body">
              {/* Title */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Title</span>
                </label>
                <input
                  type="text"
                  placeholder="Task Title..."
                  className="input input-bordered"
                  required
                  {...register("title")}
                />
              </div>

              {/* Description */}
              <div className="form-control  ">
                <label className="label">
                  <span className="label-text">Description</span>
                </label>
                <textarea
                  type="text"
                  placeholder="description"
                  required
                  className="textarea textarea-bordered textarea-lg w-full "
                  {...register("description")}
                />
              </div>
              <div className="flex flex-col md:flex-row md:gap-8">
                {/* Deadlines */}
                <div className="form-control lg:w-1/2 ">
                  <label className="label">
                    <span className="label-text">Deadline</span>
                  </label>
                  <input
                    type="date"
                    placeholder="password"
                    required
                    className="input input-bordered"
                    {...register("deadline")}
                  />
                </div>
                {/* Priority */}
                <div className="form-control lg:w-1/2">
                  <label className="label">
                    <span className="label-text">Select tasks Priority</span>
                  </label>
                  <select
                    className="select select-blue-300 w-full "
                    {...register("priority")}
                    required
                  >
                    <option></option>
                    <option>Low</option>
                    <option>Medium</option>
                    <option>High</option>
                  </select>
                </div>
              </div>
              {/* Status */}
              <div className="form-control ">
                <label className="label">
                  <span className="label-text">Select tasks Status</span>
                </label>
                <select
                  className="select select-blue-300 w-full "
                  {...register("status")}
                >
                  <option>To-Do</option>
                  <option>On-Going</option>
                  <option>Completed</option>
                </select>
              </div>
              {/* using functional component to show button */}
              <div className="form-control mt-6 text-center flex-row justify-evenly">
                <button>
                  <Button text="add" />
                </button>
                <Link to="/dashboard">
                  <Button text="go back" />
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTask;
