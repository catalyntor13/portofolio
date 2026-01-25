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
        description: "A modern and responsive landing page for an IT services company. Clean design, implemented with Next.js and Tailwind CSS.",
        image: "/idtoro.png",
        tags: ["Next.js", "Tailwind", "Neon", "Stripe"],
        demoUrl: "https://idtoro.vercel.app/",

    },
    {
        id: 2,
        title: "Active Boost",
        description: "Full Stack application with modern design including payments, database, email automation",
        image: "/activeboost.png",
        tags: ["Next.js", "Mollie", "Neon", "Tailwind"],
        demoUrl: "https://activeboost.ro",

    },
    {
        id: 3,
        title: "Gradinita Busy Bee",
        description: "Responsive and modern landing page with animations",
        image: "/gradinita.png",
        tags: ["Next.js", "Tailwind", "Motion"],
        demoUrl: "https://gradinitabusybee.ro/",

    },

    {
        id: 4,
        title: "Video Editor - Landing Page",
        description: "A new landing page",
        image: "/editor.png",
        tags: ["Next.js", "Tailwind", "Motion"],
        demoUrl: "https://ady-toro.vercel.app/",

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
                        <span>Proiecte</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-4xl font-bold text-white mb-4"
                    >
                        Selected Work <span className="text-slate-600">.</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-slate-400 text-base max-w-xl leading-relaxed"
                    >
                        A selection of applications that demonstrate my ability to deliver complete software solutions.
                    </motion.p>
                </div>

                {/* Projects Grid - 3 Columns & Compact Cards */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group h-full"
                        >
                            <Link href={project.demoUrl} target="_blank" className="block h-full">
                                <div className={cn(
                                    "relative h-full flex flex-col rounded-xl overflow-hidden bg-slate-900/40 border border-slate-800 transition-all duration-500",
                                    "hover:border-slate-600 hover:bg-slate-900/60 hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-500/10"
                                )}>
                                    {/* Image Area */}
                                    <div className="relative h-48 overflow-hidden">
                                        <div className="absolute inset-0 bg-slate-950/20 z-10 group-hover:bg-transparent transition-colors duration-500" />
                                        <Image
                                            src={project.image || "/placeholder.png"}
                                            alt={project.title}
                                            fill
                                            className="object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                                        />
                                        {/* Overlay Arrow */}
                                        <div className="absolute top-3 right-3 z-20 w-8 h-8 rounded-full bg-slate-950/80 backdrop-blur text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 border border-slate-800">
                                            <ArrowUpRight className="w-4 h-4" />
                                        </div>
                                    </div>

                                    <div className="p-5 flex flex-col flex-grow">
                                        <h3 className="text-xl font-bold text-slate-100 mb-2 group-hover:text-blue-400 transition-colors line-clamp-1">
                                            {project.title}
                                        </h3>
                                        <p className="text-slate-400 text-sm mb-4 leading-relaxed line-clamp-2 flex-grow">
                                            {project.description}
                                        </p>

                                        <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-slate-800/50">
                                            {project.tags.slice(0, 3).map((tag) => (
                                                <span
                                                    key={tag}
                                                    className="px-2 py-1 text-[10px] uppercase tracking-wider font-semibold text-slate-400 bg-slate-950 rounded-md border border-slate-800 group-hover:border-slate-700 transition-colors"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                            {project.tags.length > 3 && (
                                                <span className="px-2 py-1 text-[10px] text-slate-500">+</span>
                                            )}
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