import React, { useState } from "react";
import html2pdf from "html2pdf.js";
import Button from "./Button";
import personData from "../database/personData";
import DownloadResumePage from "./DownloadResumePage";

const DownloadResume = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [storyline, setStoryline] = useState(false);
  const [workExperience, setWorkExperience] = useState(false);
  const [education, setEducation] = useState(false);
  const [skills, setSkills] = useState(false);
  const [workExperienceDataArray, setWorkExperienceDataArray] = useState([]);
  const [educationDataArray, setEducationDataArray] = useState([]);
  const [skillsDataArray, setSkillsDataArray] = useState([]);

  const workExperienceData = Object.values(personData.workExperience).sort(
    (a, b) => b.startYear - a.startYear
  );
  const educationData = Object.values(personData.education).sort(
    (a, b) => b.yearOfCertificate - a.yearOfCertificate
  );
  const skillsData = Object.values(personData.skills);

  const handleCheckboxChange = (e) => {
    const { id, checked } = e.target;
    switch (id) {
      case "storyline":
        setStoryline(checked);
        break;
      case "workexperience":
        setWorkExperience(checked);
        setWorkExperienceDataArray(workExperienceData);
        break;
      case "education":
        setEducation(checked);
        setEducationDataArray(educationData);
        break;
      case "skills":
        setSkills(checked);
        setSkillsDataArray(skillsData);
        break;
      default:
        break;
    }
  };

  const handleDownload = () => {
    // Generate PDF with the corresponding data
    const element = document.getElementById("resume-content");
    html2pdf().from(element).save();

    // Send email with form data
    const emailData = {
      name,
      email,
      phone,
      companyName,
      storyline: storyline ? "Yes" : "No",
      workExperience: workExperience ? "Yes" : "No",
      education: education ? "Yes" : "No",
      skills: skills ? "Yes" : "No",
    };

    fetch("/api/sendEmail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(emailData),
    })
      .then((response) => {
        if (response.ok) {
          console.log("Email sent successfully.");
        } else {
          console.error("Failed to send email.");
        }
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      });
  };

  return (
    <React.Fragment>
      <div>
        <p>To download my resume, please fill out the form below.</p>
        <p>
          By filling out the form, you agree with the privacy terms of the Dutch
          Law, and to respect my privacy.
        </p>
        <p>
          You agree not to distribute my resume to other flex
          agency&rsquo;s/company, then your own agency/company.
        </p>
        <p>
          After filling out the form, you will be redirected to the download
          page.
        </p>
      </div>
      <div className="download-form-container">
        <form>
          <label htmlFor="name">Your Name:</label>
          <input
            id="name"
            type="text"
            required
            autoComplete="name"
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="email">Your Email:</label>
          <input
            id="email"
            type="email"
            required
            autoComplete="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="phone">Your Phone:</label>
          <input
            id="phone"
            type="tel"
            required
            autoComplete="telephone"
            onChange={(e) => setPhone(e.target.value)}
          />
          <label htmlFor="companyname">Your Company Name:</label>
          <input
            id="companyname"
            type="text"
            required
            onChange={(e) => setCompanyName(e.target.value)}
          />

          <p>Select the items that you want/need</p>
          <section className="resume-selection">
            <label htmlFor="storyline">Storyline:</label>
            <input
              type="checkbox"
              id="storyline"
              checked={storyline}
              onChange={handleCheckboxChange}
            />
            <label htmlFor="workexperience" style={{ whiteSpace: "nowrap" }}>
              Work Experience:
            </label>
            <input
              type="checkbox"
              id="workexperience"
              checked={workExperience}
              onChange={handleCheckboxChange}
            />
            <label htmlFor="education">Education:</label>
            <input
              type="checkbox"
              id="education"
              checked={education}
              onChange={handleCheckboxChange}
            />
            <label htmlFor="skills">Skills:</label>
            <input
              type="checkbox"
              id="skills"
              checked={skills}
              onChange={handleCheckboxChange}
            />
          </section>
          <Button
            type="button"
            name="button"
            text="Download"
            onClick={handleDownload}
          />
        </form>
      </div>
      <DownloadResumePage
        storyline={storyline}
        workExperience={workExperienceDataArray}
        education={educationDataArray}
        skills={skillsDataArray}
      />
    </React.Fragment>
  );
};

export default DownloadResume;
