import React from "react";
import personData from "../database/personData.js";
import { Tag } from "@chakra-ui/react";

export const WorkExperience = () => {
  const workExperienceArray = Object.values(personData.workExperience);

  return (
    <React.Fragment>
      {workExperienceArray
        .sort((a, b) => b.startYear - a.startYear)
        .map((item) => (
          <div key={item.id} className="education-container">
            <h3>
              {item.companyName}
              <br />
              From :{" "}
              <span className="education-year">
                {item.startYear} {item.startMonth} -{" "}
                {item.endYear ? item.endYear : "Present"}{" "}
                {item.endMonth ? item.endMonth : ""}
              </span>{" "}
            </h3>

            {item.bulletpoints.map((point, index) => (
              <Tag key={index} className="skill-tag">
                {point}
              </Tag>
            ))}
          </div>
        ))}
    </React.Fragment>
  );
};

export default WorkExperience;
