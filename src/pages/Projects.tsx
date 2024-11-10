import React, { useState } from 'react';
import Card from '../components/Card';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Equation Plotter",
      description: "A python program that plots mathematical equations",
      link: "https://github.com/Ericode254/EquationPlotter.git",
      svg: "/plotter.jpg",
    },
    {
      title: "Edumeet",
      description: "A site that enables students to schedule meetings with their tutors and fellow students",
      link: "https://github.com/Ericode254/EdumeetClient",
      svg: "/edumeet.jpg",
    },
    {
      title: "Egersale",
      description: "An ecommerce site where users can buy and sell products, mainly catered for use at Egerton University",
      link: "https://github.com/Ericode254/EgerSaleClient",
      svg: "/egersale.jpg",
    },
    // Add more projects as needed
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
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#282828] text-[#ebdbb2] px-4 md:px-8 lg:px-16">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-4 md:mb-8 text-center">
        My Projects
      </h1>

      <div className="relative w-full max-w-[90vw] lg:max-w-[70vw] xl:max-w-[50vw] overflow-hidden rounded-xl shadow-lg">
        {/* Carousel Wrapper */}
        <div
          role="list"
          className="flex transition-transform duration-500 ease-in-out transform-gpu"
          style={{
            width: `${projects.length * 100}%`,
            transform: `translateX(-${(100 / projects.length) * currentIndex}%)`
          }}
        >
          {projects.map((project, index) => (
            <div
              role="listitem"
              key={index}
              className="flex-shrink-0 w-full flex justify-center"
              style={{ width: `${100 / projects.length}%` }}
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
          aria-label="Previous project"
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-[#3c3836] p-3 rounded-full hover:bg-[#d79921] transition duration-300 shadow-md hover:shadow-lg"
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
          aria-label="Next project"
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-[#3c3836] p-3 rounded-full hover:bg-[#d79921] transition duration-300 shadow-md hover:shadow-lg"
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
