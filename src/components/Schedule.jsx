import React from 'react';
import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';

const scheduleData = [
    { time: '8:30 AM - 9:00 AM', event: 'Inauguration', phase: 'Morning' },
    { time: '9:30 AM - 4:30 PM', event: 'Hackathon Development Phase', phase: 'Action' },
    { time: '5:00 PM - 11:59 PM', event: 'Online Debugging Round', phase: 'Evening' },
];

const containerVariants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.2, delayChildren: 0.2 }
    }
};

const itemVariants = {
    hidden: (i) => ({ opacity: 0, x: i % 2 === 0 ? -40 : 40 }),
    visible: {
        opacity: 1, x: 0,
        transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
    }
};

const Schedule = () => {
    return (
        <section id="schedule" className="py-16 md:py-20 relative z-10 w-full">
            <div className="max-w-4xl mx-auto px-5">

                <div className="text-center mb-10 md:mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6 }}
                        className="text-3xl md:text-5xl font-bold mb-3 md:mb-4 text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-400"
                    >
                        Event Day Schedule
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
                    className="bg-black/40 backdrop-blur-lg border border-white/10 rounded-2xl md:rounded-3xl p-4 md:p-10 shadow-2xl relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl rounded-tl-none pointer-events-none"></div>

                    <motion.div
                        className="space-y-6 relative z-10"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                    >
                        {scheduleData.map((item, index) => (
                            <motion.div
                                key={index}
                                custom={index}
                                variants={itemVariants}
                                whileHover={{ scale: 1.02, x: 8, transition: { duration: 0.2 } }}
                                className="group flex flex-col md:flex-row md:items-center justify-between p-4 md:p-6 rounded-xl md:rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-primary/30 transition-all duration-300"
                            >
                                <div className="flex items-center space-x-3 md:space-x-4 mb-3 md:mb-0">
                                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary border border-primary/30 shadow-[0_0_10px_rgba(255,59,59,0.2)] group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300 flex-shrink-0">
                                        <Clock size={20} />
                                    </div>
                                    <div>
                                        <span className="text-sm font-semibold tracking-wider text-secondary uppercase bg-secondary/10 px-3 py-1 rounded-full mb-2 inline-block">
                                            {item.phase}
                                        </span>
                                        <h3 className="text-base md:text-2xl font-bold text-white group-hover:text-primary transition-colors">
                                            {item.event}
                                        </h3>
                                    </div>
                                </div>

                                <div className="md:text-right font-mono text-xs sm:text-sm md:text-lg text-gray-300 bg-black/50 px-3 sm:px-4 py-2 rounded-lg md:rounded-xl tabular-nums break-all sm:break-normal">
                                    {item.time}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>

            </div>
        </section>
    );
};

export default Schedule;
