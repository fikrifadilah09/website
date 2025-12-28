import React from "react";
import { Link } from "react-router-dom";
import "./HeroSection.css";

function HeroSection() {
  const imageUrl = process.env.PUBLIC_URL + "/images/gedung-sekolah.jpg";

  const heroStyle = {
    backgroundImage: `url(${imageUrl})`,
  };

  return (
    <div className="hero-container" style={heroStyle}>
      <div className="hero-overlay" />
      <div className="hero-content">
        <h1>Selamat Datang di TK Nurul Hidayah</h1>
        <Link to="/registration">
          <button className="hero-cta-button">Daftar Sekarang</button>
        </Link>
      </div>
    </div>
  );
}

export default HeroSection;
