import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const CopyEmailButton = () => {
  const [copied, setCopied] = useState(false);
  const email = "abasienyenethomas2@gmail.com";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div className="relative w-full group/btn">
      {/* Background Glow Effect */}
      <div className={`absolute -inset-1 rounded-2xl blur-lg opacity-0 group-hover/btn:opacity-50 transition-all duration-500 pointer-events-none ${copied ? 'bg-green-500' : 'bg-white'}`} />

      <motion.button
        onClick={copyToClipboard}
        whileTap={{ scale: 0.98 }}
        className={`relative w-full py-4 rounded-2xl font-black uppercase tracking-[0.25em] text-[10px] flex items-center justify-center gap-3 overflow-hidden transition-all duration-500 shadow-2xl border-2 ${copied
            ? 'bg-green-500 border-green-400 text-white'
            : 'bg-[#02030d] border-white/10 text-white group-hover/btn:border-white/40'
          }`}
      >
        {/* Animated Background on Hover (Sliding Fill) */}
        <div className={`absolute inset-0 bg-white translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500 ease-out z-0 ${copied && 'hidden'}`} />

        <AnimatePresence mode="wait">
          {copied ? (
            <motion.div
              className="relative z-10 flex items-center gap-2"
              key="copied"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="text-lg leading-none"
              >
                ✓
              </motion.span>
              <span>Copied Successfully</span>
            </motion.div>
          ) : (
            <motion.div
              className="relative z-10 flex items-center gap-3 group-hover/btn:text-black transition-colors duration-500"
              key="copy"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="relative">
                <img src="assets/copy.svg" className="w-4 group-hover/btn:invert transition-all" alt="copy icon" />
                {/* Double Icon Effect */}
                <img src="assets/copy.svg" className="absolute top-0 left-0 w-4 blur-sm opacity-0 group-hover/btn:opacity-100 group-hover/btn:invert transition-all scale-125" alt="copy icon" />
              </div>
              <span className="font-black">Copy Email Address</span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Shine streak following cursor? Or just a pulse? */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent -translate-x-full group-hover/btn:animate-[shimmer_2s_infinite] pointer-events-none" />
      </motion.button>

      {/* Bottom Label Reveal */}
      <motion.div
        initial={{ opacity: 0, y: 5 }}
        whileHover={{ opacity: 1, y: 0 }}
        className="absolute -bottom-6 left-0 w-full text-center pointer-events-none"
      >
        <span className="text-[8px] font-black text-white/20 uppercase tracking-[0.5em]">{email}</span>
      </motion.div>
    </div>
  );
};

export default CopyEmailButton;
