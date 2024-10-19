import React, { useState } from "react";
import { Descriptions } from "../descriptions/descriptions.jsx";

export const Contact = () => {
  const [contactInfo, setContactInfo] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    preferredContact: "",
    bestTime: "",
    projectName: "",
    existingProject: "",
    typeOfProject: "",
    projectDescription: "",
    typeOfService: "",
    otherTypeOfService: "",
    timeline: "",
    budget: "",
  });

  const [descriptionOnFocus, setDescriptionOnFocus] = useState("");
  const [errors, setErrors] = useState({});

  const handleFocus = (e) => {
    setDescriptionOnFocus(e.target.name);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactInfo({ ...contactInfo, [name]: value });
  };

  const validate = () => {
    const newErrors = {};
    if (!contactInfo.name) newErrors.name = "Name is required";
    if (!contactInfo.email) newErrors.email = "Email is required";
    if (!contactInfo.phone) newErrors.phone = "Phone is required";
    if (!contactInfo.company) newErrors.company = "Company is required";
    if (!contactInfo.preferredContact)
      newErrors.preferredContact = "Preferred Contact is required";
    if (!contactInfo.bestTime) newErrors.bestTime = "Best Time is required";
    if (!contactInfo.projectName)
      newErrors.projectName = "Project Name is required";
    if (!contactInfo.existingProject)
      newErrors.existingProject = "Existing Project is required";
    if (!contactInfo.typeOfProject)
      newErrors.typeOfProject = "Type of Project is required";
    if (!contactInfo.projectDescription)
      newErrors.projectDescription = "Project Description is required";
    if (!contactInfo.typeOfService)
      newErrors.typeOfService = "Type of Service is required";
    if (
      contactInfo.typeOfService === "Other" &&
      !contactInfo.otherTypeOfService
    ) {
      newErrors.otherTypeOfService = "Please specify the other type of service";
    }
    if (!contactInfo.timeline) newErrors.timeline = "Timeline is required";
    if (!contactInfo.budget) newErrors.budget = "Budget is required";

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});

      // Prepare the data to be sent to the PHP script
      const formData = new FormData();
      Object.keys(contactInfo).forEach((key) => {
        formData.append(key, contactInfo[key]);
      });

      try {
        // Send the data to the PHP script
        const response = await fetch("../../functions/sendContactMail.php", {
          method: "POST",
          body: formData,
        });

        if (response.ok) {
          const result = await response.text();
          alert(result); // or handle the response as needed
        } else {
          alert("There was a problem with the request.");
        }
      } catch (error) {
        console.error("Error submitting the form:", error);
        alert("There was an error submitting the form.");
      }
    }
  };

  return (
    <React.Fragment>
      <div className="contact-container">
        <p className="contact-form-title">Contact form</p>
        <form
          id="contact-form"
          className="contact-form"
          onSubmit={handleSubmit}
        >
          <section className="personal-info" id="personal-info">
            <h2>Contact information :</h2>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="your name"
              onChange={handleChange}
              onFocus={handleFocus}
            />
            {errors.name && <div style={{ color: "red" }}>{errors.name}</div>}
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="your email"
              onChange={handleChange}
              onFocus={handleFocus}
            />
            {errors.email && <div style={{ color: "red" }}>{errors.email}</div>}

            <label htmlFor="phone">Phone:</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="your phone number"
              onChange={handleChange}
              onFocus={handleFocus}
            />
            {errors.phone && <div style={{ color: "red" }}>{errors.phone}</div>}

            <label htmlFor="company">Company:</label>
            <input
              type="text"
              id="company"
              name="company"
              placeholder="your company"
              onChange={handleChange}
              onFocus={handleFocus}
            />
            {errors.company && (
              <div style={{ color: "red" }}>{errors.company}</div>
            )}

            <label htmlFor="preferred-contact">Preferred Contact Method:</label>
            <select
              id="preferred-contact"
              name="preferredContact"
              value={contactInfo.preferredContact}
              onChange={handleChange}
              onFocus={handleFocus}
            >
              <option value="">Select an option</option>
              <option value="email">Email</option>
              <option value="phone">Phone</option>
            </select>
            {errors.preferredContact && (
              <div style={{ color: "red" }}>{errors.preferredContact}</div>
            )}

            <label htmlFor="best-time">Best Time to Contact:</label>
            <select
              id="best-time"
              name="bestTime"
              value={contactInfo.bestTime}
              onChange={handleChange}
              onFocus={handleFocus}
            >
              <option value="">Select an option</option>
              <option value="morning">Morning 09:00 - 12:00</option>
              <option value="afternoon">Afternoon 12:00 - 17:00</option>
              <option value="evening">Evening 18:00 - 21:00</option>
            </select>
            {errors.bestTime && (
              <div style={{ color: "red" }}>{errors.bestTime}</div>
            )}
          </section>

          <section className="project-info" id="project-info">
            <h2>Project information :</h2>
            <label htmlFor="project-name">Project Name:</label>
            <input
              type="text"
              id="project-name"
              name="projectName"
              placeholder="project name"
              onChange={handleChange}
              onFocus={handleFocus}
            />
            {errors.projectName && (
              <div style={{ color: "red" }}>{errors.projectName}</div>
            )}

            <div>
              <label>Existing Project? :</label>
              <div className="radio-input">
                <label htmlFor="project1">Yes</label>
                <input
                  type="radio"
                  id="project1"
                  name="existingProject"
                  value="yes"
                  checked={contactInfo.existingProject === "yes"}
                  onChange={handleChange}
                  onFocus={handleFocus}
                />

                <label htmlFor="project2">No</label>
                <input
                  type="radio"
                  id="project2"
                  name="existingProject"
                  value="no"
                  checked={contactInfo.existingProject === "no"}
                  onChange={handleChange}
                  onFocus={handleFocus}
                />
              </div>
              {errors.existingProject && (
                <div style={{ color: "red" }}>{errors.existingProject}</div>
              )}
            </div>
            <label htmlFor="type-of-project">Type of Project:</label>
            <select
              id="type-of-project"
              name="typeOfProject"
              value={contactInfo.typeOfProject}
              onChange={handleChange}
              onFocus={handleFocus}
            >
              <option value="">Select an option</option>
              <option value="Static-Website">Static Website</option>
              <option value="Dynamic-Website">Dynamic Website</option>
              <option value="WebApp">Web App</option>
            </select>
            {errors.typeOfProject && (
              <div style={{ color: "red" }}>{errors.typeOfProject}</div>
            )}

            <label htmlFor="project-description">Project Description:</label>
            <textarea
              id="project-description"
              name="projectDescription"
              placeholder="project description"
              value={contactInfo.projectDescription}
              onChange={handleChange}
              onFocus={handleFocus}
            ></textarea>
            {errors.projectDescription && (
              <div style={{ color: "red" }}>{errors.projectDescription}</div>
            )}

            <label htmlFor="type-of-service">Type of Service:</label>
            <select
              id="type-of-service"
              name="typeOfService"
              value={contactInfo.typeOfService}
              onChange={handleChange}
              onFocus={handleFocus}
            >
              <option value="">Select an option</option>
              <option value="web-development">Web Development</option>
              <option value="mobile-app-development">
                Mobile App Development
              </option>
              <option value="content management system">
                Content Management System
              </option>
              <option value="API development">API Development</option>
              <option value="database">Database Development</option>
              <option value="Maintenance">Maintenance</option>
              <option value="Automation">Automation</option>
              <option value="Other">Other</option>
            </select>
            {errors.typeOfService && (
              <div style={{ color: "red" }}>{errors.typeOfService}</div>
            )}

            {contactInfo.typeOfService === "Other" && (
              <div>
                <label htmlFor="otherTypeOfService">Please specify:</label>
                <textarea
                  name="otherTypeOfService"
                  onChange={handleChange}
                  value={contactInfo.otherTypeOfService}
                  onFocus={handleFocus}
                ></textarea>
                {errors.otherTypeOfService && (
                  <div style={{ color: "red" }}>
                    {errors.otherTypeOfService}
                  </div>
                )}
              </div>
            )}
          </section>

          <section className="time-frame" id="time-frame">
            <h2>Time Frame :</h2>
            <label htmlFor="timeline">Allowed Project Duration:</label>
            <select
              id="timeline"
              name="timeline"
              value={contactInfo.timeline}
              onChange={handleChange}
              onFocus={handleFocus}
            >
              <option value="">Select an option</option>
              <option value="1-month">1 month</option>
              <option value="2-months">2 months</option>
              <option value="3-months">3 months</option>
              <option value="4-months">4 months</option>
              <option value="5-months">5 months</option>
              <option value="6-months">6 months</option>
              <option value="7-months">7 months</option>
              <option value="8-months">8 months</option>
              <option value="9-months">9 months</option>
              <option value="10-months">10 months</option>
              <option value="11-months">11 months</option>
              <option value="1-year">1 year</option>
              <option value="longer">Longer</option>
            </select>
            {errors.timeline && (
              <div style={{ color: "red" }}>{errors.timeline}</div>
            )}

            <label htmlFor="budget">Budget:</label>
            <select
              id="budget"
              name="budget"
              value={contactInfo.budget}
              onChange={handleChange}
              onFocus={handleFocus}
            >
              <option value="">Select an option</option>
              <option value="less-than-1000">Less than €1000</option>
              <option value="1000-5000">€1000 - €5000</option>
              <option value="5000-10000">€5000 - €10.000</option>
              <option value="10000-20000">€10.000 - €20.000</option>
              <option value="20000-50000">€20.000 - €50.000</option>
              <option value="50000-100000">€50.000 - €100.000</option>
              <option value="more-than-100000">More than €100000</option>
            </select>
            {errors.budget && (
              <div style={{ color: "red" }}>{errors.budget}</div>
            )}
          </section>

          <div className="btn-container">
            <button type="submit" className="submit-btn">
              Submit
            </button>
            <button type="reset" className="submit-btn">
              Reset
            </button>
          </div>
        </form>
        <div id="context-information" className="context-information">
          <Descriptions description={descriptionOnFocus} />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Contact;
