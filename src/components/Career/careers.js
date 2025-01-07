import React from "react";
import "./careers.css";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const Careers = () => {
  const address = "Eco Rejuvenation Center, Haripuram, Visakhapatnam, AP";
  const email = "recruitment@bctindia.org";
  const phone = "9948220385";

  return (
    <div className="careers-container">
      <header className="careers-header">
        <h1>Careers at Bhagavatula Charitable Trust</h1>
        <p>Join our mission to make a difference in the community.</p>
      </header>

      <section className="job-opening">
        <h2>Recruitment Notice</h2>
        <p className="highlight">Recruitment for Horticulture Master’s Degree.</p>

        <div className="job-details">
          <h3>Position: Horticulture Specialist</h3>
          <ul>
            <li><strong>Pay Scale:</strong> ₹56100-177500 Level-10 (7th CPC)</li>
            <li><strong>Age Limit:</strong> 35 Years</li>
            <li><strong>No. of Positions:</strong> 1</li>
            <li><strong>Qualifications:</strong> Master’s degree in Horticulture or equivalent qualifications from a Recognized University</li>
          </ul>
        </div>

        <p>
          <strong>Note:</strong> Relaxation in age for SC/ST/OBC/Women & Divyang as per rules. Local language is essential.
        </p>
      </section>

      <section className="application-guidelines">
        <h2>How to Apply</h2>
        <p>Submit your application with the following details:</p>
        <ul>
          <li>Full name (in capital letters), S/o, D/o, W/o.</li>
          <li>Address/Contact No.</li>
          <li>Educational Qualifications from Matriculation to Highest Qualification.</li>
          <li>Attach self-attested photocopies of all certificates.</li>
        </ul>
        <p>
          Last date of receipt of application is <strong>8th May 2024</strong>.
        </p>
      </section>

      <section className="contact-info">
        <h2>Contact Information</h2>
        <p>
          <FaMapMarkerAlt style={{fontSize: "30px"}} className="icon" /> <strong>Address:</strong>{" "}
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {address}
          </a>
        </p>
        <p>
          <FaEnvelope className="icon" /> <strong>Email:</strong>{" "}
          <a href={`mailto:${email}`}>{email}</a>
        </p>
        <p>
          <FaPhone className="icon" /> <strong>Mobile:</strong>{" "}
          <a href={`tel:${phone}`}>{phone}</a>
        </p>
      </section>
    </div>
  );
};

export default Careers;
