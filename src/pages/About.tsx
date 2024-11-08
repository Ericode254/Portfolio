import React, { useState } from "react";

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
    <div className="max-w-4xl mx-auto p-6 bg-[#3c3836] rounded-lg shadow-xl mt-3">
      <div className="text-center mb-6">
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
              <path d="M16 5h3v3M18 3h3v3m-3 0h3m-3 0h-3V6h3V5h-3V3H6v6h9m6 0V5h3v4M3 12h3v3h-3zm12-3h-3V8m9 0h-6v5m-3 0h-6v5" />
            </svg>
          </button>
        </div>
        {copied && (
          <span className="text-[#a89984] text-sm">Copied!</span>
        )}
      </div>

      <h1 className="text-4xl font-bold text-[#ebdbb2] text-center mb-6">About Me</h1>
      <p className="text-lg text-[#ebdbb2] mb-6">
        Hello! My name is <strong>Erick</strong>, and I am a passionate
        developer with a keen interest in building modern, scalable web
        applications. I specialize in <strong>frontend | backend development</strong>,
        and I enjoy creating clean, responsive designs that provide excellent
        user experiences.
      </p>
      <p className="text-lg text-[#ebdbb2] mb-6">
        I am experienced with technologies such as <strong>React</strong>,
        <strong>TypeScript</strong>, <strong>Tailwind CSS</strong>, and
        <strong> Node.js</strong>, but I'm always excited to learn new
        technologies and improve my skills.
      </p>
      <p className="text-lg text-[#ebdbb2] mb-6">
        When I am not coding, I enjoy exploring open-source projects,
        contributing to communities, and keeping up with the latest trends in
        web development.
      </p>
      <p className="text-lg text-[#ebdbb2]">
        Feel free to browse my projects and connect with me!
      </p>
    </div>
  );
};

export default About;
