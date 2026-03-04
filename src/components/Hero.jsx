import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Grid, Float, Stars, Text } from '@react-three/drei';
import { motion } from 'framer-motion';
import CountdownTimer from './CountdownTimer';

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

const Scene = () => {
    return (
        <>
            <fog attach="fog" args={['#030014', 10, 40]} />
            <ambientLight intensity={0.5} />

            {/* Grid Floor */}
            <Grid
                position={[0, -8, 0]}
                args={[50, 50]}
                cellSize={1}
                cellThickness={1}
                cellColor="#ff3b3b"
                sectionSize={5}
                sectionThickness={1.5}
                sectionColor="#ff7b00"
                fadeDistance={40}
                fadeStrength={1.5}
            />

            {/* Glowing Rings Hierarchy */}
            <GlowingRing radius={6} thickness={0.05} speed={0.5} color="#ff3b3b" opacity={0.3} />
            <GlowingRing radius={8} thickness={0.02} speed={0.8} color="#ff7b00" opacity={0.2} />
            <GlowingRing radius={12} thickness={0.08} speed={-0.3} color="#ff3b3b" opacity={0.1} />

            <FloatingSymbols />
            <Stars radius={50} depth={50} count={3000} factor={4} saturation={1} fade speed={1} />

            <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} autoRotate autoRotateSpeed={0.5} />
        </>
    );
};

const Hero = () => {
    return (
        <section id="home" aria-labelledby="hero-title" className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-background">
            {/* 3D Background */}
            <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
                <Suspense fallback={<div className="w-full h-full bg-background flex items-center justify-center text-primary">Loading Arena...</div>}>
                    <Canvas camera={{ position: [0, 2, 12], fov: 60 }} alpha={true}>
                        <Scene />
                    </Canvas>
                </Suspense>
            </div>

            {/* Foreground Content */}
            <div className="relative z-10 text-center px-4 max-w-5xl mx-auto flex flex-col items-center select-none pointer-events-none">

                {/* Logo */}
                <motion.img
                    src="/LOGO.png"
                    alt="HackArena 2K26 Logo"
                    className="w-64 h-64 sm:w-80 sm:h-80 md:w-[28rem] md:h-[28rem] object-contain mx-auto -mb-8 md:-mb-14"
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
                    className="mb-1"
                >
                    <time
                        dateTime="2026-03-24"
                        className="inline-block px-4 py-1.5 rounded-full border border-primary/50 bg-primary/10 backdrop-blur-sm text-primary font-medium tracking-widest text-sm uppercase mb-2 shadow-[0_0_15px_rgba(255,59,59,0.2)]"
                    >
                        March 24, 2026
                    </time>
                </motion.div>

                <motion.h1
                    id="hero-title"
                    className="text-4xl sm:text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-primary to-secondary mb-3 md:mb-4 drop-shadow-[0_0_25px_rgba(255,59,59,0.8)]"
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
                    className="text-base sm:text-lg md:text-2xl font-light text-gray-300 tracking-wide mb-6 md:mb-8 text-glow max-w-2xl mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    Code. Compete. Conquer. — The Ultimate Full-Stack Showdown
                </motion.p>
                <motion.p
                    className="text-sm sm:text-base md:text-lg text-gray-500 tracking-widest uppercase font-semibold mb-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                >
                    Organized by <span className="text-gray-300">CSE Dept, JCET</span>
                </motion.p>

                {/* Countdown Timer */}
                <CountdownTimer />

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="pointer-events-auto"
                >
                    <a
                        href="https://unstop.com/o/dR1h2SJ?utm_medium=Share&utm_source=online_coding_challenge&utm_campaign=Logged_out_user"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Register for HackArena 2026 on Unstop"
                        className="group relative inline-flex items-center justify-center px-6 py-3 md:px-8 md:py-4 text-base md:text-lg font-bold text-white transition-all duration-200 bg-primary font-pj rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary shadow-[0_0_20px_rgba(255,59,59,0.5)] hover:shadow-[0_0_40px_rgba(255,59,59,0.8)] hover:scale-105"
                    >
                        Register on Unstop
                        <div className="absolute inset-0 bg-white/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </a>
                </motion.div>

            </div>

            {/* Scroll Indicator */}
            <motion.div
                aria-hidden="true"
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 pointer-events-none"
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
