import React from 'react';
import Lottie from 'lottie-react';
import techAnimation from '../assets/animation.json';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary via-secondary to-tertiary text-white py-16 md:py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 grid md:grid-cols-5 gap-8 items-center z-10">
        <div className="md:col-span-3 text-center md:text-left pr-0 md:pr-8">
          <h2 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight tracking-tight">
            Building the Future, Today.
          </h2>
          <p className="max-w-2xl text-lg md:text-xl text-lightest mb-10 leading-relaxed">
            We craft exceptional digital experiences for startups and enterprises. Let's turn your vision into a reality.
          </p>
          <a href="#services" className="bg-accent text-white font-semibold py-4 px-10 rounded-lg hover:bg-light transition-all transform hover:scale-105 duration-300 shadow-xl text-lg">
            Explore Our Services
          </a>
        </div>
        <div className="md:col-span-2 flex justify-center md:justify-end items-center">
          <Lottie animationData={techAnimation} loop={true} style={{ width: '100%', maxWidth: '500px', height: 'auto', minWidth: '200px', minHeight: '200px' }} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
