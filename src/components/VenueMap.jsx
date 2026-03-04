import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation } from 'lucide-react';

const VenueMap = () => {
    return (
        <section id="venue" className="py-16 md:py-20 relative z-10 w-full">
            <div className="max-w-5xl mx-auto px-5">

                <div className="text-center mb-10 md:mb-14">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6 }}
                        className="text-3xl md:text-5xl font-bold mb-3 md:mb-4 text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-400"
                    >
                        Event Venue
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0, scaleX: 0 }}
                        whileInView={{ opacity: 1, scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="w-20 md:w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-4 md:mb-6 rounded-full glow origin-center"
                    />
                    <motion.p
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                        className="text-base md:text-lg text-gray-300"
                    >
                        Join us at JCET, Hubballi for an unforgettable hackathon experience.
                    </motion.p>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl relative"
                >
                    {/* Map Embed */}
                    <div className="w-full h-[300px] md:h-[400px] relative">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4592.970684686405!2d75.11571037577535!3d15.394047657157843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb8d0e7c892f329%3A0x437f4bb22c9d71b6!2sJain%20College%20of%20Engineering%20%26%20Technology%20Hubballi!5e1!3m2!1sen!2sin!4v1772650366484!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(0.9) contrast(1.1)' }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="JCET Hubballi Location"
                        />
                    </div>

                    {/* Info Bar */}
                    <div className="bg-black/80 backdrop-blur-sm p-4 md:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                        <div className="flex items-start gap-3">
                            <div className="w-10 h-10 rounded-lg bg-primary/15 flex items-center justify-center text-primary flex-shrink-0 mt-0.5">
                                <MapPin size={20} />
                            </div>
                            <div>
                                <h3 className="text-white font-bold text-sm md:text-base">Jain College of Engineering & Technology</h3>
                                <p className="text-gray-400 text-xs md:text-sm">Machhe, Hubballi, Karnataka 580044</p>
                            </div>
                        </div>
                        <a
                            href="https://maps.google.com/?q=Jain+College+of+Engineering+and+Technology+Hubballi"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/20 text-primary hover:bg-primary hover:text-white transition-all duration-300 text-sm font-semibold border border-primary/30 hover:border-primary flex-shrink-0"
                        >
                            <Navigation size={16} />
                            Get Directions
                        </a>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default VenueMap;
