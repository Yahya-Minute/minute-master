import React from "react";
import { useLanguage } from "../../../utility/LanguageContext"; // Correct import of useLanguage
import { motion } from "framer-motion"; // Import Framer Motion
import './termsandconditions.css'

const TermsAndConditions = () => {
  const { language } = useLanguage(); // Get the current language from the context

  // Define Terms and Conditions in English and Arabic
  const termsContent = {
    en: {
      title: "Terms and Conditions",
      intro: "Welcome to our Terms and Conditions page. Please read carefully.",
      section1: "1. Introduction",
      section2: "2. User Responsibilities",
      section3: "3. Limitation of Liability",
      footer: "Thank you for reading.",
    },
    ar: {
      title: "الشروط والأحكام",
      intro: "مرحبًا بك في صفحة الشروط والأحكام. يرجى قراءتها بعناية.",
      section1: "1. المقدمة",
      section2: "2. مسؤوليات المستخدم",
      section3: "3. تحديد المسؤولية",
      footer: "شكرًا لقراءتك.",
    },
  };

  const currentTerms = termsContent[language];

  return (
    <div className={`terms-conditions ${language === "ar" ? "rtl" : ""}`}>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {currentTerms.title}
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        {currentTerms.intro}
      </motion.p>

      <motion.h3
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        {currentTerms.section1}
      </motion.h3>
      <motion.p
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.7 }}
      >
        Details about the introduction...
      </motion.p>

      <motion.h3
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.9 }}
      >
        {currentTerms.section2}
      </motion.h3>
      <motion.p
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.1 }}
      >
        Details about user responsibilities...
      </motion.p>

      <motion.h3
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.3 }}
      >
        {currentTerms.section3}
      </motion.h3>
      <motion.p
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        Details about limitation of liability...
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.7 }}
      >
        {currentTerms.footer}
      </motion.p>
    </div>
  );
};

export default TermsAndConditions;
