import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Navigation = () => {
  const [visitedLinks, setVisitedLinks] = useState([]);

  const markAsVisited = (index) => {
    setVisitedLinks([index]); // Set the current link as visited

    // Remove the previously visited link from the array if it exists
    const previousIndex = visitedLinks[0];
    if (previousIndex !== undefined && previousIndex !== index) {
      setVisitedLinks((prevVisitedLinks) =>
        prevVisitedLinks.filter(
          (visitedIndex) => visitedIndex !== previousIndex
        )
      );
    }
  };

  return (
    <React.Fragment>
      <nav>
        <ul className="navigation-list">
          <li>
            <Link
              to="/"
              onClick={() => markAsVisited(0)}
              className={visitedLinks.includes(0) ? "visited" : ""}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about/"
              onClick={() => markAsVisited(1)}
              className={visitedLinks.includes(1) ? "visited" : ""}
            >
              About me
            </Link>
          </li>
          <li>
            <Link
              to="/contact/"
              onClick={() => markAsVisited(2)}
              className={visitedLinks.includes(2) ? "visited" : ""}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </React.Fragment>
  );
};

export default Navigation;
