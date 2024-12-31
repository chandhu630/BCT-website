import React, { useState } from "react";
import "./VolunteersForm.css";
import Footer from "./Footer";

const VolunteersForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    startDate: "",
    weeks: "",
    phone: "",
    area: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const scriptURL =
      "https://script.google.com/macros/s/AKfycbydKRt0VuE41hc6lWFIFkP67VsxvM-ZocQ_2GBypDfP_epDWAjOX1vCg-ZCuSCsVYIf/exec";

    try {
      await fetch(scriptURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
        mode: "no-cors", // Temporary workaround to bypass CORS issues
      });

      alert("Submitted Successfully");
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred. Please try again.");
    } finally {
      setFormData({
        email: "",
        name: "",
        startDate: "",
        weeks: "",
        phone: "",
        area: "",
        message: "",
      });
    }
  };

  return (
    <div className="main">
    <div className="form-container">
      <div className="form-left">
        <h2>Support us with your time and skills in an activity of your choosing.</h2>
        <ul>
          <li>Residential High School</li>
          <li>Agriculture</li>
          <li>Community Development</li>
          <li>Help Physically Challenged</li>
          <li>Skill Development</li>
        </ul>
      </div>
      <form className="form-right" onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter a valid email address"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your Name"
              required
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="startDate">Start Date</label>
            <input
              type="date"
              id="startDate"
              name="startDate"
              value={formData.startDate}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="weeks">Number of Weeks</label>
            <input
              type="number"
              id="weeks"
              name="weeks"
              value={formData.weeks}
              onChange={handleChange}
              placeholder="Enter number of weeks"
              required
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone (e.g. +91)"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="area">Interested Area</label>
            <select
              id="area"
              name="area"
              value={formData.area}
              onChange={handleChange}
              required
            >
              <option value="">Select an area</option>
              <option value="Residential High School">Residential High School</option>
              <option value="Agriculture">Agriculture</option>
              <option value="Community Development">Community Development</option>
              <option value="Help Physically Challenged">Help Physically Challenged</option>
              <option value="Skill Development">Skill Development</option>
            </select>
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Enter your message"
              required
            ></textarea>
          </div>
        </div>
        <button type="submit" className="submit-button">Submit</button>
        <p className="form-footer">
          Thank you for choosing to volunteer with us. Someone from our team will
          get in touch with you shortly. For more information, you can also call us at
          <strong> 8500359819</strong>.
        </p>
      </form>
    </div>
    <div className="footerDiv">
    <Footer />
    </div>
   
    </div>
  );
};

export default VolunteersForm;
