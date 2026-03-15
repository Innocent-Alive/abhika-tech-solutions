import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const faqData = [
  {
    question: "What services do we offer?",
    answer:
      "We provide end-to-end digital solutions, including software development, cloud integration, and AI-powered automation.",
  },
  {
    question: "How can one get started with our services?",
    answer:
      "Simply reach out via our contact page or schedule a free consultation to discuss your needs.",
  },
  {
    question: "Do we offer custom software development?",
    answer:
      "Yes, we specialize in building tailor-made software solutions that align perfectly with your business goals.",
  },
  {
    question: "What industries do we serve?",
    answer:
      "We serve a wide range of industries including finance, healthcare, education, and e-commerce.",
  },
  {
    question: "Do we provide post-launch support?",
    answer:
      "Yes, we offer comprehensive support and maintenance plans to ensure your digital solutions remain up-to-date and perform optimally after launch.",
  },
];

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <motion.div 
      initial={false}
      className={`w-full border-b border-gray-200 py-6 mb-2 transition-colors duration-300 ${isOpen ? 'bg-tertiary/20 rounded-2xl px-8 shadow-sm border-transparent' : 'px-4 sm:px-6'}`}
    >
      <button
        onClick={onClick}
        className="w-full flex justify-between items-center text-left"
      >
        <span className={`text-lg sm:text-xl font-bold font-header transition-colors duration-300 ${isOpen ? 'text-secondary' : 'text-primary'}`}>
          {question}
        </span>
        <motion.span 
          animate={{ rotate: isOpen ? 180 : 0 }}
          className="text-primary"
        >
          {isOpen ? <FaMinus size={18} /> : <FaPlus size={18} />}
        </motion.span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="mt-6 text-text text-lg leading-relaxed font-body border-l-4 border-secondary pl-6">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id='faqs' className="bg-background py-24 px-4 sm:px-6 md:px-12 lg:px-24 max-w-7xl mx-auto overflow-hidden relative">
      {/* Sharp Star Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%23007C91' d='M256 0 L275 235 L512 256 L275 277 L256 512 L237 277 L0 256 L237 235 Z'/%3E%3C/svg%3E")`,
          backgroundSize: '50px 50px' 
        }}
      ></div>
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-20"
      >
        <h2 className="text-3xl sm:text-4xl font-bold font-header text-primary uppercase tracking-tight">Got Questions?</h2>
        <div className="w-20 h-1 bg-secondary mx-auto mt-6 rounded-full"></div>
        <p className="text-secondary font-body mt-6 text-md sm:text-xl max-w-2xl mx-auto opacity-80">
          Common queries answered to help you understand our process and services better.
        </p>
      </motion.div>
      
      <motion.div 
        layout
        className="space-y-4 max-w-4xl mx-auto"
      >
        {faqData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <FAQItem
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === index}
              onClick={() => toggleFAQ(index)}
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default FAQ;
