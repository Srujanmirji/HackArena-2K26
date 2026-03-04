import React from 'react';
import { motion } from 'framer-motion';
import { Banknote, GraduationCap, HeartPulse, Building2, Globe2 } from 'lucide-react';

const domains = [
    { id: 1, title: 'FinTech', desc: 'Digital payments & banking', icon: <Banknote size={28} />, color: 'from-blue-500 to-indigo-500', glow: 'shadow-blue-500/50' },
    { id: 2, title: 'EdTech', desc: 'Learning & assessment', icon: <GraduationCap size={28} />, color: 'from-orange-400 to-red-500', glow: 'shadow-red-500/50' },
    { id: 3, title: 'Healthcare', desc: 'Patient care & diagnostics', icon: <HeartPulse size={28} />, color: 'from-green-400 to-emerald-600', glow: 'shadow-green-500/50' },
    { id: 4, title: 'Campus Solutions', desc: 'Smart campus tools', icon: <Building2 size={28} />, color: 'from-purple-400 to-pink-500', glow: 'shadow-purple-500/50' },
    { id: 5, title: 'Social Impact', desc: 'Community & sustainability', icon: <Globe2 size={28} />, color: 'from-cyan-400 to-blue-500', glow: 'shadow-cyan-500/50' },
];

const containerVariants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
};

const domainVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.92 },
    visible: {
        opacity: 1, y: 0, scale: 1,
        transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }
    }
};

const DomainCard = ({ domain }) => (
    <motion.div
        variants={domainVariants}
        whileHover={{ y: -8, scale: 1.03, transition: { duration: 0.25 } }}
        className="relative group"
    >
        <div className={`absolute -inset-0.5 bg-gradient-to-r ${domain.color} rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500`} />
        <article className="relative bg-[#0d1117] border border-white/5 rounded-2xl p-5 md:p-7 h-full flex flex-row md:flex-col items-center md:items-center gap-4 md:gap-0 md:text-center shadow-lg group-hover:border-white/15 transition-colors">
            <div className={`w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-gradient-to-br ${domain.color} bg-opacity-10 flex items-center justify-center md:mb-5 text-white shadow-lg flex-shrink-0`}>
                {domain.icon}
            </div>
            <div className="text-left md:text-center">
                <h3 className="text-lg md:text-xl font-bold text-white mb-0.5 md:mb-1.5">{domain.title}</h3>
                <p className="text-xs md:text-sm text-gray-400">{domain.desc}</p>
            </div>
        </article>
    </motion.div>
);

const Domains = () => {
    return (
        <section id="domains" aria-labelledby="domains-heading" className="py-16 md:py-20 relative z-10 w-full">
            <div className="max-w-6xl mx-auto px-5">

                <div className="text-center mb-10 md:mb-14">
                    <motion.h2
                        id="domains-heading"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6 }}
                        className="text-3xl md:text-5xl font-bold mb-3 md:mb-4 text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-400"
                    >
                        Hackathon Domains
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0, scaleX: 0 }}
                        whileInView={{ opacity: 1, scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="w-20 md:w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-4 md:mb-6 rounded-full glow origin-center"
                    />
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto"
                    >
                        Build impactful products across high-growth problem areas.
                    </motion.p>
                </div>

                {/* Top row: 3 cards */}
                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5 mb-3 md:mb-5"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                >
                    {domains.slice(0, 3).map((domain) => (
                        <DomainCard key={domain.id} domain={domain} />
                    ))}
                </motion.div>

                {/* Bottom row: 2 cards centered */}
                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-5 max-w-2xl mx-auto"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                >
                    {domains.slice(3).map((domain) => (
                        <DomainCard key={domain.id} domain={domain} />
                    ))}
                </motion.div>

            </div>
        </section>
    );
};

export default Domains;
