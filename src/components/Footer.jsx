// import React from "react";
// import {
//   FaGithub,
//   FaInstagram,
//   FaInstagramSquare,
//   FaLinkedin,
//   FaTwitter,
// } from "react-icons/fa";
// import logo from '../assets/logo.png'
// const Footer = () => {
//   return (
//     <footer className="bg-primary text-white">
//       <div className="container mx-auto py-10 px-4">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
//           <div>
//              <img
//       src={logo}
//       width={150}
//       height={150}
//       alt="logo"
//       className="object-contain rounded-full mb-2 ml-2"
//     />
//             <h3 className="text-2xl font-bold mb-2">Abhika Tech Solution</h3>
//             <p className="text-tertiary">Crafting Digital Excellence</p>
//           </div>
//           <div>
//             <h3 className="text-xl font-semibold mb-4 ">Quick Links</h3>
//            <div className="flex gap-10"> 
//             <ul>
//               <li className="mb-2">
//                 <a href="#about" className="hover:text-tertiary">
//                   About
//                 </a>
//               </li>
//               <li className="mb-2">
//                 <a href="#services" className="hover:text-tertiary">
//                   Services
//                 </a>
//               </li>
//               <li className="mb-2">
//                 <a href="#team" className="hover:text-tertiary">
//                   Team
//                 </a>
//               </li>
//               <li className="mb-2">
//                 <a href="#testimonial" className="hover:text-tertiary">
//                   Testimonials
//                 </a>
//               </li>
//               <li>
//                 <a href="#contact" className="hover:text-tertiary">
//                   Contact
//                 </a>
//               </li>
//             </ul>
//             <ul>
//             <li className="mb-2">
//                 <a href="#faqs" className="hover:text-tertiary">
//                   FAQs
//                 </a>
//               </li>
//             <li className="mb-2">
//                 <a href="#t&c" className="hover:text-tertiary">
//                   Terms & Conditions
//                 </a>
//               </li>
            
//             <li className="mb-2">
//                 <a href="#policy" className="hover:text-tertiary">
//                   Our Policies
//                 </a>
//               </li>
//             </ul></div>
//           </div>
//           <div>
//             <h3 className="text-xl font-semibold mb-4">Connect With Us</h3>
//             <div className="flex justify-center md:justify-start space-x-4">
//               <a href="#" className="hover:text-secondary">
//                 <FaTwitter size={24} />
//               </a>
//               <a href="#" className="hover:text-secondary">
//                 <FaLinkedin size={24} />
//               </a>
//               <a href="#" className="hover:text-secondary">
//                 <FaInstagram size={24} />
//               </a>
//               <a href="#" className="hover:text-secondary">
//                 <FaGithub size={24} />
//               </a>
//             </div>
//           </div>
//         </div>
//         <div className="border-t border-tertiary mt-8 pt-6 text-center text-tertiary">
//           <p>
//             &copy; {new Date().getFullYear()} Abhika Tech Solution. All Rights
//             Reserved.
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


