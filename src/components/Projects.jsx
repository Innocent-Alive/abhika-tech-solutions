import React, { useState } from "react";
import {
  FaGithub,
  FaCalendarAlt,
  FaUsers,
  FaGlobeAsia,
  FaCode,
  FaMobileAlt,
} from "react-icons/fa";
import { FiExternalLink, FiZap } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, A11y, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "Kalp Academy",
      description:
        "A comprehensive LMS learning platform built for educational institutions. Features include student management, course delivery, and real-time progress tracking.",
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      category: "web",
      technologies: ["React", "Node.js", "Express", "MongoDB"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
      completionDate: "2024",
      teamSize: "4 members",
      status: "completed",
    },
    {
      id: 2,
      title: "foxygen",
      description:
        "Healthcare platform for MBBS & medical students to solve daily clinical scenarios, test skills, and collaborate on complex medical cases.",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      category: "mobile",
      technologies: ["React Native", "MongoDB", "Redux", "TypeScript"],
      liveUrl: "https://play.google.com/store",
      githubUrl: null,
      completionDate: "2024",
      teamSize: "5 members",
      status: "completed",
    },
    {
      id: 3,
      title: "hersix",
      description:
        "Advanced chat and social media platform featuring real-time messaging, media sharing, and community engagement with robust security.",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      category: "mobile",
      technologies: ["React Native", "Postgres", "Java Spring Boot", "AWS S3"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
      completionDate: "2024",
      teamSize: "4 members",
      status: "completed",
    },
    {
      id: 4,
      title: "AI Analytics Dashboard",
      description:
        "Advanced analytics dashboard with machine learning insights, real-time data visualization, and predictive analytics for business intelligence.",
      image: "https://images.unsplash.com/photo-1551288049-bbbda536ad37?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      category: "ai",
      technologies: ["Python", "TensorFlow", "D3.js", "FastAPI"],
      liveUrl: null,
      githubUrl: "https://github.com/example",
      completionDate: "2024",
      teamSize: "3 members",
      status: "ongoing",
    },
    {
      id: 5,
      title: "Corporate Cloud Solution",
      description:
        "Scalable cloud infrastructure for large organizations, ensuring data integrity and high availability through modern DevOps practices.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      category: "web",
      technologies: ["AWS", "Docker", "Kubernetes", "React"],
      liveUrl: "https://example.com",
      githubUrl: null,
      completionDate: "2023",
      teamSize: "2 members",
      status: "completed",
    },
    {
      id: 6,
      title: "E-Commerce Ecosystem",
      description:
        "High-performance E-commerce platform with seamless payment gateway integration and advanced inventory management.",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      category: "web",
      technologies: ["Next.js", "Shopify API", "TailwindCSS"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
      completionDate: "2024",
      teamSize: "3 members",
      status: "completed",
    },
  ];

  const categories = [
    { id: "all", name: "All Projects", icon: FaGlobeAsia },
    { id: "web", name: "Web Development", icon: FaCode },
    { id: "mobile", name: "Mobile Apps", icon: FaMobileAlt },
    { id: "ai", name: "AI Solutions", icon: FiZap },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, scale: 0.95 },
  };

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 font-body bg-background overflow-hidden relative">
      {/* WiStars Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.05] pointer-events-none" 
        style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 512 512'%3E%3Cpath fill='%23007C91' d='M256 48c12 54 42 84 96 96-54 12-84 42-96 96-12-54-42-84-96-96 54-12 84-42 96-96zM144 240c8 36 28 56 64 64-36 8-56 28-64 64-8-36-28-56-64-64 36-8 56-28 64-64zM368 240c8 36 28 56 64 64-36 8-56 28-64 64-8-36-28-56-64-64 36-8 56-28 64-64zM256 352c6 27 21 42 48 48-27 6-42 21-48 48-6-27-21-42-48-48 27-6 42-21 48-48z'/%3E%3C/svg%3E")`,
          backgroundSize: '30px 30px' 
        }}
      ></div>
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 font-header text-primary uppercase tracking-tight">
            Our Masterpieces
          </h2>
          <div className="w-20 h-1 bg-secondary mx-auto mt-4 mb-2 rounded-full"></div>
          <p className="mt-2 text-md leading-relaxed text-secondary max-w-2xl mx-auto opacity-80">
            A showcase of our most innovative digital solutions and successful client collaborations.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveFilter(category.id)}
                className={`flex items-center gap-3 px-8 py-3 rounded-full font-bold transition-all duration-300 shadow-md ${
                  activeFilter === category.id
                    ? "bg-primary text-white shadow-xl ring-2 ring-primary ring-offset-2"
                    : "bg-white text-text hover:bg-tertiary"
                }`}
              >
                <IconComponent size={20} />
                <span>{category.name}</span>
              </motion.button>
            );
          })}
        </div>

        {/* Projects Layout (Slider on Mobile, Grid on Desktop) */}
        <div className="block md:hidden">
          <Swiper
            modules={[Pagination, A11y, Autoplay]}
            spaceBetween={20}
            slidesPerView={1.2}
            centeredSlides={true}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            className="pb-12"
          >
            {filteredProjects.map((project) => (
              <SwiperSlide key={project.id}>
                <motion.div
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden flex flex-col h-full"
                >
                  {/* Reuse the existing project card content here but slightly adjusted for mobile if needed */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 left-3">
                      <div className="flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold text-white bg-primary backdrop-blur-md shadow-md">
                        <FaCode size={12} />
                        <span className="capitalize">{project.category}</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-5 flex-1 flex flex-col">
                    <h3 className="text-lg font-bold mb-3 text-primary font-header">
                      {project.title}
                    </h3>
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-2 py-0.5 text-[9px] uppercase tracking-wider font-bold rounded bg-background text-secondary border border-secondary/10"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-100 text-[11px] font-medium text-text">
                      <div className="flex items-center gap-1.5">
                        <FaCalendarAlt size={12} className="text-primary"/>
                        <span>{project.completionDate}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <FaUsers size={12} className="text-primary"/>
                        <span>{project.teamSize}</span>
                      </div>
                    </div>
                    <div className="flex gap-3 mt-auto">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 px-4 py-2 rounded-lg font-bold text-white bg-primary flex-1 justify-center text-sm"
                        >
                          <FiExternalLink size={16} />
                          <span>Live</span>
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center w-10 h-10 rounded-lg border-2 border-primary text-primary"
                        >
                          <FaGithub size={18} />
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <motion.div 
          layout
          className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ duration: 0.4 }}
                className="bg-white rounded-2xl shadow-md border border-gray-100 hover:shadow-xl transition-all duration-500 overflow-hidden group flex flex-col h-full"
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
                    <p className="text-white text-xs font-medium line-clamp-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      {project.description}
                    </p>
                  </div>
                  <div className="absolute top-3 left-3">
                    <div className="flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold text-white bg-primary backdrop-blur-md shadow-md">
                      <FaCode size={12} />
                      <span className="capitalize">{project.category}</span>
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-5 flex-1 flex flex-col">
                  <h3 className="text-lg font-bold mb-3 text-primary font-header group-hover:text-secondary transition-colors duration-300">
                    {project.title}
                  </h3>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-2 py-0.5 text-[9px] uppercase tracking-wider font-bold rounded bg-background text-secondary border border-secondary/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Project Meta */}
                  <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-100 text-[11px] font-medium text-text">
                    <div className="flex items-center gap-1.5">
                      <div className="w-6 h-6 rounded-full bg-tertiary flex items-center justify-center text-primary">
                        <FaCalendarAlt size={12} />
                      </div>
                      <span>{project.completionDate}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                       <div className="w-6 h-6 rounded-full bg-tertiary flex items-center justify-center text-primary">
                        <FaUsers size={12} />
                      </div>
                      <span>{project.teamSize}</span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 mt-auto">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 px-4 py-2 rounded-lg font-bold text-white bg-primary hover:bg-secondary transition-all duration-300 hover:shadow-md flex-1 justify-center transform group-hover:scale-[1.02] text-sm"
                      >
                        <FiExternalLink size={16} />
                        <span>Live</span>
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-10 h-10 rounded-lg font-medium transition-all duration-300 hover:shadow-sm border-2 border-primary text-primary hover:bg-primary hover:text-white"
                      >
                        <FaGithub size={18} />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-24"
        >
          <div className="rounded-3xl shadow-2xl p-12 max-w-4xl mx-auto bg-secondary relative overflow-hidden group">
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl group-hover:bg-white/20 transition-all duration-700"></div>
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-primary/20 rounded-full blur-3xl group-hover:bg-primary/30 transition-all duration-700"></div>
            
            <h3 className="text-4xl font-bold mb-6 text-background font-header relative z-10">
              Transform Your Vision into Reality
            </h3>
            <p className="text-xl mb-10 text-background font-medium opacity-90 max-w-2xl mx-auto relative z-10">
              Ready to build something extraordinary? Our team of experts is here to lead your digital transformation.
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1)" }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-10 py-4 rounded-xl font-bold text-background transition-all duration-300 bg-primary relative z-10 text-lg shadow-xl"
            >
              Start Your Journey Now
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

