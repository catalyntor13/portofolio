"use client";

import { motion, Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import scrollToId from "@/lib/scrollToId";

export default function HeroSection() {
    const fadeInUp: Variants = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 },
        },
    };

    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-36 pb-32 md:pt-48 md:pb-40">
            {/* Background Glows are handled in app/page.tsx, but we can keep subtle ones here if needed */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
                <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-emerald-500/10 opacity-40 blur-[130px] rounded-full" />
            </div>

            <div className="container relative z-10 px-6 max-w-6xl mx-auto">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={staggerContainer}
                    className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
                >
                    {/* Left Column: Text */}
                    <div className="flex flex-col items-center lg:items-start text-center lg:text-left">


                        <motion.h1 variants={fadeInUp} className="text-3xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight mb-8">
                            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Catalin</span>

                        </motion.h1>

                        <motion.p variants={fadeInUp} className="text-base md:text-lg lg:text-xl text-slate-400 max-w-2xl leading-relaxed mb-12 px-4 lg:px-0">
                            I am web developer and an active trader. I build fast and scalable applications, focusing on simplicity and performance.
                        </motion.p>

                        <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto px-4 lg:px-0">
                            <button onClick={() => scrollToId("contact", 80, 1200)} className="bg-emerald-500 hover:bg-emerald-400 cursor-pointer text-slate-950 font-bold px-8 py-4 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 hover:scale-[1.02] active:scale-95 shadow-lg shadow-emerald-500/25">
                                Let's Talk <ArrowRight size={20} />
                            </button>
                        </motion.div>
                    </div>

                    {/* Right Column: Image */}
                    <motion.div variants={fadeInUp} className="mx-auto lg:ml-auto relative group w-full max-w-[280px] sm:max-w-[320px] md:max-w-[320px] lg:max-w-none mb-8 lg:mb-0">
                        {/* Glow Behind Image */}
                        <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-tr from-emerald-500/40 to-cyan-500/40 blur-3xl opacity-50 group-hover:opacity-80 transition-opacity duration-700 -z-10" />

                        <div className="relative aspect-square w-full rounded-[2.5rem] overflow-hidden border-2 border-slate-700/50 shadow-2xl bg-slate-900 group-hover:border-emerald-500/50 transition-colors duration-500">
                            <Image
                                src="/profile.jpg"
                                fill
                                alt="Profile Avatar"
                                className="object-cover object-top scale-100 group-hover:scale-105 transition-transform duration-700 ease-out"
                                priority
                            />
                            {/* Overlay Gradient for integration */}
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent pointer-events-none" />
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}