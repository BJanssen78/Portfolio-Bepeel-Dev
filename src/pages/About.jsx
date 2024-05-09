import React, { useState } from "react";
import {
  Skills,
  Education,
  WorkExperience,
  DownloadResume,
} from "../ui-components/UiIndex.js";
import { Storyline } from "./pagesIndex.js";

export const About = () => {
  // State to track the active tab
  const [activeTab, setActiveTab] = useState("storyline");

  // Function to handle tab click
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <React.Fragment>
      <div className="about-navigation" id="about-navigation">
        <nav>
          <ul className="about-nav-list">
            <li
              className={`about-nav-item ${activeTab === "storyline" ? "active" : ""}`}
              onClick={() => handleTabClick("storyline")}
            >
              <a href="#storyline">Storyline</a>
            </li>
            <li
              className={`about-nav-item ${activeTab === "experience" ? "active" : ""}`}
              onClick={() => handleTabClick("experience")}
            >
              <a href="#about-experience">Work Experience</a>
            </li>
            <li
              className={`about-nav-item ${activeTab === "education" ? "active" : ""}`}
              onClick={() => handleTabClick("education")}
            >
              <a href="#about-education">Education</a>
            </li>
            <li
              className={`about-nav-item ${activeTab === "skills" ? "active" : ""}`}
              onClick={() => handleTabClick("skills")}
            >
              <a href="#about-skills">Skills</a>
            </li>
            <li
              className={`about-nav-item ${activeTab === "download" ? "active" : ""}`}
              onClick={() => handleTabClick("download")}
            >
              <a href="#about-download">Download Resume</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="content-container">
        {activeTab === "storyline" && <Storyline />}
        {activeTab === "experience" && <WorkExperience />}
        {activeTab === "skills" && <Skills />}
        {activeTab === "education" && <Education />}
        {activeTab === "download" && <DownloadResume />}
      </div>
    </React.Fragment>
  );
};

export default About;
