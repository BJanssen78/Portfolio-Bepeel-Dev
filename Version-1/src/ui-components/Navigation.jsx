import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Navigation = () => {
  const [activeTab, setActiveTab] = useState("home");
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <React.Fragment>
      <nav className="site-navigation">
        <ul className="navigation-list">
          <li
            className={`navigation-item ${activeTab === "home" ? "active" : ""}`}
            onClick={() => handleTabChange("home")}
          >
            <Link className="navigation-link" to="/">
              Home
            </Link>
          </li>
          <li
            className={`navigation-item ${activeTab === "about" ? "active" : ""}`}
            onClick={() => handleTabChange("about")}
          >
            <Link className="navigation-link" to="/about/">
              About me
            </Link>
          </li>
          <li
            className={`navigation-item ${activeTab === "projects" ? "active" : ""}`}
            onClick={() => handleTabChange("projects")}
          >
            <Link className="navigation-link" to="/projects/">
              projects
            </Link>
          </li>
          <li
            className={`navigation-item ${activeTab === "contact" ? "active" : ""}`}
            onClick={() => handleTabChange("contact")}
          >
            <Link className="navigation-link" to="/contact/">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </React.Fragment>
  );
};

export default Navigation;
