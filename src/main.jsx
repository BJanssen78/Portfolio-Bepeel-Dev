import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import { ChakraProvider, extendTheme, Switch, VStack } from "@chakra-ui/react";
// import { AuthProvider } from "./functions/AuthContext.jsx";
import ErrorBoundary from "./ui-components/ErrorBoundary.jsx";
import { About, Home } from "./pages/pagesIndex.js";

const darkTheme = extendTheme({
  styles: {
    global: () => ({
      body: {
        bg: "#ffffff",
        color: "#000000",
      },
    }),
  },
  colors: {
    brand: {
      500: "#000000", // Custom color for the Switch track in dark mode
    },
  },
});

const lightTheme = extendTheme({
  styles: {
    global: () => ({
      body: {
        bg: "#000000",
        color: "#ffffff",
      },
    }),
  },
  colors: {
    brand: {
      500: "#ffffff", // Custom color for the Switch track in light mode
    },
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      // { path: "/contact", element: <Contact /> },
    ],
  },
]);
const Main = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };
  return (
    <React.StrictMode>
      <ChakraProvider theme={isDarkMode ? darkTheme : lightTheme}>
        <VStack
          spacing={4}
          position={"absolute"}
          top={10}
          right={10}
          zIndex={100}
        >
          <Switch
            id="theme-switch"
            isChecked={isDarkMode}
            onChange={toggleTheme}
            size="md"
            colorScheme="brand" // Use the custom color scheme
          />
        </VStack>
        <ErrorBoundary>
          {/* <AuthProvider> */}
          <RouterProvider router={router} />
          {/* </AuthProvider> */}
        </ErrorBoundary>
      </ChakraProvider>
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<Main />);
