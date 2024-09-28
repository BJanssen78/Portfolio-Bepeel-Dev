import { createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import {
  About,
  NlHome,
  EnHome,
  Projects,
  Contact,
} from "./pages/pagesIndex.js";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // This should be JSX
    children: [
      { path: "nl/", element: <NlHome /> }, // JSX components like <NlHome />
      { path: "en/", element: <EnHome /> },
      { path: "nl/about", element: <About /> },
      { path: "en/about", element: <About /> },
      { path: "nl/projects", element: <Projects /> },
      { path: "en/projects", element: <Projects /> },
      { path: "nl/contact", element: <Contact /> },
      { path: "en/contact", element: <Contact /> },
    ],
  },
]);
