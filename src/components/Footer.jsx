import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Instagram, Linkedin, Twitter, MapPin, Phone, GraduationCap, Crown, Sparkles, Users } from 'lucide-react';

const containerVariants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.08, delayChildren: 0.1 }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1, y: 0,
        transition: { duration: 0.5 }
    }
};

const Footer = () => {
    const studentCoordinators = [
        { name: 'Nirali Thakkar', phone: '7892776889' },
        { name: 'Srujan Mirji', phone: '9663341218' },
        { name: 'Tousif', phone: '8722973448' },
    ];

    return (
        <footer className="relative z-10 bg-gradient-to-b from-[#050118] to-black border-t border-primary/20 pt-12 sm:pt-20 pb-6 sm:pb-8 overflow-hidden w-full">
            {/* Top glow line */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-60 shadow-[0_0_30px_rgba(255,59,59,1)]"></div>

            {/* Background ambient glow */}
            <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Section Title */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-8 sm:mb-12"
                >
                    <h3 className="text-2xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-400 mb-3">
                        Our Team
                    </h3>
                    <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
                </motion.div>

                {/* Leadership Row — Principal & HOD */}
                <motion.div
                    className="grid grid-cols-2 gap-2 sm:gap-3 md:gap-5 mb-6 sm:mb-8 md:mb-10 max-w-xl mx-auto"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {[
                        { title: 'Principal', name: 'Dr. Prashanth Banakar', icon: <Crown size={22} />, gradient: 'from-yellow-500/20 to-orange-500/20', border: 'border-yellow-500/20 hover:border-yellow-400/50', iconBg: 'bg-yellow-500/15 text-yellow-400' },
                        { title: 'CSE HOD', name: 'Dr. Maheshkumar Patil', icon: <GraduationCap size={22} />, gradient: 'from-blue-500/20 to-purple-500/20', border: 'border-blue-500/20 hover:border-blue-400/50', iconBg: 'bg-blue-500/15 text-blue-400' },
                    ].map((leader, idx) => (
                        <motion.div
                            key={idx}
                            variants={itemVariants}
                            className={`relative group`}
                        >
                            <div className={`absolute -inset-0.5 bg-gradient-to-br ${leader.gradient} rounded-2xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                            <div className={`relative text-center p-3 sm:p-4 md:p-6 bg-white/[0.03] backdrop-blur-sm rounded-lg sm:rounded-xl md:rounded-2xl border ${leader.border} transition-all duration-300`}>
                                <div className={`w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl ${leader.iconBg} flex items-center justify-center mx-auto mb-2 md:mb-3`}>
                                    {leader.icon}
                                </div>
                                <p className="text-[9px] md:text-[10px] font-bold tracking-[0.2em] text-gray-500 uppercase mb-1">{leader.title}</p>
                                <p className="text-white font-bold text-sm md:text-lg">{leader.name}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Faculty Coordinator */}
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-8 md:mb-10 relative"
                >
                    <div className="inline-flex flex-col items-center">
                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-primary/15 flex items-center justify-center mb-2 md:mb-3 text-primary">
                            <Sparkles size={22} />
                        </div>
                        <p className="text-[10px] font-bold tracking-[0.2em] text-gray-500 uppercase mb-1">Faculty Co-ordinator</p>
                        <p className="text-lg md:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">Prof. Amruta Naveen</p>
                    </div>
                </motion.div>

                {/* Student Coordinators */}
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-center mb-4"
                >
                    <div className="inline-flex items-center gap-2 mb-5">
                        <Users size={16} className="text-gray-500" />
                        <p className="text-[10px] font-bold tracking-[0.2em] text-gray-500 uppercase">Student Co-ordinators</p>
                    </div>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3 max-w-2xl mx-auto mb-8 sm:mb-10 md:mb-14"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {studentCoordinators.map((coordinator, idx) => (
                        <motion.div
                            key={idx}
                            variants={itemVariants}
                            whileHover={{ y: -4, transition: { duration: 0.2 } }}
                            className="group relative"
                        >
                            <div className="absolute -inset-0.5 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <div className="relative text-center p-3 md:p-5 bg-white/[0.03] backdrop-blur-sm rounded-xl border border-white/5 group-hover:border-primary/30 transition-all duration-300">
                                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mx-auto mb-2.5 text-primary text-sm font-bold">
                                    {coordinator.name.charAt(0)}
                                </div>
                                <p className="text-white font-semibold text-sm mb-1.5">{coordinator.name}</p>
                                <a
                                    href={`tel:+91${coordinator.phone}`}
                                    className="inline-flex items-center gap-1.5 text-xs text-gray-500 hover:text-primary transition-colors group-hover:text-gray-300"
                                >
                                    <Phone size={12} />
                                    <span className="font-mono">{coordinator.phone}</span>
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Divider */}
                <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-12" />

                {/* Bottom Info Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-8 mb-8 sm:mb-12">

                    {/* Brand Info */}
                    <div className="col-span-1 space-y-5">
                        <div className="flex gap-2.5 items-center">
                            <img src="/LOGO.png" alt="HackArena 2K26 Logo" className="w-12 h-12 object-contain drop-shadow-[0_0_8px_rgba(255,59,59,0.6)]" />
                            <span className="font-bold text-xl tracking-wider text-white">Hack<span className="text-primary">Arena</span></span>
                        </div>
                        <p className="text-gray-500 text-sm max-w-xs leading-relaxed">
                            Igniting innovation and technical excellence. A 7-hour full-stack journey to transform ideas into reality.
                        </p>
                    </div>

                    {/* Organizer Info */}
                    <div className="col-span-1 space-y-4">
                        <h4 className="text-sm font-bold tracking-wider text-white uppercase">Organized By</h4>
                        <p className="font-bold text-primary text-base text-glow">Jain College of Engineering and Technology</p>
                        <div className="flex items-center gap-2 text-gray-500 text-sm">
                            <MapPin size={16} className="flex-shrink-0" />
                            <span>Hubballi, Karnataka, India</span>
                        </div>
                    </div>

                    {/* Contact & Socials */}
                    <div className="col-span-1 space-y-4">
                        <h4 className="text-sm font-bold tracking-wider text-white uppercase">Connect With Us</h4>
                        <a href="mailto:contact@hackarena2026.com" className="flex items-center gap-2 text-gray-500 hover:text-primary transition-colors text-sm w-max">
                            <Mail size={16} />
                            <span>contact@hackarena2026.com</span>
                        </a>
                        <a href="tel:+917892776889" className="flex items-center gap-2 text-gray-500 hover:text-primary transition-colors text-sm w-max">
                            <Phone size={16} />
                            <span>7892776889</span>
                        </a>
                        <a href="tel:+919663341218" className="flex items-center gap-2 text-gray-500 hover:text-primary transition-colors text-sm w-max">
                            <Phone size={16} />
                            <span>9663341218</span>
                        </a>
                        <a href="tel:+918722973448" className="flex items-center gap-2 text-gray-500 hover:text-primary transition-colors text-sm w-max">
                            <Phone size={16} />
                            <span>8722973448</span>
                        </a>
                        <div className="flex gap-3 pt-2">
                            {[
                                { Icon: Instagram, label: 'Instagram' },
                                { Icon: Linkedin, label: 'LinkedIn' },
                                { Icon: Twitter, label: 'Twitter' },
                            ].map(({ Icon, label }, idx) => (
                                <a
                                    key={idx}
                                    href="#"
                                    aria-label={label}
                                    className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-gray-500 hover:bg-primary/20 hover:text-primary transition-all duration-300 border border-white/5 hover:border-primary/30"
                                >
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Copyright & Credit */}
                <div className="border-t border-white/5 pt-6 text-center space-y-2">
                    <p className="text-gray-600 text-xs">
                        &copy; {new Date().getFullYear()} HackArena 2026. All rights reserved.
                    </p>
                    <p className="text-gray-600 text-xs">
                        Designed & Developed by{' '}
                        <a
                            href="https://www.linkedin.com/in/srujanmirji"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:text-secondary transition-colors font-medium"
                        >
                            Srujan Mirji
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
