import { Outlet } from "react-router";
import { Header } from "./ui-components/UiIndex.js";

function App() {
  return (
    <>
      <Header />
      {/* <SiteLogo />
      <Navigation /> */}
      <Outlet />
    </>
  );
}

export default App;
