import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ scrolled }) => {
  // Reverting to a light theme on scroll as requested.
  // When scrolled, use 'navbar-light' for dark text and 'bg-light' for a light background.
  const navClass = scrolled
    ? "navbar navbar-expand-lg navbar-light bg-light fixed-top scrolled"
    : "navbar navbar-expand-lg navbar-dark fixed-top";

  return (
    <nav className={navClass}>
      <div className="container-fluid">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img
            src={process.env.PUBLIC_URL + '/logo192.png'}
            alt="TK Nurul Hidayah Logo"
            style={{ height: '40px', marginRight: '10px' }}
            className="d-inline-block align-text-top"
          />
          <span className="d-none d-sm-inline-block">TK Nurul Hidayah</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Beranda
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/profile">
                Profil
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/program">
                Program
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/registration">
                Pendaftaran
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/gallery">
                Galeri
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/news">
                Artikel
              </Link>
            </li>
            {/* <li className="nav-item">
              <Link className="nav-link" to="/contact">Kontak</Link>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
