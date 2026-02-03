import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [showWelcome, setShowWelcome] = useState(true);
    const [messages, setMessages] = useState([
        { text: "Welcome to my portfolio! 👋", isBot: true },
    ]);
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isTyping]);

    useEffect(() => {
        // Initial greeting after detailed typing simulation
        if (messages.length === 1 && isOpen) {
            simulateBotResponse("I'm the virtual assistant here. What would you like to know about me?", 1000);
        }
    }, [isOpen]);


    const simulateBotResponse = (text, delay = 1000) => {
        setIsTyping(true);
        setTimeout(() => {
            setMessages(prev => [...prev, { text, isBot: true }]);
            setIsTyping(false);
        }, delay);
    };

    const handleOptionClick = (option) => {
        setMessages(prev => [...prev, { text: option.label, isBot: false }]);

        // Bot logic
        if (option.action === 'projects') {
            simulateBotResponse("Great choice! I've built several full-stack applications. You can check out the 'Projects' section below to see my work like Campus Connect and Hudson Furnishings.", 1500);
            setTimeout(() => {
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
            }, 2000);
        } else if (option.action === 'skills') {
            simulateBotResponse("I specialize in React, Java, and modern web tech. I'm also learning C# and NestJS! Check out the skills section.", 1500);
            setTimeout(() => {
                document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' });
            }, 2000);
        } else if (option.action === 'contact') {
            simulateBotResponse("I'd love to chat! You can fill out the contact form at the bottom of the page.", 1500);
            setTimeout(() => {
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }, 2000);
        } else {
            simulateBotResponse("Anything else I can help you with?", 1500);
        }
    };

    const options = [
        { label: "Show me your projects 🚀", action: 'projects' },
        { label: "What are your skills? 💡", action: 'skills' },
        { label: "How can I contact you? 📬", action: 'contact' },
    ];

    return (
        <div className="fixed bottom-5 right-5 z-[120] flex flex-col items-end pointer-events-auto">
            <AnimatePresence>
                {/* Welcome Modal */}
                {showWelcome && !isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.9, x: 20 }}
                        animate={{ opacity: 1, y: 0, scale: 1, x: 0 }}
                        exit={{ opacity: 0, scale: 0.8, x: 20 }}
                        className="mb-4 mr-2 max-w-[280px] bg-white text-black p-5 rounded-3xl rounded-br-none shadow-2xl relative border-2 border-blue-500/20 backdrop-blur-xl"
                    >
                        <button
                            onClick={() => setShowWelcome(false)}
                            className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white rounded-full text-[10px] flex items-center justify-center shadow-lg border-2 border-white"
                        >✕</button>
                        <div className="flex items-start gap-3">
                            <div className="w-10 h-10 shrink-0 rounded-full border-2 border-blue-500 overflow-hidden shadow-md">
                                <img src="/assets/my_image.jpeg" className="w-full h-full object-cover" alt="Thomas" />
                            </div>
                            <div className="space-y-2">
                                <p className="text-xs font-bold text-blue-600 uppercase tracking-widest">Thomas' Bot</p>
                                <p className="text-sm font-medium leading-relaxed">
                                    Hello! How are you doing today? Thanks for checking my portfolio. Feel free to message for any difficulties, and also check out the <span className="text-blue-600 font-bold underline">CLI interface</span> above!
                                </p>
                                <button
                                    onClick={() => { setShowWelcome(false); setIsOpen(true); }}
                                    className="w-full py-2 bg-blue-600 text-white rounded-xl text-xs font-black uppercase tracking-tighter hover:bg-blue-700 transition-colors"
                                >
                                    Chat Now
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}

                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.9 }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="mb-4 w-80 bg-[#1a1a2e] border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[500px]"
                    >
                        {/* Header */}
                        <div className="bg-[#2d2d44] p-4 flex items-center justify-between border-b border-white/5">
                            <div className="flex items-center gap-3">
                                <div className="relative">
                                    <img
                                        src="/assets/my_image.jpeg"
                                        alt="Bot Profile"
                                        className="w-10 h-10 rounded-full object-cover border-2 border-green-400"
                                    />
                                    <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-[#2d2d44]"></div>
                                </div>
                                <div>
                                    <h4 className="font-bold text-white text-sm">Virtual Assistant</h4>
                                    <p className="text-xs text-gray-400">Online</p>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="text-gray-400 hover:text-white transition-colors"
                            >
                                ✕
                            </button>
                        </div>

                        {/* Chat Area */}
                        <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-[#030412]/50 custom-scrollbar h-[350px]">
                            {messages.map((msg, idx) => (
                                <div
                                    key={idx}
                                    className={`flex ${msg.isBot ? 'justify-start' : 'justify-end'}`}
                                >
                                    <div
                                        className={`max-w-[80%] p-3 rounded-2xl text-sm ${msg.isBot
                                            ? 'bg-[#2d2d44] text-white rounded-tl-none'
                                            : 'bg-blue-600 text-white rounded-tr-none'
                                            }`}
                                    >
                                        {msg.text}
                                    </div>
                                </div>
                            ))}
                            {isTyping && (
                                <div className="flex justify-start">
                                    <div className="bg-[#2d2d44] p-3 rounded-2xl rounded-tl-none flex gap-1">
                                        <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                                        <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                                        <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></span>
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Options */}
                        <div className="p-3 bg-[#1a1a2e] border-t border-white/5 grid gap-2">
                            <p className="text-xs text-gray-500 mb-1 ml-1">Suggested:</p>
                            {options.map((opt, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => handleOptionClick(opt)}
                                    className="text-sm text-left p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors text-blue-300 border border-blue-500/20"
                                >
                                    {opt.label}
                                </button>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Toggle Button */}
            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => { setIsOpen(!isOpen); setShowWelcome(false); }}
                className="w-14 h-14 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-full flex items-center justify-center shadow-lg border-2 border-white/20 overflow-hidden relative group"
            >
                {!isOpen ? (
                    <img src="/assets/my_image.jpeg" className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity" alt="Chat" />
                ) : (
                    <span className="text-2xl text-white">✕</span>
                )}
            </motion.button>
        </div>
    );
};

export default Chatbot;
