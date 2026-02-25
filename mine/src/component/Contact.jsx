import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = ({ isDarkMode, textColor, cardBackground }) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_rfj3i57",
        "template_blqcy0d",
        form.current,
        "MCMZqb4dIcxqwYyH2"
      )
      .then(
        () => {
          alert("Message sent successfully!");
          e.target.reset();
        },
        () => {
          alert("Failed to send the message. Please try again.");
        }
      );
  };

  const inputStyle = `w-full px-5 py-4 rounded-2xl transition-all outline-none border 
  focus:ring-2 focus:ring-blue-500`;

  return (
    <section
      className="min-h-screen py-28 px-6 transition-all duration-300"
      style={{
        backgroundColor: isDarkMode ? "#1f2937" : "#f3f4f6",
        color: textColor,
      }}
    >
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-start">

        {/* LEFT SIDE */}
        <div className="space-y-6">
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-blue-600 text-sm font-semibold uppercase">
            Available for work
          </span>

          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Let’s build something{" "}
            <span className="text-blue-500">remarkable</span> together.
          </h1>

          <p className="text-lg opacity-80 max-w-md">
            I'm always open to new opportunities and collaborations.
            Whether you have a project or just want to say hi —
            I’ll respond within 24 hours.
          </p>

          <div className="pt-6 space-y-4">
            <div>
              <h3 className="font-bold">Email</h3>
              <p className="opacity-80">creators1885@gmail.com</p>
            </div>
            <div>
              <h3 className="font-bold">Location</h3>
              <p className="opacity-80">India</p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE FORM */}
        <div
          className="rounded-3xl p-10 shadow-xl transition-all duration-300"
          style={{ backgroundColor: cardBackground }}
        >
          <form ref={form} onSubmit={sendEmail} className="space-y-8">

            {/* Name */}
            <div>
              <label className="block text-sm font-semibold mb-2">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                required
                placeholder="Your Name"
                className={inputStyle}
                style={{
                  backgroundColor: isDarkMode ? "#374151" : "#ffffff",
                  color: isDarkMode ? "#ffffff" : "#111827",
                }}
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-semibold mb-2">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                required
                placeholder="your.email@example.com"
                className={inputStyle}
                style={{
                  backgroundColor: isDarkMode ? "#374151" : "#ffffff",
                  color: isDarkMode ? "#ffffff" : "#111827",
                }}
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-semibold mb-2">
                Your Message
              </label>
              <textarea
                name="message"
                rows="5"
                required
                placeholder="Tell me about your project..."
                className={inputStyle + " resize-none"}
                style={{
                  backgroundColor: isDarkMode ? "#374151" : "#ffffff",
                  color: isDarkMode ? "#ffffff" : "#111827",
                }}
              />
            </div>

            {/* Button */}
            <div>
              <button
                type="submit"
                className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl shadow-lg transition-all duration-300 transform hover:scale-[1.02] active:scale-95"
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
