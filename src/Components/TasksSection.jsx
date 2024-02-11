/* eslint-disable react/prop-types */
const TasksSection = ({ task }) => {
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
                  <button className="btn btn-outline">Edit</button>
                  <button className="btn btn-outline">Delete</button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default TasksSection;
