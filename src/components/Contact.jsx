import React from 'react';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary">Get In Touch</h2>
          <p className="text-secondary mt-2">We'd love to hear from you!</p>
        </div>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="bg-gradient-to-br from-secondary to-tertiary text-white p-8 rounded-xl shadow-xl">
            <h3 className="text-2xl sm:text-3xl font-bold mb-6">Contact Information</h3>
            <p className="flex items-start mb-4 text-sm sm:text-base md:text-lg"><FaMapMarkerAlt className="mr-3 text-lightest mt-1 flex-shrink-0" size={20} /> <span className="break-words">123 Tech Avenue, Silicon Valley, CA 94000</span></p>
            <p className="flex items-start mb-4 text-sm sm:text-base md:text-lg"><FaEnvelope className="mr-3 text-lightest mt-1 flex-shrink-0" size={20} /> <span className="break-words">contact@abhikatechsolution.com</span></p>
            <p className="flex items-start text-sm sm:text-base md:text-lg"><FaPhoneAlt className="mr-3 text-lightest mt-1 flex-shrink-0" size={20} /> <span className="break-words">+1 (234) 567-890</span></p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-xl">
            <h3 className="text-3xl font-bold text-primary mb-8">Send Us a Message</h3>
            <form>
              <div className="space-y-6">
                <input type="text" placeholder="Your Name" className="w-full p-4 rounded-lg bg-gray-50 border-2 border-gray-200 focus:outline-none focus:ring-2 focus:ring-accent focus:bg-white transition-all duration-300" />
                <input type="email" placeholder="Your Email" className="w-full p-4 rounded-lg bg-gray-50 border-2 border-gray-200 focus:outline-none focus:ring-2 focus:ring-accent focus:bg-white transition-all duration-300" />
                <textarea placeholder="Your Message" rows="5" className="w-full p-4 rounded-lg bg-gray-50 border-2 border-gray-200 focus:outline-none focus:ring-2 focus:ring-accent focus:bg-white transition-all duration-300"></textarea>
                <button type="submit" className="w-full bg-gradient-to-r from-accent to-tertiary text-white font-bold py-4 rounded-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
