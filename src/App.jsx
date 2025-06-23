import React from "react";
import "./App.css";
import bgPattern from "./assets/background.jpg";
import phoneImg from "./assets/phone.png";
import appleImg from "./assets/apple.png";
import LogoIcon from "./assets/LogoIcon";

const socialIcons = [
  { href: "#", icon: "fab fa-facebook-f", label: "Facebook" },
  { href: "#", icon: "fab fa-x-twitter", label: "X" },
  { href: "#", icon: "fab fa-youtube", label: "YouTube" },
  { href: "#", icon: "fab fa-instagram", label: "Instagram" },
  { href: "#", icon: "fab fa-tiktok", label: "TikTok" },
];

const App = () => {
  return (
    <div>
      {/* Header */}
      <header className="main-header">
        <div className="header-container">
          <div className="logo">
            <LogoIcon />
          </div>
          <nav className="nav-menu">
            <a href="#">For users</a>
            <a href="#">For contributors</a>
            <a href="#">For researchers</a>
            <a href="#">The idea</a>
            <a href="#">Blog</a>
          </nav>
        </div>
      </header>
      {/* Hero Section */}
      <section className="hero-bg">
        <img src={bgPattern} alt="" className="hero-bg-pattern" />
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Streamline positive action & unleash{" "}
              <span className="highlight">your potential</span>
            </h1>
            <div className="hero-quote">
              'I wish I knew exactly what to do and could just do it!'
            </div>
            <div className="hero-desc">
              How often have you found yourself lost in someone's lengthy
              explanation or overwhelmed by search results when looking for
              practical advice? How often have you given up using a found
              solution before it really worked for you? Let's change it. Goallex
              can be your all-in-one tool for that.
            </div>
            <button className="cta-btn">Get Free Early Access</button>
          </div>
          <img
            className="hero-phone"
            src={phoneImg}
            alt="App UI"
            style={{
              boxShadow: "0 8px 32px rgba(44, 44, 84, 0.18)",
              borderRadius: "32px",
              background: "#fff",
            }}
          />
        </div>
      </section>
      {/* 2nd Section */}
      <section className="section-black">
        <div className="section-black-content">
          <div className="section-black-text">
            <h2 className="section-black-title">
              <span>Your goals. Your rules.</span>
              <br />
              <span className="highlight" style={{ color: "#000" }}>
                Your success.
              </span>
            </h2>
            <div className="section-black-desc">
              A fusion of practical knowledge,{" "}
              <b>behavioral science, AI, and your imagination</b>, Goallex is
              designed to help you succeed in all your endeavors. Your health,
              fitness, skills, habits, or any other area of wellbeing. Whatever
              you decide to improve, with Goallex, it can be easier and way more
              successful. Why? <b>Discover in 3 minutes by reading below.</b>
            </div>
            <button className="cta-btn">Get Free Early Access</button>
          </div>
          <img
            className="section-black-img"
            src={appleImg}
            alt="Apple Wordcloud"
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-links">
            <div>
              <div className="footer-link">Home</div>
              <div className="footer-link">The Idea</div>
            </div>
            <div>
              <div className="footer-link">For Contributors</div>
              <div className="footer-link">For Researchers</div>
            </div>
            <div>
              <div className="footer-link">Blog</div>
              <div className="footer-link">Contact us</div>
            </div>
          </div>
          <div className="footer-social-block">
            <div className="footer-social-title">Join us on social media</div>
            <div className="footer-social">
              <a href="#" aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" aria-label="X">
                <i className="fab fa-x-twitter"></i>
              </a>
              <a href="#" aria-label="YouTube">
                <i className="fab fa-youtube"></i>
              </a>
              <a href="#" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" aria-label="TikTok">
                <i className="fab fa-tiktok"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div>
            © 2025 Goallex is the part of Omnioc Pro Ltd. All rights reserved.
          </div>
          <div className="footer-legal">
            <strong>Privacy Policy and Terms & Conditions</strong>
          </div>
        </div>
      </footer>

      {/* FontAwesome CDN for icons */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
      />
    </div>
  );
};

export default App;
