import React, { useState } from "react";
import Button from "./Button";

export const DownloadResume = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [storyline, setStoryline] = useState(false);
  const [workExperience, setWorkExperience] = useState(false);
  const [education, setEducation] = useState(false);
  const [skills, setSkills] = useState(false);

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
        <form method="post" action="/resume.pdf">
          <label htmlFor="name">Your Name:</label>
          <input id="name" type="text" />
          <label htmlFor="email">Your Email:</label>
          <input id="email" type="email" />
          <label htmlFor="phone">Your Phone:</label>
          <input id="phone" type="tel" />
          <label htmlFor="companyname">Your Company Name:</label>
          <input id="companyname" type="text" />
          <p>Select the items that you want/need</p>
          <section className="resume-selection">
            <label htmlFor="storyline">Storyline:</label>
            <input type="checkbox" id="storyline" />
            <label htmlFor="workexperience" style={{ whiteSpace: "nowrap" }}>
              Work Experience:
            </label>
            <input type="checkbox" id="workexperience" />
            <label htmlFor="education">Education:</label>
            <input type="checkbox" id="education" />
            <label htmlFor="skills">Skills:</label>
            <input type="checkbox" id="skills" />
          </section>
          <Button type="submit" name="button" text="Download" action="#" />
        </form>
      </div>
    </React.Fragment>
  );
};

export default DownloadResume;
