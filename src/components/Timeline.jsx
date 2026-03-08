import React from 'react';
import { motion } from 'framer-motion';

const timelineEvents = [
    { id: 1, title: 'Registration', date: '5 March - 16 March', isPast: false },
    { id: 2, title: 'PPT Submission', date: '10 March - 18 March', isPast: false, link: 'https://drive.google.com/drive/folders/1uz7LyN1myKvZXqWJpGRxHfPLV4-ZTHKi?usp=sharing', linkText: 'Download PPT Template' },
    { id: 3, title: 'Round 1 Results', date: '21 March', isPast: false },
    { id: 4, title: 'Hackathon Day', date: '24 March', isPast: false, isFinal: true },
];

const timelineCardVariants = {
    hidden: (isLeft) => ({ opacity: 0, x: isLeft ? -50 : 50, scale: 0.9 }),
    visible: {
        opacity: 1, x: 0, scale: 1,
        transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
    }
};

const Timeline = () => {
    return (
        <section id="timeline" className="py-16 md:py-20 relative z-10 w-full px-5 overflow-hidden">
            <div className="max-w-4xl mx-auto">

                <div className="text-center mb-12 md:mb-24">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6 }}
                        className="text-3xl md:text-5xl font-bold mb-3 md:mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#ff8a65] to-[#ffd54f]"
                    >
                        Event Timeline
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0, scaleX: 0 }}
                        whileInView={{ opacity: 1, scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="w-20 h-1 bg-gradient-to-r from-[#ff8a65] to-[#ffd54f] mx-auto rounded-full origin-center"
                    />
                </div>

                <div className="relative">
                    {/* Main Vertical Center Line */}
                    <motion.div
                        initial={{ scaleY: 0 }}
                        whileInView={{ scaleY: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        style={{ transformOrigin: "top" }}
                        className="absolute left-[28px] md:left-1/2 md:transform md:-translate-x-1/2 h-full w-[3px] bg-gradient-to-b from-[#ff5252] via-[#ffd54f] to-[#ff5252]/20 rounded-full z-0 pointer-events-none"
                    />

                    <div className="space-y-10 md:space-y-16">
                        {timelineEvents.map((event, index) => {
                            const isLeft = index % 2 === 0;

                            return (
                                <motion.div
                                    key={event.id}
                                    custom={isLeft}
                                    variants={timelineCardVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, margin: "-80px" }}
                                    className={`relative flex flex-col md:flex-row items-center justify-between w-full`}
                                >

                                    {/* Central Glowing Node Point */}
                                    <div className="absolute left-[28px] md:left-1/2 transform -translate-x-1/2 w-[14px] h-[14px] rounded-full bg-white border-4 border-[#ff5252] shadow-[0_0_20px_rgba(255,82,82,0.9)] z-20 flex items-center justify-center">
                                    </div>

                                    {/* Connecting Horizontal Line (Desktop only) */}
                                    <div className={`hidden md:block absolute top-1/2 transform -translate-y-1/2 w-[calc(50%-20px)] h-[1px] bg-white/20 z-0 ${isLeft ? 'right-1/2' : 'left-1/2'}`}></div>

                                    {/* Left Spacer (Empty block on alternating sides) */}
                                    {isLeft ? (
                                        <div className="hidden md:block w-1/2 pr-12">
                                            {/* Left Content */}
                                            <div className="flex justify-end relative z-10">
                                                <div className={`p-6 bg-[#0B0A11] border ${event.isFinal ? 'border-[#ff5252] shadow-[0_0_20px_rgba(255,82,82,0.4)]' : 'border-white/5'} rounded-xl w-full max-w-[380px] hover:border-white/20 transition-colors duration-300 relative`}>
                                                    <h3 className={`text-xl font-black mb-1 ${event.isFinal ? 'text-[#ff5252]' : 'text-white'}`}>
                                                        {event.title}
                                                    </h3>
                                                    <p className="text-sm text-gray-200 font-bold">
                                                        {event.date}
                                                    </p>
                                                    {event.link && (
                                                        <a href={event.link} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center justify-center px-4 py-1.5 md:px-5 md:py-2 bg-white/5 border border-white/20 hover:border-[#ff8a65] text-gray-300 hover:text-white rounded-lg transition-all duration-300 group shadow-[0_4px_10px_rgba(0,0,0,0.5)] hover:shadow-[0_0_15px_rgba(255,138,101,0.3)] text-xs md:text-sm font-semibold">
                                                            <svg className="w-4 h-4 mr-2 text-[#ff8a65] group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                                                            {event.linkText}
                                                        </a>
                                                    )}

                                                    {event.isFinal && <div className="absolute -top-[14px] -right-[14px] w-7 h-7 bg-[#ff5252] rounded-full opacity-90 shadow-[0_0_15px_rgba(255,82,82,0.8)] z-30"></div>}
                                                </div>
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="w-1/2 hidden md:block"></div>
                                    )}

                                    {/* Right Content / Mobile Content */}
                                    <div className={`w-full pl-16 md:pl-0 md:w-1/2 ${!isLeft ? 'md:pl-12' : ''}`}>
                                        <div className={`flex md:justify-start relative z-10 ${isLeft ? 'md:hidden' : ''}`}>
                                            {/* Mobile Connecting Horizontal Line */}
                                            <div className={`md:hidden absolute top-1/2 transform -translate-y-1/2 left-[-24px] w-[24px] h-[1px] bg-white/20 z-0`}></div>

                                            <div className={`p-6 bg-[#0B0A11] border ${event.isFinal ? 'border-[#ff5252] shadow-[0_0_20px_rgba(255,82,82,0.4)]' : 'border-white/5'} rounded-xl w-full max-w-[380px] hover:border-white/20 transition-colors duration-300 relative`}>
                                                <h3 className={`text-xl font-black mb-1 ${event.isFinal ? 'text-[#ff5252]' : 'text-white'}`}>
                                                    {event.title}
                                                </h3>
                                                <p className="text-sm text-gray-200 font-bold">
                                                    {event.date}
                                                </p>
                                                {event.link && (
                                                    <a href={event.link} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center justify-center px-4 py-1.5 md:px-5 md:py-2 bg-white/5 border border-white/20 hover:border-[#ff8a65] text-gray-300 hover:text-white rounded-lg transition-all duration-300 group shadow-[0_4px_10px_rgba(0,0,0,0.5)] hover:shadow-[0_0_15px_rgba(255,138,101,0.3)] text-xs md:text-sm font-semibold">
                                                        <svg className="w-4 h-4 mr-2 text-[#ff8a65] group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                                                        {event.linkText}
                                                    </a>
                                                )}

                                                {event.isFinal && <div className="absolute -top-[14px] -right-[14px] w-7 h-7 bg-[#ff5252] rounded-full opacity-90 shadow-[0_0_15px_rgba(255,82,82,0.8)] z-30"></div>}
                                            </div>
                                        </div>
                                    </div>

                                </motion.div>
                            );
                        })}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Timeline;
