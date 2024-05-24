import React from "react";
import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <React.Fragment>
      <nav className="site-navigation">
        <ul className="navigation-list">
          <li className="navigation-item">
            <Link className="navigation-link" to="/">
              Home
            </Link>
          </li>
          <li className="navigation-item">
            <Link className="navigation-link" to="/about/">
              About me
            </Link>
          </li>
          <li className="navigation-item">
            <Link className="navigation-link" to="/projects/">
              projects
            </Link>
          </li>
          <li className="navigation-item">
            <Link className="navigation-link" to="/contact/">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </React.Fragment>
  );
};

export default Navigation;
