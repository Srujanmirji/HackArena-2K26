import React from 'react';
import { motion } from 'framer-motion';
import { ShieldAlert, Users, IdCard, Sparkles, FileWarning } from 'lucide-react';

const rulesList = [
    { icon: <Users size={24} className="text-secondary" />, text: "Team size must be strictly 2 to 4 members." },
    { icon: <ShieldAlert size={24} className="text-primary" />, text: "Inter-college teams are permitted to participate." },
    { icon: <IdCard size={24} className="text-blue-400" />, text: "All participants must carry a valid college ID card during the offline event." },
    { icon: <Sparkles size={24} className="text-purple-400" />, text: "AI tools are allowed, but their use must be fully disclosed during evaluation." },
    { icon: <FileWarning size={24} className="text-red-500" />, text: "Any form of plagiarism will lead to immediate disqualification." },
];

const containerVariants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.1, delayChildren: 0.3 }
    }
};

const ruleVariants = {
    hidden: { opacity: 0, x: -30, scale: 0.95 },
    visible: {
        opacity: 1, x: 0, scale: 1,
        transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }
    }
};

const Rules = () => {
    return (
        <section id="rules" className="py-16 md:py-20 relative z-10 w-full">
            <div className="max-w-4xl mx-auto px-5">

                <div className="text-center mb-10 md:mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6 }}
                        className="text-3xl md:text-5xl font-bold mb-3 md:mb-4 text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-400"
                    >
                        Guidelines & Rules
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
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="bg-red-950/10 backdrop-blur-sm border border-primary/20 rounded-2xl md:rounded-3xl p-4 md:p-12 shadow-[0_0_30px_rgba(255,59,59,0.05)]"
                >
                    <motion.ul
                        className="space-y-3 md:space-y-6"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                    >
                        {rulesList.map((rule, index) => (
                            <motion.li
                                key={index}
                                variants={ruleVariants}
                                whileHover={{ x: 8, transition: { duration: 0.2 } }}
                                className="flex items-start space-x-3 md:space-x-4 p-3 md:p-4 rounded-xl bg-black/40 border border-white/5 hover:border-primary/30 transition-colors"
                            >
                                <div className="mt-1 flex-shrink-0">
                                    {rule.icon}
                                </div>
                                <p className="text-sm md:text-lg text-gray-300 leading-relaxed font-medium">
                                    {rule.text}
                                </p>
                            </motion.li>
                        ))}
                    </motion.ul>
                </motion.div>

            </div>
        </section>
    );
};

export default Rules;
