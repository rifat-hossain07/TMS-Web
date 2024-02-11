import { Outlet } from "react-router-dom";
import Navbar from "./Components/Shared/Navbar";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Outlet />
      </div>
    </>
  );
}

export default App;
