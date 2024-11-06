import React from "react";
import { motion } from "framer-motion";
import "./services.css"; // Import CSS for styling

const Services = () => {
  return (
    <div id="services" className="services-page">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Our Services
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Discover a range of services designed to make your travel quick, safe, and efficient.
      </motion.p>

      <div className="services-list">
        {[
          {
            title: "On-Demand Rides",
            description: "Get a ride anytime, anywhere with just a few taps. Reliable and fast.",
            icon: "🚗",
          },
          {
            title: "Scheduled Rides",
            description: "Plan your rides in advance, ensuring punctuality for important events.",
            icon: "📅",
          },
          {
            title: "Premium Rides",
            description: "Experience top-class comfort with our premium and luxury options.",
            icon: "🌟",
          },
          {
            title: "Safety Assurance",
            description: "Our top priority is your safety. All drivers are vetted and trained.",
            icon: "🛡️",
          },
          {
            title: "Customer Support",
            description: "24/7 support to address your needs anytime during your journey.",
            icon: "📞",
          },
        ].map((service, index) => (
          <motion.div
            className="service-item"
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Services;
