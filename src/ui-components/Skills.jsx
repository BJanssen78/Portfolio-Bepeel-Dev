import React from "react";
import { Tag } from "@chakra-ui/react";
import personData from "../database/personData.js";

export const Skills = () => {
  for (let i = 0; i < personData.skills.length; i++)
    return (
      <React.Fragment>
        <div>
          {personData.skills.map((item) => (
            <Tag key={item.id} className="skill-tag">
              <i className={item.icontype + " " + item.iconName}></i>{" "}
              {item.skill}
            </Tag>
          ))}
        </div>
      </React.Fragment>
    );
};

export default Skills;
