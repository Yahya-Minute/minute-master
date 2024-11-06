import React, { useContext, useEffect } from "react";
import { motion } from "framer-motion";
import { LanguageContext } from "../../../utility/LanguageContext"; // Import the context for language
import "./services.css"; // Import CSS for styling

const Services = () => {
  const { language } = useContext(LanguageContext); // Access the language context

  // Define text translations for English and Arabic
  const texts = {
    en: {
      heading: "Our Services",
      description: "Discover a range of services designed to make your travel quick, safe, and efficient.",
      services: [
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
      ],
    },
    ar: {
      heading: "خدماتنا",
      description: "اكتشف مجموعة من الخدمات المصممة لجعل رحلاتك سريعة وآمنة وفعالة.",
      services: [
        {
          title: "ركوب حسب الطلب",
          description: "احصل على رحلة في أي وقت، في أي مكان، بنقرة واحدة. موثوق وسريع.",
          icon: "🚗",
        },
        {
          title: "الرحلات المجدولة",
          description: "خطط لرحلاتك مسبقًا لضمان الوصول في الوقت المحدد للمناسبات الهامة.",
          icon: "📅",
        },
        {
          title: "الرحلات الفاخرة",
          description: "استمتع براحة من الدرجة الأولى مع خياراتنا الفاخرة.",
          icon: "🌟",
        },
        {
          title: "ضمان السلامة",
          description: "سلامتك هي أولويتنا القصوى. جميع السائقين يتم فحصهم وتدريبهم.",
          icon: "🛡️",
        },
        {
          title: "دعم العملاء",
          description: "دعم على مدار الساعة لتلبية احتياجاتك في أي وقت خلال رحلتك.",
          icon: "📞",
        },
      ],
    },
  };

  const currentText = texts[language]; // Select the appropriate text based on the current language

  // Effect to toggle layout direction (rtl/ltr)
  useEffect(() => {
    document.documentElement.classList.toggle('rtl', language === 'ar');
    document.documentElement.classList.toggle('ltr', language === 'en');
  }, [language]);

  return (
    <div id="services" className="services-page">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {currentText.heading}
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {currentText.description}
      </motion.p>

      <div className="services-list">
        {currentText.services.map((service, index) => (
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
