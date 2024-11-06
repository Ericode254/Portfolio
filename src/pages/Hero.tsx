// Hero.tsx
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="h-screen flex items-center justify-center -mt-8">
      {/* Centered container with Gruvbox background color */}
      <div className="bg-[#282828] text-[#ebdbb2] max-w-screen-lg mx-auto p-6 rounded-lg shadow-lg flex flex-col md:flex-row items-center justify-between">
        {/* Intro Text */}
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-[#d79921]">
            Hi, I’m Erick!
          </h1>
          <p className="text-lg md:text-xl">
            I'm a passionate developer dedicated to crafting user-friendly experiences and bringing creative ideas to life through code.
          </p>
          <p className="text-lg md:text-xl">
            Welcome to my portfolio. Take a look around and see what I've been working on.
          </p>
          <a
            href="#projects"
            className="inline-block mt-4 px-6 py-3 bg-[#d79921] text-[#282828] font-semibold rounded-md shadow-lg hover:bg-[#fabd2f] transition duration-300"
          >
            View My Projects
          </a>
        </div>

        {/* SVG Graphic */}
        <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
          <svg
            className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 2l2 7h7l-5.5 4 2 7L12 16l-5.5 4 2-7L2 9h7z" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
