import React from 'react';
import Lottie from 'lottie-react';
import techAnimation from '../assets/animation.json';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-primary via-secondary to-tertiary text-white">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
        <div className="md:col-span-1 text-center md:text-left">
          <h2 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight">
            Building the Future, Today.
          </h2>
          <p className="max-w-xl text-lg md:text-xl text-lightest mb-8">
            We craft exceptional digital experiences for startups and enterprises. Let's turn your vision into a reality.
          </p>
          <a href="#services" className="bg-accent text-white font-bold py-3 px-8 rounded-full hover:bg-light transition-transform transform hover:scale-105 duration-300 shadow-lg">
            Explore Our Services
          </a>
        </div>
        <div className="md:col-span-1">
          <Lottie animationData={techAnimation} loop={true} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
