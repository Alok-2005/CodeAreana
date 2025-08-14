import React from "react";
import "./HeroSection.css";
import NeuralNetworkCanvas from "./NeuralNetworkCanvas";

const HeroSection = ({ onRegisterClick }) => {
  return (
    <section className="hero-container">
      <NeuralNetworkCanvas />
      <div className="hero-content">
        <h1>Code Arena 3.0</h1>
        <p>AI in Healthcare</p>

        <button
          className="register-btn"
          onClick={onRegisterClick}
        >
          Register Now
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
