import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import router from "./Routes/Routes.jsx";
import Provider from "./Components/ContextProvider/Provider.jsx";
import Modal from "react-modal";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
Modal.setAppElement(document.getElementById("root"));
const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider>
        <RouterProvider router={router} />
      </Provider>
    </QueryClientProvider>
  </React.StrictMode>
);
