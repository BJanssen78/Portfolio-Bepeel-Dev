import { Outlet } from "react-router";
import { SiteLogo, Navigation } from "./ui-components/UiIndex.js";

function App() {
  return (
    <>
      <div className="header">
        <SiteLogo />
        <Navigation />
      </div>
      <Outlet />
    </>
  );
}

export default App;
