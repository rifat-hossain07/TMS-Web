import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Private from "./Private";
import Dashboard from "../Pages/Dashboard";
import AddTask from "../Pages/AddTask";
import About from "../Pages/About";
import Contact from "../Pages/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/dashboard",
        element: (
          <Private>
            <Dashboard />,
          </Private>
        ),
      },
      {
        path: "/addTask",
        element: (
          <Private>
            <AddTask />,
          </Private>
        ),
      },
    ],
  },
]);

export default router;
