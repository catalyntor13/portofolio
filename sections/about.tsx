"use client"
import Image from "next/image";
import { motion } from "framer-motion"
import { User2 } from "lucide-react"

export default function AboutSection() {
    return (
        <section id="about" className="md:p-20 p-5 bg-slate-950 overflow-hidden pb-10 scroll-mt-20">
        <div className="container mx-auto px-6">
          <div className="relative flex flex-col items-center justify-center mb-16 z-10">
  {/* Eticheta mică de sus */}
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-4"
  >
    <User2 className="w-5 h-5" />
    <span>Cine sunt eu ?</span>
  </motion.div>

  {/* Titlul Principal */}
  <motion.h2 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: 0.1 }}
    className="text-4xl md:text-5xl font-bold text-center"
  >
    <span className="text-white">Despre </span>
    <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
      Mine  
    </span>
  </motion.h2>
  
  {/* Glow Effect în spate (foarte subtil) */}
  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-blue-500/20 blur-[50px] rounded-full -z-10 pointer-events-none" />
</div>
          
          <motion.div className="grid md:grid-cols-2 gap-12 items-center"
          
            initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}>
            <div
        
               >
              
              <p className="text-gray-200 text-lg mb-6 leading-relaxed ">
                Sunt un Front-End Developer pasionat de detaliile vizuale și experiența utilizatorului. Nu construiesc doar pagini statice, ci interfețe fluide care reacționează natural la fiecare interacțiune.
              </p>
              <p className="text-gray-200 text-lg mb-6 leading-relaxed ">
           Specializat în ecosistemul React (Next.js), mă concentrez pe performanță și animații rafinate. Utilizez soluții moderne precum Supabase pentru a gestiona datele, ceea ce îmi permite să livrez aplicații funcționale complete, păstrând focusul principal pe o experiență vizuală impecabilă."
              </p>
             
            </div>
            <div className="relative">
              <div className="p-8 rounded-2xl">
                <Image
                  src="/about.jpg"
                  alt="Despre mine"
                  width={500}
                  height={500}
                  className="rounded-xl mx-auto"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    )
}
