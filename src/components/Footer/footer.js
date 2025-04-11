import React from 'react';
import './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faMapMarkerAlt, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Footer = () => {
  const handleYouTubeSubscribe = () => {
    // YouTube channel URL
    const channelUrl = "https://www.youtube.com/@bhagavatulacharitabletrust5564";
    
    // Open YouTube channel in a new tab
    window.open(channelUrl, '_blank', 'noopener,noreferrer');
  };
  return (
    <footer className="footer">
      <div className="footer_container">
        {/* NGO Name Section */}
        <div className="footer-section">
          <img src='https://www.bctindia.org/wp-content/uploads/2022/06/bct_logo.png' alt='' />
          <p className='footer_bright' >
          Making a difference in communities through sustainable development and empowerment initiatives.
          </p>
          <div className="footer-social-icons">
          <a 
              href="https://www.facebook.com/bctorg/" 
              className="social-icons"
              style={{color:"#1877F2"}}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook"></i>
            </a>
            <a 
              href="https://x.com/bct_ngo" 
              className="social-icons"
              style={{color: "rgb(56, 53, 53)"}}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a 
              href="https://www.instagram.com/bct_india/?hl=en" 
              className="social-icons"
              style={{color:"#E4405F"}}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a 
              href="https://www.linkedin.com/company/bctindia/posts/?feedView=all" 
              className="social-icons"
              style={{color:"#0077B5"}}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
        </div>

        {/* Quick Links Section */}
        <div className="footer-section">
          <h4 className="footer-title1">Quick Links</h4>
          <ul className="footer-links">

            <li><Link to ="/about">About Us</Link></li>
            {/* <li><Link to ="/trust-areas">Trust Areas</Link></li> */}
            <li><Link to ="/blog">Blogs</Link></li>
            <li><Link to ="/support">Support Us</Link></li>
            <li><Link to ="/contact">Contact Us</Link></li>
           
            
          </ul>
        </div>

        {/* Contact Info Section */}
        <div className="footer-section">
          <h4 className="footer-title">Contact Info</h4>
          <p>
            <FontAwesomeIcon icon={faMapMarkerAlt} className="icon" /> 
            <a 
              className='ContactDetailsColor' 
              href='https://www.google.com/maps/search/Bhagavatula+Charitable+Trust+Eco+Rejuvenation+Centre+Haripuram+%E2%80%93+531061+Visakhapatnam+district/@17.5449059,82.9424231,17z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI1MDEyMC4wIKXMDSoASAFQAw%3D%3D'
              target="_blank"
              rel="noopener noreferrer"
            >
              Bhagavatula Charitable Trust Eco Rejuvenation Centre Haripuram – 531061 Anakapalle district
            </a>
          </p>
          <p>
            <FontAwesomeIcon icon={faEnvelope} className="icon" /> 
            <a 
              className='ContactDetailsColor' 
              href='mailTo:info@bctindia.org'
              target="_blank"
              rel="noopener noreferrer"
            >
              info@bctindia.org
            </a>
          </p>
          <p>
            <FontAwesomeIcon icon={faPhone} className="icon" /> 
            <a 
              className='ContactDetailsColor' 
              href='Tel:+91 9247269745'
              target="_blank"
              rel="noopener noreferrer"
            >
              +91 9247269745
            </a>
          </p>
        </div>

        {/* Newsletter Section */}
        <div className="footer-section">
          <h4 className="footer-title">Links</h4>
          <div>
            <Link to ="/newsletter" className='newsletter-footer'>Newsletter</Link>
          </div>
          
          <p className='footer_bright'>Subscribe to our newsletter for updates and news.</p>
            <button
             onClick={handleYouTubeSubscribe}
              className="newsletter-button">Subscribe</button>
        </div>
      </div>
      <div className="footer-bottom">
        <p className='footer_bright'>© 2024 Bhagavatula Charitable Trust. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
