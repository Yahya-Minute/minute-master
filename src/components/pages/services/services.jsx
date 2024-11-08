// Services.js
import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { LanguageContext } from '../../../utility/LanguageContext'; // Import context
import './services.css';
import Safety from '../../../assets/services/safety.svg'
import T247 from '../../../assets/services/247.svg'
import UserF from '../../../assets/services/userfriendly.svg'
import Reliable from '../../../assets/services/reliable.svg'
import Affordable from '../../../assets/services/affordable.svg'

// Service and testimonial content for both languages
const content = {
  en: {
    header: "Our Services",
    description: "Discover the range of services Minute Taxi provides to make your journey convenient, affordable, and safe.",
    services: [
      {
        heading: "Reliable Rides",
        description: "Our rides are known for reliability, comfort, and punctuality, ensuring you get to your destination on time every time.",
        icon: Reliable
      },
      {
        heading: "Affordable Rates",
        description: "With our competitive pricing, Minute Taxi offers one of the most affordable services without compromising on quality.",
        icon: Affordable
      },
      {
        heading: "24/7 Availability",
        description: "Whether it’s early morning or late night, Minute Taxi is available around the clock for your convenience.",
        icon: T247
      },
      {
        heading: "User-Friendly App",
        description: "Our app’s intuitive interface makes it easy to book rides, track drivers, and make secure payments on the go.",
        icon: UserF
      },
      {
        heading: "Safety First",
        description: "Safety is our top priority, with background-checked drivers, sanitized cars, and round-the-clock support.",
        icon: Safety
      }
    ],
    testimonials: [
      {
        name: "Haris",
        content: "Minute Taxi is the best! I’ve never had a more reliable experience with any other taxi service. The app makes everything so smooth and quick!",
        image: "https://placehold.co/800"
      },
      {
        name: "Yahya",
        content: "Affordable rates and great service! The drivers are friendly, the rides are comfortable, and I feel safe every time I book a Minute Taxi.",
        image: "https://placehold.co/800"
      },
      {
        name: "Fuzail Shareef",
        content: "The 24/7 availability is a lifesaver! I often need rides at odd hours, and Minute Taxi has always been there for me.",
        image: "https://placehold.co/800"
      }
    ]
  },
  ar: {
    header: "خدماتنا",
    description: "اكتشف مجموعة الخدمات التي تقدمها Minute Taxi لجعل رحلتك مريحة وبأسعار معقولة وآمنة.",
    services: [
      {
        heading: "رحلات موثوقة",
        description: "رحلاتنا معروفة بالموثوقية والراحة والدقة في المواعيد، مما يضمن وصولك إلى وجهتك في الوقت المحدد دائمًا.",
        icon: Reliable
      },
      {
        heading: "أسعار معقولة",
        description: "بفضل أسعارنا التنافسية، تقدم Minute Taxi واحدة من الخدمات الأكثر اقتصادية دون المساس بالجودة.",
        icon: Affordable
      },
      {
        heading: "متاح على مدار الساعة",
        description: "سواء كان ذلك في الصباح الباكر أو في وقت متأخر من الليل، Minute Taxi متاح على مدار الساعة لراحتك.",
        icon: T247
      },
      {
        heading: "تطبيق سهل الاستخدام",
        description: "واجهة التطبيق السهلة تجعل حجز الرحلات، تتبع السائقين، وإجراء المدفوعات الآمنة أمرًا سهلاً.",
        icon: UserF
      },
      {
        heading: "السلامة أولاً",
        description: "السلامة هي أولويتنا القصوى، مع سائقيين تم فحص خلفياتهم، وسيارات معقمة، ودعم على مدار الساعة.",
        icon: Safety
      }
    ],
    testimonials: [
      {
        name: "حارث",
        content: "Minute Taxi هو الأفضل! لم أجد تجربة أكثر موثوقية مع أي خدمة تاكسي أخرى. التطبيق يجعل كل شيء سلسًا وسريعًا!",
        image: "https://placehold.co/800"
      },
      {
        name: "يحيى",
        content: "أسعار معقولة وخدمة رائعة! السائقون ودودون، والرحلات مريحة، وأشعر بالأمان في كل مرة أحجز فيها تاكسي Minute.",
        image: "https://placehold.co/800"
      },
      {
        name: "فوزي الشرف",
        content: "التوفر على مدار الساعة أمر رائع! غالبًا ما أحتاج إلى رحلات في أوقات غريبة، و Minute Taxi دائمًا موجود من أجلي.",
        image: "https://placehold.co/800"
      }
    ],
    testimonials: [
      {
        name: "جون دو",
        content: "Minute Taxi هو الأفضل! لم أجد تجربة أكثر موثوقية مع أي خدمة تاكسي أخرى. التطبيق يجعل كل شيء سهلًا وسريعًا!",
        image: "https://placehold.co/400"
      },
      {
        name: "سارة لي",
        content: "أسعار معقولة وخدمة رائعة! السائقون ودودون، والرحلات مريحة، وأشعر بالأمان في كل مرة أحجز فيها عبر Minute Taxi.",
        image: "https://placehold.co/400"
      },
      {
        name: "مايكل براون",
        content: "التوفر على مدار الساعة هو نعمة! أحتاج أحيانًا إلى رحلات في أوقات غير عادية، وMinute Taxi دائمًا يكون هناك.",
        image: "https://placehold.co/400"
      }
    ]
  }
};

const Services = () => {
  const { language } = useContext(LanguageContext); // Access language context
  const currentContent = content[language]; // Get content based on language

  return (
    <div
      className="services-page"
    >
      <div className="header-container">
        <h1>{currentContent.header}</h1>
        <p>{currentContent.description}</p>
      </div>

      <div className="services-container">
        {currentContent.services.map((service, index) => (
          <motion.div
            className={`service-item ${index % 2 === 0 ? 'left-align' : 'right-align'}`}
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -200 : 200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <div className="service-icon">
              <img src={service.icon} alt={`${service.heading} icon`} />
            </div>
            <div className="service-content">
              <h3>{service.heading}</h3>
              <p>{service.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="testimonials-container">
        <h2>{language === 'en' ? 'What Our Customers Say?' : 'ماذا يقول عملاؤنا'}</h2>
        <div className="testimonials-carousel">
          {currentContent.testimonials.map((testimonial, index) => (
            <motion.div
              className="testimonial-item"
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.2 }}
            >
              <img src={testimonial.image} alt={`${testimonial.name}'s photo`} />
              <div className="testimonial-content">
                <h4>{testimonial.name}</h4>
                <p>{testimonial.content}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;