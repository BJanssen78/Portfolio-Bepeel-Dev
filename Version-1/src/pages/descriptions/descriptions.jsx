import React from "react";

export const Descriptions = ({ description }) => {
  return (
    <React.Fragment>
      {description === "projectDescription" && (
        <div>
          <h1>Project Description</h1>
          <p>
            Give a short discribtion of the project you want me to work on. The
            details will be discussed during a contact session.
          </p>
        </div>
      )}
      {description === "company" && (
        <div>
          <h1>Company</h1>
          <p>The company name that you represent.</p>
        </div>
      )}
      {description === "phone" && (
        <div>
          <h1>Your phonenumber</h1>
          <p>
            provide your work phonenumber so I can contact you. I will not use
            your phonenumber for any other purpose. Do not provide your personal
            phonenumber.
          </p>
        </div>
      )}
      {description === "email" && (
        <div>
          <h1>Your email</h1>
          <p>
            provide your work email so I can contact you. I will not use your
            email for any other purpose. Do not provide your personal email.
          </p>
        </div>
      )}
      {description === "name" && (
        <div>
          <h1>Your name</h1>
          <p>
            provide your name so I can address you properly. If you are a team,
            provide the team name.
          </p>
        </div>
      )}
      {description === "timeline" && (
        <div>
          <h1>Timeline / Deadline</h1>
          <p>
            The allowed time that you give me for your project. The time is
            calculated in 40 hour weeks. Note that the 1 month option contains
            overtime hours. Every project is done by whole month increments.
          </p>
        </div>
      )}
      {description === "existingProject" && (
        <div>
          <h1>Existing Project</h1>
          <p>
            The service you require, will that be an addition to an existing
            project? If so, tick yes, if it is a new project, tick no.
          </p>
        </div>
      )}
    </React.Fragment>
  );
};
