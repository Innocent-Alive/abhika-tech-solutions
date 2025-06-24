import React, { useState } from "react";
import {
  FaGithub,
  FaCalendarAlt,
  FaUsers,
  FaFileCode,
  FaMobileAlt,
  FaGlobeAsia,
  FaDatabase,
} from "react-icons/fa";
import { FaShieldCat } from "react-icons/fa6";
import { FiExternalLink, FiZap } from "react-icons/fi";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  // Sample projects data - replace with your actual projects
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution with React, Node.js, and MongoDB. Features include payment integration, inventory management, and admin dashboard.",
      image:
        "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/bf620a174379063.64a1a84aacbd4.png",
      category: "web",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
      completionDate: "2024",
      teamSize: "4 developers",
      status: "completed",
    },
    {
      id: 2,
      title: "Mobile Banking App",
      description:
        "Secure mobile banking application with biometric authentication, real-time transactions, and comprehensive financial management tools.",
      image:
        "https://www.wealthpedia.in/wp-content/uploads/2021/01/mobile-banking-apps-scaled.jpg",
      category: "mobile",
      technologies: ["React Native", "Firebase", "Redux", "Biometrics"],
      liveUrl: "https://play.google.com/store",
      githubUrl: null,
      completionDate: "2024",
      teamSize: "6 developers",
      status: "completed",
    },
    {
      id: 3,
      title: "Healthcare Management System",
      description:
        "Comprehensive healthcare management platform for hospitals and clinics with patient records, appointment scheduling, and billing.",
      image:
        "https://images.ctfassets.net/lpvian6u6i39/63WuJBUEQE0dlUXppb04md/e15199449cc3b6ac09d95e80f10d122f/Healthcare_Management_System.png",
      category: "web",
      technologies: ["Vue.js", "Laravel", "MySQL", "Docker"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
      completionDate: "2023",
      teamSize: "8 developers",
      status: "completed",
    },
    {
      id: 4,
      title: "AI-Powered Analytics Dashboard",
      description:
        "Advanced analytics dashboard with machine learning insights, real-time data visualization, and predictive analytics for business intelligence.",
      image:
        "https://www.digifloor.com/wp-content/uploads/2023/06/Best-Free-AI-Image-Generator.jpg",
      category: "ai",
      technologies: ["Python", "TensorFlow", "D3.js", "FastAPI"],
      liveUrl: null,
      githubUrl: "https://github.com/example",
      completionDate: "2024",
      teamSize: "5 developers",
      status: "ongoing",
    },
    {
      id: 5,
      title: "IoT Smart Home System",
      description:
        "Integrated smart home automation system with IoT devices, mobile control, and energy management features.",
      image:
        "https://www.eetasia.com/wp-content/uploads/sites/2/2022/05/iot-devices_cover.jpg",
      category: "iot",
      technologies: ["Arduino", "Raspberry Pi", "MQTT", "Flutter"],
      liveUrl: "https://example.com",
      githubUrl: null,
      completionDate: "2023",
      teamSize: "3 developers",
      status: "completed",
    },
    {
      id: 6,
      title: "IoT Smart Home System",
      description:
        "Integrated smart home automation system with IoT devices, mobile control, and energy management features.",
      image:
        "https://images.unsplash.com/photo-1593642532973-d31b6557fa68?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
      category: "web",
      technologies: ["Arduino", "Raspberry Pi", "MQTT", "Flutter"],
      liveUrl: "https://example.com",
      githubUrl: null,
      completionDate: "2023",
      teamSize: "3 developers",
      status: "completed",
    },
  ];

  const categories = [
    { id: "all", name: "All Projects", icon: FaGlobeAsia },
    { id: "web", name: "Web Development", icon: FaFileCode },
    { id: "mobile", name: "Mobile Apps", icon: FaMobileAlt },
    { id: "ai", name: "AI/ML", icon: FiZap },
    { id: "iot", name: "IoT Solutions", icon: FaDatabase },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  const getCategoryIcon = (category) => {
    const categoryData = categories.find((cat) => cat.id === category);
    return categoryData ? categoryData.icon : FaGlobeAsia;
  };

  return (
    <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8 font-body bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 font-header text-primary">
            Our Projects
          </h2>
          <p className="mt-2 leading-relaxed text-secondary">
            Discover our innovative solutions and successful implementations.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === category.id
                    ? "shadow-lg transform scale-105"
                    : "hover:shadow-md hover:scale-102"
                }`}
                style={{
                  backgroundColor:
                    activeFilter === category.id
                      ? "var(--color-primary)"
                      : "var(--color-additional)",
                  color:
                    activeFilter === category.id
                      ? "white"
                      : "var(--color-text)",
                }}
              >
                <IconComponent size={20} />
                <span>{category.name}</span>
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => {
            const CategoryIcon = getCategoryIcon(project.category);
            return (
              <div
                key={project.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group hover:transform hover:scale-105"
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <div
                      className="flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium text-white"
                      style={{ backgroundColor: "var(--color-primary)" }}
                    >
                      <CategoryIcon size={16} />
                      <span className="capitalize">{project.category}</span>
                    </div>
                  </div>
                  {project.status === "ongoing" && (
                    <div className="absolute top-4 right-4">
                      <div
                        className="px-3 py-1 rounded-full text-sm font-medium text-white"
                        style={{ backgroundColor: "var(--color-secondary)" }}
                      >
                        In Progress
                      </div>
                    </div>
                  )}
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3
                    className="text-xl font-bold mb-3"
                    style={{
                      color: "var(--color-primary)",
                      fontFamily: "var(--font-header)",
                    }}
                  >
                    {project.title}
                  </h3>

                  <p
                    className="text-sm leading-relaxed mb-4"
                    style={{ color: "var(--color-text)" }}
                  >
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 text-xs font-medium rounded-full"
                        style={{
                          backgroundColor: "var(--color-additional)",
                          color: "var(--color-text)",
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Project Meta */}
                  <div
                    className="flex items-center gap-4 mb-4 text-sm"
                    style={{ color: "var(--color-text)" }}
                  >
                    <div className="flex items-center gap-1">
                      <FaCalendarAlt size={16} />
                      <span>{project.completionDate}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <FaUsers size={16} />
                      <span>{project.teamSize}</span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-white transition-all duration-300 hover:shadow-md flex-1 justify-center"
                        style={{ backgroundColor: "var(--color-primary)" }}
                      >
                        <FiExternalLink size={16} />
                        <span>Live Demo</span>
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:shadow-md border-2"
                        style={{
                          color: "var(--color-primary)",
                          borderColor: "var(--color-primary)",
                        }}
                      >
                        <FaGithub size={16} />
                        <span>Code</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto">
            <h3
              className="text-2xl font-bold mb-4"
              style={{
                color: "var(--color-primary)",
                fontFamily: "var(--font-header)",
              }}
            >
              Ready to Start Your Project?
            </h3>
            <p className="text-lg mb-6" style={{ color: "var(--color-text)" }}>
              Let's discuss how we can help bring your vision to life with our
              expertise in modern technologies.
            </p>
            <button
              className="px-8 py-3 rounded-lg font-semibold text-white transition-all duration-300 hover:shadow-lg hover:transform hover:scale-105"
              style={{ backgroundColor: "var(--color-primary)" }}
            >
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
