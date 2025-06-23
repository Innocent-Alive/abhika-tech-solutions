import React, { useState,useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // Adjust the threshold if needed
      setScrolled(scrollY > 100); 
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', text: 'Home' },
    { href: '#about', text: 'About' },
    { href: '#services', text: 'Services' },
    { href: '#team', text: 'Team' },
    {href:'#projects',text:'Projects'},
    { href: '#contact', text: 'Contact' },
  ];

  return (
    <header
    className={`fixed w-full top-0 z-50 transition-all duration-50 ${
      scrolled
        ? 'bg-primary/90 backdrop-blur-xl shadow-lg text-white'
        : 'bg-transparent text-background'
    }`}
  >
  
      <div className="container mx-auto flex justify-between items-center p-3 md:p-4">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-wider">
          <a href="#home" className="hover:text-secondary transition-colors duration-300">ATS.</a>
        </h1>
        <nav className="hidden md:flex space-x-6">
          {navLinks.map(link => (
            <a
            key={link.href}
            href={link.href}
            className={`relative text-lg ${
              scrolled ? 'text-background font-bold' : 'text-background font-bold'
            } hover:text-secondary transition-colors duration-300
              after:content-[''] after:absolute after:left-0 after:bottom-[-5px]
              after:h-[2px] after:w-0 after:bg-secondary after:transition-all after:duration-300 hover:after:w-full`}
          >
            {link.text}.
          </a>
          
          ))}
        </nav>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-2xl focus:outline-none transition-transform duration-300 ${isOpen ? 'rotate-90' : ''}">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-full left-0 right-0 transition-all duration-300 ease-in-out overflow-y-auto ${isOpen ? 'max-h-[calc(100vh-4rem)] opacity-100' : 'max-h-0 opacity-0'} bg-primary/95 backdrop-blur-md shadow-lg`}>
        <nav className="flex flex-col items-center space-y-2 p-6">
          {navLinks.map(link => (
            <a key={link.href} href={link.href} onClick={toggleMenu} className="text-lg w-full text-center py-3 px-4 rounded-md hover:bg-secondary hover:text-primary transition-all duration-200">{link.text}</a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
