import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const teamMembers = [
  {
    name: 'Abhay Kumar Das',
    role: 'Founder & Full-Stack Developer',
    imageUrl: 'https://i.ibb.co/g9TrsVf/Abhay-Kumar-Das.jpg',
    social: {
      github: 'https://github.com/Abhay-Kumar-Das',
      linkedin: '#',
    }
  },
  {
    name: 'Harshika Gawade',
    role: 'Lead Frontend Developer',
    imageUrl: 'https://avatars.githubusercontent.com/u/115694819?v=4',
    social: {
      github: '#',
      linkedin: '#',
    }
  },
  {
    name: 'John Smith',
    role: 'UI/UX & Brand Designer',
    imageUrl: 'https://via.placeholder.com/400x400.png/0096c7/FFFFFF?Text=JS',
    social: {
      github: '#',
      linkedin: '#',
    }
  }
];

const TeamCard = ({ member }) => (
  <div className="bg-white rounded-xl shadow-lg overflow-hidden text-center group transform hover:-translate-y-2 transition-all duration-300 ease-in-out hover:shadow-2xl">
    <div className="relative h-56">
      <img className="w-full h-full object-cover object-center" src={member.imageUrl} alt={member.name} />
      <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-40 transition-all duration-300"></div>
    </div>
    <div className="p-6">
      <h3 className="text-2xl font-bold text-primary mb-1">{member.name}</h3>
      <p className="text-md text-accent font-semibold">{member.role}</p>
      <div className="flex justify-center space-x-4 mt-4">
        <a href={member.social.github} className="text-gray-500 hover:text-primary transition-colors duration-300"><FaGithub size={24} /></a>
        <a href={member.social.linkedin} className="text-gray-500 hover:text-primary transition-colors duration-300"><FaLinkedin size={24} /></a>
      </div>
    </div>
  </div>
);

const Team = () => {
  return (
    <section id="team" className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary">Meet Our Team</h2>
          <p className="text-secondary mt-2">The Minds Behind the Magic</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {teamMembers.map((member, index) => (
            <TeamCard key={index} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
