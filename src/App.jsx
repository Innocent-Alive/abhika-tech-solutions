import React, { useState, useEffect, useRef } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Team from "./components/Team";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Projects from "./components/Projects";
import FAQ from "./components/FAQ";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const [loading, setLoading] = useState(true);
  const mainRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); // Simulate loading for 1.5 seconds

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!loading) {
      const sections = gsap.utils.toArray(".animated-section");
      sections.forEach((section) => {
        gsap.fromTo(
          section,
          { autoAlpha: 0, y: 50 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      });
    }
  }, [loading]);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="bg-background text-text font-header">
      <Navbar />
      <main ref={mainRef} className="gap-10">
        <div className="animated-section">
          <Hero />
        </div>
        <div className="animated-section">
          <About />
        </div>
        <div className="animated-section">
          <Services />
        </div>
        <div className="animated-section">
          <Team />
        </div>
        <div className="animated-section">
          <Projects />
        </div>
        <div className="animated-section">
          <Testimonials />
        </div>
        <div className="animated-section">
          <FAQ />
        </div>
        <div className="animated-section">
          <Contact />
        </div>
        
      </main>
      <Footer />
    </div>
  );
};

export default App;
