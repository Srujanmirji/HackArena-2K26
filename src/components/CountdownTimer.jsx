import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const TARGET_DATE = new Date('2026-03-18T09:00:00+05:30').getTime();

const getTimeLeft = () => {
    const now = Date.now();
    const diff = Math.max(TARGET_DATE - now, 0);
    return {
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
    };
};

const TimeBlock = ({ value, label }) => (
    <div className="flex flex-col items-center">
        <div className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-xl bg-black/60 backdrop-blur-sm border border-white/10 flex items-center justify-center shadow-[0_0_15px_rgba(255,59,59,0.15)] overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />
            <motion.span
                key={value}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className="text-2xl sm:text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400 tabular-nums"
            >
                {String(value).padStart(2, '0')}
            </motion.span>
        </div>
        <span className="mt-2 text-[10px] sm:text-xs font-bold tracking-[0.15em] text-gray-500 uppercase">
            {label}
        </span>
    </div>
);

const Separator = () => (
    <div className="flex flex-col items-center justify-center gap-2 mb-5">
        <div className="w-1.5 h-1.5 rounded-full bg-primary/60 animate-pulse" />
        <div className="w-1.5 h-1.5 rounded-full bg-primary/60 animate-pulse" />
    </div>
);

const CountdownTimer = () => {
    const [timeLeft, setTimeLeft] = useState(getTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex items-start gap-2 sm:gap-3 md:gap-4 mb-6 md:mb-8"
        >
            <TimeBlock value={timeLeft.days} label="Days" />
            <Separator />
            <TimeBlock value={timeLeft.hours} label="Hours" />
            <Separator />
            <TimeBlock value={timeLeft.minutes} label="Mins" />
            <Separator />
            <TimeBlock value={timeLeft.seconds} label="Secs" />
        </motion.div>
    );
};

export default CountdownTimer;
