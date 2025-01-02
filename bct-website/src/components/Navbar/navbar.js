import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

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
    closeAllDropdowns();
  };

  return (
    <nav className="navbar">
      <div className="nav-brand">
        <Link to="/" className="nav-logo">
          <img
            style={{ height: "45px", width: "170px" }}
            src="./imgs/bct.png"
            alt="Logo"
          />
        </Link>
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        <span className={`bar ${isOpen ? "active" : ""}`}></span>
        <span className={`bar ${isOpen ? "active" : ""}`}></span>
        <span className={`bar ${isOpen ? "active" : ""}`}></span>
      </div>

      <ul className={`nav-menu ${isOpen ? "active" : ""}`}>
        <li className="nav-item">
          <Link to="/" className="nav-link" onClick={toggleMenu}>
            Home
          </Link>
        </li>

        <li className="nav-item dropdown">
          <span
            className="nav-link"
            onClick={() => {
              setShowAboutDropdown(!showAboutDropdown);
              setShowTrustDropdown(false);
            }}
          >
            About <i className="fas fa-chevron-down"></i>
          </span>
          <div className={`dropdown-menu ${showAboutDropdown ? "show" : ""}`}>
            <p>
              <Link to="/legacy" onClick={toggleMenu}>
                Legacy
              </Link>
            </p>
            <p>
              <Link to="/timeline" onClick={toggleMenu}>
                Timeline
              </Link>
            </p>
            <p>
              <Link to="/team" onClick={toggleMenu}>
                Team
              </Link>
            </p>
          </div>
        </li>

        <li className="nav-item dropdown">
          <span
            className="nav-link"
            onClick={() => {
              setShowTrustDropdown(!showTrustDropdown);
              setShowAboutDropdown(false);
            }}
          >
            Thrust Areas <i className="fas fa-chevron-down"></i>
          </span>
          <div className={`dropdown-menu ${showTrustDropdown ? "show" : ""}`}>
            <p
              onClick={(e) => {
                e.stopPropagation();
                setShowEducationSubMenu(!showEducationSubMenu);
                setShowSkillDevSubMenu(false);
              }}
            >
              Education <i className="fas fa-chevron-right"></i>
            </p>
            {showEducationSubMenu && (
              <ul className="sub-dropdown">
                <li>
                  <Link to="/trust-areas/education/rhs" onClick={toggleMenu}>
                    Residential High School
                  </Link>
                </li>
                <li>
                  <Link to="/trust-areas/education/tribalEd" onClick={toggleMenu}>
                    Tribal Primary Education
                  </Link>
                </li>
              </ul>
            )}

            <p
              onClick={(e) => {
                e.stopPropagation();
                setShowSkillDevSubMenu(!showSkillDevSubMenu);
                setShowEducationSubMenu(false);
              }}
            >
              Skill Development <i className="fas fa-chevron-right"></i>
            </p>
            {showSkillDevSubMenu && (
              <ul className="sub-dropdown">
                <li>
                  <Link to="/trust-areas/skill-dev/Iti" onClick={toggleMenu}>
                    ITI
                  </Link>
                </li>
                <li>
                  <Link to="/trust-areas/skill-dev/smart-centers" onClick={toggleMenu}>
                    Smart Centers
                  </Link>
                </li>
              </ul>
            )}

            <p>
              <Link to="/trust-areas/pwds" onClick={toggleMenu}>
                Rehab of PWDs
              </Link>
            </p>
            <p>
              <Link to="/trust-areas/agri" onClick={toggleMenu}>
                Agriculture
              </Link>
            </p>
            <p>
              <Link to="/trust-areas/community" onClick={toggleMenu}>
                Community Organization
              </Link>
            </p>
          </div>
        </li>

        <li className="nav-item">
          <Link to="/career" className="nav-link" onClick={toggleMenu}>
            Careers
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/contact" className="nav-link" onClick={toggleMenu}>
            Contact
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/blog" className="nav-link" onClick={toggleMenu}>
            Blog
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/support"
            className="nav-link support-btn"
            onClick={toggleMenu}
          >
            Support Us
          </Link>
        </li>
        
      </ul>
    </nav>
  );
};

export default Navbar;
