import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const COMMANDS = {
    help: 'Show this help message',
    about: 'Navigate to about section',
    skills: 'Highlight technical skills',
    projects: 'View all projects',
    contact: 'Get contact info',
    resume: 'Download professional resume',
    whoami: 'Display your info',
    ls: 'List available sections',
    history: 'Show command history',
    matrix: 'Enter the matrix',
    neofetch: 'Show system info',
    tour: 'Start a guided tour',
    clear: 'Clear terminal',
    exit: 'Close terminal',
};

const NeofetchContent = () => (
    <div className="flex gap-6 py-2">
        <div className="text-blue-400 font-bold leading-tight">
            {`      
   _  _   
  ( \/ )  
   \  /   
    \/    
      `}
        </div>
        <div className="space-y-1">
            <p><span className="text-blue-400">OS:</span> Portfolio OS v2.0.4-Lagos</p>
            <p><span className="text-blue-400">Host:</span> Thomas Abas Portfolio</p>
            <p><span className="text-blue-400">Kernel:</span> React 18.x</p>
            <p><span className="text-blue-400">Uptime:</span> Always online</p>
            <p><span className="text-blue-400">Packages:</span> 42 (npm)</p>
            <p><span className="text-blue-400">Shell:</span> portfolio-sh 1.0</p>
            <p><span className="text-blue-400">CPU:</span> Passion @ 5.0GHz</p>
            <p><span className="text-blue-400">Memory:</span> 16GB / ∞ GB</p>
        </div>
    </div>
);

