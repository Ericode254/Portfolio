import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="h-screen flex items-center justify-center -mt-6">
      {/* Centered container with Gruvbox background color */}
      <div className="bg-[#282828] text-[#ebdbb2] max-w-screen-lg mx-auto p-6 rounded-lg shadow-lg flex flex-col md:flex-row items-center justify-between">
        {/* Intro Text with Animation */}
        <div className="md:w-1/2 space-y-6">
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-[#d79921]"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Hi, I’m Erick!
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            I'm a passionate developer dedicated to crafting user-friendly experiences and bringing creative ideas to life through code.
          </motion.p>

          <motion.p
            className="text-lg md:text-xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            Welcome to my portfolio. Take a look around and see what I've been working on.
          </motion.p>

          <motion.a
            href="/projects"
            className="inline-block mt-4 px-6 py-3 bg-[#d79921] text-[#282828] font-semibold rounded-md shadow-lg hover:bg-[#fabd2f] transition duration-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            View My Projects
          </motion.a>
        </div>

        {/* SVG Graphic with Rotation Animation - Hidden on mobile devices */}
        <motion.div
          className="md:w-1/2 mt-8 md:mt-0 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.svg
            className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 hidden md:block"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{
              repeat: Infinity,
              duration: 3,
              ease: "linear",
              repeatType: "loop",
            }}
          >
            <path d="M12 2l2 7h7l-5.5 4 2 7L12 16l-5.5 4 2-7L2 9h7z" />
          </motion.svg>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
