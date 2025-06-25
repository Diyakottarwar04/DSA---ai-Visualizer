import React from "react";
import "./Home.css";
import { FaSearch, FaMagic, FaCode, FaPlay } from "react-icons/fa";

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero fade-in">
        <h1>Master DSA with Interactive Visuals</h1>
        <p>Visualize algorithms. Ask AI. Learn faster.</p>
        <button className="cta-button">
          <FaPlay style={{ marginRight: "8px" }} /> Start Exploring
        </button>
      </section>

      {/* Features */}
      <section className="features slide-up">
        <div className="feature-card">
          <FaCode className="feature-icon" />
          <h3>Visualize Algorithms</h3>
          <p>Watch sorting & searching step-by-step with animations.</p>
        </div>
        <div className="feature-card">
          <FaSearch className="feature-icon" />
          <h3>Practice DSA</h3>
          <p>Interact with structures & learn complexity insights.</p>
        </div>
        <div className="feature-card">
          <FaMagic className="feature-icon" />
          <h3>Ask AI Assistant</h3>
          <p>Get GPT-powered code explanations & concept clarity.</p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-section fade-in">
        <h2>Why Choose DSA Visualizer?</h2>
        <ul>
          <li>✔️ Beginner-friendly, intuitive interface</li>
          <li>✔️ Real-time animations of popular algorithms</li>
          <li>✔️ Ask doubts to AI Assistant anytime</li>
          <li>✔️ Fully responsive modern UI</li>
        </ul>
      </section>

      {/* Footer */}
      <footer className="footer fade-in">
        <p>© 2025 DSA Visualizer | Built with ❤️ using React</p>
      </footer>
    </div>
  );
};

export default Home;
