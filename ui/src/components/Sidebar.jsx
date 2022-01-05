import React from "react";
import { Link } from "react-router-dom";
function Sidebar() {
  return (
    <div className="sidebar">
      <img
        src="https://images.unsplash.com/photo-1526047932273-341f2a7631f9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
        alt="joan"
      />
      {/* <Link to="contact"> */}
      {/* <p className="home">Home</p> */}
      {/* </Link> */}
      <ul>
        {/* <Link to="about">
          <li className="about">About</li>
        </Link> */}
        <a href="#contact">
          <li className="projects">
            {/* <Link to="projects">B */}
            log
            {/* </Link> */}
          </li>{" "}
        </a>

        <li className="contact">
          {/* <Link to="contact"> */}
          Contact
          {/* </Link> */}
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
