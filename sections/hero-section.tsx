"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";
import Image from "next/image";
import scrollToId from "@/lib/scrollToId";

// Tech Stack Icons
import Nextjs from '@/public/nextjs-icon-light-background.svg';
import TailwindIcon from '@/public/tailwindcss.svg';
import Motion from '@/public/motion.png';
import Neon from '@/public/neon.png';

const techStack = [
  { name: "Next.js", icon: Nextjs },
  { name: "Tailwind CSS", icon: TailwindIcon },
  { name: "Framer Motion", icon: Motion },
  { name: "Neon", icon: Neon }
];

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">

      {/* Background Tech Grid & Spots */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-950" />

        {/* Spotlights */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-blue-500/20 opacity-50 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-purple-500/10 opacity-30 blur-[130px] rounded-full pointer-events-none" />
      </div>

      <div className="container relative z-10 px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto py-12 text-center"
        >
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/30 border border-blue-500/30 text-blue-300 text-sm font-medium mb-8 backdrop-blur-md"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            Available for projects
          </motion.div>

          {/* Avatar with Glow */}
          <div className="relative w-40 h-40 md:w-48 md:h-48 mx-auto mb-8 group">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-500" />
            <Image
              src="/profile.jpg"
              width={200}
              height={200}
              alt="Avatar"
              className="relative w-full h-full object-cover object-top rounded-full border-2 border-slate-800 shadow-2xl z-10"
              priority
            />
          </div>

          <motion.h1
            className="text-5xl lg:text-7xl font-bold mb-6 tracking-tight text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Hi, I am <br className="md:hidden" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-500 animate-gradient">
              Catalin
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-base lg:text-lg  text-slate-400 max-w-xl mx-auto mb-4 mt-2 leading-relaxed"
          >
            I am a web developer passionate about the world of technology and finance. I build fast and scalable applications, emphasizing simplicity and performance.
          </motion.p>

          {/* Tech Stack Centered Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mb-10 flex flex-col items-center"
          >
            <p className="text-sm text-slate-500 mb-4 font-medium uppercase tracking-wider">Tech Stack</p>
            <div className="flex flex-wrap gap-4 justify-center">
              {techStack.map((tech, index) => (
                <div key={index} className="flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-blue-500/30 transition-colors group">
                  <Image
                    src={tech.icon}
                    alt={tech.name}
                    width={20}
                    height={20}
                    className="w-5 h-5 object-contain"
                  />
                  <span className="text-slate-300 text-sm font-medium group-hover:text-blue-300 transition-colors">{tech.name}</span>
                </div>
              ))}
            </div>
          </motion.div>


          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              onClick={() => scrollToId("projects", 80, 1200)}
              size="lg"
              className="min-w-[160px] h-12 rounded-full bg-white text-slate-950 hover:bg-slate-200 font-semibold text-base transition-all hover:scale-105"
            >
              View Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>

            <Button
              onClick={() => scrollToId("contact", 80, 1200)}
              variant="outline"
              size="lg"
              className="min-w-[160px] h-12 rounded-full border-slate-700 bg-slate-900/50 text-white hover:bg-slate-800 hover:text-white backdrop-blur-sm transition-all hover:scale-105"
            >
              <Mail className="mr-2 h-4 w-4" />
              Contact Me
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-5 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
      >
        <span className="text-xs text-slate-500 uppercase tracking-widest">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-slate-500 to-transparent" />
      </motion.div>
    </section>
  );
}