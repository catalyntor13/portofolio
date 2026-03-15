"use client";

import { motion, Variants } from "framer-motion";
import { Code2 } from "lucide-react";
import Image from "next/image";

export default function TechStackSection() {
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
        <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="py-12 md:py-24 relative z-10"
        >
            <div className="container mx-auto px-6 max-w-6xl">
                <motion.h2 variants={fadeInUp} className="text-2xl md:text-3xl font-bold text-white mb-8 flex items-center justify-center md:justify-start gap-2">
                    <Code2 className="text-emerald-400" /> The Tech Stack
                </motion.h2>
                <motion.div variants={fadeInUp} className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                    {/* Next.js & React */}
                    <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 p-6 rounded-2xl flex flex-col items-center justify-center gap-4 text-slate-300 hover:border-emerald-500/50 hover:bg-slate-800/80 transition-all duration-300 group shadow-lg shadow-black/20">
                        <div className="bg-emerald-500/10 p-4 rounded-full group-hover:scale-110 group-hover:bg-emerald-500/20 transition-all duration-300 flex items-center justify-center w-16 h-16">
                            <Image src="/nextjs-icon-light-background.svg" width={32} height={32} alt="Next.js" className="opacity-90 group-hover:opacity-100 transition-opacity" />
                        </div>
                        <span className="font-semibold text-center group-hover:text-white transition-colors text-sm md:text-base">Next.js & React</span>
                    </div>

                    {/* TypeScript */}
                    <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 p-6 rounded-2xl flex flex-col items-center justify-center gap-4 text-slate-300 hover:border-emerald-500/50 hover:bg-slate-800/80 transition-all duration-300 group shadow-lg shadow-black/20">
                        <div className="text-emerald-400 bg-emerald-500/10 p-4 rounded-full group-hover:scale-110 group-hover:bg-emerald-500/20 transition-all duration-300 flex items-center justify-center w-16 h-16">
                            <Image src="/typescript.png" width={32} height={32} alt="TypeScript" className="opacity-90 group-hover:opacity-100 transition-opacity" />
                        </div>
                        <span className="font-semibold text-center group-hover:text-white transition-colors text-sm md:text-base">TypeScript</span>
                    </div>

                    {/* Neon Postgres */}
                    <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 p-6 rounded-2xl flex flex-col items-center justify-center gap-4 text-slate-300 hover:border-emerald-500/50 hover:bg-slate-800/80 transition-all duration-300 group shadow-lg shadow-black/20">
                        <div className="bg-emerald-500/10 p-4 rounded-full group-hover:scale-110 group-hover:bg-emerald-500/20 transition-all duration-300 flex items-center justify-center w-16 h-16">
                            <Image src="/neon.png" width={32} height={32} alt="Neon Postgres" className="opacity-90 group-hover:opacity-100 transition-opacity" />
                        </div>
                        <span className="font-semibold text-center group-hover:text-white transition-colors text-sm md:text-base">Neon Postgres</span>
                    </div>

                    {/* Antigravity */}
                    <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 p-6 rounded-2xl flex flex-col items-center justify-center gap-4 text-slate-300 hover:border-emerald-500/50 hover:bg-slate-800/80 transition-all duration-300 group shadow-lg shadow-black/20">
                        <div className="text-emerald-400 bg-emerald-500/10 p-4 rounded-full group-hover:scale-110 group-hover:bg-emerald-500/20 transition-all duration-300 flex items-center justify-center w-16 h-16">
                            <Image src="/antigravity.png" width={32} height={32} alt="Antigravity" className="opacity-90 group-hover:opacity-100 transition-opacity" />
                        </div>
                        <span className="font-semibold text-center group-hover:text-white transition-colors text-sm md:text-base">Antigravity</span>
                    </div>
                </motion.div>
            </div>
        </motion.section>
    );
}
