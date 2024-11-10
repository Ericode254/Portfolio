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
  const [isSending, setIsSending] = useState<boolean>(false); // Loading state for button

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSending(true);
    setStatus("");

    // Adding a slight delay before sending the message
    setTimeout(() => {
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
        )
        .finally(() => setIsSending(false));
    }, 1000); // 1-second delay to show the spinner
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-transparent p-6">
      <div className="max-w-4xl w-full bg-[#3c3836] rounded-lg shadow-xl p-8">
        <div className="mb-6 text-center">
          <h1 className="text-4xl font-bold text-[#ebdbb2]">Contact Me</h1>
          <p className="text-[#d79921] mt-2">Feel free to reach out with any questions or feedback!</p>
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
            className="w-full py-3 mt-4 bg-[#d79921] text-[#282828] font-bold rounded-lg shadow-md hover:bg-[#b57614] transition duration-300 flex items-center justify-center"
            disabled={isSending} // Disable the button while sending
          >
            {isSending ? (
              <span className="flex items-center">
                <svg
                  className="animate-spin h-5 w-5 mr-3 text-[#282828]"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291l-2.293 2.292a8.027 8.027 0 0011.294 0L10 17.291a4.015 4.015 0 01-4-4z"
                  ></path>
                </svg>
                Sending...
              </span>
            ) : (
              "Send Message"
            )}
          </button>
        </form>

        {status && <p className="text-center text-lg text-[#d79921] mt-4">{status}</p>}
      </div>
    </div>
  );
};

export default Contact;
