"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Code2, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils"; // Asigură-te că ai un utilitar cn sau folosește clsx/tailwind-merge direct

// Importurile tale de imagini
import Nextjs from '@/public/nextjs-icon-light-background.svg';
import TailwindIcon from '@/public/tailwindcss.svg';
import Motion from '@/public/motion.png';
import Supabase from '@/public/supabase-logo-icon.png';

const skills = [
  {
    icon: Nextjs,
    title: "Next.js 16",
    description: "Arhitectură server-side modernă, optimizată pentru SEO și performanță extremă.",
    color: "group-hover:shadow-[0_0_30px_-5px_rgba(59,130,246,0.4)]", // Blue glow
    gradient: "from-blue-500 via-cyan-400 to-blue-600",
  },
  {
    icon: TailwindIcon,
    title: "Tailwind CSS",
    description: "Design system rapid pentru interfețe responsive, accesibile și pixel-perfect.",
    color: "group-hover:shadow-[0_0_30px_-5px_rgba(6,182,212,0.4)]", // Cyan glow
    gradient: "from-cyan-500 via-sky-400 to-cyan-600",
  },
  {
    icon: Motion,
    title: "Framer Motion",
    description: "Interacțiuni fluide și animații complexe care dau viață interfeței utilizator.",
    color: "group-hover:shadow-[0_0_30px_-5px_rgba(236,72,153,0.4)]", // Pink glow
    gradient: "from-purple-500 via-pink-500 to-rose-500",
  },
  {
    icon: Supabase,
    title: "Supabase",
    description: "Backend scalabil, baze de date realtime și autentificare securizată.",
    color: "group-hover:shadow-[0_0_30px_-5px_rgba(16,185,129,0.4)]", // Green glow
    gradient: "from-emerald-500 via-green-500 to-teal-500",
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="relative py-24 overflow-hidden bg-slate-950">
      {/* Background Ambient Glow - Efect subtil de fundal */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-500/10 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[300px] bg-purple-500/5 blur-[100px] rounded-full pointer-events-none" />

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
            <Code2 className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-medium text-slate-300">Tech Stack & Tools</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-6 text-white tracking-tight"
          >
            Expertiză Tehnică <br/>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 animate-gradient bg-300%">
              Premium & Scalabilă
            </span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-slate-400 text-lg leading-relaxed"
          >
            Setul de tehnologii pe care îl folosesc pentru a transforma ideile în 
            aplicații web performante, sigure și plăcute vizual.
          </motion.p>
        </div>

        {/* Grid Carduri */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {skills.map((skill, index) => (
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
                "hover:border-slate-700 hover:-translate-y-1",
                skill.color // Adaugă glow-ul colorat specific la hover
              )}>
                
                {/* Hover Gradient Border Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div className="flex flex-col sm:flex-row items-start gap-6">
                  {/* Icon Box */}
                  <div className="relative shrink-0">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${skill.gradient} p-[1px] shadow-lg`}>
                      <div className="w-full h-full bg-slate-950 rounded-[11px] flex items-center justify-center overflow-hidden relative">
                        <div className={`absolute inset-0 bg-gradient-to-br ${skill.gradient} opacity-20 group-hover:opacity-30 transition-opacity`} />
                        <Image
                          src={skill.icon}
                          alt={skill.title}
                          width={32}
                          height={32}
                          className="w-8 h-8 object-contain relative z-10 group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Text Content */}
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-200 transition-colors flex items-center gap-2">
                      {skill.title}
                      <Sparkles className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-yellow-400" />
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-300 transition-colors">
                      {skill.description}
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