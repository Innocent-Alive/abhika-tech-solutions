
import React, { useEffect, useRef } from "react";
import Typewriter from "typewriter-effect";
import noise from '../assets/subtle-noise.jpg'
const Hero = () => {
  const headlineRef = useRef(null);
  const subheadlineRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === subheadlineRef.current) {
              entry.target.classList.add(
                "animate-fade-in-up",
                "animation-delay-200"
              );
            } else if (entry.target === buttonRef.current) {
              entry.target.classList.add(
                "animate-fade-in-up",
                "animation-delay-400"
              );
            }
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    [subheadlineRef.current, buttonRef.current].forEach((el) => {
      if (el) {
        el.classList.add("opacity-0", "translate-y-6");
        observer.observe(el);
      }
    });

    if (headlineRef.current) {
      setTimeout(() => {
        headlineRef.current.classList.add("animate-scale-in");
      }, 500);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(24px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        .animation-delay-200 {
          animation-delay: 0.2s;
        }
        .animation-delay-400 {
          animation-delay: 0.4s;
        }
        .animate-scale-in {
          animation: scaleIn 0.8s ease-out forwards;
        }

        .mesh-gradient-bg {
          position: relative;
          overflow: hidden;
          background-color: var(--color-primary);
          background-blend-mode: overlay;
        }

        .mesh-gradient-bg > .container {
          position: relative;
          z-index: 10;
        }

        .gradient-blob {
          content: "";
          position: absolute;
          border-radius: 50%;
          filter: blur(120px);
          opacity: 0.55;
          pointer-events: none;
          background: radial-gradient(
            circle,
            var(--color-secondary),
            transparent 100%
          );
        }

        /* 10 Unique Blobs with --color-secondary */
        .blob1 {
          width: 900px;
          height: 900px;
          top: -25%;
          left: -25%;
          animation: moveBlob1 0.5s ease-in-out infinite alternate;
        }
        .blob2 {
          width: 800px;
          height: 800px;
          bottom: -20%;
          right: -20%;
          animation: moveBlob2 0.6s ease-in-out infinite alternate-reverse;
        }
        .blob3 {
          width: 700px;
          height: 700px;
          top: 30%;
          left: 10%;
          animation: moveBlob3 0.7s ease-in-out infinite alternate;
        }
        .blob4 {
          width: 650px;
          height: 650px;
          bottom: 5%;
          left: 40%;
          animation: moveBlob4 0.8s ease-in-out infinite alternate-reverse;
        }
        .blob5 {
          width: 600px;
          height: 600px;
          top: 15%;
          right: 20%;
          animation: moveBlob5 0.9s ease-in-out infinite alternate;
        }
        .blob6 {
          width: 500px;
          height: 500px;
          bottom: 25%;
          left: 20%;
          animation: moveBlob6 1.0s ease-in-out infinite alternate-reverse;
        }
        .blob7 {
          width: 550px;
          height: 550px;
          top: 60%;
          right: 10%;
          animation: moveBlob7 1.1s ease-in-out infinite alternate;
        }
        .blob8 {
          width: 450px;
          height: 450px;
          bottom: 10%;
          right: 30%;
          animation: moveBlob8 1.2s ease-in-out infinite alternate-reverse;
        }
        .blob9 {
          width: 500px;
          height: 500px;
          top: 50%;
          left: 5%;
          animation: moveBlob9 1.3s ease-in-out infinite alternate;
        }
        .blob10 {
          width: 400px;
          height: 400px;
          bottom: 40%;
          right: 10%;
          animation: moveBlob10 1.4s ease-in-out infinite alternate-reverse;
        }

        @keyframes moveBlob1 {
          0% {
            transform: translate(0, 0) scale(1);
          }
          100% {
            transform: translate(-10%, 10%) scale(1.05);
          }
        }
        @keyframes moveBlob2 {
          0% {
            transform: translate(0, 0) scale(1);
          }
          100% {
            transform: translate(15%, -10%) scale(0.95);
          }
        }
        @keyframes moveBlob3 {
          0% {
            transform: translate(0, 0) scale(1.1);
          }
          100% {
            transform: translate(-10%, 15%) scale(1);
          }
        }
        @keyframes moveBlob4 {
          0% {
            transform: translate(0, 0) scale(1);
          }
          100% {
            transform: translate(-15%, -20%) scale(1.1);
          }
        }
        @keyframes moveBlob5 {
          0% {
            transform: translate(0, 0) scale(0.9);
          }
          100% {
            transform: translate(10%, 5%) scale(1);
          }
        }
        @keyframes moveBlob6 {
          0% {
            transform: translate(0, 0) scale(1);
          }
          100% {
            transform: translate(-10%, 10%) scale(0.95);
          }
        }
        @keyframes moveBlob7 {
          0% {
            transform: translate(0, 0) scale(1);
          }
          100% {
            transform: translate(20%, -5%) scale(1.05);
          }
        }
        @keyframes moveBlob8 {
          0% {
            transform: translate(0, 0) scale(1);
          }
          100% {
            transform: translate(-15%, 15%) scale(0.9);
          }
        }
        @keyframes moveBlob9 {
          0% {
            transform: translate(0, 0) scale(0.95);
          }
          100% {
            transform: translate(10%, -10%) scale(1.05);
          }
        }
        @keyframes moveBlob10 {
          0% {
            transform: translate(0, 0) scale(1);
          }
          100% {
            transform: translate(-10%, 10%) scale(1.1);
          }
        }
      `}</style>

      <section
        id="home"
        className="min-h-screen flex items-center justify-center text-white py-16 md:py-24 relative mesh-gradient-bg"
        style={{
          backgroundImage: `url(${noise})`,
        }}
     >
        {/* All Pista-Colored Blobs */}
        <div className="gradient-blob blob1"></div>
        <div className="gradient-blob blob2"></div>
        <div className="gradient-blob blob3"></div>
        <div className="gradient-blob blob4"></div>
        <div className="gradient-blob blob5"></div>
        <div className="gradient-blob blob6"></div>
        <div className="gradient-blob blob7"></div>
        <div className="gradient-blob blob8"></div>
        <div className="gradient-blob blob9"></div>
        <div className="gradient-blob blob10"></div>

        <div className="container mx-auto px-4 text-center z-10">
          <h1
            ref={headlineRef}
            className="text-5xl md:text-7xl font-extrabold mb-6 font-header leading-tight tracking-tight h-32 md:h-48 flex flex-col justify-center items-center mx-auto opacity-0 text-background"
          >
            <Typewriter
              options={{
                strings: [
                  "Innovate. Build. Succeed.",
                  "Future-Proofing Your Business.",
                  "Crafting Digital Excellence.",
                ],
                autoStart: true,
                loop: true,
                delay: 60,
                deleteSpeed: 40,
              }}
            />
          </h1>
          <p
            ref={subheadlineRef}
            className="max-w-3xl mx-auto font-body text-lg md:text-xl mb-10 leading-relaxed text-text"
          >
            We are dedicated to engineering cutting-edge software solutions that
            propel businesses forward, from visionary concepts to tangible
            success.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-10">
            <a
              ref={buttonRef}
              href="#contact"
              className="inline-block font-semibold py-4 px-10 rounded-full border-2 border-secondary transition-all transform hover:scale-105 duration-300 shadow-lg text-lg hover:shadow-xl text-background bg-primary hover:bg-secondary hover:text-primary relative overflow-hidden group"
            >
              <span className="relative z-10">Get a Free Consultation</span>
              <span className="absolute inset-0 bg-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform scale-x-0 group-hover:scale-x-100 origin-left"></span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;


