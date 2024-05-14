import React from "react";
import Storyline from "../pages/Storyline.jsx";
import { html2pdf } from "html2pdf.js";

const DownloadResumePage = ({
  storyline,
  workExperience,
  education,
  skills,
}) => {
  const handleDownload = () => {
    const pdfFile = document.getElementById("resume-content");
    html2pdf().from(pdfFile).save();
  };
  console.log(storyline, workExperience, education, skills);
  if (!storyline && !workExperience && !education && !skills) {
    handleDownload();
  }
  return (
    <React.Fragment>
      <div className="resume-content" id="resume-content">
        {storyline ? (
          <div id="storyline">
            <Storyline />
          </div>
        ) : null}

        {workExperience && Array.isArray(workExperience) ? (
          <div id="workexperience">
            <p>
              <a href="https://www.linkedin.com/in/ben-janssen-87948837/">
                <i className="fa-brands fa-linkedin"></i> Linkedin profile
              </a>
            </p>
            {workExperience.map((item) => (
              <div key={item.id}>
                <h2>{item.position}</h2>
                <h3>{item.companyName}</h3>
                <p>
                  From : {item.startYear} {item.startMonth} -{" "}
                  {item.endYear ? item.endYear : "Present"}{" "}
                  {item.endMonth ? item.endMonth : ""}
                </p>
                <p>{item.comments}</p>
                {item.bulletpoints && Array.isArray(item.bulletpoints)
                  ? item.bulletpoints.map((point, index) => (
                      <span key={index}>{point}</span>
                    ))
                  : null}
              </div>
            ))}
          </div>
        ) : null}
        {education && Array.isArray(education) ? (
          <div id="education">
            {education.map((item) => (
              <div key={item.id}>
                <h2>{item.education}</h2>
                <h3>{item.institution}</h3>
                <span>{item.yearOfCertificate}</span>
                {item.bulletpoints && Array.isArray(item.bulletpoints)
                  ? item.bulletpoints.map((point, index) => (
                      <span key={index}>{point}</span>
                    ))
                  : null}
              </div>
            ))}
          </div>
        ) : null}
        {skills && Array.isArray(skills) ? (
          <div id="skills">
            {skills.map((item) => (
              <span key={item.id}>
                <i className={item.icontype + " " + item.iconName}></i>{" "}
                {item.skill}
              </span>
            ))}
          </div>
        ) : null}
      </div>
    </React.Fragment>
  );
};

export default DownloadResumePage;
