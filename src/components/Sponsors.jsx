import React from 'react';
import { motion } from 'framer-motion';
import { Handshake } from 'lucide-react';

// ============================================================
// 📌 HOW TO ADD SPONSORS:
// 1. Drop your sponsor logo image into /public/sponsors/
//    (e.g., /public/sponsors/google.png)
// 2. Add a new entry to the `sponsors` array below
// 3. Set `logo` to the path: '/sponsors/google.png'
// ============================================================

const sponsors = [
    // ── Add your sponsors here ──
    // Example:
    // {
    //     name: 'Google',
    //     subtitle: 'Title Sponsor',
    //     logo: '/sponsors/google.png',
    //     url: 'https://google.com',
    // },
    // {
    //     name: 'GitHub',
    //     subtitle: 'Dev Partner',
    //     logo: '/sponsors/github.png',
    //     url: 'https://github.com',
    // },
];

const containerVariants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
};

const logoVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: {
        opacity: 1, y: 0, scale: 1,
        transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }
    }
};

const Sponsors = () => {
    return (
        <section id="sponsors" aria-labelledby="sponsors-heading" className="py-16 md:py-20 relative z-10 w-full">
            <div className="max-w-5xl mx-auto px-5">

                {/* Section Header */}
                <div className="text-center mb-10 md:mb-14">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-2 mb-4"
                    >
                        <Handshake size={28} className="text-primary" />
                    </motion.div>
                    <motion.h2
                        id="sponsors-heading"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6 }}
                        className="text-3xl md:text-5xl font-bold mb-3 md:mb-4 text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-400"
                    >
                        Our Sponsors
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
                        className="text-sm md:text-lg text-gray-400 max-w-xl mx-auto"
                    >
                        Backed by organizations that believe in empowering the next generation of builders.
                    </motion.p>
                </div>

                {/* Sponsor Logos Grid */}
                {sponsors.length > 0 ? (
                    <motion.div
                        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                    >
                        {sponsors.map((sponsor, index) => (
                            <motion.a
                                key={index}
                                href={sponsor.url || '#'}
                                target={sponsor.url ? '_blank' : undefined}
                                rel={sponsor.url ? 'noopener noreferrer' : undefined}
                                variants={logoVariants}
                                whileHover={{ y: -6, scale: 1.05, transition: { duration: 0.25 } }}
                                className="group relative block"
                            >
                                <div className="absolute -inset-0.5 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <div className="relative bg-white/[0.03] backdrop-blur-sm border border-white/5 hover:border-primary/30 rounded-2xl p-5 md:p-6 flex flex-col items-center text-center transition-all duration-300 h-full">
                                    <div className="w-20 h-20 md:w-24 md:h-24 flex items-center justify-center mb-3 md:mb-4">
                                        <img
                                            src={sponsor.logo}
                                            alt={sponsor.name}
                                            className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-300"
                                        />
                                    </div>
                                    <h3 className="text-sm md:text-base font-bold text-white mb-0.5">{sponsor.name}</h3>
                                    {sponsor.subtitle && (
                                        <p className="text-[10px] md:text-xs text-gray-500">{sponsor.subtitle}</p>
                                    )}
                                </div>
                            </motion.a>
                        ))}
                    </motion.div>
                ) : (
                    /* Empty state — shown when no sponsors added yet */
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-center py-10 md:py-14 bg-white/[0.02] border border-dashed border-white/10 rounded-2xl max-w-2xl mx-auto"
                    >
                        <Handshake size={40} className="text-gray-700 mx-auto mb-4" />
                        <p className="text-gray-500 text-sm md:text-base font-medium mb-1">Sponsors coming soon</p>
                        <p className="text-gray-600 text-xs">Stay tuned for our amazing partners!</p>
                    </motion.div>
                )}

                {/* Call for sponsors */}
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className="text-center mt-10 md:mt-14"
                >
                    <p className="text-gray-600 text-xs md:text-sm mb-3">
                        Interested in sponsoring HackArena 2026?
                    </p>
                    <a
                        href="mailto:contact@hackarena2026.com"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-gray-300 hover:border-primary/40 hover:text-primary transition-all duration-300 text-xs md:text-sm font-semibold"
                    >
                        <Handshake size={16} />
                        Become a Sponsor
                    </a>
                </motion.div>

            </div>
        </section>
    );
};

export default Sponsors;
