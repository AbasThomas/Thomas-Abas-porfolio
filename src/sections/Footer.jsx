import { mySocials } from "../constants";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getIcon = (name) => {
    switch (name) {
      case 'GitHub': return <FaGithub className="w-6 h-6" />;
      case 'LinkedIn': return <FaLinkedinIn className="w-6 h-6" />;
      case 'X': return <FaXTwitter className="w-6 h-6" />;
      default: return null;
    }
  };

  return (
    <footer className="relative mt-20 pb-10 overflow-hidden">
      {/* Decorative Blur Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 pt-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 mb-16">

          {/* Brand/Profile Section */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full border border-white/20 overflow-hidden bg-white/5 backdrop-blur-md">
                <img
                  src="/assets/my_image.jpeg"
                  alt="Thomas Abas"
                  className="w-full h-full object-cover grayscale-[0.3] hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <div>
                <h3 className="text-xl font-black text-white uppercase tracking-tight">Thomas Abas</h3>
                <p className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.3em]">Software Engineer</p>
              </div>
            </div>
          </div>

          {/* Social Links Section */}
          <div className="flex flex-col items-center gap-6">
            <div className="flex items-center gap-4">
              {mySocials.map((social) => (
                <motion.a
                  key={social.id}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-12 h-12 rounded-2xl border border-white/10 bg-white/5 flex items-center justify-center hover:bg-white transition-all group overflow-hidden"
                >
                  <div className="text-white/40 group-hover:text-black transition-colors duration-300">
                    {getIcon(social.name)}
                  </div>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Action Section */}
          <div className="flex flex-col items-center md:items-end gap-4">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-3 px-6 py-3 rounded-full border border-white/10 bg-white/3 hover:bg-white/10 transition-all group"
            >
              <span className="text-[10px] font-black text-white/50 uppercase tracking-widest group-hover:text-white">Back to Top</span>
              <span className="text-lg text-white/30 group-hover:text-blue-500 transition-colors">↑</span>
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-10 border-t border-white/5 gap-6">
          <p className="text-[10px] font-bold text-gray-600 uppercase tracking-widest">
            © 2025 Thomas Abas. All rights reserved.
          </p>

          <div className="flex items-center gap-8">
            <a href="#" className="text-[10px] font-bold text-gray-600 uppercase tracking-widest hover:text-white transition-colors underline-offset-4 hover:underline">Privacy Policy</a>
            <a href="#" className="text-[10px] font-bold text-gray-600 uppercase tracking-widest hover:text-white transition-colors underline-offset-4 hover:underline">Legal</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
