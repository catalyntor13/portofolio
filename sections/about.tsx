"use client"
import Image from "next/image";
import { motion } from "framer-motion"
import { User } from "lucide-react"

export default function AboutSection() {
    return (
        <section id="about" className="md:p-20 p-5 bg-gradient-to-br from-gray-900  to-gray-800 overflow-hidden pb-10 scroll-mt-20">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-center gap-5">
             <div
              className="relative">
                            
              <User className="h-8 w-8 text-green-400 animate-bounce" />
              <div className="absolute inset-0 h-8 w-8 text-green-400 animate-ping opacity-20">
                <User className="h-8 w-8" />
                </div>
            </div>
          <h2 className="text-4xl font-bold py-10 ">
            Despre <span className="text-green-400">Mine</span>
          </h2>
          </div>
          
          <motion.div className="grid md:grid-cols-2 gap-12 items-center"
          
            initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}>
            <div
        
               >
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                Sunt un dezvoltator web axat pe front-end si pasionat de experiența utilizatorului și performanța web. Mă concentrez pe crearea de interfețe rapide, fluide și animate, care nu doar arată bine, ci și se mișcă natural.
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Folosesc tehnologii populare precum Next.js, Tailwind CSS, Framer Motion pentru a construi și livra rapid site-uri de prezentare și landing pages rapide, responsive și optimizate pentru performanță și conversie.
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
