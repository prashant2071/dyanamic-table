import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "react-toastify/ReactToastify.css";
import Globalstate from "./context/Globalstate.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Globalstate>
      <App /> 
    </Globalstate>
  </React.StrictMode>
);
