import React from "react";
import Button from "./Button";

export const DownloadResume = () => {
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
          <Button type="submit" name="button" text="Download" action="#" />
        </form>
      </div>
    </React.Fragment>
  );
};

export default DownloadResume;
