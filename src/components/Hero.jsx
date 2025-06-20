import React, { useEffect, useRef } from 'react';
import Lottie from 'lottie-react';
import Typewriter from 'typewriter-effect';
import { gsap } from 'gsap';
import techAnimation from '../assets/animation.json';

const Hero = () => {
  const subheadlineRef = useRef(null);
  const buttonRef = useRef(null);
  const lottieRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    // Animate after a slight delay to allow typewriter to start
    tl.fromTo(subheadlineRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, delay: 2.5 })
      .fromTo(buttonRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8 }, "-=0.5")
      .fromTo(lottieRef.current, { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, duration: 1 }, "-=0.5");
  }, []);
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-animated-gradient text-white py-16 md:py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 grid md:grid-cols-5 gap-8 items-center z-10">
        <div className="md:col-span-3 text-center md:text-left pr-0 md:pr-8">
          <h2 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight tracking-tight h-32 md:h-48 flex flex-col justify-center">
            <Typewriter
              options={{
                strings: ['Building the Future, Today.', 'Innovate. Create. Elevate.'],
                autoStart: true,
                loop: true,
                delay: 75,
                deleteSpeed: 50,
              }}
            />
          </h2>
          <p ref={subheadlineRef} className="max-w-2xl text-lg md:text-xl text-tertiary mb-10 leading-relaxed opacity-0">
            We craft exceptional digital experiences for startups and enterprises. Let's turn your vision into a reality.
          </p>
          <a ref={buttonRef} href="#services" className="bg-primary text-white font-semibold py-4 px-10 rounded-lg hover:bg-secondary transition-all transform hover:scale-105 duration-300 shadow-xl text-lg opacity-0">
            Explore Our Services
          </a>
        </div>
        <div ref={lottieRef} className="md:col-span-2 flex justify-center md:justify-end items-center opacity-0">
          <Lottie animationData={techAnimation} loop={true} style={{ width: '100%', maxWidth: '500px', height: 'auto', minWidth: '200px', minHeight: '200px' }} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
