import React from "react";
import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import { FaRobot } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/" className="logo">DSA Visualizer</Link>
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/sorting" className="nav-link">Visualizer</Link>
        <Link to="/about" className="nav-link">About</Link>
      </div>
      <div className="navbar-right">
        <ThemeToggle />
        <FaRobot className="chat-icon" />
      </div>
    </nav>
  );
};

export default Navbar;
