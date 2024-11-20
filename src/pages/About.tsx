import React, { useState } from "react";
import { motion } from "framer-motion";

const About: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const githubUrl = "https://github.com/Ericode254"; // Replace with your actual GitHub URL

  const handleCopy = () => {
    navigator.clipboard.writeText(githubUrl).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
    });
  };

  return (
    <motion.div
      className="min-h-screen flex flex-col justify-center items-center max-w-4xl mx-auto p-6 sm:p-8 bg-[#3c3836] rounded-lg shadow-xl mt-3"
      initial={{ opacity: 0, y: 30 }} // Initial position off-screen and hidden
      animate={{ opacity: 1, y: 0 }}   // Animate to full opacity and normal position
      transition={{ duration: 1 }}     // Duration for the fade-in effect
    >
      <div className="text-center mb-6">
        <h1 className="text-4xl font-bold text-[#ebdbb2] mb-3">About Me</h1>
        <div className="flex items-center justify-center space-x-2">
          <p className="text-lg text-[#ebdbb2]">GitHub Profile:</p>
          <button
            onClick={handleCopy}
            className="text-[#d79921] hover:text-[#fe8019] transition duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              className="text-xl"
            >
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
            </svg>
          </button>
          {copied && (
            <span className="text-[#a89984] text-sm ml-2">Copied!</span>
          )}
        </div>
      </div>

      <p className="text-lg text-[#ebdbb2] mb-6 text-center">
        Hello! My name is <strong>Erick</strong>, and I am a passionate
        developer with a keen interest in building modern, scalable web
        applications. I specialize in <strong>frontend | backend development</strong>,
        and I enjoy creating clean, responsive designs that provide excellent
        user experiences.
      </p>
      <p className="text-lg text-[#ebdbb2] mb-6 text-center">
        I am experienced with technologies such as <strong>React</strong>,
        <strong>TypeScript</strong>, <strong>Python</strong>, <strong>Tailwind CSS</strong>, and
        <strong> Node.js</strong>, but I'm always excited to learn new
        technologies and improve my skills.
      </p>
      <p className="text-lg text-[#ebdbb2] mb-6 text-center">
        When I am not coding, I enjoy exploring open-source projects,
        contributing to communities, and keeping up with the latest trends in
        web development.
      </p>
      <p className="text-lg text-[#ebdbb2] text-center">
        Feel free to browse my projects and connect with me!
      </p>
    </motion.div>
  );
};

export default About;
