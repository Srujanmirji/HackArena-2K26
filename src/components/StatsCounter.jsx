import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Users, Trophy, Clock, Layers } from 'lucide-react';

const stats = [
    { icon: <Users size={28} />, value: 200, suffix: '+', label: 'Participants', color: 'text-red-400' },
    { icon: <Trophy size={28} />, value: 18000, prefix: '₹', suffix: '', label: 'Prize Pool', color: 'text-yellow-400' },
    { icon: <Layers size={28} />, value: 5, suffix: '', label: 'Domains', color: 'text-blue-400' },
    { icon: <Clock size={28} />, value: 7, suffix: ' Hrs', label: 'Duration', color: 'text-green-400' },
];

const AnimatedNumber = ({ value, prefix = '', suffix = '', isVisible }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!isVisible) return;
        setCount(0);
        const duration = 2000;
        const steps = 60;
        const increment = value / steps;
        let current = 0;
        const timer = setInterval(() => {
            current += increment;
            if (current >= value) {
                setCount(value);
                clearInterval(timer);
            } else {
                setCount(Math.floor(current));
            }
        }, duration / steps);
        return () => clearInterval(timer);
    }, [value, isVisible]);

    const formatted = value >= 1000 ? count.toLocaleString('en-IN') : count;

    return (
        <span className="text-2xl sm:text-3xl md:text-5xl font-black text-white tabular-nums">
            {prefix}{formatted}{suffix}
        </span>
    );
};

const StatsCounter = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-80px' });

    return (
        <section className="py-10 md:py-14 relative z-10 w-full">
            <div className="max-w-5xl mx-auto px-5" ref={ref}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
                >
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="text-center p-5 md:p-6 rounded-2xl bg-white/[0.03] backdrop-blur-sm border border-white/5 hover:border-white/15 transition-colors"
                        >
                            <div className={`${stat.color} mx-auto mb-3`}>
                                {stat.icon}
                            </div>
                            <AnimatedNumber
                                value={stat.value}
                                prefix={stat.prefix}
                                suffix={stat.suffix}
                                isVisible={isInView}
                            />
                            <p className="text-xs md:text-sm font-semibold tracking-wider text-gray-500 uppercase mt-2">
                                {stat.label}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default StatsCounter;
