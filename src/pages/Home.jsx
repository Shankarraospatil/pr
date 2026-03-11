import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Home.css";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      
      {/* Navbar */}
      <nav className="home-navbar">
        <h2 className="logo">WealthWise</h2>

        <div className="nav-buttons">
          <button onClick={() => navigate("/login")} className="login-btn">
            Login
          </button>

          <button onClick={() => navigate("/signup")} className="signup-btn">
            Sign Up
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="hero-section">
        <h1>Track Your Investments Smartly</h1>

        <p>
          Manage your SIPs, stocks and investments in one place. 
          Monitor portfolio growth and make better financial decisions.
        </p>

        <button
          className="start-btn"
          onClick={() => navigate("/dashboard")}
        >
          Go to Dashboard
        </button>
      </div>

    </div>
  );
};

export default Home;