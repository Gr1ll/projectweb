import React, { useState } from "react";
import "./Menu.css";

function Menu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navigateToSubPage = (subPage: string) => {
    return (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
      setIsMenuOpen(false);
      window.open(subPage, "_self");
    };
  };

  return (
    <div className="Menu">
      <div className="hamburger-icon" onClick={toggleMenu}>
        <div className={`icon-1 ${isMenuOpen ? "a" : ""}`}></div>
        <div className={`icon-2 ${isMenuOpen ? "c" : ""}`}></div>
        <div className={`icon-3 ${isMenuOpen ? "b" : ""}`}></div>
        <div className="clear"></div>
      </div>

      <nav className={`nav ${isMenuOpen ? "show" : ""}`}>
        <ul>
          <li onClick={navigateToSubPage("/")}>Home</li>
          <li onClick={navigateToSubPage("/about-me")}>About Me</li>
          <li onClick={navigateToSubPage("/public-projects")}>Projects</li>
        </ul>
      </nav>

      <div className={`black ${isMenuOpen ? "slide" : ""}`}></div>
    </div>
  );
}

export default Menu;
