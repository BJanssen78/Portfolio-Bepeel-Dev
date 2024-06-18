import React from "react";

export const Contact = () => {
  return (
    <React.Fragment>
      <div className="contact-container">
        <p>Contact form</p>
        <form id="contact-form" className="contact-form">
          <section className="personal-info" id="personal-info">
            <p>Contact information</p>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" placeholder="your name" />
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="your email"
            />
            <label htmlFor="phone">Phone:</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="your phone number"
            />
            <label htmlFor="company">Company:</label>
            <input
              type="text"
              id="company"
              name="company"
              placeholder="your company"
            />
            <label htmlFor="preferred-contact">Preferred Contact Method:</label>
            <select id="preferred-contact" name="preferred-contact">
              <option value="email">Email</option>
              <option value="phone">Phone</option>
            </select>
            <label htmlFor="best-time">Best Time to Contact:</label>
            <select id="best-time" name="best-time">
              <option value="morning">Morning 09:00 - 12:00</option>
              <option value="afternoon">Afternoon 12:00 - 17:00</option>
              <option value="evening">Evening 18:00 - 21:00</option>
            </select>
          </section>

          <section className="project-info" id="project-info">
            <p>Project information</p>
            <label htmlFor="project-name">Project Name:</label>
            <input
              type="text"
              id="project-name"
              name="project-name"
              placeholder="project name"
            />
            <label htmlFor="project1">New Project</label>
            <input
              type="radio"
              id="project1"
              name="project"
              value="new-project"
            />
            <label htmlFor="project2">existing Project</label>
            <input
              type="radio"
              id="project2"
              name="project"
              value="existing-project"
            />
            <label htmlFor="type-of-project">Type of Project:</label>
            <select id="type-of-project" name="type-of-project">
              <option value="personal">Static Website</option>
              <option value="business">Dynamic Website</option>
              <option value="other">Web App</option>
            </select>
            <label htmlFor="project-description">Project Description:</label>
            <textarea
              id="project-description"
              name="project-description"
              placeholder="project description"
            />
            <label htmlFor="type-of-service">Type of Service:</label>
            <select id="type-of-service" name="type-of-service">
              <option value="web-development">web Development</option>
              <option value="mobile-app-development">
                Mobile App Development
              </option>
              <option value="content management system">
                content management system
              </option>
              <option value="API development">API development</option>
              <option value="database">Database Development</option>
              <option value="Maintenance">Maintenance</option>
              <option value="Automation">Automation</option>
              <option value="Other">Other</option>
            </select>
          </section>

          <section className="time-frame" id="time-frame">
            <p>Time Frame</p>
            <label htmlFor="timeline">Allowed Project Duration:</label>
            <select>
              <option value="1-months">1 month</option>
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
            <label htmlFor="budget">Budget:</label>
            <select>
              <option value="less-than-1000">Less than €1000</option>
              <option value="1000-5000">€1000 - €5000</option>
              <option value="5000-10000">€5000 - €10.000</option>
              <option value="10000-20000">€10.000 - €20.000</option>
              <option value="20000-50000">€20.000 - €50.000</option>
              <option value="50000-100000">€50.000 - €100.000</option>
              <option value="more-than-100000">More than €100000</option>
            </select>
          </section>
          {/* <button type="submit">Submit</button> */}
        </form>
        <div id="context-information"></div>
      </div>
    </React.Fragment>
  );
};

export default Contact;
