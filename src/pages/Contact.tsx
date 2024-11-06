import React, { useState } from "react";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // You can add form submission logic here (e.g., API call)
    console.log(formData);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-[#3c3836] rounded-lg shadow-xl mt-10">
      <h1 className="text-4xl font-bold text-[#ebdbb2] text-center mb-6">Contact Me</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="text-lg text-[#ebdbb2]">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 mt-2 bg-[#282828] text-[#ebdbb2] border-2 border-[#d79921] rounded-lg"
            placeholder="Your Name"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="text-lg text-[#ebdbb2]">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 mt-2 bg-[#282828] text-[#ebdbb2] border-2 border-[#d79921] rounded-lg"
            placeholder="Your Email"
            required
          />
        </div>
        <div>
          <label htmlFor="message" className="text-lg text-[#ebdbb2]">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 mt-2 bg-[#282828] text-[#ebdbb2] border-2 border-[#d79921] rounded-lg"
            placeholder="Your Message"
            rows={6}
            required
          />
        </div>
        <button
          type="submit"
          className="w-full py-3 mt-4 bg-[#d79921] text-[#282828] font-bold rounded-lg shadow-md hover:bg-[#b57614] transition duration-300"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
