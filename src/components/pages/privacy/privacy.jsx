import React from "react";
import { useLanguage } from "../../../utility/LanguageContext";
import { motion } from "framer-motion";
import "./privacy.css";

const Privacy = () => {
  const { language } = useLanguage();
  
  const termsContent = {
    en: {
      title: "Privacy Policy",
      intro: [
        "• These Terms and Conditions include (a) the general terms of use applicable to your use of Minute technologies; and (b) specific provisions relating to VAT for trips undertaken in the Kingdom of Saudi Arabia (attached in Appendix 1).",
        "• Please read these terms and conditions carefully. These Terms and Conditions contain information about your rights and obligations and other valuable information in connection with your use of Minute technologies."
      ],
      sections: [
        {
          title: "1. General Terms of Use",
          content: [
            "These Terms of Use govern your access to and use of our services.",
            "By accessing or using our services, you agree to comply with and be bound by these terms."
          ]
        },
        {
          title: "2. User Responsibilities",
          content: [
            "As a user of our services, you are responsible for your activities on the platform.",
            "You agree to use the services only for lawful purposes and comply with all applicable laws and regulations."
          ]
        },
        {
          title: "3. Limitation of Liability",
          content: [
            "Our services are provided on an 'as is' and 'as available' basis.",
            "We do not assume any liability for any errors or inaccuracies.",
            "Use of the services is at your own risk, and we are not liable for any damages arising from your use of our platform."
          ]
        },
        {
          title: "4. Intellectual Property Rights",
          content: [
            "All intellectual property rights in our services, including but not limited to trademarks, logos, designs, and content, are owned by us or our licensors.",
            "You are not permitted to use any of these without our prior written consent."
          ]
        },
        {
          title: "5. Privacy and Data Protection",
          content: [
            "We value your privacy and are committed to protecting your personal information.",
            "Our Privacy Policy outlines how we collect, use, and safeguard your data.",
            "By using our services, you consent to the practices described in our Privacy Policy."
          ]
        },
        {
          title: "6. Modifications to Terms",
          content: [
            "We reserve the right to modify these Terms at any time.",
            "We encourage users to review these Terms periodically to stay informed of any changes.",
            "Your continued use of our services constitutes acceptance of any modifications."
          ]
        },
        {
          title: "7. Termination of Use",
          content: [
            "We may terminate or suspend your access to our services if we determine that you have violated these Terms or engaged in unlawful conduct.",
            "Upon termination, your right to access our services will cease immediately."
          ]
        },
      ],
      footer: "Thank you for reading."
    },
    ar: {
      title: "الشروط والأحكام",
      intro: [
        "• هذه الشروط والأحكام تشمل (أ) الشروط العامة للاستخدام التي تنطبق على استخدامك لتقنيات Minute؛ و (ب) أحكام خاصة تتعلق بضريبة القيمة المضافة للرحلات التي تتم في المملكة العربية السعودية (مرفقة في الملحق 1).",
        "• يرجى قراءة هذه الشروط والأحكام بعناية. تحتوي هذه الشروط والأحكام على معلومات حول حقوقك وواجباتك والمعلومات الأخرى المهمة فيما يتعلق باستخدامك لتقنيات Minute."
      ],
      sections: [
        {
          title: "1. شروط الاستخدام العامة",
          content: [
            "تحكم شروط الاستخدام هذه وصولك إلى خدماتنا واستخدامك لها.",
            "من خلال الوصول إلى خدماتنا أو استخدامها، فإنك توافق على الالتزام بهذه الشروط."
          ]
        },
        {
          title: "2. مسؤوليات المستخدم",
          content: [
            "بصفتك مستخدمًا لخدماتنا، أنت مسؤول عن أنشطتك على المنصة.",
            "توافق على استخدام الخدمات فقط لأغراض قانونية والامتثال لجميع القوانين واللوائح المعمول بها."
          ]
        },
        {
          title: "3. تحديد المسؤولية",
          content: [
            "يتم تقديم خدماتنا على أساس 'كما هي' و 'حسب التوفر'.",
            "نحن لا نتحمل أي مسؤولية عن أي أخطاء أو عدم دقة.",
            "استخدام الخدمات على مسؤوليتك الخاصة، ولا نتحمل المسؤولية عن أي أضرار ناتجة عن استخدامك لمنصتنا."
          ]
        },
        {
          title: "4. حقوق الملكية الفكرية",
          content: [
            "جميع حقوق الملكية الفكرية في خدماتنا، بما في ذلك على سبيل المثال لا الحصر، العلامات التجارية والشعارات والتصاميم والمحتوى، مملوكة لنا أو لأصحاب الترخيص لدينا.",
            "لا يُسمح لك باستخدام أي من هذه دون موافقتنا الكتابية المسبقة."
          ]
        },
        {
          title: "5. الخصوصية وحماية البيانات",
          content: [
            "نحن نقدر خصوصيتك وملتزمون بحماية معلوماتك الشخصية.",
            "تحدد سياسة الخصوصية لدينا كيفية جمع بياناتك واستخدامها وحمايتها.",
            "باستخدام خدماتنا، فإنك توافق على الممارسات الموضحة في سياسة الخصوصية الخاصة بنا."
          ]
        },
        {
          title: "6. التعديلات على الشروط",
          content: [
            "نحتفظ بالحق في تعديل هذه الشروط في أي وقت.",
            "نشجع المستخدمين على مراجعة هذه الشروط دوريًا للبقاء على اطلاع على أي تغييرات.",
            "إن استمرارك في استخدام خدماتنا يعد قبولاً لأي تعديلات."
          ]
        },
        {
          title: "7. إنهاء الاستخدام",
          content: [
            "يجوز لنا إنهاء أو تعليق وصولك إلى خدماتنا إذا قررنا أنك انتهكت هذه الشروط أو شاركت في سلوك غير قانوني.",
            "عند الإنهاء، سيتوقف حقك في الوصول إلى خدماتنا فورًا."
          ]
        },
      ],
      footer: "شكرًا لقراءتك."
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

      {currentTerms.intro.map((line, index) => (
        <motion.p
          key={index}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          {line}
        </motion.p>
      ))}

      {currentTerms.sections.map((section, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: index * 0.2 + 0.5 }}
          className="terms-section"
        >
          <h3>{section.title}</h3>
          {section.content.map((line, idx) => (
            <p key={idx}>{line}</p>
          ))}
        </motion.div>
      ))}

      <motion.p
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: currentTerms.sections.length * 0.2 + 0.5 }}
        className="terms-footer"
      >
        {currentTerms.footer}
      </motion.p>
    </div>
  );
};

export default Privacy;
