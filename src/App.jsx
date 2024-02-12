import { Outlet } from "react-router-dom";
import Navbar from "./Components/Shared/Navbar";

import { ToastContainer } from "react-toastify";
// css file for toast
import "react-toastify/dist/ReactToastify.css";
import Footer from "./Components/Shared/Footer";
function App() {
  return (
    <>
      <div className="bg-blue-100">
        {/* navbar */}
        <Navbar />
        {/* all other nested components */}
        <Outlet />
        {/* footer for all page */}
        <Footer />
        {/* toast container to show successful toast on everywhere in app */}
        <ToastContainer />
      </div>
    </>
  );
}

export default App;
