import React, { useState,useEffect,useRef } from 'react';

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
];

const FAQItem = ({ question, answer, isOpen, onClick }) => {
    const contentRef = useRef(null);
    const [height, setHeight] = useState(0);
  
    useEffect(() => {
      if (isOpen && contentRef.current) {
        setHeight(contentRef.current.scrollHeight);
      } else {
        setHeight(0);
      }
    }, [isOpen]);
  
    return (
      <div className="w-full border-b border-gray-300 px-4 sm:px-6 md:px-8 lg:px-10 py-6">
        <button
          onClick={onClick}
          className="w-full flex justify-between items-center text-left transition-colors duration-200"
        >
          <span className="text-lg font-semibold text-primary">{question}</span>
          <span className="text-xl font-bold text-text">{isOpen ? '-' : '+'}</span>
        </button>
  
        <div
          ref={contentRef}
          className={`overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]`}
          style={{ maxHeight: `${height}px` }}
        >
          <div
            className={`transition-all duration-500 ease-in-out transform ${
              isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
            }`}
          >
            <p className="mt-2 text-secondary">{answer}</p>
          </div>
        </div>
      </div>
    );
  };
  

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id='faqs' className="bg-background py-16 px-4 sm:px-6 md:px-12 lg:px-24 max-w-6xl mx-auto">
      <div className="text-center mb-12">
          <h2 className="text-4xl font-bold font-header text-primary">Frequently Asked Questions</h2>
          <p className="text-secondary font-body mt-2">Everything you need to know</p>
        </div>
      <div className="space-y-4">
        {faqData.map((item, index) => (
          <FAQItem
            key={index}
            question={item.question}
            answer={item.answer}
            isOpen={openIndex === index}
            onClick={() => toggleFAQ(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default FAQ;
