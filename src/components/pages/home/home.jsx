import React from "react";
import { motion } from "framer-motion";
import Home from "../../../assets/home/cover.png";
import One from "../../../assets/home/1.png";
import Two from "../../../assets/home/2.png";
import Three from "../../../assets/home/3.png";
import Four from "../../../assets/home/4.png";
import FiveFive from "../../../assets/home/55.png";
import "./home.css";

const HomePage = () => {
  return (
    <div id="home" className="home-page">
      <div className="home-page-min">
        <div className="welcome-container-min">
          <motion.h2
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            With us, a minute makes a difference, and you arrive safely on time
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Designed to save time, earn rewards, and ensure you reach your destination safely.
            Your trip is just a click away — tap to enjoy the ride.
          </motion.p>
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Minute Makes a Difference
          </motion.h3>
          <br />
          <h4>Get Apps</h4>
          <ul className="app-links">
            <motion.li
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <button className="app-link-min">Google Play</button>
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <button className="app-link-min">App Store</button>
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
                <h5>The easiest to use</h5>
                <p>We designed it to be easy to use and quick to order</p>
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
              Get the App
            </motion.h4>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Download the app now and get started
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
              PlayStore
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              AppStore
            </motion.li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
