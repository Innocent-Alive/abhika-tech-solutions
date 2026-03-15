import React, { useState } from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaWhatsapp, FaTelegramPlane } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    botcheck: "",
  });
  const [buttonText, setButtonText] = useState("Send Message");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setButtonText("Sending...");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: "c6e95106-1ee1-48e9-8b15-646fdb1f4402",
          ...formData,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setButtonText("Sent Successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setButtonText("Failed. Try Again");
      }
    } catch (error) {
      setButtonText("Error. Try Again");
    }

    setTimeout(() => {
      setButtonText("Send Message");
      setIsSubmitting(false);
    }, 3000);
  };

  return (
    <section id="contact" className="py-20 bg-background relative overflow-hidden">
      {/* IoAppsOutline Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.04] pointer-events-none" 
        style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 512 512'%3E%3Cpath fill='%23007C91' d='M104 160a56 56 0 1156-56 56.06 56.06 0 01-56 56zM256 160a56 56 0 1156-56 56.06 56.06 0 01-56 56zM408 160a56 56 0 1156-56 56.06 56.06 0 01-56 56zM104 312a56 56 0 1156-56 56.06 56.06 0 01-56 56zM256 312a56 56 0 1156-56 56.06 56.06 0 01-56 56zM408 312a56 56 0 1156-56 56.06 56.06 0 01-56 56zM104 464a56 56 0 1156-56 56.06 56.06 0 01-56 56zM256 464a56 56 0 1156-56 56.06 56.06 0 01-56 56zM408 464a56 56 0 1156-56 56.06 56.06 0 01-56 56z'/%3E%3C/svg%3E")`,
          backgroundSize: '20px 20px' 
        }}
      ></div>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary uppercase tracking-tight font-header">Get In Touch</h2>
          <p className="text-secondary mt-2 text-sm sm:text-base font-body opacity-80">We'd love to hear from you!</p>
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="bg-primary text-white p-8 rounded-xl shadow-xl">
            <h3 className="text-2xl sm:text-3xl font-bold mb-6">
              Contact Information
            </h3>
            <p className="flex items-start mb-4 text-sm sm:text-base md:text-lg">
              <FaMapMarkerAlt
                className="mr-3 text-white mt-1 flex-shrink-0"
                size={20}
              />
              <span className="break-words">
                New Link Road, Kandivali West, Mumbai, Maharashtra, India -
                400067
              </span>
            </p>
            <p className="flex items-start mb-4 text-sm sm:text-base md:text-lg">
              <FaEnvelope
                className="mr-3 text-white mt-1 flex-shrink-0"
                size={20}
              />
              <span className="break-words">
                contact@abhikatechsolution.com
              </span>
            </p>
            <p className="flex items-start text-sm sm:text-base md:text-lg mb-4">
              <FaPhoneAlt
                className="mr-3 text-white mt-1 flex-shrink-0"
                size={20}
              />
              <span className="break-words">+91 7710071640</span>
            </p>
            <p className="flex items-start mb-4 text-sm sm:text-base md:text-lg">
              <FaWhatsapp
                className="mr-3 text-white mt-1 flex-shrink-0"
                size={20}
              />
              <a href="https://wa.me/917710071640" target="_blank" rel="noopener noreferrer" className="break-words hover:text-secondary hover:underline transition-colors">
                Message us on WhatsApp
              </a>
            </p>
            <p className="flex items-start text-sm sm:text-base md:text-lg">
              <FaTelegramPlane
                className="mr-3 text-white mt-1 flex-shrink-0"
                size={20}
              />
              <a href="https://t.me/abhikatechsolution" target="_blank" rel="noopener noreferrer" className="break-words hover:text-secondary hover:underline transition-colors">
                Reach us on Telegram
              </a>
            </p>
          </div>
          <div className="bg-background border-2 border-primary p-8 rounded-xl shadow-xl">
            <h3 className="text-3xl font-bold text-primary mb-8">
              Send Us a Message
            </h3>
            <form onSubmit={handleSubmit}>
              <div className="space-y-6">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="w-full p-4 rounded-lg bg-white border-2 placeholder:text-primary border-secondary focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent focus:bg-background active:bg-background transition-all duration-300"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                  className="w-full p-4 rounded-lg bg-white border-2 placeholder:text-primary border-secondary focus:outline-none focus:ring-2 focus:border-transparent focus:ring-primary focus:bg-background active:bg-background transition-all duration-300"
                />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  rows="5"
                  required
                  className="w-full p-4 rounded-lg bg-white placeholder:text-primary border-2 border-secondary focus:outline-none focus:ring-2 focus:border-transparent focus:ring-primary focus:bg-background active:bg-background transition-all duration-300"
                ></textarea>
                <input
                  type="checkbox"
                  name="botcheck"
                  className="hidden"
                  style={{ display: "none" }}
                  tabIndex="-1"
                  autoComplete="off"
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-secondary text-white font-bold py-4 rounded-lg transition-all duration-300 transform ${
                    isSubmitting
                      ? "opacity-80 cursor-not-allowed"
                      : "hover:scale-105 hover:shadow-xl"
                  }`}
                >
                  {buttonText}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
