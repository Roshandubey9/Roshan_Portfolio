import React from 'react';

const workExperience = [
  {
    id: 1,
    position: "Automation Test Engineer",
    company: "Apmosys Technologies Pvt Ltd.",
    duration: "Jan 2024 - Present",
    description: "I am currently working on a corporate banking project, where I am involved in performing comprehensive web and mobile testing across various phases. My role ensures the seamless functionality and usability of the banking platform, guaranteeing an optimal experience for users. The project is for Axis Bank, where I collaborate closely with the development team to meet the highest quality standards and deliver a robust and reliable product.",
  },
  {
    id: 2,
    position: "Intern - Java Developer",
    company: "Persistent Systems",
    duration: "Jun 2023 - Sep 2023",
    description: "As an Intern Java Developer at Persistent Systems from June 2023 to September 2023, I was responsible for designing and implementing responsive user interfaces using HTML, CSS, and JavaScript. I collaborated closely with UX/UI teams to optimize and enhance the overall user experience, ensuring the application was both functional and user-friendly.",
  },
  {
    id: 3,
    position: "Intern - Web Development",
    company: "Simplbyte",
    duration: "Mar 2023 - Mar 2023",
    description: "As an Intern - Web Development at Simplbyte in March 2023, I worked on developing dynamic and interactive web applications using React. My responsibilities included designing and implementing responsive user interfaces, integrating APIs, and optimizing application performance. I collaborated with the development team to enhance user experience and ensure the functionality of the platform was smooth and efficient.",

  },
];

const Experience = () => {
  return (
    <div className="bg-black text-white py-20" id="experience">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">Work Experience</h2>
        <div className="space-y-8">
          {workExperience.map((experience) => (
            <div
              key={experience.id}
              className="bg-gray-800 p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
            >
              <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                {experience.position}
              </h3>
              <p className="text-lg text-gray-400">{experience.company}</p>
              <p className="mt-2 text-gray-500">{experience.duration}</p>
              <p className="mt-4 text-gray-300">{experience.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
