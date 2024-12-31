// import React from 'react';
// import './Footer.css';

// const Footer = () => {
//   return (
//     <footer className="footer">
//       <div className="footer-content">
//         {/* Organization Info */}
//         <div className="footer-section">
//           <h3><span className="ngo">BCT</span></h3>
//           <p className="org-description">
//             Making a difference in communities through sustainable development and empowerment initiatives.
//           </p>
//           <div className="social-links">
//             <a href="https://www.facebook.com/bctorg" aria-label="Twitter"><i className="fab fa-facebook"></i></a>
//             <a href="https://x.com/bct_ngo" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
//             <a href="https://www.instagram.com/bct_india/" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
//             <a href="https://www.linkedin.com/company/bctindia/?originalSubdomain=in" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
//           </div>
//         </div>

//         {/* Quick Links */}
//         <div className="footer-section">
//           <h3>Quick Links</h3>
//           <ul>
//             <li><a href="#">Home</a></li>
//             <li><a href="#">About</a></li>
//             <li><a href="#">Trust Areas</a></li>
//             <li><a href="#">Career</a></li>
//             <li><a href="#">Contact Us</a></li>
//             <li><a href="#">Blog</a></li>
//             <li><a href="#">Support</a></li>
//           </ul>
//         </div>

//         {/* Contact Info */}
//         <div className="footer-section">
//           <h3>Contact Info</h3>
//           <div className="contact-info">
//             <p><i className="fas fa-map-marker-alt" style={{ color: "white" }}></i><a href='https://www.google.com/maps/place/Bhagavatula+Charitable+Trust/@17.5449059,82.944998,17z/data=!3m1!4b1!4m6!3m5!1s0x3a39752c859986a5:0x64b6a5bbb40284f2!8m2!3d17.5449059!4d82.944998!16s%2Fg%2F1tdr6lxm?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D'> GWVV+XX9, Veduruvada, Andhra Pradesh 531061</a></p>
//             <p><i className="fas fa-phone" style={{ color: "white" }}></i><a href="tel:08924253770">08924253770</a></p>
//           </div>
//         </div>

//         {/* Newsletter */}
//         <div className="footer-section">
//           <h3>Newsletter</h3>
//           <p>Subscribe to our newsletter for updates and news.</p>
//           <div className="newsletter-form">
//             <input type="email" placeholder="Your email address" />
//             <button type="submit">Subscribe</button>
//           </div>
//         </div>
//       </div>

//       {/* Bottom Bar */}
//       <div className="footer-bottom">
//         <p>&copy; 2024 NGOName. All rights reserved.</p>
//         <div className="footer-bottom-links">
//           <a href="#">Privacy Policy</a>
//           <a href="#">Terms of Service</a>
//           <a href="#">Cookie Policy</a>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faMapMarkerAlt, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* NGO Name Section */}
        <div className="footer-section">
          <img src='https://www.bctindia.org/wp-content/uploads/2022/06/bct_logo.png' alt='' />
          <p className="footer-description">
          Making a difference in communities through sustainable development and empowerment initiatives.
          </p>
          <div className="footer-social-icons">
            <a href="#" className="social-icons">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="#" className="social-icons">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="#" className="social-icons">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
        </div>

        {/* Quick Links Section */}
        <div className="footer-section">
          <h4 className="footer-title">Quick Links</h4>
          <ul className="footer-links">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Our Projects</a></li>
            <li><a href="#">Impact Stories</a></li>
            <li><a href="#">Get Involved</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>

        {/* Contact Info Section */}
        <div className="footer-section">
          <h4 className="footer-title">Contact Info</h4>
          <p>
            <FontAwesomeIcon icon={faMapMarkerAlt} className="icon" /> 123 NGO Street, City Name, Country
          </p>
          <p>
            <FontAwesomeIcon icon={faEnvelope} className="icon" /> info@ngoname.org
          </p>
          <p>
            <FontAwesomeIcon icon={faPhone} className="icon" /> +1 234 567 890
          </p>
        </div>

        {/* Newsletter Section */}
        <div className="footer-section">
          <h4 className="footer-title">Newsletter</h4>
          <p>Subscribe to our newsletter for updates and news.</p>
          <form className="newsletter-form">
            <input
              type="email"
              className="newsletter-input"
              placeholder="Your email address"
            />
            <button type="submit" className="newsletter-button">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-bottom-left">
          <p>© 2024 NGOName. All rights reserved.</p>
        </div>
        <div className="footer-bottom-right">
          <ul className="footer-bottom-links">
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
            <li><a href="#">Cookie Policy</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;