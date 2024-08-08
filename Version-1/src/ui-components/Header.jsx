import React from "react";
import { Navigation, SiteLogo } from "./UiIndex.js";

export const Header = () => {
  return (
    <React.Fragment>
      <div className="site-header-container">
        <SiteLogo />
        <Navigation />
      </div>
    </React.Fragment>
  );
};

export default Header;
