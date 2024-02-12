import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import router from "./Routes/Routes.jsx";
import Provider from "./Components/ContextProvider/Provider.jsx";
import Modal from "react-modal";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Aos from "aos";
import "aos/dist/aos.css";
const queryClient = new QueryClient();
Aos.init();
Aos.refresh();
Modal.setAppElement(document.getElementById("root"));
ReactDOM.createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <Provider>
      <RouterProvider router={router} />
    </Provider>
  </QueryClientProvider>
);
