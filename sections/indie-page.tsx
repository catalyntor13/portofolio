"use client";

import { FaLaptopCode } from "react-icons/fa";
import { FaLinkedin, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { FiArrowUpRight } from "react-icons/fi";
import { Projects } from "./projects";
import { motion } from "framer-motion";
import ContactSection from "./contact";
import Image from "next/image";
import Link from "next/dist/client/link";


export default function IndiePage() {
  return (
    <div>

        <div className="flex flex-col max-w-8xl mx-auto md:flex-row items-start gap-8 p-3 lg:p-8">
      {/* Sidebar Profile */}
        <div className="flex flex-col items-center border-none lg:border lg:border-slate-700 rounded-lg p-7 w-full lg:w-2/4">
            <img src="/profile.jpg" alt="Profile Picture" className="w-48 h-48 rounded-full mb-4 border-1 border-cyan-500" />
            <h2 className="text-2xl font-bold mb-2">Catalin</h2>
            <div className="flex items-center gap-3 ">
              <FaLaptopCode className="text-emerald-500" />
                 
                <p className="text-slate-300 ">Web Developer/ Trader</p>
                
            </div>
            <p className="text-slate-400 text-center italic mt-4">Passionate about creating innovative web solutions and exploring the world of trading.</p>

    
            {/* Social Links */}
            <ul className="flex gap-4 mt-4">
                <Link href="https://www.linkedin.com/in/catalin-toro-689181401/" target="_blank"><FaLinkedin className=" w-6 h-6 cursor-pointer" /></Link>
                <Link href="https://www.instagram.com/catalynn13" target="_blank"><FaInstagram className=" w-6 h-6 cursor-pointer" /></Link>
                <Link href="https://x.com/catalintorro" target="_blank"><FaXTwitter className=" w-6 h-6 cursor-pointer" /></Link>
            </ul>
        </div>
       {/* Sidebar Profile */}

      {/* Main Content Portofolio Indie Page */}
          
        <div className="ml-10 "> 
            <h1 className="text-4xl text-center font-bold mb-3">Projects</h1>
            <p className="text-slate-400 text-center mb-8">Here's what I'm building. Every product is designed to solve real problems</p>
            <div className=" grid grid-cols-1 lg:grid-cols-2 gap-6 w-full">
                {Projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -5 }}
                        className="group relative max-w-6xl  border  border-cyan-500/20 rounded-2xl p-6 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm hover:border-cyan-500/40 transition-all duration-300"
                    >
                        {/* Header with Icon and Title */}
                        <div className="flex items-start justify-between mb-2">
                            <div className="flex items-center gap-3 flex-1">
                                <div className="p-2.5 rounded-lg  text-slate-950">
                                   <Image src={project.favicon || "/default-icon.png"} alt={`${project.title} Icon`} width={64} height={64} className="rounded" />
                                </div>
                                <div className="flex-1">
                                    <h2 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                                        {project.title}
                                    </h2>
                                  
                                </div>
                            </div>
                        </div>

                        {/* Description */}
                        <p className="text-slate-300 text-sm mb-5 leading-relaxed">
                            {project.description}
                        </p>

                        <Image src={project.image} alt={`${project.title} Screenshot`} width={600} height={400} className="rounded-lg mb-5 object-cover" />

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mb-5">
                            {project.tags.map((tag, tagIndex) => (
                                <motion.span
                                    key={tagIndex}
                                    whileHover={{ scale: 1.05 }}
                                    className="px-3 py-1.5 text-xs font-medium rounded-full border border-cyan-500/40 bg-cyan-500/10 text-cyan-300 hover:bg-cyan-500/20 hover:border-cyan-500/60 transition-all duration-200"
                                >
                                    {tag}
                                </motion.span>
                            ))}
                        </div>

                        {/* View Project Button */}
                        <motion.a
                            href={project.url}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="inline-flex items-center gap-2 text-cyan-400 font-semibold hover:text-cyan-300 transition-colors group/link"
                        >
                            View Project
                            <FiArrowUpRight className="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                        </motion.a>
                    </motion.div>
                ))}

                <div>
                    {/* Graph */}
                </div>
                <div>
                    {/* Tags */}
                </div>

              
            </div>
        
   
        </div>
          
      {/* Main Content Portofolio Indie Page */}

      
    </div>

            <ContactSection />
          

    </div>
    

    
  );
}