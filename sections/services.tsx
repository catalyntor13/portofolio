"use client";

import { motion } from "framer-motion";
import { Rocket, Box, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
    {
        icon: Rocket,
        title: "Landing Page + SEO",
        description: "Landing page-uri performante, create pentru conversie. Optimizate pentru viteză și motoare de căutare pentru a-ți crește afacerea.",
        gradient: "from-blue-500 via-cyan-400 to-blue-600",
        color: "group-hover:shadow-[0_0_30px_-5px_rgba(59,130,246,0.4)]",
    },
    {
        icon: Box,
        title: "Aplicații Personalizate",
        description: "Aplicații web personalizate construite conform cerințelor tale specifice. Arhitectură scalabilă și funcționalități moderne.",
        gradient: "from-purple-500 via-pink-500 to-rose-500",
        color: "group-hover:shadow-[0_0_30px_-5px_rgba(236,72,153,0.4)]",
    },
];

export default function ServicesSection() {
    return (
        <section id="services" className="relative py-24 overflow-hidden bg-slate-950">
            {/* Background Ambient Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">

                {/* Header Section */}
                <div className="text-center max-w-2xl mx-auto mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/50 border border-slate-800 backdrop-blur-md mb-6"
                    >
                        <Sparkles className="w-4 h-4 text-purple-400" />
                        <span className="text-sm font-medium text-slate-300">Servicii</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold mb-6 text-white tracking-tight"
                    >
                        <span>Ce </span>
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 animate-gradient bg-300%">
                            Ofer
                        </span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="text-slate-400 text-lg leading-relaxed"
                    >
                        Servicii de calitate adaptate nevoilor tale, axate pe performanță și experiența utilizatorului.
                    </motion.p>
                </div>

                {/* Services Grid */}
                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group relative h-full"
                        >
                            {/* Card Container */}
                            <div className={cn(
                                "relative h-full p-8 rounded-2xl border border-slate-800 bg-slate-900/40 backdrop-blur-xl transition-all duration-500",
                                "hover:border-slate-700 hover:-translate-y-2",
                                service.color
                            )}>

                                {/* Hover Gradient Border Effect */}
                                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                                <div className="flex flex-col items-center text-center gap-6">
                                    {/* Icon Box */}
                                    <div className="relative shrink-0">
                                        <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${service.gradient} p-[1px] shadow-lg`}>
                                            <div className="w-full h-full bg-slate-950 rounded-[15px] flex items-center justify-center overflow-hidden relative">
                                                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-20 group-hover:opacity-30 transition-opacity`} />
                                                <service.icon className="w-10 h-10 text-white relative z-10 group-hover:scale-110 transition-transform duration-300" />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Text Content */}
                                    <div>
                                        <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-200 transition-colors">
                                            {service.title}
                                        </h3>
                                        <p className="text-slate-400 text-base leading-relaxed group-hover:text-slate-300 transition-colors">
                                            {service.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
