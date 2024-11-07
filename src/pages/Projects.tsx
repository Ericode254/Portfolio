import React, { useState } from 'react';
import Card from '../components/Card';

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
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#282828] text-[#ebdbb2] px-4">
      <h1 className="text-4xl font-semibold mb-8">My Projects</h1>

      <div className="relative w-full max-w-md overflow-hidden">
        {/* Carousel Wrapper */}
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-full"
            >
              <Card
                imgUrl={project.svg}
                title={project.title}
                desc={project.description}
                link={project.link}
                alt={project.title}
              />
            </div>
          ))}
        </div>

        {/* Previous Button */}
        <button
          onClick={handlePrev}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-[#3c3836] p-2 rounded-full hover:bg-[#d79921] transition duration-300"
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

        {/* Next Button */}
        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-[#3c3836] p-2 rounded-full hover:bg-[#d79921] transition duration-300"
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
  );
};

export default Projects;
