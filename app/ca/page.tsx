"use client";

import { motion, Variants } from "framer-motion";
import { Terminal, LineChart, Database, Zap, Code2, ArrowRight } from "lucide-react";

export default function Portfolio() {
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
        <div className="min-h-screen bg-slate-950 text-slate-300 font-sans selection:bg-emerald-500/30">
            {/* Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[500px] bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none" />

            <main className="max-w-5xl mx-auto px-6 py-20 relative z-10">

                {/* Hero Section */}
                <motion.section
                    initial="hidden"
                    animate="visible"
                    variants={staggerContainer}
                    className="pt-20 pb-32"
                >
                    <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-6">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                        </span>
                        Available for B2B Freelance
                    </motion.div>

                    <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-6">
                        FinTech & Web3 <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                            Frontend Engineer.
                        </span>
                    </motion.h1>

                    <motion.p variants={fadeInUp} className="text-lg md:text-xl text-slate-400 max-w-2xl leading-relaxed mb-10">
                        I build high-performance trading UIs, dashboards, and Web3 tools.
                        As a profitable day trader, I understand order books, slippage, and drawdown natively.
                        <strong className="text-white font-medium"> You don't have to explain the markets to your developer anymore.</strong>
                    </motion.p>

                    <motion.div variants={fadeInUp} className="flex gap-4">
                        <a href="mailto:emailul-tau@aici.com" className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold px-6 py-3 rounded-lg flex items-center gap-2 transition-colors">
                            Let's Talk Business <ArrowRight size={18} />
                        </a>
                    </motion.div>
                </motion.section>

                {/* Tech Stack */}
                <motion.section
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={staggerContainer}
                    className="pb-32"
                >
                    <motion.h2 variants={fadeInUp} className="text-2xl font-bold text-white mb-8 flex items-center gap-2">
                        <Code2 className="text-emerald-400" /> The Tech Stack
                    </motion.h2>
                    <motion.div variants={fadeInUp} className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[
                            { name: "Next.js & React", icon: <Terminal size={20} /> },
                            { name: "TypeScript", icon: <Code2 size={20} /> },
                            { name: "Neon DB & Drizzle", icon: <Database size={20} /> },
                            { name: "Tailwind & Shadcn", icon: <Zap size={20} /> },
                        ].map((tech, idx) => (
                            <div key={idx} className="bg-slate-900/50 border border-slate-800 p-4 rounded-xl flex items-center gap-3 text-slate-300 hover:border-emerald-500/30 transition-colors">
                                <div className="text-emerald-400">{tech.icon}</div>
                                <span className="font-medium">{tech.name}</span>
                            </div>
                        ))}
                    </motion.div>
                </motion.section>

                {/* Star Project: Trading Journal */}
                <motion.section
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={staggerContainer}
                >
                    <motion.h2 variants={fadeInUp} className="text-2xl font-bold text-white mb-8 flex items-center gap-2">
                        <LineChart className="text-emerald-400" /> Featured Engineering
                    </motion.h2>

                    <motion.div variants={fadeInUp} className="group relative bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-emerald-500/50 transition-all duration-500">
                        <div className="md:flex">
                            {/* Image Placeholder (Pune imaginea ta in folderul public) */}
                            <div className="md:w-1/2 bg-slate-950 p-6 flex items-center justify-center border-b md:border-b-0 md:border-r border-slate-800 relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent z-0" />
                                {/* Înlocuiește div-ul de mai jos cu un <img src="/jurnal-screenshot.png" /> */}
                                <div className="w-full h-64 bg-slate-900 border border-slate-700 rounded-lg shadow-2xl flex items-center justify-center relative z-10 group-hover:scale-[1.02] transition-transform duration-500">
                                    <span className="text-slate-500 font-mono text-sm">[ Screenshot Jurnal Trading Aici ]</span>
                                </div>
                            </div>

                            <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                                <h3 className="text-2xl font-bold text-white mb-4">Algorithmic Trading Journal</h3>
                                <p className="text-slate-400 mb-6 leading-relaxed">
                                    A high-performance SaaS built from scratch to solve the discipline problem in day trading.
                                    It automatically parses raw trade data, calculates win-rate, profit factor, and visualizes equity curves without the bloat of expensive market alternatives.
                                </p>
                                <div className="flex flex-wrap gap-2 mb-8">
                                    {["Next.js", "Drizzle ORM", "PostgreSQL", "Tailwind"].map((tag, i) => (
                                        <span key={i} className="px-3 py-1 bg-slate-800 text-xs font-mono text-slate-300 rounded-full">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <div>
                                    <span className="text-emerald-400 font-medium text-sm border-b border-emerald-400/30 pb-1">
                                        Currently in private Beta
                                    </span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </motion.section>

            </main>
        </div>
    );
}