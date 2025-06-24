import React from "react";
import "./Home.css";
import { FaSearch, FaMagic, FaCode } from "react-icons/fa";

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero */}
      <section className="hero">
        <h1>Master DSA with Interactive Visuals</h1>
        <p>Visualize algorithms. Ask AI. Learn faster.</p>
        <button className="cta-button">Start Exploring</button>
      </section>

      {/* Features */}
      <section className="features">
        <div className="feature-card">
          <FaCode className="feature-icon" />
          <h3>Visualize Algorithms</h3>
          <p>Watch sorting and searching algorithms come alive step-by-step.</p>
        </div>
        <div className="feature-card">
          <FaSearch className="feature-icon" />
          <h3>Practice DSA</h3>
          <p>Try different data structures and understand time-space complexity.</p>
        </div>
        <div className="feature-card">
          <FaMagic className="feature-icon" />
          <h3>Ask AI Assistant</h3>
          <p>Get explanations in plain English with GPT-powered assistant.</p>
        </div>
      </section>

      {/* How It Works */}
      <section className="how-it-works">
        <h2>How It Works</h2>
        <ol>
          <li>Select an algorithm to visualize.</li>
          <li>Watch it animate and step through each line.</li>
          <li>Ask AI questions anytime for clarification.</li>
        </ol>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 DSA Visualizer | Built with ❤️ using React</p>
      </footer>
    </div>
  );
};

export default Home;
