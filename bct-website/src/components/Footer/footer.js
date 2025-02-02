import React from 'react';
import './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faMapMarkerAlt, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_container">
        {/* NGO Name Section */}
        <div className="footer-section">
          <img src='https://www.bctindia.org/wp-content/uploads/2022/06/bct_logo.png' alt='' />
          <p className="footer-description">
          Making a difference in communities through sustainable development and empowerment initiatives.
          </p>
          <div className="footer-social-icons">
            <a href="https://x.com/bct_ngo" className="social-icons">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="https://www.instagram.com/bct_india/?hl=en" className="social-icons">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://www.linkedin.com/company/bctindia/posts/?feedView=all" className="social-icons">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
        </div>

        {/* Quick Links Section */}
        <div className="footer-section">
          <h4 className="footer-title">Quick Links</h4>
          <ul className="footer-links">

            <li><Link to ="/about">About Us</Link></li>
            {/* <li><Link to ="/trust-areas">Trust Areas</Link></li> */}
            <li><Link to ="/blog">Blogs</Link></li>
            <li><Link to ="/support">Support Us</Link></li>
            <li><Link to ="/contact">Contact Us</Link></li>
          </ul>
        </div>

        {/* Contact Info Section */}
        <div className="footer-section " style={{color:""}}>
          <h4 className="footer-title">Contact Info</h4>
          <p>
            <FontAwesomeIcon icon={faMapMarkerAlt} className="icon" /> <a className='ContactDetailsColor'  href='https://www.google.com/maps/search/Bhagavatula+Charitable+Trust+Eco+Rejuvenation+Centre+Haripuram+%E2%80%93+531061+Visakhapatnam+district/@17.5449059,82.9424231,17z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI1MDEyMC4wIKXMDSoASAFQAw%3D%3D'> Bhagavatula Charitable Trust Eco Rejuvenation Centre Haripuram – 531061 Visakhapatnam district</a>
          </p>
          <p>
            <FontAwesomeIcon icon={faEnvelope} className="icon" /> <a className='ContactDetailsColor' href='mailTo:info@bctindia.org'>info@bctindia.org</a>
          </p>
          <p>
            <FontAwesomeIcon icon={faPhone} className="icon" /> <a className='ContactDetailsColor' href='Tel:+91 8500359819'> +91 8500359819</a>
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
          <p>© 2024 Bhagavatula Charitable Trust. All rights reserved.</p>
        </div>
       
      </div>
    </footer>
  );
};

export default Footer;
