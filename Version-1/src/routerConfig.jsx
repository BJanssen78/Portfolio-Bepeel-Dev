import { createBrowserRouter, redirect } from "react-router-dom";
import App from "./App.jsx";
import {
  About,
  NlHome,
  EnHome,
  Projects,
  Contact,
  EnAbout,
  EnContact,
  EnProjects,
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
      const currentPath = new URL(request.url).pathname;
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
      },
      {
        path: "en/",
        element: <EnHome />,
      },
      // Place individual paths here directly under each language:
      { path: "nl/about", element: <About /> },
      { path: "nl/projects", element: <Projects /> },
      { path: "nl/contact", element: <Contact /> },
      { path: "en/about", element: <EnAbout /> },
      { path: "en/projects", element: <EnProjects /> },
      { path: "en/contact", element: <EnContact /> },
    ],
  },
]);
