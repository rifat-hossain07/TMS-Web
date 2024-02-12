import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Modal from "react-modal";
import { toast } from "react-toastify";
import Button from "./Shared/Button";
import { Draggable } from "react-beautiful-dnd";
import Loading from "./Shared/Loading";
/* eslint-disable react/prop-types */
const TasksSection = ({ task, index, refetch }) => {
  const { register, handleSubmit } = useForm();
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modal2IsOpen, set2IsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  // custom style for both Modal
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
  // to open update modal
  function openModal() {
    setIsOpen(true);
  }
  // to close update modal
  function closeModal() {
    setIsOpen(false);
  }
  // to open delete confirmation modal
  function open2Modal() {
    set2IsOpen(true);
  }
  // to close delete confirmation modal
  function close2Modal() {
    set2IsOpen(false);
  }
  // function to update any task
  const updateTask = async (data) => {
    const title = data.title;
    const description = data.description;
    const deadline = data.deadline;
    const priority = data.priority;
    const status = data.status;
    const tasks = { title, description, deadline, priority, status };
    setLoading(true);
    const res = await axios.put(
      `https://tms-backend-tau.vercel.app/tasks/update/${task?._id}`,
      tasks
    );
    if (res.data) {
      toast(`Your task updated successfully !
      New Deadline for this task is: ${deadline}`);
      refetch();
      setIsOpen(false);
      setLoading(false);
    }
  };
  // function to delete any task after confirmation
  const deleteTask = async (id) => {
    setLoading(true);
    const res = await axios.delete(
      `https://tms-backend-tau.vercel.app/delete/${id}`
    );
    if (res.data.deletedCount > 0) {
      toast("Your task has been deleted!");
      refetch();
      setLoading(false);
    }
  };
  return (
    <>
      {loading ? (
        // functional loading component
        <Loading />
      ) : (
        <Draggable key={task._id} draggableId={task._id} index={index}>
          {(provided) => (
            <div
              ref={provided.innerRef}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
            >
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
                          <span
                            className={
                              task?.priority === "Low"
                                ? "text-green-400"
                                : task?.priority === "Medium"
                                ? "text-yellow-400"
                                : task?.priority === "High"
                                ? "text-red-400"
                                : ""
                            }
                          >
                            {task?.priority}{" "}
                          </span>
                        </div>
                      </div>
                      <div className="card-actions justify-between mt-3">
                        <button onClick={openModal}>
                          <Button text="Edit" />
                        </button>
                        <button onClick={open2Modal}>
                          <Button text="Delete" />
                        </button>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          )}
        </Draggable>
      )}
      {/* Modal for Update task*/}
      <Modal
        isOpen={modalIsOpen}
        //   onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel=" Modal"
      >
        <div className="card-actions justify-end">
          <div onClick={closeModal} className=" btn btn-circle btn-outline ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
        </div>
        <div className="mx-10">
          <form onSubmit={handleSubmit(updateTask)} className="">
            {/* Title */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Title</span>
              </label>
              <input
                type="text"
                required
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
                required
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
                  required
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
                  required
                  defaultValue={task?.priority}
                  className="select select-bordered w-full "
                  {...register("priority")}
                >
                  <option>Low</option>
                  <option>Medium</option>
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
                required
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
      {/* Modal 2 for delete confirmation */}
      <Modal
        isOpen={modal2IsOpen}
        //   onAfterOpen={afterOpenModal}
        onRequestClose={close2Modal}
        style={customStyles}
        contentLabel=" Modal"
      >
        <div className="card-actions justify-end">
          <div onClick={close2Modal} className=" btn btn-circle btn-outline ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
        </div>
        <div className="mt-24  text-center">
          <p className="text-2xl font-bold">
            Are you sure you want to delete this task?
          </p>
          <p className="text-lg font-medium">Task title: {task?.title}</p>
          <p className="text-red-500 text-xl font-semibold">
            You will not be able to revert this!
          </p>
          <div className="form-control mt-6 text-center flex-row justify-center gap-14">
            <button
              className=" rounded-lg"
              onClick={() => deleteTask(task?._id)}
            >
              <Button text="Yes! Delete it" />
            </button>
            <button onClick={close2Modal}>
              <Button text="Cancel" />
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default TasksSection;
