import React, { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import "./ThemeToggle.css";

const ThemeToggle = () => {
  const [theme, setTheme] = useState(() =>
    localStorage.getItem("theme") || "dark"
  );

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <div className="theme-toggle-container" onClick={toggleTheme}>
      <div className={`theme-toggle-thumb ${theme}`}>
        {theme === "dark" ? <FaMoon size={10} /> : <FaSun size={10} />}
      </div>
    </div>
  );
};

export default ThemeToggle;
