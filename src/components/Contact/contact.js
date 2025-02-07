import { useState ,React} from "react";
import "./contact.css";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const scriptURL = "https://script.google.com/macros/s/AKfycbz35ibTt-Kr6705DmukBdSRNHsxdcfapMjdyjEPcQoW7kQx1HC20fgf9X06aqGII4l8_Q/exec";
  
    try {
      const response = await fetch(scriptURL, {
        method: "POST",
        mode: "no-cors", // Change this to no-cors
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      // Since no-cors doesn't return response data, we'll assume success if no error is thrown
      alert("Form submitted successfully!");
      setFormData({ name: "", email: "", message: "" });
      
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to submit form. Please try again.");
    }
  };
  
  
  

  return (
    <div style={{marginTop:"60px"}} className="contact-page">
      {/* Header Section */}
      <header className="contact-header">
        <h1>Contact Us</h1>
        <p>
          We are available from 9AM to 6PM (IST), Monday to Saturday. Feel free to reach out!
        </p>
      </header>
      <section className="contact-info">
        <div className="contact_card">
          <i  style={{fontSize:"30px",borderRadius:"50%",padding:"15px"}} className="fas fa-map-marker-alt"></i>
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
          <i style={{fontSize:"30px",borderRadius:"50%",padding:"15px"}} className="fas fa-phone-alt"></i>
          <h3>Phone Number</h3>
          <p>
            <a className="phoneNumber" href="tel:+918500359819">+91 8500359819</a>
          </p>
        </div>

        <div className="contact_card contact_center">
          <i  style={{fontSize:"30px",borderRadius:"50%",padding:"15px"}} className="fas fa-envelope"></i>
          <h3>Email</h3>
          <p>
            <a className="phoneNumber" href="mailto:info@bctindia.org">info@bctindia.org</a>
          </p>
        </div>

        <div className="contact_card">
          <i  style={{fontSize:"30px",borderRadius:"50%",padding:"15px"}} className="fas fa-building"></i>
          <h3>Liaison Office</h3>
          <p>
            <a 
              href="https://www.google.com/maps?q=D47-9-38, 3rd Lane, Dwarakanagar, Visakhapatnam" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              47-9-38, 3rd Lane, Dwarakanagar,530016, Visakhapatnam.
            </a>
          </p>
        </div>
      </section>

      {/* Form and Map Section */}
      <section className="contact-details">
        <div className="contact-map">
          <h2 style={{color:"#EC4342"}}>Follow Us</h2>
          <img src="./imgs/contact.png" alt="Contact" />
          <div className="social-links">
            <a 
                href="https://www.facebook.com/bctorg/" 
                className="social-icon"
                target="_blank"
                rel="noopener noreferrer"
            >
                <i className="fab fa-facebook"></i>
            </a>
            <a 
                href="https://x.com/bct_ngo" 
                className="social-icon"
                target="_blank"
                rel="noopener noreferrer"
            >
                <i className="fab fa-twitter"></i>
            </a>
            <a 
                href="https://www.instagram.com/bct_india/?hl=en" 
                className="social-icon"
                target="_blank"
                rel="noopener noreferrer"
            >
                <i className="fab fa-instagram"></i>
            </a>
            <a 
                href="https://www.linkedin.com/company/bctindia/posts/?feedView=all" 
                className="social-icon"
                target="_blank"
                rel="noopener noreferrer"
            >
                <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
        
        


        {/* ////////////////////////// */}
        <div className="contact-form">
          <h2>Get in Touch</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="form-input"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="form-input"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              className="form-textarea"
              value={formData.message}
              onChange={handleChange}
              required
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

