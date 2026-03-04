import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, CalendarDays, Laptop } from 'lucide-react';

const containerVariants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.12, delayChildren: 0.2 }
    }
};

const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
        opacity: 1, y: 0, scale: 1,
        transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }
    }
};

const EventDetails = () => {
    const details = [
        { icon: <CalendarDays size={28} />, label: "Event Name", value: "HackArena 2026", color: "from-red-500 to-red-600" },
        { icon: <Laptop size={28} />, label: "Mode", value: "Offline", color: "from-orange-500 to-red-500" },
        { icon: <MapPin size={28} />, label: "Venue", value: "JCET, Hubballi", color: "from-red-600 to-orange-600" },
        { icon: <Clock size={28} />, label: "Duration", value: "7 Hours", color: "from-orange-400 to-red-500" },
    ];

    return (
        <section id="event-details" aria-labelledby="event-details-heading" className="py-16 md:py-20 relative z-10 w-full">
            <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
            <div className="max-w-6xl mx-auto px-4 relative z-10">
                <div className="text-center mb-14">
                    <motion.h2
                        id="event-details-heading"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6 }}
                        className="text-3xl md:text-5xl font-bold mb-3 md:mb-4 text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-400"
                    >
                        Event Details
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0, scaleX: 0 }}
                        whileInView={{ opacity: 1, scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6 rounded-full glow origin-center"
                    />
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="text-base md:text-lg text-gray-300 max-w-3xl mx-auto"
                    >
                        Offline hackathon hosted at Jain College of Engineering & Technology, Hubballi.
                    </motion.p>
                </div>

                <motion.div
                    className="grid grid-cols-2 lg:grid-cols-4 gap-5"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                >
                    {details.map((detail, index) => (
                        <motion.article
                            key={index}
                            variants={cardVariants}
                            whileHover={{ y: -6, scale: 1.03, transition: { duration: 0.2 } }}
                            className="bg-black/50 backdrop-blur-md rounded-xl md:rounded-2xl p-4 md:p-6 border border-white/5 hover:border-primary/40 transition-all duration-300 group relative overflow-hidden"
                        >
                            <div className={`absolute top-0 right-0 w-28 h-28 bg-gradient-to-br ${detail.color} opacity-10 rounded-full blur-2xl group-hover:opacity-25 transition-opacity`} />

                            <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-primary/15 flex items-center justify-center text-primary mb-3 md:mb-4 border border-primary/20 group-hover:scale-110 transition-transform" aria-hidden="true">
                                {detail.icon}
                            </div>
                            <h3 className="text-gray-500 text-[10px] md:text-xs font-semibold uppercase tracking-widest mb-1">{detail.label}</h3>
                            <p className="text-white font-bold text-sm md:text-lg">{detail.value}</p>
                        </motion.article>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default EventDetails;
