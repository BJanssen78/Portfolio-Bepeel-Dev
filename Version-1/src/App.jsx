import { Outlet } from "react-router";
import { SiteLogo, Navigation, LangSwitch } from "./ui-components/UiIndex.js";

function App() {
  return (
    <>
      <div className="header">
        {/* //FIXME check if this is needed */}
        {/* <div className="language-switch"> */}
        <LangSwitch />
        {/* </div> */}
        <SiteLogo />
        <Navigation />
      </div>
      <Outlet />
    </>
  );
}

export default App;
