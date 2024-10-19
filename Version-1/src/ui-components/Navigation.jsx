import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export const Navigation = () => {
  const [activeTab, setActiveTab] = useState("home");
  const location = useLocation(); // To get current path
  const [langPrefix, setLangPrefix] = useState(""); // Language prefix like "/nl" or "/en"

  useEffect(() => {
    // Determine the language from the URL path or default to "nl"
    const pathParts = location.pathname.split("/").filter(Boolean);
    const lang = pathParts[0] === "en" ? "en" : "nl";
    setLangPrefix(`/${lang}`); // Set language prefix for links

    // Update activeTab based on the current path
    const currentPath = pathParts[1] || "home"; // Second part of the path after lang
    setActiveTab(currentPath);
  }, [location.pathname]);

  return (
    <React.Fragment>
      <nav className="site-navigation">
        <ul className="navigation-list">
          <li
            className={`navigation-item ${activeTab === "home" ? "active" : ""}`}
            onClick={() => setActiveTab("home")}
          >
            <Link className="navigation-link" to={`${langPrefix}/`}>
              Home
            </Link>
          </li>
          <li
            className={`navigation-item ${activeTab === "about" ? "active" : ""}`}
            onClick={() => setActiveTab("about")}
          >
            <Link className="navigation-link" to={`${langPrefix}/about`}>
              About me
            </Link>
          </li>
          <li
            className={`navigation-item ${activeTab === "projects" ? "active" : ""}`}
            onClick={() => setActiveTab("projects")}
          >
            <Link className="navigation-link" to={`${langPrefix}/projects`}>
              Projects
            </Link>
          </li>
          <li
            className={`navigation-item ${activeTab === "contact" ? "active" : ""}`}
            onClick={() => setActiveTab("contact")}
          >
            <Link className="navigation-link" to={`${langPrefix}/contact`}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </React.Fragment>
  );
};

export default Navigation;
