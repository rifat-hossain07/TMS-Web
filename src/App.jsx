import { Outlet } from "react-router-dom";
import Navbar from "./Components/Shared/Navbar";

function App() {
  return (
    <>
      <div className="bg-blue-100">
        <Navbar />
        <Outlet />
      </div>
    </>
  );
}

export default App;
