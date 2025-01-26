import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showAboutDropdown, setShowAboutDropdown] = useState(false);
  const [showTrustDropdown, setShowTrustDropdown] = useState(false);
  const [showEducationSubMenu, setShowEducationSubMenu] = useState(false);
  const [showSkillDevSubMenu, setShowSkillDevSubMenu] = useState(false);

  const closeAllDropdowns = () => {
    setShowAboutDropdown(false);
    setShowTrustDropdown(false);
    setShowEducationSubMenu(false);
    setShowSkillDevSubMenu(false);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleNavLinkClick = () => {
    setIsOpen(false);
    closeAllDropdowns();
  };

  return (
    <nav className="navbar">
      <div className="nav-brand">
        <Link to="/" className="nav-logo">
          <img src="./imgs/bct.png" alt="BCT Logo" style={{ height: "80px" ,backgroundColor:"#F2F1E2", borderTopLeftRadius:"50px"}} />
        </Link>
      </div>

      <div className={`hamburger ${isOpen ? "active" : ""}`} onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

      <ul className={`nav-menu ${isOpen ? "active" : ""}`}>
        <li className="nav-item">
          <Link to="/" className="nav-link" onClick={handleNavLinkClick}>
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
            <Link to="/about"  className="nav-link" onClick={handleNavLinkClick}>
              About <i className="fas fa-chevron-down" style={{ fontSize: "8px" }}></i>
            </Link>
          </span>
          <div className={`dropdown-menu ${showAboutDropdown ? "show" : ""}`}>
            <p>
              <Link to="/legacy" onClick={handleNavLinkClick}>
                Legacy
              </Link>
            </p>
            <p>
              <Link to="/timeline" onClick={handleNavLinkClick}>
                Time Line
              </Link>
            </p>
            <p>
              <Link to="/team" onClick={handleNavLinkClick}>
                Team
              </Link>
            </p>
          </div>
        </li>

        <li className="nav-item dropdown">
          <span
            className="nav-link"
            onClick={() => {
              closeAllDropdowns();
              setShowTrustDropdown(!showTrustDropdown);
            }}
          >
            Thrust Areas{" "}
            <i className="fas fa-chevron-down" style={{ fontSize: "8px" }}></i>
          </span>
          <div className={`dropdown-menu ${showTrustDropdown ? "show" : ""}`}>
            <p
              onClick={(e) => {
                e.stopPropagation();
                setShowEducationSubMenu(!showEducationSubMenu);
                setShowSkillDevSubMenu(false);
              }}
            >
              <span>
                Education{" "}
                <i
                  className="fas fa-chevron-right"
                  style={{ fontSize: "8px" }}
                ></i>
              </span>
              {showEducationSubMenu && (
                <ul className="sub-dropdown">
                  <li>
                    <Link
                      to="/trust-areas/education/rhs"
                      onClick={handleNavLinkClick}
                    >
                      Residential High School
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/trust-areas/education/tribalEd"
                      onClick={handleNavLinkClick}
                    >
                      Tribal Primary Education
                    </Link>
                  </li>
                </ul>
              )}
            </p>
            <p
              onClick={(e) => {
                e.stopPropagation();
                setShowSkillDevSubMenu(!showSkillDevSubMenu);
                setShowEducationSubMenu(false);
              }}
            >
              <span>
                Skill Development{" "}
                <i
                  className="fas fa-chevron-right"
                  style={{ fontSize: "8px" }}
                ></i>
              </span>
              {showSkillDevSubMenu && (
                <ul className="sub-dropdown">
                  <li>
                    <Link
                      to="/trust-areas/skill-dev/iti"
                      onClick={handleNavLinkClick}
                    >
                      ITI
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/trust-areas/skill-dev/smart-centers"
                      onClick={handleNavLinkClick}
                    >
                      Smart Centers
                    </Link>
                  </li>
                </ul>
              )}
            </p>
            <p>
              <Link to="/trust-areas/pwds" onClick={handleNavLinkClick}>
                Rehab of PWDs
              </Link>
            </p>
            <p>
              <Link to="/trust-areas/agri" onClick={handleNavLinkClick}>
                Agriculture
              </Link>
            </p>
            <p>
              <Link to="/trust-areas/community" onClick={handleNavLinkClick}>
                Community Organization
              </Link>
            </p>
          </div>
        </li>

        <li className="nav-item">
          <Link to="/contact" className="nav-link" onClick={handleNavLinkClick}>
            Contact
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/blog" className="nav-link" onClick={handleNavLinkClick}>
            Blog
          </Link>
        </li>

        <li className="nav-item">
          <Link
            to="/support"
            className="nav-link support-btn"
            onClick={handleNavLinkClick}
          >
            Support Us
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;