const Terminal = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [input, setInput] = useState('');
    const [history, setHistory] = useState([
        { type: 'output', content: "Welcome to Thomas Abas' Portfolio Terminal v2.0" },
        { type: 'output', content: "Type 'help' to see available commands." },
    ]);
    const [commandHistory, setCommandHistory] = useState([]);
    const [historyIdx, setHistoryIdx] = useState(-1);
    const [isMatrix, setIsMatrix] = useState(false);

    const scrollRef = useRef(null);
    const inputRef = useRef(null);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === '`') {
                e.preventDefault();
                setIsOpen((prev) => !prev);
            }
            if (e.key === 'Escape' && isOpen) {
                setIsOpen(false);
                setIsMatrix(false);
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isOpen]);

    useEffect(() => {
        if (isOpen && inputRef.current) {
            inputRef.current.focus();
        }
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [isOpen, history]);

    const handleCommand = (cmd) => {
        const trimmedCmd = cmd.trim().toLowerCase();
        const newHistory = [...history, { type: 'input', content: `thomas@portfolio:~$ ${cmd}` }];

        if (trimmedCmd === '') {
            setHistory(newHistory);
            return;
        }

        setCommandHistory((prev) => [cmd, ...prev]);
        setHistoryIdx(-1);

        switch (trimmedCmd) {
            case 'help':
                newHistory.push({
                    type: 'output',
                    content: Object.entries(COMMANDS)
                        .map(([name, desc]) => `${name.padEnd(12)} - ${desc}`)
                        .join('\n'),
                });
                break;
            case 'clear':
                setHistory([]);
                return;
            case 'about':
            case 'cd about':
                document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
                newHistory.push({ type: 'output', content: 'Navigating to About section...' });
                break;
            case 'skills':
            case 'cd skills':
                document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' });
                newHistory.push({ type: 'output', content: 'Navigating to Skills section...' });
                break;
            case 'projects':
            case 'ls projects':
            case 'cd projects':
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                newHistory.push({ type: 'output', content: 'Navigating to Projects section...' });
                break;
            case 'contact':
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                newHistory.push({ type: 'output', content: 'Opening Contact section...' });
                break;
            case 'ls':
                newHistory.push({ type: 'output', content: 'about/  skills/  projects/  contact/  resume.pdf' });
                break;
            case 'whoami':
                newHistory.push({ type: 'output', content: 'Thomas Abas - Software Engineer & Full Stack Developer.' });
                break;
            case 'history':
                newHistory.push({ type: 'output', content: commandHistory.join('\n') });
                break;
            case 'neofetch':
                newHistory.push({ type: 'component', content: <NeofetchContent /> });
                break;
            case 'tour':
                newHistory.push({
                    type: 'output',
                    content: "CLI TOUR:\n1. Use 'ls' to see sections\n2. Use 'cd <section>' to navigate\n3. Try 'matrix' for fun\n4. 'neofetch' for system info.\nTab key autocompletes commands!"
                });
                break;
            case 'resume':
                newHistory.push({ type: 'output', content: 'Opening resume.pdf... [Simulated Download]' });
                window.open('/assets/resume.pdf', '_blank');
                break;
            case 'matrix':
                setIsMatrix(true);
                newHistory.push({ type: 'output', content: 'Entering the Matrix... Press Esc to exit.' });
                break;
            default:
                if (trimmedCmd.startsWith('open ')) {
                    const id = trimmedCmd.split(' ')[1];
                    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                    newHistory.push({ type: 'output', content: `Opening project ${id}...` });
                    break;
                }
                if (trimmedCmd === 'exit') {
                    setIsOpen(false);
                    break;
                }
                if (trimmedCmd === 'sudo rm -rf /') {
                    newHistory.push({ type: 'error', content: "Error: Permission denied. Nice try! That won't work here 😄" });
                    break;
                }
                const funnyErrors = [
                    `Command not found: ${trimmedCmd}. Did you try turning it off and on again?`,
                    `Error: ${trimmedCmd} is currently on a coffee break.`,
                    `Access denied. ${trimmedCmd} requires Level 9 clearance.`,
                    `Command not found. Maybe try 'help'?`,
                ];
                newHistory.push({ type: 'error', content: funnyErrors[Math.floor(Math.random() * funnyErrors.length)] });
        }

        setHistory(newHistory);
    };

    const handleInputKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleCommand(input);
            setInput('');
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            if (historyIdx < commandHistory.length - 1) {
                const nextIdx = historyIdx + 1;
                setHistoryIdx(nextIdx);
                setInput(commandHistory[nextIdx]);
            }
        } else if (e.key === 'ArrowDown') {
            e.preventDefault();
            if (historyIdx > 0) {
                const nextIdx = historyIdx - 1;
                setHistoryIdx(nextIdx);
                setInput(commandHistory[nextIdx]);
            } else {
                setHistoryIdx(-1);
                setInput('');
            }
        } else if (e.key === 'Tab') {
            e.preventDefault();
            const matches = Object.keys(COMMANDS).filter((c) => c.startsWith(input));
            if (matches.length === 1) {
                setInput(matches[0]);
            }
        }
    };

    return (
        <>
            {/* Floating Toggle Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="fixed bottom-24 right-6 z-[100] w-14 h-14 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-blue-700 transition-all group overflow-hidden"
            >
                <span className="relative z-10 font-mono font-bold">{isOpen ? '❌' : '>_'}</span>
                <div className="absolute inset-0 bg-white/20 scale-0 group-hover:scale-100 transition-transform rounded-full" />
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 100, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 100, scale: 0.95 }}
                        className="fixed inset-0 md:inset-10 z-[90] flex flex-col bg-black/95 text-green-400 font-mono rounded-none md:rounded-2xl border border-green-500/30 overflow-hidden shadow-2xl backdrop-blur-xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Window Header */}
                        <div className="flex items-center justify-between px-4 py-3 bg-white/5 border-b border-green-500/20">
                            <div className="flex gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                                <div className="w-3 h-3 rounded-full bg-green-500/50" />
                            </div>
                            <span className="text-xs text-green-500/50 tracking-widest uppercase">thomas@portfolio ~ portfolio-sh</span>
                            <div className="w-12" />
                        </div>

                        {/* Matrix Background Effect */}
                        {isMatrix && (
                            <div className="absolute inset-0 pointer-events-none opacity-20 overflow-hidden z-0">
                                <div className="animate-matrix-rain whitespace-pre leading-none text-[10px]">
                                    {Array(20).fill(0).map((_, i) => (
                                        <div key={i} className="flex gap-2 opacity-50">
                                            {Array(50).fill(0).map((_, j) => (
                                                <span key={j}>{Math.random() > 0.5 ? '0' : '1'}</span>
                                            ))}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Output Area */}
                        <div
                            ref={scrollRef}
                            className="flex-1 p-4 md:p-6 overflow-y-auto space-y-2 relative z-10 custom-scrollbar"
                        >
                            {history.map((line, idx) => (
                                <div key={idx} className={`whitespace-pre-wrap leading-relaxed ${line.type === 'error' ? 'text-red-400' : line.type === 'input' ? 'text-white' : 'text-green-400'}`}>
                                    {line.type === 'component' ? line.content : line.content}
                                </div>
                            ))}
                        </div>

                        {/* Input Area */}
                        <div className="p-4 md:p-6 bg-white/5 relative z-10 flex items-center gap-2 group">
                            <span className="text-blue-400 font-bold">thomas@portfolio:~$</span>
                            <input
                                ref={inputRef}
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyDown={handleInputKeyDown}
                                className="flex-1 bg-transparent border-none outline-none text-white font-mono placeholder:text-green-900/50"
                                placeholder="type 'help'..."
                                autoFocus
                            />
                            <span className="text-[10px] text-green-500/30">Tab to complete</span>
                        </div>

                        <style>{`
              @keyframes matrix-rain {
                0% { transform: translateY(-100%); }
                100% { transform: translateY(100%); }
              }
              .animate-matrix-rain {
                animation: matrix-rain 10s linear infinite;
              }
              .custom-scrollbar::-webkit-scrollbar {
                width: 6px;
              }
              .custom-scrollbar::-webkit-scrollbar-track {
                background: transparent;
              }
              .custom-scrollbar::-webkit-scrollbar-thumb {
                background: rgba(34, 197, 94, 0.2);
                border-radius: 10px;
              }
              .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                background: rgba(34, 197, 94, 0.4);
              }
            `}</style>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Terminal;
