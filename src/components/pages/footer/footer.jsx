import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { FaWhatsapp, FaTwitter, FaInstagram, FaLinkedin, FaApple } from 'react-icons/fa';
import Logo from '../../../assets/logo/logo.png';  // Replace with the path to your logo
import './footer.css'
const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-content">
        
        {/* Logo and Description */}
        <div className="footer-section">
          <img src={Logo} alt="Minute Logo" className="footer-logo" />
          <p>
            Our services within the Kingdom of Saudi Arabia, whether for transportation within
            cities or from one city to another, and not only that, there are more
          </p>
          <div className="social-icons">
            <FaWhatsapp />
            <FaTwitter />
            <FaInstagram />
            <FaLinkedin />
            <FaApple />
          </div>
        </div>
        
        {/* Contact Information */}
        <div className="footer-section">
          <h3>Connect With Us</h3>
          <p><FaMapMarkerAlt /> Khalid ibn walid road, Ghirnatah, Riyadh</p>
          <p><FaPhoneAlt /> +966581298888</p>
          <p><FaEnvelope /> info@minute.com.sa</p>
        </div>

        {/* Site Policy Links */}
        <div className="footer-section">
          <h3>Site Policy</h3>
          <a href="/terms">Terms And Conditions</a>
          <a href="/privacy">Privacy Policy</a>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} All Rights Reserved To MINUTE</p>
      </div>
    </div>
  );
};

export default Footer;
