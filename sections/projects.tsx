"use client";

import { motion } from "framer-motion";
import { Rocket, Github, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

const projects = [
    {
        id: 1,
        title: "IDToro",
        image: "/idtoro.png",
        tags: ["Next.js", "Tailwind", "Motion"],
        demoUrl: "https://idtoro.vercel.app/",

    },
    {
        id: 2,
        title: "Active Boost",
        image: "/activeboost.png",
        tags: ["Next.js", "Mollie", "Neon", "Tailwind"],
        demoUrl: "https://activeboost.ro",

    },
    {
        id: 3,
        title: "Gradinita Busy Bee",
        image: "/gradinita.png",
        tags: ["Next.js", "Tailwind", "Motion", "Mollie"],
        demoUrl: "https://gradinitabusybee.ro/",

    },

    {
        id: 4,
        title: "MARS Journal Trading",
        image: "/mars.png",
        tags: ["Next.js", "Tailwind", "Motion", "Neon"],
        demoUrl: "https://marsjournaltrading.com/",

    }
];

export default function ProjectsSection() {
    return (
        <section id="projects" className="py-24 relative overflow-hidden bg-slate-950">
            <div className="container mx-auto px-6 relative z-10">

                {/* Section Header - Compact */}
                <div className="flex flex-col items-center text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-4"
                    >
                        <Rocket className="w-4 h-4" />
                        <span>Portofoliu</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-4xl font-bold text-white mb-4"
                    >
                        Proiecte Recente
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-slate-400 text-base max-w-xl leading-relaxed"
                    >
                        O selecție de aplicații care demonstrează capacitatea mea de a livra soluții software complete.
                    </motion.p>
                </div>

                {/* Projects Grid - 3 Columns & Visual Cards */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group"
                        >
                            <Link href={project.demoUrl} target="_blank" className="block">
                                <div className={cn(
                                    "relative overflow-hidden rounded-2xl bg-slate-900 border border-slate-800 transition-all duration-500 group-hover:border-slate-600 group-hover:shadow-2xl group-hover:shadow-blue-500/10"
                                )}>
                                    {/* Image Area - Aspect Video */}
                                    <div className="relative aspect-video overflow-hidden">
                                        <div className="absolute inset-0 bg-slate-950/10 z-10 group-hover:bg-transparent transition-colors duration-500" />
                                        <Image
                                            src={project.image || "/placeholder.png"}
                                            alt={project.title}
                                            fill
                                            className="object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                                        />
                                        {/* Overlay Title for clean look */}
                                        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent z-20 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                                            <div className="flex items-center justify-between">
                                                <span className="text-white font-semibold text-sm">{project.title}</span>
                                                <ArrowUpRight className="w-4 h-4 text-blue-400" />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Bottom Info - minimal */}
                                    <div className="p-4 bg-slate-950/50 backdrop-blur-sm border-t border-slate-800">
                                        <div className="flex items-center justify-between mb-3">
                                            <h3 className="text-lg font-bold text-slate-100 group-hover:text-blue-400 transition-colors">
                                                {project.title}
                                            </h3>
                                        </div>
                                        <div className="flex flex-wrap gap-2">
                                            {project.tags.map((tag) => (
                                                <span
                                                    key={tag}
                                                    className="px-2 py-1 text-[10px] uppercase tracking-wider font-semibold text-slate-400 bg-slate-900/50 rounded-md border border-slate-800 group-hover:border-slate-700 transition-colors"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}