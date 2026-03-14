import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 bg-background overflow-hidden relative">
      {/* Exact Star Pattern Overlay (GiStarShuriken Style) */}
      <div 
        className="absolute inset-0 opacity-[0.05] pointer-events-none" 
        style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 100 100'%3E%3Cpath fill-rule='evenodd' d='M50 0 L58 42 L100 50 L58 58 L50 100 L42 58 L0 50 L42 42 Z M50 58 a8 8 0 1 1 0-16 8 8 0 0 1 0 16z' fill='%23007C91'/%3E%3C/svg%3E")`,
          backgroundSize: '20px 20px' 
        }}
      ></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold font-header text-primary uppercase tracking-tight">About Abhika Tech Solution</h2>
          <div className="w-20 h-1 bg-secondary mx-auto mt-4 rounded-full"></div>
          <p className="text-secondary font-body mt-2 text-sm sm:text-base">Our Mission, Vision, and Values</p>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl font-body mx-auto text-lg text-text leading-relaxed text-center md:text-left"
        >
          <p className="mb-6">
            At Abhika Tech Solution, we are driven by a singular mission: to empower businesses with transformative technology that fuels innovation and propels growth. We firmly believe that a meticulously crafted software solution can be a pivotal game-changer, unlocking untapped potential and paving the way for sustained success. Our dedicated team of passionate developers, visionary designers, and astute strategists collaborates seamlessly, transforming intricate challenges into elegant, scalable, and exceptionally user-friendly applications.
          </p>
          <p>
            We specialize in crafting bespoke software solutions tailored to your unique needs, ranging from dynamic, high-performance web platforms to intuitive, engaging mobile applications. Our development process is characterized by complete transparency and an agile methodology, allowing us to adapt quickly to evolving requirements and deliver results efficiently. At Abhika Tech Solution, we see ourselves as more than just a service provider; we are your dedicated technology partner, wholly committed to architecting your digital success story.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