import React, { useState } from "react";
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaTimes,
} from "react-icons/fa";
import logo from "../assets/logo.png";

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({ title: "", content: "" });

  const openModal = (e, type) => {
    e.preventDefault();
    if (type === "tc") {
      setModalContent({
        title: "Terms & Conditions",
        content: (
          <div className="space-y-4">
            <p>Welcome to Abhika Tech Solution. By accessing and using our website and services, you agree to comply with and be fully bound by these terms and conditions. If you disagree with any part of these terms, please do not use our website.</p>
            <h4 className="font-semibold text-lg text-primary mt-4">1. Acceptance of Terms</h4>
            <p>The content of the pages of this website is for your general information and use only. It is subject to change without notice. Your continued use of our services after any modification signifies your acceptance of the new terms.</p>
            <h4 className="font-semibold text-lg text-primary mt-4">2. Description of Service</h4>
            <p>Abhika Tech Solution provides software development, premium web design, SEO optimization, and holistic IT consulting services. We reserve the right to modify, suspend, or discontinue any feature without prior notice.</p>
            <h4 className="font-semibold text-lg text-primary mt-4">3. Use of the Site & Intellectual Property</h4>
            <p>This website contains material which is owned by or licensed to us. This material includes, but is not limited to, the design, layout, look, appearance, and graphics. Reproduction is prohibited other than in accordance with the copyright notice. You may not use our brand for illegal or unauthorized purposes.</p>
            <h4 className="font-semibold text-lg text-primary mt-4">4. Limitation of Liability</h4>
            <p>Your use of any information or materials on this website is entirely at your own risk, for which we shall not be liable. It shall be your own responsibility to ensure that any products, services, or information available through this website meet your specific requirements.</p>
            <h4 className="font-semibold text-lg text-primary mt-4">5. Governing Law</h4>
            <p>Your use of this website and any dispute arising out of such use of the website is subject to the local laws and regulations governing our operating jurisdiction.</p>
          </div>
        ),
      });
    } else if (type === "policy") {
      setModalContent({
        title: "Privacy Policy",
        content: (
          <div className="space-y-4">
            <p>At Abhika Tech Solution, your privacy is extremely important to us. This policy outlines how we collect, use, process, and protect your personal data when you interact with our website and services.</p>
            <h4 className="font-semibold text-lg text-primary mt-4">1. Information we collect</h4>
            <p>We only request personal information when we truly need it to provide a service to you. This includes your name, contact details, email address, and project requirements. We collect it by fair and lawful means, with your explicit knowledge and consent.</p>
            <h4 className="font-semibold text-lg text-primary mt-4">2. How we use your information</h4>
            <p>The data we collect is used to communicate with you regarding your projects, to deliver the requested IT solutions, to personalize your user experience, and to analyze traffic to further improve our website.</p>
            <h4 className="font-semibold text-lg text-primary mt-4">3. Data Security and Retention</h4>
            <p>We employ industry-standard security measures to protect your data from unauthorized access or disclosure. We retain your personal information only for as long as necessary to provide you with your requested service or to comply with our legal obligations.</p>
            <h4 className="font-semibold text-lg text-primary mt-4">4. Information sharing</h4>
            <p>We do not share any personally identifying information publicly or with third-parties, except when strictly necessary to deliver a service through a trusted partner, or when required to by law.</p>
            <h4 className="font-semibold text-lg text-primary mt-4">5. Your Rights</h4>
            <p>You have the right to request access to the personal data we hold about you and to ask that your personal data be corrected, updated, or deleted. Please contact us utilizing our contact form to exercise these rights.</p>
          </div>
        ),
      });
    }
    setIsModalOpen(true);
  };

  return (
    <>
      <footer className="bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 text-center sm:text-left">
            {/* Logo & Description */}
            <div className="flex flex-col items-center sm:items-start">
              <img
                src={logo}
                width={120}
                height={120}
                alt="logo"
                className="object-contain rounded-full mb-3"
              />
              <h3 className="text-2xl font-bold mb-1">Abhika Tech Solution</h3>
              <p className="text-tertiary">Crafting Digital Excellence</p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
              <div className="flex justify-center sm:justify-start gap-10">
                <ul className="space-y-2">
                  <li><a href="#about" className="hover:text-tertiary">About</a></li>
                  <li><a href="#services" className="hover:text-tertiary">Services</a></li>
                  <li><a href="#team" className="hover:text-tertiary">Team</a></li>
                  <li><a href="#testimonial" className="hover:text-tertiary">Testimonials</a></li>
                  <li><a href="#contact" className="hover:text-tertiary">Contact</a></li>
                </ul>
                <ul className="space-y-2">
                  <li><a href="#faqs" className="hover:text-tertiary">FAQs</a></li>
                  <li><a href="#t&c" onClick={(e) => openModal(e, 'tc')} className="hover:text-tertiary cursor-pointer">Terms & Conditions</a></li>
                  <li><a href="#policy" onClick={(e) => openModal(e, 'policy')} className="hover:text-tertiary cursor-pointer">Our Policies</a></li>
                </ul>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Connect With Us</h3>
              <div className="flex justify-center sm:justify-start flex-wrap gap-4">
                {[
                  { icon: FaTwitter, label: "Twitter", href: "#" },
                  { icon: FaLinkedin, label: "LinkedIn", href: "#" },
                  { icon: FaInstagram, label: "Instagram", href: "#" },
                  { icon: FaGithub, label: "GitHub", href: "#" },
                ].map((item, idx) => (
                  <div key={idx} className="relative group">
                    <a 
                      href={item.href} 
                      className="hover:text-secondary block transition-colors duration-300"
                    >
                      <item.icon size={24} />
                    </a>
                    {/* Tooltip */}
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-3 py-1 bg-secondary text-primary text-xs font-bold rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap shadow-lg z-20">
                      {item.label}
                      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-b-secondary"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="border-t border-tertiary mt-10 pt-6 text-center text-tertiary text-sm">
            &copy; {new Date().getFullYear()} Abhika Tech Solution. All Rights Reserved.
          </div>
        </div>
      </footer>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] flex flex-col overflow-hidden relative animate-fade-in-up">
            <div className="flex justify-between items-center p-6 border-b border-gray-200">
              <h2 className="text-2xl font-bold text-primary">{modalContent.title}</h2>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-gray-500 hover:text-red-500 transition-colors p-2"
              >
                <FaTimes size={24} />
              </button>
            </div>
            <div className="p-6 overflow-y-auto text-gray-700 text-left">
              {modalContent.content}
            </div>
            <div className="p-6 border-t border-gray-200 flex justify-end">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-secondary transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;
