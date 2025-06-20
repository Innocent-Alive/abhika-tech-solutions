import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {
  FaGithub,
  FaLinkedin,
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa";

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
    role: "Lead Frontend Developer",
    imageUrl: "https://avatars.githubusercontent.com/u/110835926?v=4",
    social: {
      github: "https://github.com/9102004Harshika/",
      linkedin: "https://www.linkedin.com/in/harshikagawade/",
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
];

const TeamCard = ({ member }) => (
  <div className="bg-background mb-10 mt-4 rounded-xl shadow-md overflow-hidden text-center group transform transition-all duration-300 ease-in-out hover:shadow-xl hover:shadow-secondary/20 border-2 border-transparent hover:border-secondary hover:-translate-y-1">
    <div className="relative h-52 rounded-t-xl overflow-hidden">
      <div className="rounded-full w-40 h-40 mx-auto mt-10 bg-primary border-2 border-primary shadow-lg overflow-hidden group-hover:border-secondary transition-colors duration-300">
        <img
          className="w-full h-full object-cover object-top"
          src={member.imageUrl}
          alt={member.name}
        />
      </div>
    </div>
    <div className="p-6">
      <h3 className="text-2xl font-bold text-primary mb-1 group-hover:text-secondary transition-colors duration-300">
        {member.name}
      </h3>
      <p className="text-md text-text font-semibold">{member.role}</p>
      <div className="flex justify-center space-x-4 mt-4">
        <a
          href={member.social.github}
          className="text-text hover:text-secondary transition-colors duration-300"
        >
          <FaGithub size={24} />
        </a>
        <a
          href={member.social.linkedin}
          className="text-text hover:text-secondary transition-colors duration-300"
        >
          <FaLinkedin size={24} />
        </a>
      </div>
    </div>
  </div>
);

const Team = () => {
  const swiperRef = useRef(null);
  return (
    <section id="team" className="bg-background py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary">Meet Our Team</h2>
          <p className="text-secondary mt-2">The Minds Behind the Magic</p>
        </div>
        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination, A11y]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={{
              nextEl: ".swiper-button-next-custom",
              prevEl: ".swiper-button-prev-custom",
            }}
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="pb-12"
          >
            {teamMembers.map((member, index) => (
              <SwiperSlide key={index}>
                <TeamCard member={member} />
              </SwiperSlide>
            ))}
          </Swiper>
          <div
            onClick={() => swiperRef.current?.slidePrev()}
            className="swiper-button-prev-custom absolute top-1/2 left-0 transform -translate-y-1/2 z-10 p-2 bg-primary/80 text-white rounded-full cursor-pointer hover:bg-secondary transition-colors duration-300 md:-left-8"
          >
            <FaArrowLeft size={24} />
          </div>
          <div
            onClick={() => swiperRef.current?.slideNext()}
            className="swiper-button-next-custom absolute top-1/2 right-0 transform -translate-y-1/2 z-10 p-2 bg-primary/80 text-white rounded-full cursor-pointer hover:bg-secondary transition-colors duration-300 md:-right-8"
          >
            <FaArrowRight size={24} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
