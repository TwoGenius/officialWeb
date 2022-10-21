import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo.png";

export default function Navbar() {
  return (
    <nav>
      <div className="navLeft">
        <img src={Logo} alt="TG" />
        <span>Two Genius</span>
      </div>
      <ul className="navRight">
        <Link to="/">
          <li className="nav-link">Home</li>
        </Link>
        <Link to="/projects">
          <li className="nav-link">Projects</li>
        </Link>
        <Link to="/courses">
          <li className="nav-link">Courses</li>
        </Link>
        <Link to="/blogs">
          <li className="nav-link">BLOGS</li>
        </Link>
        <Link to="/sign">
          <li className="nav-link">
            <button>Sign in</button>
          </li>
        </Link>
      </ul>
    </nav>
  );
}
