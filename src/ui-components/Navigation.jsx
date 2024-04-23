import React from "react";
import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <React.Fragment>
      <nav>
        <ul className="navigation-list">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about/">About me</Link>
          </li>
          <li>
            <Link to="/projects/">projects</Link>
          </li>
          <li>
            <Link to="/contact/">Contact</Link>
          </li>
        </ul>
      </nav>
    </React.Fragment>
  );
};

export default Navigation;
