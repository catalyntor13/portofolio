"use client";

import { motion, Variants } from "framer-motion";
import { LineChart, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const projects = [
    {
        id: 4,
        title: "MARS Trading Journal",
        description: "A high-performance trading dashboard built from scratch to solve the discipline problem in day trading. Features detailed analytics and visualizes equity curves without the bloat.",
        image: "/mars.png",
        tags: ["Next.js", "Tailwind", "Motion", "Neon"],
        demoUrl: "https://trading-mars.vercel.app/",
        status: "Featured"
    },
    {
        id: 1,
        title: "IDToro",
        description: "Modern landing page and interactive platform with a premium feel, showcasing smooth animations and user-focused design.",
        image: "/idtoro.png",
        tags: ["Next.js", "Tailwind", "Motion"],
        demoUrl: "https://idtoro.vercel.app/",
        status: "Production"
    },
    {
        id: 2,
        title: "Active Boost",
        description: "Beautiful landing page with checkout integration. Features dynamic routing and seamless payments via Mollie.",
        image: "/activeboost.png",
        tags: ["Next.js", "Mollie", "Tailwind"],
        demoUrl: "https://activeboost.ro",
        status: "Production"
    },
    {
        id: 3,
        title: "Gradinita Busy Bee",
        description: "A welcoming, responsive website for a kindergarten with contact form and SEO optimized.",
        image: "/gradinita.png",
        tags: ["Next.js", "Tailwind", "Motion"],
        demoUrl: "https://gradinitabusybee.ro/",
        status: "Production"
    }
];

export default function ProjectsSection() {
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
            id="projects"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="py-20 relative z-10"
        >
            <div className="container mx-auto px-6 max-w-5xl">
                <motion.h2 variants={fadeInUp} className="text-2xl md:text-3xl font-bold text-white mb-10 flex items-center gap-2">
                    <LineChart className="text-emerald-400" /> Featured Engineering
                </motion.h2>

                <div className="space-y-12">
                    {projects.map((project, index) => (
                        <motion.div key={project.id} variants={fadeInUp} className="group relative bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-emerald-500/50 transition-all duration-500 shadow-xl">
                            <Link href={project.demoUrl} target="_blank" className="block md:flex">

                                <div className="md:w-1/2 bg-slate-950 p-6 flex items-center justify-center border-b md:border-b-0 md:border-r border-slate-800 relative overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent z-0 group-hover:from-emerald-500/10 transition-colors duration-500" />

                                    <div className="w-full aspect-video bg-slate-900 border border-slate-700 rounded-lg shadow-2xl flex items-center justify-center relative z-10 overflow-hidden">
                                        <Image
                                            src={project.image || "/placeholder.png"}
                                            alt={project.title}
                                            fill
                                            className="object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                                        />
                                        <div className="absolute inset-0 bg-emerald-500/0 group-hover:bg-emerald-500/10 transition-colors duration-500 mix-blend-overlay" />
                                    </div>
                                </div>

                                <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                                    <div className="flex items-center justify-between mb-4">
                                        <h3 className="text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors">{project.title}</h3>
                                        <ArrowUpRight className="w-5 h-5 text-slate-500 group-hover:text-emerald-400 transition-colors opacity-0 group-hover:opacity-100 -translate-y-2 group-hover:translate-y-0 duration-300" />
                                    </div>

                                    <p className="text-slate-400 mb-6 leading-relaxed">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                                        {project.tags.map((tag, i) => (
                                            <span key={i} className="px-3 py-1 bg-slate-800 border border-slate-700 text-xs font-mono text-emerald-100/70 rounded-full group-hover:border-emerald-500/30 transition-colors">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <div>
                                        <span className="text-emerald-500 font-medium text-sm border-b border-emerald-500/30 pb-1">
                                            {project.status}
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
}