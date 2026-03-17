import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Domains', href: '#domains' },
    { name: 'Timeline', href: '#timeline' },
    { name: 'Schedule', href: '#schedule' },
    { name: 'Prizes', href: '#prizes' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Venue', href: '#venue' },
];

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            aria-label="Primary navigation"
            className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-background/80 backdrop-blur-md border-b border-primary/20 py-3' : 'bg-transparent py-5'}`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    <div className="flex-shrink-0 flex items-center">
                        <a href="#home" aria-label="Go to home section" className="flex gap-2 items-center">
                            <img src="/LOGO.png" alt="HackArena 2K26 Logo" className="w-10 h-10 object-contain drop-shadow-[0_0_8px_rgba(255,59,59,0.6)]" />
                            <span className="font-bold text-xl tracking-wider text-white">Hack<span className="text-primary">Arena</span></span>
                        </a>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-5">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-gray-300 hover:text-white hover:text-glow transition-all duration-300 text-sm font-medium"
                            >
                                {link.name}
                            </a>
                        ))}
                        <a
                            href="https://drive.google.com/drive/folders/1uz7LyN1myKvZXqWJpGRxHfPLV4-ZTHKi?usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#ff8a65] hover:text-white transition-all duration-300 text-sm font-bold flex items-center gap-1.5"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                            PPT Template
                        </a>
                        <span className="px-5 py-2 rounded-full border border-white/10 text-white/40 font-bold text-sm bg-white/5 cursor-not-allowed">
                            Registration Closed
                        </span>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                            aria-expanded={mobileMenuOpen}
                            aria-controls="mobile-nav-menu"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="text-gray-300 hover:text-white focus:outline-none"
                        >
                            {mobileMenuOpen ? <X size={24} className="text-primary" /> : <Menu size={24} className="text-primary" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        id="mobile-nav-menu"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-background/95 backdrop-blur-xl border-b border-primary/20 overflow-hidden"
                    >
                        <div className="px-4 pt-2 pb-6 space-y-1 sm:px-3 flex flex-col items-center">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="block px-3 py-3 text-base font-medium text-gray-300 hover:text-white hover:text-primary transition-colors text-center w-full"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <a
                                href="https://drive.google.com/drive/folders/1uz7LyN1myKvZXqWJpGRxHfPLV4-ZTHKi?usp=sharing"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex justify-center items-center gap-2 px-3 py-3 text-base font-bold text-[#ff8a65] hover:text-white transition-colors w-full"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                                PPT Template
                            </a>
                            <div className="pt-4 w-full flex justify-center">
                                <span className="px-8 py-3 rounded-full bg-white/5 text-white/40 font-bold text-center border border-white/10 w-full cursor-not-allowed">
                                    Registration Closed
                                </span>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
