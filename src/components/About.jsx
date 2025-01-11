import AboutImage from "../assets/Roshan.png";

const About = () => {
  return (
    <div className="bg-black text-white py-20" id="about">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <img
            src={AboutImage}
            alt="roshan"
            className="w-72 h-80 rounded object-cover mb-8 md:mb-0"
          />
          <div className="flex-1">
            <p className="text-lg mb-8">
            I am a passionate full-stack developer with a focus on building modern and responsive 
            web applications. With a strong foundation in both frontend and backend technologies,
             I strive to create seamless and efficient user experiences. Additionally, I specialize 
             in automation testing to ensure the reliability, scalability, and performance of
              applications. By combining development expertise with testing practices, I aim to 
              deliver robust solutions that meet the highest standards.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-6">
              <label htmlFor="java" className="w-1/12 mr-0">
                  Java
                </label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div
                    className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full 
                    transform transition-transform duration-300 hover:scale-105 w-10/12"
                  ></div>
                </div>
                 
                <label htmlFor="htmlandcss" className="w-2/12  mr-0 ml-4">
                  Spring Boot
                </label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div
                    className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full 
                    transform transition-transform duration-300 hover:scale-105 w-8/12"
                  ></div>
                </div>
              </div>

              <div className="space-y-3">
             <div className="flex items-center space-x-6">
             <label htmlFor="java" className="w-1/12 mr-0">
             JavaScript
                </label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                <div
                    className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full 
                    transform transition-transform duration-300 hover:scale-105 w-10/12"
                  ></div>
                </div>

                <label htmlFor="htmlandcss" className="w-2/12  mr-0 ml-4">
                Tailwind Css
                </label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                <div
                    className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full 
                    transform transition-transform duration-300 hover:scale-105 w-7/12"
                  ></div>
                </div>

             </div>
              </div>

              <div className="space-y-3">
             <div className="flex items-center space-x-6">
             <label htmlFor="java" className="w-1/12 mr-0">
                  React JS
                </label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                <div
                    className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full 
                    transform transition-transform duration-300 hover:scale-105 w-9/12"
                  ></div>
                </div>

                <label htmlFor="htmlandcss" className="w-2/12  mr-0 ml-4">
                  SQL
                </label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                <div
                    className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full 
                    transform transition-transform duration-300 hover:scale-105 w-8/12"
                  ></div>
                </div>

             </div>
              </div>

              <div className="space-y-3">
             <div className="flex items-center space-x-6">
             <label htmlFor="java" className="w-1/12 mr-0">
             Selenium
                </label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                <div
                    className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full 
                    transform transition-transform duration-300 hover:scale-105 w-10/12"
                  ></div>
                </div>

                <label htmlFor="htmlandcss" className="w-2/12  mr-0 ml-4">
                Cypress
                </label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                <div
                    className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full 
                    transform transition-transform duration-300 hover:scale-105 w-6/12"
                  ></div>
                </div>

             </div>
              </div>

              <div className="space-y-3">
             <div className="flex items-center space-x-6">
             <label htmlFor="java" className="w-1/12 mr-0">
             Jenkins
                </label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                <div
                    className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full 
                    transform transition-transform duration-300 hover:scale-105 w-6/12"
                  ></div>
                </div>

                <label htmlFor="htmlandcss" className="w-2/12  mr-0 ml-4">
                AWS 
                </label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                <div
                    className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full 
                    transform transition-transform duration-300 hover:scale-105 w-4/12"
                  ></div>
                </div>

             </div>
              </div>

              <div className="space-y-3">
             <div className="flex items-center space-x-6">
             <label htmlFor="java" className="w-1/12 mr-0">
             ELK
                </label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                <div
                    className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full 
                    transform transition-transform duration-300 hover:scale-105 w-7/12"
                  ></div>
                </div>

                <label htmlFor="htmlandcss" className="w-2/12  mr-0 ml-4">
                Git
                </label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                <div
                    className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full 
                    transform transition-transform duration-300 hover:scale-105 w-8/12"
                  ></div>
                </div>

             </div>
              </div>

              <div className="space-y-3">
             <div className="flex items-center space-x-6">
             <label htmlFor="java" className="w-1/12 mr-0">
             Bitbucket
                </label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                <div
                    className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full 
                    transform transition-transform duration-300 hover:scale-105 w-8/12"
                  ></div>
                </div>

                <label htmlFor="htmlandcss" className="w-2/12  mr-0 ml-4">
                Jira
                </label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                <div
                    className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full 
                    transform transition-transform duration-300 hover:scale-105 w-10/12"
                  ></div>
                </div>

             </div>
              </div>
              
              
            
            </div>
            <div className="mt-12 flex justify-between text-center">
                <div>
                    <h3 className="text-2xl font-bold text-transparent bg-clip-text 
                bg-gradient-to-r from-green-400 to-blue-500">
                        1+
                    </h3>
                    <p>Years Experience</p>
                </div>
                <div>
                    <h3 className="text-2xl font-bold text-transparent bg-clip-text 
                bg-gradient-to-r from-green-400 to-blue-500">
                        50+
                    </h3>
                    <p>Projects Completed</p>
                </div>
                <div>
                    <h3 className="text-2xl font-bold text-transparent bg-clip-text 
                bg-gradient-to-r from-green-400 to-blue-500">
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
