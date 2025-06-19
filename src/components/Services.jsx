import React from 'react';
import { FaCode, FaMobileAlt, FaPaintBrush } from 'react-icons/fa';

const services = [
  {
    icon: <FaCode className="text-accent text-5xl mb-4" />,
    title: 'Web Development',
    description: 'We architect and build robust, responsive, and scalable web applications tailored precisely to your unique business requirements. From sophisticated e-commerce platforms to dynamic corporate portals, we leverage cutting-edge technologies to deliver seamless digital experiences.'
  },
  {
    icon: <FaMobileAlt className="text-accent text-5xl mb-4" />,
    title: 'Mobile App Development',
    description: 'Our team excels in creating intuitive, high-performance native and cross-platform mobile applications for both iOS and Android. We focus on user-centric design and flawless functionality to ensure your app engages users and achieves its objectives.'
  },
  {
    icon: <FaPaintBrush className="text-accent text-5xl mb-4" />,
    title: 'UI/UX Design',
    description: 'We craft stunning, user-friendly interfaces that not only look beautiful but also significantly enhance user experience and drive engagement. Our design philosophy centers on creating intuitive navigation, clear visual hierarchies, and compelling interactions that resonate with your target audience.'
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-lightest">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary">Our Services</h2>
          <p className="text-secondary mt-2">What We Offer</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
              <div className="text-accent text-5xl mb-6 flex justify-center transform group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
              <h3 className="text-2xl font-bold text-primary mb-3">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
              <div className="mt-6 h-1 w-1/4 bg-accent rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left mx-auto"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
