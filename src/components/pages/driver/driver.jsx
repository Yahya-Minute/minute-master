import React, { useState, useContext } from "react";
import { motion } from "framer-motion";
import { LanguageContext } from "../../../utility/LanguageContext";
import "./driver.css";

const Driver = () => {
  const [formData, setFormData] = useState({
    governmentId: "",
    email: "",
    phone: "",
    isHuman: false,
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const { language } = useContext(LanguageContext);

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

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
    setErrors({ ...errors, [name]: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);

    if (formData.isHuman) {
      await new Promise((res) => setTimeout(res, 1000)); // Simulate async
      setSubmitted(true);
    }
    setLoading(false);
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.governmentId) newErrors.governmentId = "Required";
    if (!formData.email) newErrors.email = "Required";
    if (!formData.phone) newErrors.phone = "Required";
    if (!formData.isHuman) newErrors.isHuman = "Please confirm you are not a robot";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  return (
    <div className="driver-reg" dir={language === "ar" ? "rtl" : "ltr"}>
      {/* Left Column for Registration Form */}
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
          <motion.div
            className="success-message"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: 10 }}
            transition={{ duration: 0.7 }}
          >
            <h3>{language === "en" ? "Registration Successful!" : "تم التسجيل بنجاح!"}</h3>
            <p>
              {language === "en"
                ? "Thank you for registering as a driver. We’ll be in touch soon."
                : "شكرًا لتسجيلك كسائق. سنتواصل معك قريبًا."}
            </p>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="driver-form">
            <input
              type="text"
              id="governmentId"
              name="governmentId"
              aria-label="Saudi ID"
              value={formData.governmentId}
              onChange={handleChange}
              placeholder={currentPlaceholders.governmentId}
              className={errors.governmentId ? "error-input" : ""}
              required
            />
            {errors.governmentId && <span className="error-text">{errors.governmentId}</span>}

            <input
              type="email"
              id="email"
              name="email"
              aria-label="Email"
              value={formData.email}
              onChange={handleChange}
              placeholder={currentPlaceholders.email}
              className={errors.email ? "error-input" : ""}
              required
            />
            {errors.email && <span className="error-text">{errors.email}</span>}

            <input
              type="tel"
              id="phone"
              name="phone"
              aria-label="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              placeholder={currentPlaceholders.phone}
              className={errors.phone ? "error-input" : ""}
              required
            />
            {errors.phone && <span className="error-text">{errors.phone}</span>}

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
            {errors.isHuman && <span className="error-text">{errors.isHuman}</span>}

            <motion.button
              type="submit"
              className="submit-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              disabled={loading}
            >
              {loading
                ? language === "en"
                  ? "Registering..."
                  : "جارٍ التسجيل..."
                : language === "en"
                ? "Register"
                : "تسجيل"}
            </motion.button>
          </form>
        )}
      </motion.div>

      {/* Right Column for Information */}
      <div className="right-info">
        <h2>{language === "en" ? "Driver Registration Information" : "معلومات تسجيل السائق"}</h2>
        <p>
          {language === "en"
            ? "Registering as a driver allows you to access exclusive benefits, including access to our driver portal, support resources, and more."
            : "يتيح لك التسجيل كسائق الوصول إلى مزايا حصرية ، بما في ذلك الوصول إلى بوابة السائق الخاصة بنا ، وموارد الدعم ، وأكثر من ذلك."}
        </p>
        <p>
          {language === "en"
            ? "Please ensure that all information provided is accurate to avoid delays in your registration process."
            : "يرجى التأكد من صحة جميع المعلومات المقدمة لتجنب التأخير في عملية التسجيل الخاصة بك."}
        </p>
      </div>
    </div>
  );
};

export default Driver;
