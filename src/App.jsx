import { Outlet } from "react-router-dom";
import Navbar from "./Components/Shared/Navbar";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./Components/Shared/Footer";
function App() {
  return (
    <>
      <div className="bg-blue-100">
        <Navbar />
        <Outlet />
        <Footer />
        <ToastContainer />
      </div>
    </>
  );
}

export default App;
