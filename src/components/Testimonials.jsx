// ✅ Testimonials.jsx
import React, { useState, useEffect } from "react";
import { FaQuoteLeft } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const allTestimonials = [
  {
    quote: "Abhika Tech Solutions delivered a stunning website that exceeded our expectations. Their attention to detail and creative vision are unparalleled.",
    name: "John Doe",
    title: "CEO, Tech Innovators",
    imageUrl: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    quote: "The team was professional, responsive, and incredibly talented. They transformed our online presence and boosted our engagement significantly.",
    name: "Jane Smith",
    title: "Marketing Director, Creative Co.",
    imageUrl: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    quote: "Working with Abhika Tech was a breeze. They understood our needs perfectly and delivered a high-quality product on time and within budget.",
    name: "Sam Wilson",
    title: "Founder, Startup Hub",
    imageUrl: "https://randomuser.me/api/portraits/men/46.jpg",
  },
  {
    quote: "Their AI automation tools saved us hours of manual work every week. A truly forward-thinking team that knows how to leverage technology.",
    name: "Michael Chen",
    title: "Operations Manager, LogiTech",
    imageUrl: "https://randomuser.me/api/portraits/men/12.jpg",
  },
  {
    quote: "The ecommerce platform they built for us is fast, intuitive, and conversion-optimized. Our sales have increased by 40% since the launch.",
    name: "Emily Rodriguez",
    title: "Owner, FashionForward",
    imageUrl: "https://randomuser.me/api/portraits/women/24.jpg",
  },
  {
    quote: "Exceptional support and maintenance services. They are always there when we need them, ensuring our systems run smoothly 24/7.",
    name: "David Miller",
    title: "CTO, EduStream",
    imageUrl: "https://randomuser.me/api/portraits/men/52.jpg",
  },
  {
    quote: "Abhika's UI/UX design process is world-class. They created a user experience that our customers absolutely love.",
    name: "Sarah Johnson",
    title: "Product Designer, InnovateX",
    imageUrl: "https://randomuser.me/api/portraits/women/64.jpg",
  },
];

const TestimonialCard = ({ testimonial }) => (
  <motion.div 
    initial={{ scale: 0.8, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    exit={{ scale: 0.8, opacity: 0 }}
    transition={{ type: "spring", stiffness: 300, damping: 20 }}
    className="bg-background p-8 rounded-3xl shadow-lg text-center h-[450px] flex flex-col justify-between border border-gray-100 hover:shadow-2xl transition-all duration-500 group relative overflow-hidden"
  >
    <div className="absolute top-0 right-0 p-6 opacity-5 transform group-hover:scale-150 transition-transform duration-700">
      <FaQuoteLeft size={80} />
    </div>
    
    <div className="relative z-10">
      <div className="w-14 h-14 bg-tertiary rounded-full flex items-center justify-center mx-auto mb-6 text-primary shadow-inner">
        <FaQuoteLeft size={20} />
      </div>
      <p className="text-text/90 italic mb-6 leading-relaxed text-lg font-body line-clamp-6">
        "{testimonial.quote}"
      </p>
    </div>

    <div className="mt-auto relative z-10">
      <img
        src={testimonial.imageUrl}
        alt={testimonial.name}
        className="w-16 h-16 rounded-full mx-auto mb-4 border-4 border-white shadow-xl group-hover:border-secondary transition-colors duration-500 object-cover"
      />
      <h4 className="font-bold text-primary text-xl font-header mb-1">{testimonial.name}</h4>
      <p className="text-sm text-secondary font-bold font-body">{testimonial.title}</p>
    </div>
  </motion.div>
);

const Testimonials = () => {
  const [displayedTestimonials, setDisplayedTestimonials] = useState([]);
  const [key, setKey] = useState(0);

  const getRandomTestimonials = () => {
    const shuffled = [...allTestimonials].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 3);
  };

  useEffect(() => {
    setDisplayedTestimonials(getRandomTestimonials());
    
    const interval = setInterval(() => {
      setDisplayedTestimonials(getRandomTestimonials());
      setKey(prev => prev + 1);
    }, 15000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="clients" className="bg-tertiary pb-10 pt-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-primary font-header uppercase tracking-tight">Client Success Stories</h2>
          <div className="w-20 h-1 bg-background mx-auto mt-4 rounded-full"></div>
          <p className="text-text mt-4 font-body text-sm sm:text-base opacity-80">Don't just take our word for it — hear from our valued partners.</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[500px]">
          <AnimatePresence mode="wait">
            <React.Fragment key={key}>
              {displayedTestimonials.map((testimonial, index) => (
                <div key={`${key}-${index}`}>
                  <TestimonialCard testimonial={testimonial} />
                </div>
              ))}
            </React.Fragment>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
