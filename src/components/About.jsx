import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Cpu, Rocket } from 'lucide-react';

const containerVariants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.15, delayChildren: 0.3 }
    }
};

const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
        opacity: 1, y: 0, scale: 1,
        transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
    }
};

const About = () => {
    return (
        <section id="about" className="py-16 md:py-24 relative z-10 overflow-hidden">
            <div className="max-w-4xl mx-auto px-5 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-400"
                >
                    About The Event
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, scaleX: 0 }}
                    whileInView={{ opacity: 1, scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="w-20 md:w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8 md:mb-10 rounded-full glow origin-center"
                />

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.7 }}
                    className="text-base md:text-xl text-gray-300 leading-relaxed mb-10 md:mb-16"
                >
                    HackArena 2026 is a premier <span className="text-white font-semibold text-glow">7-hour full stack hackathon</span> focused on building scalable web applications that solve real-world problems. We bring together the brightest minds to foster collaboration, drive innovation, and build production-ready solutions from scratch.
                </motion.p>

                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                >
                    {[
                        { icon: <Code2 size={32} className="text-primary" />, title: "Build", desc: "Develop production-ready web apps" },
                        { icon: <Rocket size={32} className="text-secondary" />, title: "Innovate", desc: "Solve real-world problems" },
                        { icon: <Cpu size={32} className="text-primary" />, title: "Collaborate", desc: "Work with top tier talent" }
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            whileHover={{ y: -10, scale: 1.03, transition: { duration: 0.25 } }}
                            className="box-glow bg-white/5 backdrop-blur-sm rounded-2xl p-5 md:p-8 flex flex-row sm:flex-col items-center sm:items-center gap-4 sm:gap-0 transition-shadow duration-300"
                        >
                            <div className="w-14 h-14 md:w-20 md:h-20 rounded-full bg-primary/10 flex items-center justify-center sm:mb-6 border border-primary/20 shadow-[0_0_15px_rgba(255,59,59,0.2)] flex-shrink-0">
                                {item.icon}
                            </div>
                            <div className="text-left sm:text-center">
                                <h3 className="text-xl md:text-2xl font-bold text-white mb-1 md:mb-3">{item.title}</h3>
                                <p className="text-gray-400 text-sm md:text-base">{item.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default About;
