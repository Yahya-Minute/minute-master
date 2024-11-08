import React, { useContext, useEffect, useState } from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import { LanguageContext } from "../../../utility/LanguageContext"; // Import context
import Home from "../../../assets/home/cover.png";
import One from "../../../assets/home/1.png";
import Two from "../../../assets/home/2.png";
import Three from "../../../assets/home/3.png";
import Four from "../../../assets/home/4.png";
import FiveFive from "../../../assets/home/55.png";
import "./home.css";
import { FaAppStoreIos, FaApple } from "react-icons/fa";
import { BiLogoPlayStore } from "react-icons/bi";
const HomePage = () => {
  const { language, toggleLanguage } = useContext(LanguageContext); // Access language context
  const [isLoading, setIsLoading] = useState(true); // State for managing loading

   // Parallax effect setup
   const { scrollY } = useViewportScroll();
   const backgroundPositionY = useTransform(scrollY, [0, 1000], ["top", "bottom"]);
 

  // Translations for both languages
  const texts = {
    en: {
      heading:
        "With us, a minute makes a difference, and you arrive safely on time",
      description:
        "Designed to save time, earn rewards, and ensure you reach your destination safely. Your trip is just a click away — tap to enjoy the ride.",
      subheading: "Minute Makes a Difference",
      appsTitle1: "Get Customers Application",
      appsTitle2: "Get Drivers Application",
      googlePlay: "Google Play",
      googlePlayLogo: "Google Play",
      appStore: "App Store",
      appStoreLogo: "App Store",
      feature1: "The easiest to use",
      feature1Description:
        "We designed it to be easy to use and quick to book.",
      feature2: "The safest ",
      feature2Description:
        "We were keen to raise the level of security, we added direct tracking of family members, so that you can be assured of peace of mind.",
      feature3: "The fastest collection ",
      feature3Description:
        "You will not wait long with us to collect your money.",
      getApp: "Get the App",
      downloadApp:
        "Dear partner, you can get the application now from here and register through it ",
    },
    ar: {
      heading: "معنا، دقيقة تحدث فرقًا، وتصل بأمان في الوقت المحدد",
      description: "تم تصميمه لتوفير الوقت، وكسب المكافآت، وضمان وصولك إلى وجهتك بأمان. رحلتك على بعد نقرة واحدة — انقر للاستمتاع بالرحلة.",
      subheading: "الدقيقة تحدث فرقًا",
      appsTitle1: "تطبيق العملاء",
      appsTitle2: "تطبيق السائقين",
      appsTitle: "احصل على التطبيقات",
      googlePlay: "جوجل بلاي",
      appStore: "متجر التطبيقات",
      
      feature1: "الأسهل استخداماً",
      feature1Description: "صممناه ليكون سهل الاستخدام وسريع في الطلب",
      feature2: "الأكثر أماناً",
      feature2Description: "حرصنا على رفع مستوى الأمان وأضفنا لكم التتبع المباشر لأفراد العائلة لتكونوا مطمئني البال",
      feature3: "الأسرع تحصيلاً",
      feature3Description: "لن تنتظروا طويلاً معنا في تحصيل أموالكم",
      getApp: "احصل على التطبيق",
      downloadApp: "قم بتنزيل التطبيق الآن وابدأ"
    }    
  };

  const currentText = texts[language];

  // Effect to change direction (rtl/ltr) on language change
  useEffect(() => {
    // Apply RTL/LTR based on selected language
    document.documentElement.classList.toggle("rtl", language === "ar");
    document.documentElement.classList.toggle("ltr", language === "en");
  }, [language]);

  // Simulate loading process with a delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false); // After 0.5s, hide the loader
    }, 500); // 0.5 seconds delay

    return () => clearTimeout(timer); // Cleanup timer on component unmount
  }, []);

  return (
    <div
      id="home"
      className="home-page"
      style={{
        backgroundImage: `url('data:image/svg+xml;utf8,<svg width="300" height="300" viewBox="0 0 150 150" xmlns="http://www.w3.org/2000/svg"><g transform="translate(75, 75)"><circle r="70" stroke="%234850a1" stroke-width="5" fill="transparent" stroke-dasharray="10, 10" stroke-linecap="round" /><circle r="55" stroke="%23f29d1e" stroke-width="5" fill="transparent" stroke-dasharray="40, 8" stroke-linecap="round" /><circle r="40" stroke="%234850a1" stroke-width="5" fill="transparent" stroke-dasharray="20, 10" stroke-linecap="round" /><circle r="25" stroke="%23f29d1e" stroke-width="5" fill="transparent" stroke-dasharray="80, 10" stroke-linecap="round" /><circle r="10" stroke="%234850a1" stroke-width="5" fill="transparent" stroke-dasharray="10, 10" stroke-linecap="round" /><circle r="0.1" stroke="%23f29d1e" stroke-width="5" fill="transparent" stroke-dasharray="10, 10" stroke-linecap="round" /></g></svg>')`,
        backgroundSize: "300%", // Scale up to show only a part
        backgroundPosition: backgroundPositionY,
        backgroundRepeat: "no-repeat",
      }}
    >
      {isLoading ? (
        // Loader Animation
        <motion.div
          className="loader-container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="loader">Loading...</div>
        </motion.div>
      ) : (
        // Home Page Content after loading
        <motion.div
          className="home-page-min"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="welcome-container-min">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              {currentText.heading}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              {currentText.description}
            </motion.p>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              {currentText.subheading}
            </motion.h3>
            <br />
            <motion.h4
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >{currentText.appsTitle1}</motion.h4>
            <ul className="app-links">
              <motion.li
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
              >
                <a
                  href="https://play.google.com/store/apps/details?id=com.horizons.minute&hl=ar&gl=SA" // Replace with actual link
                  target="_blank"
                  rel="noopener noreferrer"
                  className="app-link-min"
                >
                  <span>
                    
                    <BiLogoPlayStore style={{ marginRight: "5px"}} />
                    </span>
                  {currentText.googlePlay}
                </a>
              </motion.li>
              <motion.li
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                <a
                  href="https://apps.apple.com/sa/app/minute/id1633915418?l=ar" // Replace with actual link
                  target="_blank"
                  rel="noopener noreferrer"
                  className="app-link-min"
                >
                  <span>
                    <FaAppStoreIos style={{ marginRight: "5px" }} />
                    </span>
                  {currentText.appStore}
                </a>
              </motion.li>
              
            </ul>
            <motion.h4
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >{currentText.appsTitle2}</motion.h4>
            <ul className="app-links">
              <motion.li
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
              >
                <a
                  href="https://play.google.com/store/apps/details?id=com.horizons.minutedriver&pcampaignid=web_share" // Replace with actual link
                  target="_blank"
                  rel="noopener noreferrer"
                  className="app-link-min"
                >
                  <BiLogoPlayStore style={{ marginRight: "5px" }} />
                  {currentText.googlePlay}
                </a>
              </motion.li>
              <motion.li
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                <a
                  href="https://apps.apple.com/sa/app/minute-driver/id1634657781?l=ar" // Replace with actual link
                  target="_blank"
                  rel="noopener noreferrer"
                  className="app-link-min"
                >
                  <FaAppStoreIos style={{ marginRight: "5px" }} />
                  {currentText.appStore}
                </a>
              </motion.li>
              
            </ul>
          </div>
          <div className="image-container-min">
            <motion.img
              src={Home}
              alt="Welcome"
              loading="lazy"
              initial={{ opacity: 0, x: language === "ar" ? -100 : 100 }} // Change start position based on language
              animate={{ opacity: 1, x: 0 }} // Animate to the center
              transition={{ duration: 1 }}
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </div>
        </motion.div>
      )}
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
                <img src={img} alt="Feature" loading="lazy" />
                <h5>{currentText[`feature${index + 1}`]}</h5>
                <p>{currentText[`feature${index + 1}Description`]}</p>
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
              style={{
                fontFamily:
                  language === "ar" ? "Noto Kufi Arabic" : "Josefin Sans",
              }}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {currentText.downloadApp}
            </motion.p>
          </div>
          <ul className="app-cont">
            <motion.li
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <a
                href="https://play.google.com/store" // Replace with actual Google Play link
                target="_blank"
                rel="noopener noreferrer"
                className="app-cont"
              >
                <BiLogoPlayStore style={{ marginRight: "5px" }} />
                {currentText.googlePlay}
              </a>
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <a
                href="https://www.apple.com/app-store/" // Replace with actual App Store link
                target="_blank"
                rel="noopener noreferrer"
                className="app-cont"
              >
                <FaApple style={{ marginRight: "5px" }} />
                {currentText.appStore}
              </a>
            </motion.li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
