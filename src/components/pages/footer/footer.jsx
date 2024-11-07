import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { FaWhatsapp, FaTwitter, FaInstagram, FaLinkedin, FaApple } from 'react-icons/fa';
import Logo from '../../../assets/logo/logo.png';  // Replace with the path to your logo
import './footer.css';

const footer_content = {
  en: {
    summary: [
      "Our services within the Kingdom of Saudi Arabia, whether for transportation within cities or from one city to another, and not only that, there are more."
    ],
    connectwithus: [
      "Khalid ibn walid road, Ghirnatah, Riyadh",
      "+966581298888",
      "info@minute.com.sa"
    ],
    sitePolicy: [
      { label: "Terms And Conditions", link: "/terms" },
      { label: "Privacy Policy", link: "/privacy" }
    ],
  },
  ar: {
    summary: [
      "خدماتنا داخل المملكة العربية السعودية، سواء للتنقل داخل المدن أو من مدينة إلى أخرى، وليس ذلك فقط، بل هناك المزيد."
    ],
    connectwithus: [
      "طريق خالد بن الوليد، غرناطة، الرياض",
      "+966581298888",
      "info@minute.com.sa"
    ],
    sitePolicy: [
      { label: "الشروط والأحكام", link: "/termsandconditions" },
      { label: "سياسة الخصوصية", link: "/privacy" }
    ],
  },
};

const Footer = ({ language = "en" }) => {
  const content = footer_content[language];

  return (
    <div className="footer-container">
      <div className="footer-content">
        
        {/* Logo and Description */}
        <div className="footer-section">
          <img src={Logo} alt="Minute Logo" className="footer-logo" />
          <p>{content.summary[0]}</p>
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
          <h3>{language === 'en' ? 'Connect With Us' : 'تواصل معنا'}</h3>
          <div className='loc-min'>
            <p><FaMapMarkerAlt /> {content.connectwithus[0]}</p>
            <p><FaPhoneAlt /> {content.connectwithus[1]}</p>
            <p><FaEnvelope /> {content.connectwithus[2]}</p>
          </div>
        </div>

        {/* Site Policy Links */}
        <div className="footer-section">
          <h3>{language === 'en' ? 'Site Policy' : 'سياسة الموقع'}</h3>
          {content.sitePolicy.map((policy, index) => (
            <a key={index} href={policy.link}>{policy.label}</a>
          ))}
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} {language === 'en' ? 'All Rights Reserved To MINUTE' : 'جميع الحقوق محفوظة لشركة دقيقة'}</p>
      </div>
    </div>
  );
};

export default Footer;
