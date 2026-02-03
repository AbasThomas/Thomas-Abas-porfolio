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
    <motion.button
      onClick={copyToClipboard}
      whileTap={{ scale: 0.95 }}
      className={`group relative w-full py-4 rounded-2xl font-black uppercase tracking-[0.2em] text-[10px] overflow-hidden transition-all duration-300 shadow-2xl ${copied ? 'bg-green-500 text-white' : 'bg-white text-black hover:bg-white/90'
        }`}
    >
      <AnimatePresence mode="wait">
        {copied ? (
          <motion.div
            className="flex items-center justify-center gap-2"
            key="copied"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
          >
            <span className="text-lg">✓</span>
            Email Copied
          </motion.div>
        ) : (
          <motion.div
            className="flex items-center justify-center gap-2"
            key="copy"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
          >
            <img src="assets/copy.svg" className="w-4 group-hover:invert transition-all" alt="copy icon" />
            Copy Email
          </motion.div>
        )}
      </AnimatePresence>

      {/* Shine Streak */}
      {!copied && (
        <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 pointer-events-none" />
      )}
    </motion.button>
  );
};

export default CopyEmailButton;
