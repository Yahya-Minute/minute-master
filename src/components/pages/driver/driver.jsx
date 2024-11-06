import React, { useState } from "react";
import { motion } from "framer-motion";
import "./driver.css";

const Driver = () => {
  const [formData, setFormData] = useState({
    governmentId: "",
    email: "",
    phone: "",
    isHuman: false,
  });

  const [submitted, setSubmitted] = useState(false);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.isHuman) {
      setSubmitted(true);
      // Add registration logic here
      console.log("Driver registration data:", formData);
    } else {
      alert("Please verify you are not a robot.");
    }
  };

  return (
      <div className="driver-reg">

      <motion.div
      className="driver-registration"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      >
      <h2>Driver Registration Portal</h2>
      <p>Register as a driver by filling in your details below.</p>
      
      {submitted ? (
          <div className="success-message">
          <h3>Registration Successful!</h3>
          <p>Thank you for registering as a driver. We’ll be in touch soon.</p>
        </div>
      ) : (
          <form onSubmit={handleSubmit} className="driver-form">
          <label htmlFor="governmentId">Saudi Government ID</label>
          <input
            type="text"
            id="governmentId"
            name="governmentId"
            value={formData.governmentId}
            onChange={handleChange}
            placeholder="Enter your Saudi ID"
            required
            />

          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
            />

          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter your phone number"
            required
            />

          <div className="captcha-check">
            <input
              type="checkbox"
              id="isHuman"
              name="isHuman"
              checked={formData.isHuman}
              onChange={handleChange}
              required
              />
            <label htmlFor="isHuman">I am not a robot</label>
          </div>

          <motion.button
            type="submit"
            className="submit-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            >
            Register
          </motion.button>
        </form>
      )}
    </motion.div>
      </div>
  );
};

export default Driver;
