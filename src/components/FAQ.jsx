import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqData = [
    {
        question: 'Who can participate in HackArena 2K26?',
        answer: 'Any college student can participate. Inter-college teams are allowed. Each team must have 2 to 4 members.',
    },
    {
        question: 'Is there a registration fee?',
        answer: 'Yes, there is a nominal registration fee per team. You can register and pay through the Unstop platform.',
    },
    {
        question: 'What should I bring to the hackathon?',
        answer: 'Bring your laptop, charger, college ID card, and plenty of enthusiasm! We will provide the workspace, Wi-Fi, and refreshments.',
    },
    {
        question: 'What tech stack can we use?',
        answer: 'This is a full-stack hackathon. You can use any frontend and backend technologies. AI tools are allowed but must be disclosed during evaluation.',
    },
    {
        question: 'How will projects be judged?',
        answer: 'Projects will be judged on Technical Implementation (30%), Problem Relevance (20%), Scalability (20%), Creativity (20%), and UI/UX Design (10%).',
    },
    {
        question: 'Can I participate solo?',
        answer: 'No, the minimum team size is 2 members and the maximum is 4 members. You need at least one teammate.',
    },
];

const FAQItem = ({ faq, index, isOpen, toggle }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: index * 0.08 }}
    >
        <button
            onClick={toggle}
            className={`w-full text-left p-4 md:p-5 rounded-xl flex items-start justify-between gap-4 transition-all duration-300 ${isOpen
                ? 'bg-primary/10 border border-primary/30'
                : 'bg-white/[0.03] border border-white/5 hover:border-white/15 hover:bg-white/[0.06]'
                }`}
        >
            <span className={`text-sm md:text-base font-semibold leading-relaxed ${isOpen ? 'text-white' : 'text-gray-300'}`}>
                {faq.question}
            </span>
            <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="flex-shrink-0 mt-0.5"
            >
                <ChevronDown size={18} className={isOpen ? 'text-primary' : 'text-gray-500'} />
            </motion.div>
        </button>
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                >
                    <p className="px-4 md:px-5 py-3 text-sm text-gray-400 leading-relaxed">
                        {faq.answer}
                    </p>
                </motion.div>
            )}
        </AnimatePresence>
    </motion.div>
);

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(0);

    return (
        <section id="faq" className="py-16 md:py-20 relative z-10 w-full">
            <div className="max-w-3xl mx-auto px-5">

                <div className="text-center mb-10 md:mb-14">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-2 mb-4"
                    >
                        <HelpCircle size={28} className="text-primary" />
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6 }}
                        className="text-3xl md:text-5xl font-bold mb-3 md:mb-4 text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-400"
                    >
                        Frequently Asked Questions
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0, scaleX: 0 }}
                        whileInView={{ opacity: 1, scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="w-20 md:w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full glow origin-center"
                    />
                </div>

                <div className="space-y-3">
                    {faqData.map((faq, index) => (
                        <FAQItem
                            key={index}
                            faq={faq}
                            index={index}
                            isOpen={openIndex === index}
                            toggle={() => setOpenIndex(openIndex === index ? -1 : index)}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
};

export default FAQ;
