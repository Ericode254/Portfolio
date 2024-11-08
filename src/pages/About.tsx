import React from "react";

const About: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-[#3c3836] rounded-lg shadow-xl mt-3">
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
