import useAuth from "../Hooks/useAuth";
const Dashboard = () => {
  const { user } = useAuth();
  return (
    <div>
      <div>
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
      </div>
    </div>
  );
};

export default Dashboard;
