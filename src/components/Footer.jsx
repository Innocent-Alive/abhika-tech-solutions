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


import React from "react";
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
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
                <li><a href="#t&c" className="hover:text-tertiary">Terms & Conditions</a></li>
                <li><a href="#policy" className="hover:text-tertiary">Our Policies</a></li>
              </ul>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Connect With Us</h3>
            <div className="flex justify-center sm:justify-start flex-wrap gap-4">
              <a href="#" className="hover:text-secondary"><FaTwitter size={24} /></a>
              <a href="#" className="hover:text-secondary"><FaLinkedin size={24} /></a>
              <a href="#" className="hover:text-secondary"><FaInstagram size={24} /></a>
              <a href="#" className="hover:text-secondary"><FaGithub size={24} /></a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-tertiary mt-10 pt-6 text-center text-tertiary text-sm">
          &copy; {new Date().getFullYear()} Abhika Tech Solution. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
