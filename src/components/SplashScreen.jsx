import React from 'react';
import { motion } from 'framer-motion';

const SplashScreen = ({ onComplete }) => {
    return (
        <motion.div
            className="fixed inset-0 z-[9999] bg-[#030014] flex flex-col items-center justify-center"
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ duration: 0.5, delay: 2.5 }}
            onAnimationComplete={onComplete}
        >
            {/* Logo */}
            <motion.img
                src="/LOGO.png"
                alt="HackArena 2K26"
                className="w-40 h-40 sm:w-48 sm:h-48 object-contain"
                initial={{ scale: 0.3, opacity: 0, rotate: -20 }}
                animate={{ scale: 1, opacity: 1, rotate: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
            />

            {/* Text */}
            <motion.h1
                className="text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-400 mt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
            >
                HACKARENA 2K26
            </motion.h1>

            {/* Loading bar */}
            <motion.div
                className="mt-8 w-48 h-1 bg-white/10 rounded-full overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
            >
                <motion.div
                    className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                    initial={{ width: '0%' }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 1.5, delay: 0.9, ease: 'easeInOut' }}
                />
            </motion.div>

            {/* Subtle tagline */}
            <motion.p
                className="text-gray-600 text-xs mt-4 tracking-widest uppercase"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
            >
                Loading the arena...
            </motion.p>
        </motion.div>
    );
};

export default SplashScreen;
