"use client";
import { useState } from "react";

function Contact() {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsFormSubmitted(true);
  };

  return (
    <div>
      {/* Contact Section */}
      <section
        id="Contact"
        className="bg-white text-black py-12 sm:py-16 md:py-20"
      >
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-yellow-400 mb-8">
            Get in Touch
          </h2>
          <p className="text-lg sm:text-xl mb-6">
            {`Have questions or want to collaborate? Reach out, and we’ll be happy to assist you.`}
          </p>

          {/* Contact Form */}
          {!isFormSubmitted ? (
            <form  onSubmit={handleSubmit} className="max-w-lg mx-auto">
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  className="w-full p-3 bg-black text-yellow-500 rounded-lg"
                />
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  placeholder="Your Email"
                  required
                  className="w-full p-3  bg-black text-yellow-500 rounded-lg"
                />
              </div>
              <div className="mb-6">
                <textarea
                  placeholder="Your Message"
                  required
                  className="w-full p-3  bg-black text-yellow-500 rounded-lg"
                  rows={4}
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-yellow-400 text-black font-bold rounded-lg hover:bg-yellow-500 transition duration-300"
              >
                Send Message
              </button>
            </form>
          ) : (
            <div className="text-yellow-400">
              <h3 className="text-xl">{`Thank you for reaching out!`}</h3>
              <p>{`We'll get back to you shortly.`}</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default Contact;
