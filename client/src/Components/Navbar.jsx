import React from "react";
import "./navbar.css";
import Logo from "../assets/Logo.png";

export default function Navbar() {
  return (
    <nav>
      <div className="navLeft">
        <img src={Logo} alt="TG" />
        <span>Two Genius</span>
      </div>
      <ul className="navRight">
        <li className="nav-link">Home</li>
        <li className="nav-link">Projects</li>
        <li className="nav-link">Courses</li>
        <li className="nav-link">BLOGS</li>
        <li className="nav-link">
          <button>Sign in</button>
        </li>
      </ul>
    </nav>
  );
}
