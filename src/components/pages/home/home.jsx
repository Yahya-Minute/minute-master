import React, { useContext, useEffect } from "react";
import { motion } from "framer-motion";
import { LanguageContext } from "../../../utility/LanguageContext"; // Import context
import Home from "../../../assets/home/cover.png";
import One from "../../../assets/home/1.png";
import Two from "../../../assets/home/2.png";
import Three from "../../../assets/home/3.png";
import Four from "../../../assets/home/4.png";
import FiveFive from "../../../assets/home/55.png";
import "./home.css";

const HomePage = () => {
  const { language, toggleLanguage } = useContext(LanguageContext); // Access language context

  // Translations for both languages
  const texts = {
    en: {
      heading: "With us, a minute makes a difference, and you arrive safely on time",
      description: "Designed to save time, earn rewards, and ensure you reach your destination safely. Your trip is just a click away — tap to enjoy the ride.",
      subheading: "Minute Makes a Difference",
      appsTitle: "Get Apps",
      googlePlay: "Google Play",
      appStore: "App Store",
      feature1: "The easiest to use",
      feature1Description: "We designed it to be easy to use and quick to order",
      getApp: "Get the App",
      downloadApp: "Download the app now and get started",
    },
    ar: {
      heading: "معنا، دقيقة تحدث فرقًا، وتصل بأمان في الوقت المحدد",
      description: "تم تصميمه لتوفير الوقت، وكسب المكافآت، وضمان وصولك إلى وجهتك بأمان. رحلتك على بعد نقرة واحدة — انقر للاستمتاع بالرحلة.",
      subheading: "الدقيقة تحدث فرقًا",
      appsTitle: "احصل على التطبيقات",
      googlePlay: "جوجل بلاي",
      appStore: "متجر التطبيقات",
      feature1: "أسهل استخدامًا",
      feature1Description: "لقد صممناها لتكون سهلة الاستخدام وسريعة الطلب",
      getApp: "احصل على التطبيق",
      downloadApp: "قم بتنزيل التطبيق الآن وابدأ",
    },
  };

  const currentText = texts[language];

  // Effect to change direction (rtl/ltr) on language change
  useEffect(() => {
    // Apply RTL/LTR based on selected language
    document.documentElement.classList.toggle('rtl', language === 'ar');
    document.documentElement.classList.toggle('ltr', language === 'en');
  }, [language]);

  return (
    <div id="home" className="home-page">
      <div className="home-page-min">
        <div className="welcome-container-min">
          <motion.h2
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {currentText.heading}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {currentText.description}
          </motion.p>
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {currentText.subheading}
          </motion.h3>
          <br />
          <h4>{currentText.appsTitle}</h4>
          <ul className="app-links">
            <motion.li
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <button className="app-link-min">{currentText.googlePlay}</button>
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <button className="app-link-min">{currentText.appStore}</button>
            </motion.li>
          </ul>
        </div>
        <div className="image-container-min">
          <motion.img
            src={Home}
            alt="Welcome"
            loading="lazy"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          />
        </div>
      </div>
      <div className="about-container-min">
        <div>
          <ul className="about-content-min">
            {[One, Two, Three].map((img, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <img src={img} alt={`Feature ${index + 1}`} loading="lazy" />
                <h5>{currentText.feature1}</h5>
                <p>{currentText.feature1Description}</p>
              </motion.li>
            ))}
          </ul>
        </div>
        <motion.div
          className="iphone-content-min"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <img src={Four} alt="App preview" loading="lazy" />
        </motion.div>
      </div>
      <div className="app-container-min">
        <div className="image-container-min">
          <motion.img
            src={FiveFive}
            alt="App promo"
            loading="lazy"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          />
        </div>
        <div className="app-content-min">
          <div className="content-min">
            <motion.h4
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              {currentText.getApp}
            </motion.h4>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {currentText.downloadApp}
            </motion.p>
          </div>
          <ul>
            <motion.li
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {currentText.googlePlay}
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {currentText.appStore}
            </motion.li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
