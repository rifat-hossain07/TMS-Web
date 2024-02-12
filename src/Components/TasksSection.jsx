import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Modal from "react-modal";
import { toast } from "react-toastify";
import Button from "./Shared/Button";
/* eslint-disable react/prop-types */
const TasksSection = ({ task, refetch }) => {
  const { register, handleSubmit } = useForm();
  const [modalIsOpen, setIsOpen] = useState(false);
  const customStyles = {
    content: {
      content: "center",
      height: "80%",
      width: "60%",
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }
  const updateTask = async (data) => {
    const title = data.title;
    const description = data.description;
    const deadline = data.deadline;
    const priority = data.priority;
    const status = data.status;
    const tasks = { title, description, deadline, priority, status };
    const res = await axios.put(
      `http://localhost:5000/tasks/update/${task?._id}`,
      tasks
    );
    if (res.data) {
      toast(`Your task updated successfully !
      New Deadline for this task is: ${deadline}`);
      refetch();
      setIsOpen(false);
    }
  };
  return (
    <>
      <div>
        <div className=" card bg-base-100 shadow-xl mb-2">
          <div className="card-body">
            <p>
              <span className="font-bold">Title: </span> {task?.title}
            </p>
            <p>{task?.description}</p>
            {task?.status === "Completed" ? (
              <p className="text-center font-semibold text-green-400">
                Completed !
              </p>
            ) : (
              <>
                <div className="card-actions justify-between">
                  <div>
                    <span className="font-bold">Deadline: </span>
                    {task?.deadline}
                  </div>
                  <div>
                    <span className="font-bold">Priority: </span>
                    {task?.priority}
                  </div>
                </div>
                <div className="card-actions justify-between mt-3">
                  <button onClick={openModal} className="btn btn-outline">
                    Edit
                  </button>
                  <button className="btn btn-outline">Delete</button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      {/* Modal for Update task*/}
      <Modal
        isOpen={modalIsOpen}
        //   onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel=" Modal"
      >
        <div className="mx-10">
          <form onSubmit={handleSubmit(updateTask)} className="">
            {/* Title */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Title</span>
              </label>
              <input
                type="text"
                defaultValue={task?.title}
                placeholder="Task Title..."
                className="input input-bordered"
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
                defaultValue={task.description}
                placeholder="description"
                className="textarea textarea-bordered md:textarea-lg w-full "
                {...register("description")}
              />
            </div>
            <div className="flex flex-col md:flex-row gap-8">
              {/* Deadlines */}
              <div className="form-control md:w-1/2 ">
                <label className="label">
                  <span className="label-text">Deadline</span>
                </label>
                <input
                  type="date"
                  defaultValue={task?.deadline}
                  placeholder="password"
                  className="input input-bordered"
                  {...register("deadline")}
                />
              </div>
              {/* Priority */}
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text">Select tasks Priority</span>
                </label>
                <select
                  defaultValue={task?.priority}
                  className="select select-bordered w-full "
                  {...register("priority")}
                >
                  <option>Low</option>
                  <option>Moderate</option>
                  <option>High</option>
                </select>
              </div>
            </div>
            {/* Status */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Select tasks Status</span>
              </label>
              <select
                defaultValue={task?.status}
                className="select select-bordered w-full "
                {...register("status")}
              >
                <option>To-Do</option>
                <option>On-Going</option>
                <option>Completed</option>
              </select>
            </div>
            <div className="form-control mt-6 text-center flex-row justify-evenly">
              <button>
                <Button text="update" />
              </button>
              <button onClick={closeModal}>
                <Button text="Close" />
              </button>
            </div>
          </form>
        </div>
      </Modal>
    </>
  );
};

export default TasksSection;
