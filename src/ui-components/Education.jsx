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
            <h1> {item.education}</h1>
            <h2>Institution: {item.institution}</h2>
            <p>Modules:</p>
            {item.bulletpoints.map((point, index) => (
              <Tag key={index} className="skill-tag">
                {point}
              </Tag>
            ))}
            <p className="education-degree">
              {item.degree} at year : {item.yearOfCertificate}
            </p>
          </div>
        ))}
    </React.Fragment>
  );
};

export default Education;
