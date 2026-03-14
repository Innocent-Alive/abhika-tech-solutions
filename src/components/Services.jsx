import React from "react";
import { FaCode, FaMobileAlt, FaPaintBrush } from "react-icons/fa";
import { motion } from "framer-motion";

const services = [
  {
    icon: <FaCode className="text-primary text-5xl mb-4" />,
    title: "Web Development",
    description:
      "We architect and build robust, responsive, and scalable web applications tailored precisely to your unique business requirements. From sophisticated e-commerce platforms to dynamic corporate portals, we leverage cutting-edge technologies to deliver seamless digital experiences.",
  },
  {
    icon: <FaMobileAlt className="text-primary text-5xl mb-4" />,
    title: "Mobile App Development",
    description:
      "Our team excels in creating intuitive, high-performance native and cross-platform mobile applications for both iOS and Android. We focus on user-centric design and flawless functionality to ensure your app engages users and achieves its objectives.",
  },
  {
    icon: <FaPaintBrush className="text-primary text-5xl mb-4" />,
    title: "UI/UX Design",
    description:
      "We craft stunning, user-friendly interfaces that not only look beautiful but also significantly enhance user experience and drive engagement. Our design philosophy centers on creating intuitive navigation, clear visual hierarchies, and compelling interactions that resonate with your target audience.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-tertiary overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-primary font-header uppercase tracking-tight">Our Services</h2>
          <p className="text-white mt-2 font-body text-sm sm:text-base opacity-80">What We Offer</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 group border-b-4 border-transparent hover:border-primary"
            >
              <div className="text-primary text-5xl mb-6 flex justify-center transition-transform duration-300 group-hover:scale-110">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-primary mb-3 font-header">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed font-body">
                {service.description}
              </p>
              <div className="mt-6 h-1 w-1/4 bg-primary rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left mx-auto"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
