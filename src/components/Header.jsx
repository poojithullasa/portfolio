import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../css/Header.css";
const Header = () => {
  return (
    <React.Fragment>
      <nav>
        <ul>
          <li id="left">
            <NavLink to="/portfolio" activeClassName="active">
              Home
            </NavLink>
          </li>
          <li className="right">
            <a target="_blank" rel="noopener noreferrer" href="https://drive.google.com/file/d/13L9l0xLvGwgLRnSIBk1TBFiWzVAUHIYu/view?usp=sharing">
              Resume
            </a>
          </li>
          <li className="right">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="right">
            <Link to="/projects">Projects</Link>
          </li>
          <li className="right">
            <Link to="/education">Education</Link>
          </li>
        </ul>
      </nav>
    </React.Fragment>
  );
};
export default Header;
