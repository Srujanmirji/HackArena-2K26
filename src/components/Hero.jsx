import React, { Suspense, useRef, useState, useEffect, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Grid, Float, Stars, Text } from '@react-three/drei';
import { motion } from 'framer-motion';
import { Trophy } from 'lucide-react';


const useIsMobile = () => {
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        const check = () => setIsMobile(window.innerWidth < 768);
        check();
        window.addEventListener('resize', check);
        return () => window.removeEventListener('resize', check);
    }, []);
    return isMobile;
};

// Animated Glowing Ring
const GlowingRing = ({ radius = 10, thickness = 0.5, speed = 1, color = "#ff3b3b", opacity = 1 }) => {
    const meshRef = useRef();

    useFrame((state) => {
        meshRef.current.rotation.x = state.clock.elapsedTime * speed * 0.2;
        meshRef.current.rotation.y = state.clock.elapsedTime * speed * 0.3;
    });

    return (
        <Float floatIntensity={2} speed={2}>
            <mesh ref={meshRef}>
                <torusGeometry args={[radius, thickness, 16, 100]} />
                <meshBasicMaterial color={color} transparent opacity={opacity} wireframe />
            </mesh>
        </Float>
    );
};

// Floating digital artifacts
const FloatingSymbols = () => {
    return (
        <group>
            <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
                <Text position={[-6, 4, -5]} fontSize={1} color="#ff7b00" opacity={0.5}>{'</>'}</Text>
            </Float>
            <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
                <Text position={[8, -3, -2]} fontSize={1.5} color="#ff3b3b" opacity={0.3}>{'{ }'}</Text>
            </Float>
            <Float speed={1} rotationIntensity={0.5} floatIntensity={3}>
                <Text position={[4, 5, -8]} fontSize={1.2} color="#ffffff" opacity={0.2}>{'0101'}</Text>
            </Float>
            <Float speed={2.5} rotationIntensity={2} floatIntensity={1}>
                <Text position={[-8, -4, -3]} fontSize={1} color="#ff7b00" opacity={0.4}>{'() =>'}</Text>
            </Float>
        </group>
    );
};

const Scene = ({ isTouch, isMobile }) => {
    const starCount = isMobile ? 1000 : 3000;
    const gridSize = isMobile ? 30 : 50;
    return (
        <>
            <fog attach="fog" args={['#030014', 10, isMobile ? 30 : 40]} />
            <ambientLight intensity={0.5} />

            {/* Grid Floor */}
            <Grid
                position={[0, -8, 0]}
                args={[gridSize, gridSize]}
                cellSize={1}
                cellThickness={1}
                cellColor="#ff3b3b"
                sectionSize={5}
                sectionThickness={1.5}
                sectionColor="#ff7b00"
                fadeDistance={isMobile ? 25 : 40}
                fadeStrength={1.5}
            />

            {/* Glowing Rings Hierarchy */}
            <GlowingRing radius={6} thickness={0.05} speed={0.5} color="#ff3b3b" opacity={0.3} />
            <GlowingRing radius={8} thickness={0.02} speed={0.8} color="#ff7b00" opacity={0.2} />
            {!isMobile && <GlowingRing radius={12} thickness={0.08} speed={-0.3} color="#ff3b3b" opacity={0.1} />}

            {!isMobile && <FloatingSymbols />}
            <Stars radius={50} depth={50} count={starCount} factor={4} saturation={1} fade speed={1} />

            <OrbitControls enableZoom={false} enablePan={false} enableRotate={!isTouch} autoRotate autoRotateSpeed={0.5} />
        </>
    );
};

