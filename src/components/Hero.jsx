import React, { useEffect, useRef } from "react";
import Typewriter from "typewriter-effect";
import { TechAnimation } from "../assets/TechAnimation";

const Hero = () => {
  const subheadlineRef = useRef(null);
  const buttonRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
        }
      });
    });

    [subheadlineRef.current, buttonRef.current, animationRef.current].forEach(
      (el) => {
        if (el) {
          el.style.opacity = "0";
          el.style.transform = "translateY(20px)";
          el.style.transition = "all 0.8s ease-out";
          observer.observe(el);
        }
      }
    );

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style jsx>{`
        @keyframes gradientMove {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        @keyframes spin-fast {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        @keyframes spin-reverse {
          0% {
            transform: rotate(360deg);
          }
          100% {
            transform: rotate(0deg);
          }
        }
        @keyframes spin-slower {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        @keyframes ping-slow {
          0%,
          100% {
            transform: scale(1);
            opacity: 0.6;
          }
          50% {
            transform: scale(1.3);
            opacity: 0.1;
          }
        }
        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
        }

        .animate-gradient-bg {
          background: linear-gradient(
            -45deg,
            var(--color-primary),
            var(--color-secondary),
            var(--color-tertiary),
            var(--color-primary)
          );
          background-size: 400% 400%;
          animation: gradientMove 8s ease infinite;
        }
        .animate-spin-fast {
          animation: spin-fast 6s linear infinite;
        }
        .animate-spin-reverse {
          animation: spin-reverse 10s linear infinite;
        }
        .animate-spin-slower {
          animation: spin-slower 14s linear infinite;
        }
        .animate-ping-slow {
          animation: ping-slow 2.5s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>

      <section
        id="home"
        className="min-h-screen flex items-center justify-center animate-gradient-bg text-white py-16 md:py-24 relative overflow-hidden"
      >
        <div className="container mx-auto px-4 grid md:grid-cols-5 gap-8 items-center z-10">
          <div className="md:col-span-3 text-center md:text-left pr-0 md:pr-8">
            <h2 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight tracking-tight h-32 md:h-48 flex flex-col justify-center">
              <Typewriter
                options={{
                  strings: [
                    "Building the Future, Today.",
                    "Innovate. Create. Elevate.",
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 75,
                  deleteSpeed: 50,
                }}
              />
            </h2>
            <p
              ref={subheadlineRef}
              className="max-w-2xl text-lg md:text-xl mb-10 leading-relaxed"
              style={{ color: "var(--color-text)" }}
            >
              We build modern, scalable, and beautiful digital solutions
              tailored for the future.
            </p>
            <a
              ref={buttonRef}
              href="#services"
              className="inline-block font-semibold py-4 px-10 rounded-lg border transition-all transform hover:scale-105 duration-300 shadow-xl text-lg hover:shadow-2x text-white bg-primary hover:bg-secondary"
            >
              Explore Our Services
            </a>
          </div>

          <div
            ref={animationRef}
            className="md:col-span-2 flex justify-center md:justify-end items-center"
          >
            <div className="w-full max-w-lg h-96 md:h-[500px]">
              <TechAnimation />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
