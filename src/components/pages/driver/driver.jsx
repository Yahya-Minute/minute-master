import React, { useState, useContext } from "react";
import { motion } from "framer-motion";
import { LanguageContext } from "../../../utility/LanguageContext"; // Import language context
import "./driver.css";

const Driver = () => {
  const [formData, setFormData] = useState({
    governmentId: "",
    email: "",
    phone: "",
    isHuman: false,
  });

  const [submitted, setSubmitted] = useState(false);

  const { language } = useContext(LanguageContext); // Access current language from context

  // Translations for placeholders based on language
  const placeholders = {
    en: {
      governmentId: "Enter your Saudi ID",
      email: "Enter your email",
      phone: "Enter your phone number",
      captcha: "I am not a robot",
    },
    ar: {
      governmentId: "أدخل رقم الهوية السعودية",
      email: "أدخل بريدك الإلكتروني",
      phone: "أدخل رقم هاتفك",
      captcha: "أنا لست روبوتًا",
    },
  };

  const currentPlaceholders = placeholders[language];

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
    <div
      className="driver-reg"
      dir={language === "ar" ? "rtl" : "ltr"} // Set text direction based on language
    >
      <motion.div
        className="driver-registration"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2>{language === "en" ? "Driver Registration Portal" : "بوابة تسجيل السائق"}</h2>
        <p>
          {language === "en"
            ? "Register as a driver by filling in your details below."
            : "سجل كسائق عن طريق تعبئة بياناتك أدناه."}
        </p>

        {submitted ? (
          <div className="success-message">
            <h3>{language === "en" ? "Registration Successful!" : "تم التسجيل بنجاح!"}</h3>
            <p>
              {language === "en"
                ? "Thank you for registering as a driver. We’ll be in touch soon."
                : "شكرًا لتسجيلك كسائق. سنتواصل معك قريبًا."}
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="driver-form">
            <input
              type="text"
              id="governmentId"
              name="governmentId"
              value={formData.governmentId}
              onChange={handleChange}
              placeholder={currentPlaceholders.governmentId}
              required
            />

            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder={currentPlaceholders.email}
              required
            />

            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder={currentPlaceholders.phone}
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
              <span>{currentPlaceholders.captcha}</span>
            </div>

            <motion.button
              type="submit"
              className="submit-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {language === "en" ? "Register" : "تسجيل"}
            </motion.button>
          </form>
        )}
      </motion.div>
    </div>
  );
};

export default Driver;
