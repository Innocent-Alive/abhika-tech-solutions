import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { href: '#home', text: 'Home' },
    { href: '#about', text: 'About' },
    { href: '#services', text: 'Services' },
    { href: '#team', text: 'Team' },
    { href: '#contact', text: 'Contact' },
  ];

  return (
    <header className="bg-primary/90 backdrop-blur-md text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center p-3 md:p-4">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-wider">
          <a href="#home" className="hover:text-light transition-colors duration-300">Abhika Tech Solution</a>
        </h1>
        <nav className="hidden md:flex space-x-6">
          {navLinks.map(link => (
            <a key={link.href} href={link.href} className="text-lg hover:text-lightest transition-colors duration-300">{link.text}</a>
          ))}
        </nav>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-2xl focus:outline-none">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-full left-0 right-0 transition-all duration-300 ease-in-out overflow-y-auto ${isOpen ? 'max-h-[calc(100vh-4rem)] opacity-100' : 'max-h-0 opacity-0'} bg-primary/95 backdrop-blur-md shadow-lg`}>
        <nav className="flex flex-col items-center space-y-2 p-6">
          {navLinks.map(link => (
            <a key={link.href} href={link.href} onClick={toggleMenu} className="text-lg w-full text-center py-3 px-4 rounded-md hover:bg-secondary hover:text-lightest transition-all duration-200">{link.text}</a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
