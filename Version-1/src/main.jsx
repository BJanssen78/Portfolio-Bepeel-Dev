import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import ErrorBoundary from "./ui-components/ErrorBoundary.jsx";
import { router } from "./routerConfig.jsx"; // Import the router from the new file

const root = ReactDOM.createRoot(document.getElementById("root"));

const Main = () => (
  <React.StrictMode>
    <ErrorBoundary>
      <RouterProvider router={router} />
    </ErrorBoundary>
  </React.StrictMode>
);

root.render(<Main />);
