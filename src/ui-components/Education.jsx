import React from "react";
import personData from "../database/personData.js";
import { Tag } from "@chakra-ui/react";

export const Education = () => {
  const educationArray = Object.values(personData.education);

  return (
    <React.Fragment>
      {educationArray
        .sort((a, b) => b.yearOfCertificate - a.yearOfCertificate)
        .map((item) => (
          <div key={item.id} className="education-container">
            <h3>
              {item.institution} - {item.education}
              <span className="education-year">{item.yearOfCertificate}</span>
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

export default Education;
