"use client";


import { FaLinkedin, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { FiArrowUpRight } from "react-icons/fi";
import { Projects } from "./projects";
import { motion } from "framer-motion";
import ContactSection from "./contact";
import Image from "next/image";
import Link from "next/dist/client/link";



export default function IndiePage() {
  return (
    <>
      <div className="flex flex-col lg:flex-row gap-18 p-3 lg:p-16">
      {/* Sidebar Profile - Fixed */}
        <div className="flex flex-col items-center border-none lg:border lg:border-slate-700 rounded-lg p-7 w-full lg:w-120 lg:fixed lg:left-4 lg:top-16 lg:h-fit">
            <img src="/profile.jpg" alt="Profile Picture" className="w-48 h-48 rounded-full mb-4 border-1 border-cyan-500" />
            <h2 className="text-2xl font-bold mb-2">Catalin Toro</h2>
           <div className="flex items-start gap-3">
          
 <p className="text-slate-400 text-lg text-center italic ">Passionate about creating innovative web solutions and exploring the world of trading.</p>

           </div>
           

            {/* Social Links - Bigger */}
            <ul className="flex gap-6 mt-8">
                <Link href="https://www.linkedin.com/in/catalin-toro-689181401/" target="_blank"><FaLinkedin className="w-8 h-8 cursor-pointer hover:text-cyan-400 transition-colors" /></Link>
                <Link href="https://www.instagram.com/catalynn13" target="_blank"><FaInstagram className="w-8 h-8 cursor-pointer hover:text-cyan-400 transition-colors" /></Link>
                <Link href="https://x.com/catalintorro" target="_blank"><FaXTwitter className="w-8 h-8 cursor-pointer hover:text-cyan-400 transition-colors" /></Link>
            </ul>
                <ContactSection />
        </div>
       {/* Sidebar Profile */}

      {/* Main Content Portofolio Indie Page */}
          
        <div className="lg:ml-124 "> 
       
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {Projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -5 }}
                        className="group relative border border-cyan-500/20 rounded-xl p-4 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm hover:border-cyan-500/40 transition-all duration-300"
                    >
                        {/* Header with Icon and Title */}
                        <div className="flex items-start justify-between mb-2">
                            <div className="flex items-center gap-2 flex-1">
                                <div className="p-2 rounded-lg text-slate-950">
                                   <Image src={project.favicon || "/default-icon.png"} alt={`${project.title} Icon`} width={48} height={48} className="rounded" />
                                </div>
                                <div className="flex-1">
                                    <h2 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">
                                        {project.title}
                                    </h2>
                                  
                                </div>
                            </div>
                        </div>

                        {/* Description */}
                        <p className="text-slate-300 text-base mb-3 leading-relaxed">
                            {project.description}
                        </p>

                        <Image src={project.image} alt={`${project.title} Screenshot`} width={400} height={400} className="rounded-lg mb-3 object-cover" />

                    

                        {/* View Project Button */}
                        <motion.a
                            href={project.url}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="inline-flex items-center gap-2 text-cyan-400 font-semibold text-sm hover:text-cyan-300 transition-colors group/link"
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

      
    </>
  );
}