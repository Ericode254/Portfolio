import React, { useState } from "react";
import emailjs from "@emailjs/browser";

// Main Contact component
const Contact: React.FC = () => {
  const [formData, setFormData] = useState<{ name: string; email: string; message: string }>({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<string>(""); // To track form submission status

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs
      .sendForm(
        "contact_service", // Your email service ID
        "contact_form", // Your email template ID
        e.target as HTMLFormElement, // The form being submitted
        "nuMr-PXJOfGdvlZYT" // Your user ID from EmailJS
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatus("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" }); // Reset form fields
        },
        (error) => {
          console.error(error.text);
          setStatus("Something went wrong. Please try again later.");
        }
      );
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-[#3c3836] rounded-lg shadow-xl mt-3">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-4xl font-bold text-[#ebdbb2]">Contact Me</h1>
      </div>
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

      {status && <p className="text-center text-lg text-[#d79921] mt-4">{status}</p>}
    </div>
  );
};

export default Contact;
