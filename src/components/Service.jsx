import React from "react";

const services = [
  {
    id: 1,
    title: "Web Design",
    description: "Crafting visually appealing, user-centric web designs that enhance user experience. We focus on creating responsive layouts and intuitive interfaces, ensuring a seamless experience across all devices.",
  },
  {
    id: 2,
    title: "Frontend Development",
    description: "Building dynamic and interactive user interfaces using modern frontend technologies like React, Vue, and Angular. We ensure fast load times and smooth performance for a superior user experience.",
  },
  {
    id: 3,
    title: "Backend Development",
    description: "Developing scalable and secure server-side applications using technologies like Node.js, Python, and Ruby. We focus on creating efficient APIs, databases, and logic to support high-performance applications.",
  },
  {
    id: 4,
    title: "Full-Stack Development",
    description: "Bringing together both frontend and backend development skills to build complete, end-to-end web applications. We handle everything from UI design to server-side logic, ensuring smooth integration and seamless user experience.",
  },
  
  {
    id: 5,
    title: "Automation Testing",
    description: "Implementing automated testing solutions to ensure the quality, efficiency, and reliability of your software applications. Our testing strategies help identify bugs and issues early, reducing manual efforts and accelerating the development cycle.",
  },
  {
    id: 6,
    title: "AWS Cloud Service",
    description: "Leveraging AWS Cloud Services to build scalable, secure, and highly available web applications. We provide cloud infrastructure setup, deployment, and management to optimize performance and minimize operational costs.",
  },
  
  
];
const Service = () => {
  return (
    <div className="bg-black text-white py-20" id="service">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">My Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-gray-800 px-6 pb-6 rounded-lg hover:shadow-lg transform 
              transition-transform duration-300 hover:scale-105"
            >
              <div
                className="text-right text-2xl font-bold text-transparent bg-clip-text 
              bg-gradient-to-r from-green-600 to-blue-400"
              >
                {service.id}
              </div>
              <h3 className="mt-2 text-2xl font-bold text-transparent bg-clip-text 
              bg-gradient-to-r from-green-400 to-blue-500">
                {service.title}
              </h3>
              <p className="mt-2 text-gray-300">{service.description}</p>
              <a href="#" className="mt-4 inline-block text-green-400 hover:text-blue-500">Read More</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
