import React from "react";
import "./navbar.css";
import Logo from "../assets/Logo.png";

export default function Navbar() {
  return (
<<<<<<< HEAD
    <div>
      
    </div>
  )
}

export default Navbar
=======
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
>>>>>>> a6a2a5caa8e0631c6f6f2a182ef7851fbe4bd43d
