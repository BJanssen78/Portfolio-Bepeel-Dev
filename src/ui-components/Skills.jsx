import React from "react";
import { Tag } from "@chakra-ui/react";
import { skills } from "../database/skills.js";

export const Skills = () => {
  for (let i = 0; i < skills.skills.length; i++)
    return (
      <React.Fragment>
        <div>
          {skills.skills.map((item) => (
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
