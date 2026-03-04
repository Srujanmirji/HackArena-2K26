import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Medal } from 'lucide-react';

const prizes = [
    {
        id: 1, title: 'First Prize', amount: '₹10,000',
        icon: <Trophy size={40} />, iconColor: 'text-yellow-400',
        color: 'from-yellow-400 to-yellow-600',
        glow: 'shadow-[0_0_20px_rgba(250,204,21,0.2)]',
        borderGlow: 'border-yellow-500/30 hover:border-yellow-400/60',
        scale: 'md:scale-105 z-10'
    },
    {
        id: 2, title: 'Second Prize', amount: '₹5,000',
        icon: <Medal size={36} />, iconColor: 'text-gray-300',
        color: 'from-gray-300 to-gray-500',
        glow: 'shadow-[0_0_15px_rgba(209,213,219,0.1)]',
        borderGlow: 'border-gray-500/20 hover:border-gray-400/50',
        scale: 'z-0'
    },
    {
        id: 3, title: 'Third Prize', amount: '₹3,000',
        icon: <Medal size={36} />, iconColor: 'text-orange-400',
        color: 'from-orange-400 to-orange-700',
        glow: 'shadow-[0_0_15px_rgba(249,115,22,0.1)]',
        borderGlow: 'border-orange-500/20 hover:border-orange-400/50',
        scale: 'z-0'
    }
];

const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } }
};

const prizeVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.92 },
    visible: {
        opacity: 1, y: 0, scale: 1,
        transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
    }
};

const PrizePool = () => {
    return (
        <section id="prizes" className="py-16 md:py-20 relative z-10 w-full">
            <div className="max-w-5xl mx-auto px-5">

                <div className="text-center mb-10 md:mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6 }}
                        className="text-3xl md:text-5xl font-bold mb-3 md:mb-4 text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-400"
                    >
                        Prize Pool
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0, scaleX: 0 }}
                        whileInView={{ opacity: 1, scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="w-20 md:w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full glow origin-center"
                    />
                </div>

                {/* Mobile: show 1st, 2nd, 3rd in correct order. Desktop: 2nd, 1st, 3rd */}
                <motion.div
                    className="hidden md:grid md:grid-cols-3 gap-6 items-end"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                >
                    {[prizes[1], prizes[0], prizes[2]].map((prize) => (
                        <motion.div key={prize.id} variants={prizeVariants} whileHover={{ y: -10, transition: { duration: 0.25 } }} className={`relative ${prize.scale}`}>
                            <div className={`absolute -inset-0.5 bg-gradient-to-b ${prize.color} rounded-2xl blur-sm opacity-20`} />
                            <div className={`relative bg-black/70 backdrop-blur-xl border ${prize.borderGlow} rounded-2xl p-8 flex flex-col items-center text-center ${prize.glow} transition-all duration-300`}>
                                <div className={`w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-4 ${prize.iconColor}`}>{prize.icon}</div>
                                <p className="text-[10px] font-bold tracking-[0.2em] text-gray-500 uppercase mb-2">{prize.title}</p>
                                <p className={`text-3xl font-black text-transparent bg-clip-text bg-gradient-to-br ${prize.color}`}>{prize.amount}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Mobile layout: horizontal cards */}
                <motion.div
                    className="md:hidden space-y-3"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                >
                    {prizes.map((prize) => (
                        <motion.div key={prize.id} variants={prizeVariants} className="relative">
                            <div className={`absolute -inset-0.5 bg-gradient-to-r ${prize.color} rounded-xl blur-sm opacity-15`} />
                            <div className={`relative bg-black/70 backdrop-blur-xl border ${prize.borderGlow} rounded-xl p-4 flex items-center gap-4 ${prize.glow} transition-all duration-300`}>
                                <div className={`w-14 h-14 rounded-xl bg-white/5 flex items-center justify-center ${prize.iconColor} flex-shrink-0`}>{prize.icon}</div>
                                <div>
                                    <p className="text-[10px] font-bold tracking-[0.15em] text-gray-500 uppercase mb-0.5">{prize.title}</p>
                                    <p className={`text-2xl font-black text-transparent bg-clip-text bg-gradient-to-br ${prize.color}`}>{prize.amount}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
};

export default PrizePool;
