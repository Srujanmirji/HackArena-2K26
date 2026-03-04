import React from 'react';
import { motion } from 'framer-motion';

const criteria = [
    { name: 'Technical Implementation', percentage: 30, color: 'from-primary to-red-600' },
    { name: 'Problem Relevance', percentage: 20, color: 'from-secondary to-orange-600' },
    { name: 'Scalability & Feasibility', percentage: 20, color: 'from-blue-400 to-indigo-600' },
    { name: 'Creativity & Innovation', percentage: 20, color: 'from-purple-400 to-violet-600' },
    { name: 'UI & UX Design', percentage: 10, color: 'from-emerald-400 to-green-600' },
];

const containerVariants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.12, delayChildren: 0.2 }
    }
};

const rowVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
        opacity: 1, x: 0,
        transition: { duration: 0.5 }
    }
};

const JudgingCriteria = () => {
    return (
        <section id="judging" className="py-16 md:py-20 relative z-10 w-full">
            <div className="max-w-4xl mx-auto px-5">

                <div className="text-center mb-10 md:mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6 }}
                        className="text-3xl md:text-5xl font-bold mb-3 md:mb-4 text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-400"
                    >
                        Judging Criteria
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0, scaleX: 0 }}
                        whileInView={{ opacity: 1, scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full glow origin-center"
                    />
                </div>

                <motion.div
                    className="space-y-5 md:space-y-8 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl md:rounded-3xl p-5 md:p-12 shadow-2xl"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                >
                    {criteria.map((item, index) => (
                        <motion.div
                            key={index}
                            variants={rowVariants}
                            className="space-y-3"
                        >
                            <div className="flex justify-between items-end">
                                <h3 className="text-sm md:text-lg font-bold text-gray-200 tracking-wide">{item.name}</h3>
                                <span className="text-base md:text-xl font-black text-white">{item.percentage}%</span>
                            </div>

                            <div className="h-3 md:h-4 w-full bg-black/50 rounded-full overflow-hidden border border-white/10">
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: `${item.percentage}%` }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1.2, delay: 0.3 + index * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
                                    className={`h-full bg-gradient-to-r ${item.color} rounded-full relative`}
                                >
                                    <div className="absolute inset-0 bg-white/20 w-full h-full skeleton-glow"></div>
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
};

export default JudgingCriteria;
