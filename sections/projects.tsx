"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Rocket,  Github, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// Exemplu de structura (inlocuieste cu props sau datele tale)
const projects = [
    {
        id: 1,
        title: "IDToro",
        description: "Un landing page modern și responsive pentru o companie de servicii IT. Design curat, implementat cu Next.js și Tailwind CSS.",
        image: "/idtoro.png", // Pune path-ul tau
        tags: ["Next.js", "Tailwind", "Supabase", "Stripe"],
        demoUrl: "https://idtoro.vercel.app/",
       
    },
     {
        id: 2,
        title: "Active Boost",
        description: "Aplicatie Full Stack cu un design modern ce include plati, baza de date, automatizare email",
        image: "/activeboost.png", 
        tags: ["Next.js", "Mollie", "Supabase", "Tailwind"],
        demoUrl: "https://activeboost.ro",
       
    },
    {
        id: 3,
        title: "Gradinita Busy Bee",
        description: "Landing page reponsive si modern cu animatii",
        image: "/gradinita.png", 
        tags: ["Next.js", "Tailwind", "Motion"],
        demoUrl: "https://gradinitabusybee.ro/",
       
    },

    {
        id: 4,
        title: "Video Editor - Landing Page",
        description: "Un nou landing page ",
        image: "/editor.png", 
        tags: ["Next.js", "Tailwind", "Motion"],
        demoUrl: "https://ady-toro.vercel.app/",
       
    }
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-32 relative overflow-hidden bg-slate-950">
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Section Header - Clean & Modern */}
        <div className="flex flex-col items-center text-center mb-20">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6"
            >
                <Rocket className="w-4 h-4" />
                <span>Portofoliu</span>
            </motion.div>
            
            <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-5xl font-bold text-white mb-6"
            >
                Proiecte Recente <span className="text-slate-600">.</span>
            </motion.h2>
            
            <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-slate-400 text-lg max-w-2xl leading-relaxed"
            >
                O selecție de aplicații care demonstrează capacitatea mea de a livra soluții software complete, de la design la implementare.
            </motion.p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <Card className="bg-slate-900/40 border-slate-800 overflow-hidden h-full hover:border-slate-600 transition-colors duration-500 flex flex-col">
                
                {/* Image Container with Zoom Effect */}
                <div className="relative aspect-video overflow-hidden">
                    <Link href={project.demoUrl} target="_blank">
                    <div className="absolute inset-0 bg-slate-900/20 z-10 group-hover:bg-transparent transition-colors duration-500" />
                    <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        width={800}
                        height={450}
                        className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                     </Link>
                  
                </div>

                <CardContent className="p-8 flex flex-col flex-grow relative">
                    {/* Ambient Glow in Card */}
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-blue-500/10 blur-[50px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                    <div className="flex justify-between items-start mb-4">
                        <h3 className="text-2xl font-bold text-slate-100 group-hover:text-blue-400 transition-colors">
                            {project.title}
                        </h3>
                       
                    </div>

                    <p className="text-slate-400 mb-6 leading-relaxed flex-grow">
                        {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mt-auto">
                        {project.tags.map((tag) => (
                            <span 
                                key={tag} 
                                className="px-3 py-1 text-xs font-medium text-slate-300 bg-slate-800/50 border border-slate-700 rounded-full group-hover:border-slate-600 transition-colors"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}