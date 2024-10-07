import { createBrowserRouter, redirect } from "react-router-dom";
import App from "./App.jsx";
import {
  About,
  NlHome,
  EnHome,
  Projects,
  Contact,
} from "./pages/pagesIndex.js";

const getDefaultLang = () => {
  const userLang = localStorage.getItem("lang") || navigator.language || "nl";
  return userLang.startsWith("en") ? "en" : "nl";
};

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader: ({ request }) => {
      const currentPath = new URL(request.url).pathname; // Get current path
      const lang = getDefaultLang();

      // Only redirect if the user is not already on a language route
      if (!currentPath.startsWith(`/${lang}`)) {
        return redirect(`/${lang}`);
      }

      return null; // No redirect needed if the path is already correct
    },
    children: [
      {
        path: "nl/",
        element: <NlHome />,
        children: [
          { path: "about", element: <About /> },
          { path: "projects", element: <Projects /> },
          { path: "contact", element: <Contact /> },
        ],
      },
      {
        path: "en/",
        element: <EnHome />,
        children: [
          { path: "about", element: <About /> },
          { path: "projects", element: <Projects /> },
          { path: "contact", element: <Contact /> },
        ],
      },
    ],
  },
]);
