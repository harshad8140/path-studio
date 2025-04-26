'use client';
import { motion } from 'framer-motion';

export default function Hero() {
    return (
        <section className="relative h-screen flex items-center justify-center bg-black text-white overflow-hidden">
            <video
                autoPlay
                loop
                muted
                className="absolute w-full h-full object-cover"
                src="/pathstudio_hero.mp4"
            />
            <div className="relative z-10 text-center">
                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="text-5xl md:text-7xl font-bold"
                >
                    Capturing Memories with Path Studio
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="mt-6 text-xl"
                >
                    Wedding | Birthday | Events
                </motion.p>
            </div>
        </section>
    );
}
