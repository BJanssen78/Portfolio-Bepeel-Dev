import React from "react";
import Skills from "../ui-components/Skills";

export const About = () => {
  return (
    <React.Fragment>
      <div className="content-container">
        <div id="about-introduction">
          <h2 className="subtitle">Introduction</h2>
          <p>My name is Ben Janssen and i&rsquo;m a logistical expert.</p>
          <p>
            I have been working in the logistics industry for over 28 years and
            from this 20+ years in leading positions. I have done this with a
            lot of passion and pleasure. I really enjoy working with people and
            getting the best out of them, as also the challenges to get the best
            out of the company, and finding the best solutions for the right
            balance between the people and the company.
          </p>
        </div>
        <div id="about-experience">
          <h2 className="subtitle">Experience</h2>
          <p>
            I have worked in various industries such as food, hightech and the
            pharmaceutical industry. I have experience in optimizing existing
            logistic centers, and implementing new systems and processes. I have
            also worked with various WMS systems such as IFS, MLS and SAP.
          </p>
        </div>
        <div id="about-downside">
          <h2 className="subtitle">Downside</h2>
          <p>
            At the height of my career, i was working in the hightech industry
            at this time there was chip shortish on the market. this was a very
            difficult time for the company and the employees. I had to make a
            lot of difficult decisions and had to let a lot of people go. This
            was a very difficult time for me and the employees, as the chip
            shortish was at it&rsquo;s lowest point. This also resulted that my
            contract was not extended.
          </p>
        </div>
        <div id="about-change">
          <h2 className="subtitle">Change</h2>
          <p>
            Why the change to web development? I have always been interested in
            IT and programming. I always had a high respect for people who could
            program and build websites and games, to entertain people. Because
            it was difficult to find a new job in the logistics industry, I
            decided to follow my passion and start a new career in web
            development. With the help of the{" "}
            <a
              href="https://www.uwv.nl/particulieren/index.aspx"
              target="_blank"
              rel="noreferrer"
            >
              UWV <i className="fa-solid fa-arrow-up-right-from-square"></i>
            </a>{" "}
            and{" "}
            <a
              href="https://www.wincacademy.nl/"
              target="_blank"
              rel="noreferrer"
            >
              Winc Academy{" "}
              <i className="fa-solid fa-arrow-up-right-from-square"></i>
            </a>
            I have been able to develop my skills and knowledge in web
            development.
          </p>
        </div>
        <div id="about-skills">
          <h2 className="subtitle">Skills</h2>
          <Skills />
        </div>
      </div>{" "}
      {/* end of content-container */}
    </React.Fragment>
  );
};

export default About;
