import React from "react";
import { SiDiscord, SiYoutube } from 'react-icons/si';
import { ImLinkedin2} from 'react-icons/im';
import "./footer.css";

export default function Footer() {
  return (
    <footer>
      <div className="footLeft">
        <span>Two Genius</span>
        <ul className="socials">
          <li className="social-link"><SiYoutube size="30"/></li>
          <li className="social-link"><ImLinkedin2 size="25"/></li>
          <li className="social-link"><SiDiscord size="30"/></li>
        </ul>
      </div>
      <div className="footRight">
        <input type="search" className="searchInput" placeholder="Search" />
        <button className="searchBtn"></button>
      </div>
    </footer>
  );
}
