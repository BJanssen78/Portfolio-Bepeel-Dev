import React from "react";
import personData from "../database/personData.js";

export const Skills = () => {
  const skillData = personData.skills;

  const getStarRating = (level) => {
    switch (level) {
      case "Beginner":
        return 1;
      case "Intermediate":
        return 2;
      case "Advanced":
        return 3;
      case "Expert":
        return 4;
      case "Master":
        return 5;
      default:
        return 0;
    }
  };

  const getLevelDescription = (level) => {
    switch (level) {
      case "Beginner":
        return "Beginner (1 star)";
      case "Intermediate":
        return "Intermediate (2 stars)";
      case "Advanced":
        return "Advanced (3 stars)";
      case "Expert":
        return "Expert (4 stars)";
      case "Master":
        return "Master (5 stars)";
      default:
        return "No level";
    }
  };

  return (
    <React.Fragment>
      {skillData.map((item) => (
        <div key={item.id} className="skill-container">
          <div className="skill-bar" title={getLevelDescription(item.level)}>
            {Array.from({ length: getStarRating(item.level) }).map(
              (_, index) => (
                <i key={index} className="fa-solid fa-star"></i>
              )
            )}
            {Array.from({ length: 5 - getStarRating(item.level) }).map(
              (_, index) => (
                <i
                  key={index + getStarRating(item.level)}
                  className="fa-regular fa-star"
                ></i>
              )
            )}
          </div>
          <i className={`${item.icontype} ${item.iconName}`}></i>
          <p className="skill-description">
            {item.skill},
            <br />
            {item.langDescription}
          </p>
        </div>
      ))}
    </React.Fragment>
  );
};

export default Skills;
