"use client";


import { FaLinkedin, FaInstagram, FaFacebook} from "react-icons/fa6";
import { Projects } from "@/components/landing/projects";
import { motion } from "framer-motion";
import ContactSection from "@/components/landing/contact";
import Image from "next/image";
import Link from "next/dist/client/link";

export default function IndiePage() {
    return (
        <main className="bg-[#e6e6e6]">
<div className="flex flex-col lg:flex-row gap-18 p-3 lg:p-16">
      {/* Sidebar Profile - Fixed */}
        <div className="flex flex-col items-center border-none lg:border lg:border-slate-700 rounded-lg p-7 w-full lg:w-120 lg:fixed lg:left-4 lg:top-16 lg:h-fit lg:z-30">
            <img src="/foto.webp" alt="Profile Picture" className="w-58 h-58 rounded-full mb-4 border-3 border-slate-500" />
            <h2 className="text-2xl font-bold mb-2">Adrian Toro</h2>
           <div className="flex flex-col items-start gap-3">
          
 <p className="text-slate-900 text-lg text-center mx-auto italic ">Video Editor si Antreprenor</p>
 <p className="text-slate-900 text-lg text-center">Sunt aici sa iti creez cele mai bune momente video din cariera ta</p>

           </div>
           

            {/* Social Links - Bigger */}
            <ul className="flex gap-6 mt-8">
                <Link href="https://www.linkedin.com/in/catalin-toro-689181401/" target="_blank"><FaLinkedin className="w-8 h-8 cursor-pointer hover:text-cyan-400 transition-colors" /></Link>
                <Link href="https://www.instagram.com/catalynn13" target="_blank"><FaInstagram className="w-8 h-8 cursor-pointer hover:text-cyan-400 transition-colors" /></Link>
                <Link href="https://x.com/catalintorro" target="_blank"><FaFacebook className="w-8 h-8 cursor-pointer hover:text-cyan-400  transition-colors" /></Link>
            </ul>
                <ContactSection />
        </div>
       {/* Sidebar Profile */}

      {/* Main Content Portofolio Indie Page */}
          
        <div className="lg:ml-124 "> 
           <h1 className="text-xl text-center font-medium mb-10">Proiectele Mele</h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {Projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -5 }}
                        className="group relative border border-cyan-500/20 rounded-xl p-4 bg-gradient-to-br from-slate-100 to-slate-200/50 backdrop-blur-sm hover:border-cyan-500/40 transition-all duration-300"
                    >
                        {/* Header with Icon and Title */}
                        <div className="flex items-start justify-between mb-2">
                            <div className="flex items-center gap-2 flex-1">
                                <div className="p-2 rounded-lg text-slate-950">
                                   <Image src={project.favicon || "/default-icon.png"} alt={`${project.title} Icon`} width={48} height={48} className="rounded" />
                                </div>
                                <div className="flex-1">
                                    <h2 className="text-lg font-bold text-black  transition-colors">
                                      Video
                                    </h2>
                                  
                                </div>
                            </div>
                        </div>

                        {/* Description */}
                        <p className="text-slate-950 text-base mb-3 leading-relaxed">
                            Video Description
                        </p>

                        <Image src={project.image} alt={`${project.title} Screenshot`} width={400} height={400} className="rounded-lg mb-3 object-cover" />

                    

                        
                    </motion.div>
                ))}

               

              
            </div>
        
   
        </div>
          
      {/* Main Content Portofolio Indie Page */}

      
      </div>


        </main>
    )
}