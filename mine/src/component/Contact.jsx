import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = ({ isDarkMode, textColor, cardBackground }) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_rfj3i57',     // ⬅️ Replace with your actual service ID from EmailJS
        'template_blqcy0d',    // ⬅️ Replace with your actual template ID from EmailJS
        form.current,
        'MCMZqb4dIcxqwYyH2'      // ⬅️ Replace with your actual public key from EmailJS
      )
      .then(
        (result) => {
          alert('Message sent successfully!');
        },
        (error) => {
          alert('Failed to send the message, please try again.');
        }
      );

    e.target.reset();
  };

  return (
    <section
      className="py-20"
      style={{ backgroundColor: isDarkMode ? '#2d3748' : '#e0e0e0', color: textColor }}
    >
      <div className="container mx-auto px-6">
        <h2
          className="text-4xl font-bold text-center text-blue-400 mt-6"
          style={{ color: textColor }}
        >
          Get In Touch
        </h2>
        <div
          className="max-w-xl mx-auto p-8 rounded-xl shadow-lg hover:scale-105 duration-100 mt-10"
          style={{ backgroundColor: cardBackground }}
        >
          <p className="text-lg text-center mb-6" style={{ color: textColor }}>
            I'm always open to new opportunities and collaborations. Feel free to reach out!
          </p>
          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-bold mb-2" style={{ color: textColor }}>
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="shadow appearance-none border rounded-lg w-full py-3 px-4 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
                style={{
                  backgroundColor: isDarkMode ? '#374151' : '#f4f4f4',
                  color: isDarkMode ? '#ffffff' : '#222222'
                }}
                placeholder="Your Name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-bold mb-2" style={{ color: textColor }}>
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="shadow appearance-none border rounded-lg w-full py-3 px-4 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
                style={{
                  backgroundColor: isDarkMode ? '#374151' : '#f4f4f4',
                  color: isDarkMode ? '#ffffff' : '#222222'
                }}
                placeholder="your.email@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-bold mb-2" style={{ color: textColor }}>
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="6"
                required
                className="shadow appearance-none border rounded-lg w-full py-3 px-4 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
                style={{
                  backgroundColor: isDarkMode ? '#374151' : '#f4f4f4',
                  color: isDarkMode ? '#ffffff' : '#222222'
                }}
                placeholder="Your message..."
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
 