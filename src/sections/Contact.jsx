import { useState } from "react";
import emailjs from "@emailjs/browser";
import Alert from "../components/Alert";
import { AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState("success");
  const [alertMessage, setAlertMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const showAlertMessage = (type, message) => {
    setAlertType(type);
    setAlertMessage(message);
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 5000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await emailjs.send(
        "service_79b0nyj",
        "template_17us8im",
        {
          from_name: formData.name,
          to_name: "Abas",
          from_email: formData.email,
          to_email: "Abasienyenethomas2@gmail.com",
          message: formData.message,
        },
        "pn-Bw_mS1_QQdofuV"
      );

      setIsLoading(false);
      setIsSuccess(true);
      setFormData({ name: "", email: "", message: "" });
      showAlertMessage("success", "Your message has been sent successfully!");

      setTimeout(() => {
        setIsSuccess(false);
      }, 3000);
    } catch (error) {
      setIsLoading(false);
      console.error(error);
      showAlertMessage("danger", "Failed to send message. Please try again.");
    }
  };

  return (
    <section className="relative min-h-screen py-20 flex items-center justify-center overflow-hidden" id="contact">
      {/* Dynamic Background Elements */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-purple-600/10 blur-[100px] rounded-full pointer-events-none" />

      <AnimatePresence>
        {showAlert && <Alert type={alertType} text={alertMessage} />}
      </AnimatePresence>

      <div className="relative z-10 w-full max-w-2xl px-6">
        <div className="relative p-8 md:p-12 rounded-[2.5rem] border border-white/20 bg-white/[0.03] backdrop-blur-2xl shadow-2xl overflow-hidden">
          {/* Shine Streak */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.02] to-transparent pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center">
            {/* Header */}
            <div className="text-center mb-12 space-y-4">
              <div className="inline-block px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-4">
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-400">Get in Touch</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-black text-white uppercase tracking-tighter italic">Let's Talk<span className="text-blue-500">.</span></h2>
              <p className="text-sm font-bold text-gray-500 uppercase tracking-widest max-w-sm mx-auto">
                Ready to bring your vision to life? Let's collaborate and build something extraordinary.
              </p>
            </div>

            {/* Form */}
            <form className="w-full space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-[10px] font-black uppercase tracking-widest text-white/40 ml-4">
                    Your Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-white/20 focus:outline-none focus:border-blue-500/50 focus:bg-white/10 transition-all duration-300"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-[10px] font-black uppercase tracking-widest text-white/40 ml-4">
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-white/20 focus:outline-none focus:border-blue-500/50 focus:bg-white/10 transition-all duration-300"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-[10px] font-black uppercase tracking-widest text-white/40 ml-4">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-white/20 focus:outline-none focus:border-blue-500/50 focus:bg-white/10 transition-all duration-300 resize-none"
                  placeholder="How can I help you?"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isLoading || isSuccess}
                className={`group relative w-full py-5 font-black uppercase tracking-[0.2em] rounded-2xl overflow-hidden shadow-2xl transition-all hover:scale-[1.02] active:scale-95 disabled:opacity-80 disabled:cursor-not-allowed ${isSuccess ? 'bg-green-500 text-white' : 'bg-white text-black'}`}
              >
                <span className="relative z-10">
                  {isLoading ? "Sending..." : isSuccess ? "Message Sent!" : "Send Message"}
                </span>
                <div className={`absolute inset-0 bg-blue-600 translate-y-full ${!isSuccess && 'group-hover:translate-y-0'} transition-transform duration-300`} />
                {!isLoading && !isSuccess && (
                  <span className="relative z-10 group-hover:text-white transition-colors ml-2">→</span>
                )}
              </button>
            </form>

            {/* Social Links */}
            <div className="mt-16 pt-10 border-t border-white/5 w-full">
              <div className="flex flex-col items-center gap-6">
                <p className="text-[8px] font-black uppercase tracking-[0.5em] text-white/20">Find me on</p>
                <div className="flex items-center gap-4">
                  {[
                    { icon: <FaGithub />, href: "https://github.com/AbasThomas", color: "hover:bg-white hover:text-black" },
                    { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/thomasabbas", color: "hover:bg-blue-600 hover:text-white hover:border-blue-600" },
                    { icon: <FaInstagram />, href: "https://www.instagram.com/thomastheguy0/", color: "hover:bg-pink-600 hover:text-white hover:border-pink-600" }
                  ].map((social, i) => (
                    <a
                      key={i}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-14 h-14 flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white/40 text-xl transition-all duration-300 ${social.color}`}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
