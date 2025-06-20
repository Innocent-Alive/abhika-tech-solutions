import React from "react";
import {
  FaGithub,
  FaInstagram,
  FaInstagramSquare,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto py-10 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h3 className="text-2xl font-bold mb-2">Abhika Tech Solution</h3>
            <p className="text-secondary">Crafting Digital Excellence</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul>
              <li className="mb-2">
                <a href="#about" className="hover:text-tertiary">
                  About
                </a>
              </li>
              <li className="mb-2">
                <a href="#services" className="hover:text-tertiary">
                  Services
                </a>
              </li>
              <li className="mb-2">
                <a href="#team" className="hover:text-tertiary">
                  Team
                </a>
              </li>
              <li className="mb-2">
                <a href="#testimonial" className="hover:text-tertiary">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-tertiary">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Connect With Us</h3>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="#" className="hover:text-secondary">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="hover:text-secondary">
                <FaLinkedin size={24} />
              </a>
              <a href="#" className="hover:text-secondary">
                <FaInstagram size={24} />
              </a>
              <a href="#" className="hover:text-secondary">
                <FaGithub size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-secondary mt-8 pt-6 text-center text-secondary">
          <p>
            &copy; {new Date().getFullYear()} Abhika Tech Solution. All Rights
            Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
