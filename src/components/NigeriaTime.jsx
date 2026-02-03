import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const NigeriaTime = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    // Nigeria is Africa/Lagos (UTC+1)
    const formattedTime = time.toLocaleTimeString('en-GB', {
        timeZone: 'Africa/Lagos',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });

    return (
        <div className="select-none overflow-hidden">
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="relative group flex flex-col items-center justify-center"
            >
                {/* Enhanced Neon Glow */}
                <div className="absolute -inset-10 bg-blue-600/10 blur-[60px] rounded-full opacity-50 group-hover:opacity-80 transition-opacity duration-1000" />

                <div className="relative text-center">
                    <span
                        className="text-6xl md:text-7xl font-black tracking-tighter text-white drop-shadow-[0_0_25px_rgba(59,130,246,0.3)] italic"
                    >
                        {formattedTime}
                    </span>

                    <div className="mt-4 flex items-center justify-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
                        <span
                            className="text-[10px] uppercase tracking-[0.4em] font-black text-blue-500"
                        >
                            Active Now
                        </span>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default NigeriaTime;
