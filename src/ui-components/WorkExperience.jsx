import React from "react";
import personData from "../database/personData.js";
import { Tag } from "@chakra-ui/react";

export const Education = () => {
  console.log(personData.education);
  return (
    <React.Fragment>
      {personData.education.map((item) => (
        <div key={item.id} className="education-container">
          <h3>
            {item.education}
            <span className="education-year">{item.yearOfCertificate}</span>
          </h3>

          {item.bulletpoints.map((point, index) => (
            <Tag key={index} className="skill-tag-reverse">
              {point}
            </Tag>
          ))}
        </div>
      ))}
    </React.Fragment>
  );
};
export default Education;