const Hero = () => {
    const [isTouch, setIsTouch] = useState(false);
    const isMobile = useIsMobile();

    useEffect(() => {
        const checkTouch = () => {
            setIsTouch(('ontouchstart' in window) || (navigator.maxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0));
        };
        checkTouch();
    }, []);

    return (
        <section id="home" aria-labelledby="hero-title" className="relative w-full min-h-[100dvh] flex items-center justify-center bg-background pb-20 pt-24 md:py-0 overflow-hidden">
            {/* 3D Background */}
            <div className="absolute inset-0 z-0" style={{ pointerEvents: isTouch ? 'none' : 'auto' }} aria-hidden="true">
                <Suspense fallback={<div className="w-full h-full bg-background flex items-center justify-center text-primary">Loading Arena...</div>}>
                    <Canvas
                        camera={{ position: [0, 2, isMobile ? 14 : 12], fov: isMobile ? 55 : 60 }}
                        alpha={true}
                        dpr={isMobile ? 1 : Math.min(window.devicePixelRatio, 2)}
                        style={{ touchAction: 'auto', pointerEvents: isTouch ? 'none' : 'auto' }}
                    >
                        <Scene isTouch={isTouch} isMobile={isMobile} />
                    </Canvas>
                </Suspense>
            </div>

            {/* Foreground Content */}
            <div className="relative z-10 text-center px-4 max-w-5xl mx-auto flex flex-col items-center pointer-events-none">

                {/* Logo */}
                <motion.img
                    src="/LOGO.png"
                    alt="HackArena 2K26 Logo"
                    className="w-32 h-32 xs:w-40 xs:h-40 sm:w-64 sm:h-64 md:w-[28rem] md:h-[28rem] object-contain mx-auto -mb-2 sm:-mb-4 md:-mb-14"
                    initial={{ opacity: 0, scale: 0.3, rotate: -15 }}
                    animate={{
                        opacity: 1,
                        scale: 1,
                        rotate: 0,
                        y: [0, -10, 0],
                        filter: [
                            'drop-shadow(0 0 20px rgba(255,59,59,0.4))',
                            'drop-shadow(0 0 40px rgba(255,59,59,0.8))',
                            'drop-shadow(0 0 20px rgba(255,59,59,0.4))',
                        ],
                    }}
                    transition={{
                        opacity: { duration: 0.8 },
                        scale: { duration: 1, ease: "easeOut" },
                        rotate: { duration: 1, ease: "easeOut" },
                        y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                        filter: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                    }}
                />

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="mb-1 mt-2 md:mt-0"
                >
                    <time
                        dateTime="2026-03-24"
                        className="inline-block px-3 py-1 md:px-4 md:py-1.5 rounded-full border border-primary/50 bg-primary/10 backdrop-blur-sm text-primary font-medium tracking-widest text-xs md:text-sm uppercase mb-1 md:mb-2 shadow-[0_0_15px_rgba(255,59,59,0.2)]"
                    >
                        March 24, 2026
                    </time>
                </motion.div>

                <motion.h1
                    id="hero-title"
                    className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-primary to-secondary mb-2 md:mb-4 drop-shadow-[0_0_25px_rgba(255,59,59,0.8)] leading-tight"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    HACKARENA 2K26
                </motion.h1>

                <p className="sr-only">
                    HackArena 2026 is a 7-hour inter-college full stack hackathon hosted at Jain College of Engineering & Technology, Hubballi.
                </p>

                <motion.p
                    className="text-sm sm:text-base md:text-xl lg:text-2xl font-light text-gray-300 tracking-wide mb-4 sm:mb-6 md:mb-8 text-glow max-w-2xl mx-auto px-2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    Code. Compete. Conquer. — The Ultimate Full-Stack Showdown
                </motion.p>
                <motion.p
                    className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-500 tracking-widest uppercase font-semibold mb-4 sm:mb-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                >
                    Organized by <span className="text-gray-300">Dept. of CSE, JCET</span>
                </motion.p>

                {/* Powered by Unstop */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.55 }}
                    className="flex justify-center mb-4 sm:mb-6 pointer-events-auto"
                >
                    <a
                        href="https://unstop.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.05] border border-white/10 hover:border-[#1B3A6B]/50 backdrop-blur-sm transition-all duration-300 hover:bg-white/[0.08]"
                    >
                        <span className="text-gray-400 text-xs sm:text-sm font-medium">Powered by</span>
                        <img
                            src="/Unstop-Logo.png"
                            alt="Unstop"
                            className="h-4 sm:h-5 object-contain brightness-0 invert opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
                        />
                    </a>
                </motion.div>


                {/* Results Banner */}
                <motion.div
                    initial={{ opacity: 0, y: 20, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.6, type: "spring", bounce: 0.5 }}
                    className="mt-2 sm:mt-4 pointer-events-auto"
                >
                    <a
                        href="/results"
                        className="relative inline-flex items-center justify-center px-8 py-4 sm:px-10 sm:py-5 text-lg sm:text-2xl font-black text-white bg-primary rounded-2xl transition-all duration-300 shadow-[0_0_40px_rgba(255,59,59,0.5)] hover:shadow-[0_0_60px_rgba(255,123,0,0.6)] group overflow-hidden border border-primary/50 hover:border-secondary hover:scale-105 active:scale-95"
                    >
                        {/* Glow Sweep */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
                        
                        <span className="relative z-10 flex items-center gap-3 tracking-widest uppercase">
                            <Trophy size={28} className="text-secondary animate-bounce delay-100" />
                            Round 1 Results Out Now
                        </span>
                    </a>
                </motion.div>

                {/* Registration Closed label */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                    className="mt-8 pointer-events-none opacity-40 hover:opacity-100 transition-opacity"
                >
                    <div className="relative inline-flex items-center justify-center px-4 py-2 md:px-6 md:py-2 text-sm md:text-base font-bold text-white/50 bg-white/5 border border-white/10 rounded-lg backdrop-blur-sm">
                        Registration Closed
                    </div>
                </motion.div>

            </div>

            {/* Scroll Indicator */}
            <motion.div
                aria-hidden="true"
                className="absolute bottom-4 sm:bottom-10 left-1/2 transform -translate-x-1/2 z-20 pointer-events-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center pt-2"
                >
                    <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                </motion.div>
            </motion.div>

            {/* Vignette effect */}
            <div className="absolute inset-0 z-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,#030014_100%)] opacity-80" />
        </section>
    );
};

export default Hero;
