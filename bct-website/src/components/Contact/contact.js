import React from "react";
import "./contact.css";

const ContactUs = () => {
  return (
    <div style={{marginTop:"60px"}} className="contact-page">
      {/* Header Section */}
      <header className="contact-header">
        <h1>Contact Us</h1>
        <p>
          We are available from 9AM to 6PM (IST), Monday to Saturday. Feel free to reach out!
        </p>
      </header>

      {/* Contact Info Cards */}
      <section className="contact-info">
        <div className="contact_card">
          <i  style={{backgroundColor:"#2d6a4f",borderRadius:"50%",padding:"15px"}} className="fas fa-map-marker-alt"></i>
          <h3>Eco Rejuvenation Center</h3>
          <p>
            <a 
              href="https://www.google.com/maps?q=Haripuram, Visakhapatnam – 531061" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Bhagavatula Charitable Trust, Haripuram, Visakhapatnam – 531061
            </a>
          </p>
        </div>

        <div className="contact_card contact_center">
          <i style={{backgroundColor:"#2d6a4f",borderRadius:"50%",padding:"15px"}} className="fas fa-phone-alt"></i>
          <h3>Phone Number</h3>
          <p>
            <a className="phoneNumber" href="tel:+918500359819">+91 8500359819</a>
          </p>
        </div>

        <div className="contact_card contact_center">
          <i  style={{backgroundColor:"#2d6a4f",borderRadius:"50%",padding:"15px"}} className="fas fa-envelope"></i>
          <h3>Email</h3>
          <p>
            <a className="phoneNumber" href="mailto:info@bctindia.org">info@bctindia.org</a>
          </p>
        </div>

        <div className="contact_card">
          <i  style={{backgroundColor:"#2d6a4f",borderRadius:"50%",padding:"15px"}} className="fas fa-building"></i>
          <h3>Liaison Office</h3>
          <p>
            <a 
              href="https://www.google.com/maps?q=D47-9-38, 3rd Lane, Dwarakanagar, Visakhapatnam" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              D47-9-38, 3rd Lane, Dwarakanagar, Visakhapatnam
            </a>
          </p>
        </div>
      </section>

      {/* Form and Map Section */}
      <section className="contact-details">
        <div className="contact-map">
          <h2>Follow Us</h2>
          <img src="./imgs/contact.png" alt="Contact" />
          <div className="social-links">
            <a href="https://www.facebook.com/bctorg/" className="social-icon">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https://x.com/bct_ngo" className="social-icon">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://www.instagram.com/bct_india/?hl=en" className="social-icon">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://www.linkedin.com/company/bctindia/posts/?feedView=all" className="social-icon">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
        <div className="contact-form">
          <h2>Get in Touch</h2>
          <form>
            <input
              type="text"
              placeholder="Your Name"
              className="form-input"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="form-input"
            />
            <textarea
              placeholder="Your Message"
              className="form-textarea"
            ></textarea>
            <button type="submit" className="submit-button">
              Submit
            </button>
          </form>
        </div>
      </section>
     
    </div>
  );
};

export default ContactUs;

