import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
// import { AuthProvider } from "./functions/AuthContext.jsx";
import ErrorBoundary from "./ui-components/ErrorBoundary.jsx";
import { Home } from "./pages/pagesIndex.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      // { path: "/contact", element: <Contact /> },
    ],
  },
]);
const Main = () => {
  return (
    <React.StrictMode>
      <ErrorBoundary>
        {/* <AuthProvider> */}
        <RouterProvider router={router} />
        {/* </AuthProvider> */}
      </ErrorBoundary>
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<Main />);
