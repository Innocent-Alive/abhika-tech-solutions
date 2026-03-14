import React, { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {
  FaGithub,
  FaLinkedin,
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa";
import { motion } from "framer-motion";

const teamMembers = [
  {
    name: "Abhay Kumar Das",
    role: "Founder & Full-Stack Developer",
    imageUrl: "https://avatars.githubusercontent.com/u/120706732?v=4",
    social: {
      github: "https://github.com/Abhay-Kumar-Das",
      linkedin: "https://www.linkedin.com/in/innocent-alive/",
    },
  },
   {
    name: "Harshika Gawade",
    role: "Full-Stack Developer",
    imageUrl: "https://avatars.githubusercontent.com/u/110835926?v=4",
    social: {
      github: "https://github.com/9102004Harshika",
      linkedin: "https://in.linkedin.com/in/harshikagawade",
    },
  },
   
  {
    name: "Akash Pal",
    role: "UI/UX & Frontend Developer",
    imageUrl: "https://avatars.githubusercontent.com/u/127613982?v=4",
    social: {
      github: "https://github.com/palakash26",
      linkedin: "https://www.linkedin.com/in/akash-pal-29b198279/",
    },
  },
  {
    name: "Vaibhav Pednekar",
    role: "Software Engineer & Tester",
    imageUrl: "https://avatars.githubusercontent.com/u/10902969?v=4",
    social: {
      github: "#",
      linkedin: "http://www.linkedin.com/in/vaibhav-pednekar-96a625330",
    },
  },
  {
    name: "Rishabh Paswan",
    role: "Business Analyst",
    imageUrl: "https://avatars.githubusercontent.com/u/135265945",
    social: {
      github: "https://github.com/Codehunter108",
      linkedin: "https://in.linkedin.com/in/rishabh_paswan",
    },
  },
];

const TeamCard = ({ member }) => (
  <motion.div 
    whileHover={{ y: -10 }}
    className="bg-white mb-10 mt-4 rounded-3xl shadow-lg overflow-hidden text-center group transition-all duration-300 ease-in-out hover:shadow-2xl border border-gray-100"
  >
    <div className="relative h-56 rounded-t-3xl overflow-hidden flex items-center justify-center p-6">
      <div className="rounded-full w-40 h-40 bg-tertiary border-4 border-white shadow-xl overflow-hidden group-hover:border-secondary transition-colors duration-500 relative z-10">
        <img
          className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
          src={member.imageUrl}
          alt={member.name}
        />
      </div>
      <div className="absolute inset-0 bg-background/50 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    </div>
    <div className="p-8">
      <h3 className="text-2xl font-bold text-primary mb-2 font-header group-hover:text-secondary transition-colors duration-300">
        {member.name}
      </h3>
      <p className="text-md text-secondary font-bold font-body">{member.role}</p>
      <div className="flex justify-center space-x-6 mt-6">
        <motion.a
          whileHover={{ scale: 1.2, color: "var(--color-primary)" }}
          href={member.social.github}
          className="text-text transition-colors duration-300"
        >
          <FaGithub size={24} />
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.2, color: "#0077b5" }}
          href={member.social.linkedin}
          className="text-text transition-colors duration-300"
        >
          <FaLinkedin size={24} />
        </motion.a>
      </div>
    </div>
  </motion.div>
);

const Team = () => {
  const swiperRef = useRef(null);
  const [isBeginning ,setIsBeginning]=useState(false);
  const [isEnd, setIsEnd]=useState(false)
  
  useEffect(() => {
    if (swiperRef.current?.params?.navigation) {
      swiperRef.current.params.navigation.prevEl = ".swiper-button-prev-custom";
      swiperRef.current.params.navigation.nextEl = ".swiper-button-next-custom";
      swiperRef.current.navigation.destroy();
      swiperRef.current.navigation.init();
      swiperRef.current.navigation.update();
    }
  }, []);

  return (
    <section id="team" className="bg-background py-20 overflow-hidden relative">
      {/* WiStars Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.05] pointer-events-none" 
        style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 512 512'%3E%3Cpath fill='%23007C91' d='M256 160c15 67.5 52.5 105 120 120-67.5 15-105 52.5-120 120-15-67.5-52.5-105-120-120 67.5-15 105-52.5 120-120zM128 64c7.5 33.75 26.25 52.5 60 60-33.75 7.5-52.5 26.25-60 60-7.5-33.75-26.25-52.5-60-60 33.75-7.5 52.5-26.25 60-60zM400 352c7.5 33.75 26.25 52.5 60 60-33.75 7.5-52.5 26.25-60 60-7.5-33.75-26.25-52.5-60-60 33.75-7.5 52.5-26.25 60-60z'/%3E%3C/svg%3E")`,
          backgroundSize: '30px 30px' 
        }}
      ></div>
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-primary font-header uppercase tracking-tight">The Visionaries Behind Abhika</h2>
          <div className="w-20 h-1 bg-secondary mx-auto mt-4 rounded-full"></div>
          <p className="text-secondary mt-4 font-body text-sm sm:text-base opacity-80">Meet the dedicated experts driving our innovation.</p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative"
        >
          <Swiper
            modules={[Navigation, Pagination, A11y, Autoplay]}
            spaceBetween={40}
            slidesPerView={1}
            slidesPerGroup={1}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
            onSlideChange={(swiper)=>{
              setIsBeginning(swiper.isBeginning);
              setIsEnd(swiper.isEnd);
            }}
            breakpoints={{
              768: {
                slidesPerView: 2,
                slidesPerGroup: 1,
              },
              1024: {
                slidesPerView: 3,
                slidesPerGroup: 1,
              },
            }}
            className="pb-16"
          >
            {teamMembers.map((member, index) => (
              <SwiperSlide key={index}>
                <TeamCard member={member} />
              </SwiperSlide>
            ))}
          </Swiper>
          
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={`swiper-button-prev-custom absolute top-1/2 left-0 transform -translate-y-1/2 z-10 p-3 rounded-full md:-left-12 shadow-xl transition-all duration-300 ${
              isBeginning ? "opacity-20 cursor-not-allowed bg-gray-200 text-gray-400" : "bg-white text-primary hover:bg-primary hover:text-white cursor-pointer" 
            }`}
          >
            <FaArrowLeft size={22} />
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={`swiper-button-next-custom absolute top-1/2 right-0 transform -translate-y-1/2 z-10 p-3 rounded-full md:-right-12 shadow-xl transition-all duration-300 ${
              isEnd ? "opacity-20 cursor-not-allowed bg-gray-200 text-gray-400" : "bg-white text-primary hover:bg-primary hover:text-white cursor-pointer" 
            }`}
          >
            <FaArrowRight size={22} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Team;
