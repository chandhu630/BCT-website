import React, { useState } from "react";
import { Link } from "react-router-dom";
import Home from "./Home";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showAboutDropdown, setShowAboutDropdown] = useState(false);
  const [showTrustDropdown, setShowTrustDropdown] = useState(false);
  const [showEducationSubMenu, setShowEducationSubMenu] = useState(false);
  const [showSkillDevSubMenu, setShowSkillDevSubMenu] = useState(false);

  // Function to close all dropdowns
  const closeAllDropdowns = () => {
    setShowAboutDropdown(false);
    setShowTrustDropdown(false);
    setShowEducationSubMenu(false);
    setShowSkillDevSubMenu(false);
  };


  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="nav-brand">
        <Link to="/" className="nav-logo">
          BCT Residential School
        </Link>
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        <span className={`bar ${isOpen ? "active" : ""}`}></span>
        <span className={`bar ${isOpen ? "active" : ""}`}></span>
        <span className={`bar ${isOpen ? "active" : ""}`}></span>
      </div>

      <ul className={`nav-menu ${isOpen ? "active" : ""}`}>
        <li className="nav-item">
          <Link to="/" className="nav-link" onClick={closeAllDropdowns}>
            Home
          </Link>
        </li>

        <li className="nav-item dropdown">
          <span
            className="nav-link"
            onClick={() => {
              closeAllDropdowns();
              setShowAboutDropdown(!showAboutDropdown);
            }}
          >
           <Link to="/about" className="about">About</Link><i className="fas fa-chevron-down" style={{ fontSize: "8px" }}></i>
          </span>
          <div className={`dropdown-menu ${showAboutDropdown ? "show" : ""}`}>
            <p>
              <Link to="/about/legacy">Legacy</Link>
            </p>
            <p>
              <Link to="/about/timeline">Time line</Link>
            </p>
            <p>
              <Link to="/about/team">Team</Link>
            </p>
          </div>
        </li>
        <div className="nav-item dropdown">
      <span
        className="nav-link"
        onClick={() => {
          closeAllDropdowns();
          setShowTrustDropdown(!showTrustDropdown);
        }}
      >
        Trust Areas <i className="fas fa-chevron-down" style={{ fontSize: "8px" }}></i>
      </span>
      <div className={`dropdown-menu ${showTrustDropdown ? "show" : ""}`}>
        <p onClick={(e) => {
          e.stopPropagation();
          setShowEducationSubMenu(!showEducationSubMenu);
          setShowSkillDevSubMenu(false);
        }}>
          <span>Education <i className="fas fa-chevron-right" style={{ fontSize: "8px" }}></i></span>
          {showEducationSubMenu && (
            <ul className="sub-dropdown">
              <li><Link to="/trust-areas/education/rhs">Residential High School</Link></li>
              <li><Link to="/trust-areas/education/tribalEd">Tribal Primary Education</Link></li>
            </ul>
          )}
        </p>
        <p onClick={(e) => {
          e.stopPropagation();
          setShowSkillDevSubMenu(!showSkillDevSubMenu);
          setShowEducationSubMenu(false);
        }}>
          <span>Skill Development <i className="fas fa-chevron-right" style={{ fontSize: "8px" }}></i></span>
          {showSkillDevSubMenu && (
            <ul className="sub-dropdown">
              <li><Link to="/trust-areas/skill-dev/Iti">ITI</Link></li>
              <li><Link to="/trust-areas/skill-dev/smart-centers">Smart Centers</Link></li>
            </ul>
          )}
        </p>
        <p><Link to="/trust-areas/pwds">Rehab of PWDs</Link></p>
        <p><Link to="/trust-areas/agri">Agriculture</Link></p>
        <p><Link to="/trust-areas/community">Community Organization</Link></p>
      </div>
    </div>

        <li className="nav-item">
          <Link to="/careers" className="nav-link" onClick={closeAllDropdowns}>
            Careers
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/contact" className="nav-link" onClick={closeAllDropdowns}>
            Contact
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/blog" className="nav-link" onClick={closeAllDropdowns}>
            Blog
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/support" className="nav-link support-btn" onClick={closeAllDropdowns}>
            Support Us
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
 