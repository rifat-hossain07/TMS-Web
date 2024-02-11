import { Outlet } from "react-router-dom";
import Navbar from "./Components/Shared/Navbar";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <>
      <div className="bg-blue-100">
        <Navbar />
        <Outlet />
        <ToastContainer />
      </div>
    </>
  );
}

export default App;
