import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "bulma/css/bulma.css";
import "./assets/normalize.css";
import "./assets/styles.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./router.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
