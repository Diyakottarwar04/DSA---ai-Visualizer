import React, { useState } from "react";
import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import { FaBars, FaTimes, FaRobot } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  const toggleMenu = () => setIsMobile(!isMobile);
  const closeMenu = () => setIsMobile(false);

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/" className="logo" onClick={closeMenu}>
          DSA Visualizer
        </Link>
      </div>

      <div className={isMobile ? "nav-links mobile" : "nav-links"}>
        <Link to="/" onClick={closeMenu}>Home</Link>
        <Link to="/sorting" onClick={closeMenu}>Visualizer</Link>
        <Link to="/about" onClick={closeMenu}>About</Link>
      </div>

      <div className="navbar-icons">
        <ThemeToggle />
        <FaRobot className="chat-icon" />
        <div className="hamburger" onClick={toggleMenu}>
          {isMobile ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
