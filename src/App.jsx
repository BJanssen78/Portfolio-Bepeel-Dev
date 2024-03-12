import { Outlet } from "react-router";
import { Header } from "./ui-components/UiIndex.js";

function App() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default App;
