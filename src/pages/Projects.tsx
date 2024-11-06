// Projects.tsx
import React, { useState } from 'react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Project 1",
      description: "A description of what Project 1 is about. This could be a brief explanation of the project's features and objectives.",
      link: "#",
      svg: "/path/to/your/first-project-image.svg",
    },
    {
      title: "Project 2",
      description: "A description of what Project 2 is about. This could be a brief explanation of the project's features and objectives.",
      link: "#",
      svg: "/path/to/your/second-project-image.svg",
    },
    {
      title: "Project 3",
      description: "A description of what Project 3 is about. This could be a brief explanation of the project's features and objectives.",
      link: "#",
      svg: "/path/to/your/third-project-image.svg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#282828] text-[#ebdbb2]">
      <h1 className="text-4xl font-semibold mb-8">My Projects</h1>

      <div className="relative w-full max-w-4xl">
        {/* Carousel Wrapper */}
        <div className="flex items-center justify-center relative overflow-hidden">
          {/* Previous Button */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-[#3c3836] p-2 rounded-full hover:bg-[#d79921] transition duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              className="text-[#ebdbb2]"
            >
              <path d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Project Carousel */}
          <div className="flex transition-all duration-500 ease-in-out">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`flex-shrink-0 w-full max-w-xs mx-4 transform ${index === currentIndex ? "opacity-100" : "opacity-0"
                  } transition-opacity duration-500 ease-in-out`}
              >
                <div className="relative bg-[#3c3836] p-6 rounded-lg shadow-lg hover:bg-[#504945] transition duration-300">
                  <img
                    src={project.svg}
                    alt={project.title}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <h2 className="text-xl font-bold mb-4">{project.title}</h2>
                  <p className="text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {project.description}
                  </p>
                  <a
                    href={project.link}
                    className="text-[#d79921] hover:underline opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    View Details
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-[#3c3836] p-2 rounded-full hover:bg-[#d79921] transition duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              className="text-[#ebdbb2]"
            >
              <path d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
