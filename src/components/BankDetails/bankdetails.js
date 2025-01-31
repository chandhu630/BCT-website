import React from 'react';
import './bankdetails.css';
import Footer from '../Footer/footer';


const BankDetailsPage = () => {
  return (
    <div className="bank-details-container">
      {/* Hero Section */}
      <div className="donation-hero">
        <div className="hero-overlay">
          <img src="./imgs/bct.png" alt="BCT Logo" className="bct-logo" />
          <h1>Make a Donation</h1>
          <p>Supporting positive change in communities</p>
        </div>
      </div>

      {/* Thank You Message */}
      <div className="thank-you-section">
        <div className="message-container">
          <i className="fas fa-heart heart-icon"></i>
          <h2>Thank You for Your Support</h2>
          <p>BCT Management and Staff would like to thank you for considering a donation. 
             You can do the transfer in INR only.</p>
        </div>
      </div>

      {/* Bank Details Card */}
      <div className="bank-details-section">
        <div className="bank-card">
          <div className="card-header">
            <img src="./imgs/sbilogo.png" alt="SBI Logo" className="bank-logo" />
            <h3>Bank Transfer Details</h3>
          </div>
          
          <div className="details-grid">
            <div className="detail-item">
              <div className="detail-label">
                <i className="fas fa-user"></i>
                Account Name
              </div>
              <div className="detail-value">Bhagavatula Charitable Trust</div>
            </div>

            <div className="detail-item">
              <div className="detail-label">
                <i className="fas fa-credit-card"></i>
                Account Number
              </div>
              <div className="detail-value copyable">
                52045765086
                <button className="copy-btn" onClick={() => navigator.clipboard.writeText('52045765086')}>
                  <i className="fas fa-copy"></i>
                </button>
              </div>
            </div>

            <div className="detail-item">
              <div className="detail-label">
                <i className="fas fa-university"></i>
                Bank Name
              </div>
              <div className="detail-value">State Bank of India</div>
            </div>

            <div className="detail-item">
              <div className="detail-label">
                <i className="fas fa-code"></i>
                IFSC Code
              </div>
              <div className="detail-value copyable">
                SBIN0020380
                <button className="copy-btn" onClick={() => navigator.clipboard.writeText('SBIN0020380')}>
                  <i className="fas fa-copy"></i>
                </button>
              </div>
            </div>

            <div className="detail-item full-width">
              <div className="detail-label">
                <i className="fas fa-map-marker-alt"></i>
                Branch Address
              </div>
              <div className="detail-value">Dwarakanagar Branch, Near Diamond park, Visakhapatnam</div>
            </div>
          </div>

          <div className="note-section">
            <p><i className="fas fa-info-circle"></i> Please save the transaction details for your reference</p>
          </div>
        </div>
      </div>

      {/* Support Section */}
      <div className="support-section">
        <h3>Need Help?</h3>
        <p>If you have any questions about making a donation, please contact us:</p>
        <div className="contact-buttons">
            <a href="tel:+91 8500359819" className="contact">
                <i className="fas fa-phone"></i> Call Us
            </a>
            <a href="mailto:support@bct.org" className="contact">
                <i className="fas fa-envelope"></i> Email Us
            </a>

        </div>
      </div>
      {/* <Footer/> */}
    </div>
  );
};

export default BankDetailsPage;