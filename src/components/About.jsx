import AboutImage from "../assets/about.png";

const About = () => {
  return (
    <div className="bg-black text-white min-h-screen py-20 flex items-center" id="about">
      <div className="container mx-auto px-0 md:px-0 lg:px-0">
        <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <img
            src={AboutImage}
            alt="roshan"
            className="w-72 h-80 rounded object-cover mb-8 md:mb-0"
          />
          <div className="flex-1">
            <p className="text-lg mb-8 leading-relaxed w-full px-0">
              I am a passionate full-stack developer with a focus on building modern and responsive 
              web applications. With a strong foundation in both frontend and backend technologies,
              I strive to create seamless and efficient user experiences. Additionally, I specialize 
              in automation testing to ensure the reliability, scalability, and performance of
              applications. By combining development expertise with testing practices, I aim to 
              deliver robust solutions that meet the highest standards.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
              {[
                { skill: "Java", percentage: 90 },
                { skill: "Spring Boot", percentage: 80 },
                { skill: "JavaScript", percentage: 90 },
                { skill: "Tailwind CSS", percentage: 70 },
                { skill: "React JS", percentage: 85 },
                { skill: "SQL", percentage: 80 },
                { skill: "Selenium", percentage: 90 },
                { skill: "Cypress", percentage: 60 },
                { skill: "Jenkins", percentage: 60 },
                { skill: "AWS", percentage: 40 },
                { skill: "ELK", percentage: 70 },
                { skill: "Git", percentage: 80 },
                { skill: "Bitbucket", percentage: 80 },
                { skill: "Jira", percentage: 90 },
                { skill: "Figma", percentage: 60 },
                { skill: "Power BI", percentage: 70 },
              ].map(({ skill, percentage }) => (
                <div
                  key={skill}
                  className="bg-gray-800 rounded-lg p-4 flex flex-col items-center text-center"
                >
                  <h3 className="text-lg font-semibold mb-3">{skill}</h3>
                  <div className="w-full bg-gray-700 rounded-full h-2.5 mb-3">
                    <div
                      className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full"
                      style={{ width: `${percentage}%` }}
                    ></div>
                  </div>
                  <span className="text-sm font-medium">{percentage}%</span>
                </div>
              ))}
            </div>
            <div className="mt-12 flex justify-between text-center">
              <div>
                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                  1+
                </h3>
                <p>Years Experience</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                  50+
                </h3>
                <p>Projects Completed</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                  15+
                </h3>
                <p>Happy Clients</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
