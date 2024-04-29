import { Tag } from "@chakra-ui/react";
import skills from "../database/skills.js";

export const Skills = () => {
  console.log(skills);
  return skills.map((item) => <Tag key={item.id}>{item.skill}</Tag>);
};

export default Skills;
