"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import scrollToId from "@/lib/scrollToId";

export default function HeroSection() {


  return (
    <section id="home" className="relative  flex items-center justify-center overflow-hidden px-6 md:px-0 py-30 ">
      <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-gray-900 blur-xl rounded-4xl opacity-40 hover:opacity-60 transition-opacity duration-500 animate-pulse" />

      <div className="container relative z-10 ">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center "
        >
          
<Image
  src="/profile.jpg"
  width={100}
  height={100}
  alt="Catalin Toro - Creative Avatar"
  className="relative w-37 h-37 md:w-48 md:h-48 object-cover object-top rounded-full mx-auto shadow-2xl transition-all duration-500 hover:scale-105"
/>
            
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-7xl font-bold my-6"
          >
            <span className="text-green-500">Salut,</span> sunt Catalin
          </motion.h1>
          <h1 className="text-2xl md:text-3xl text-white/30 font-medium my-3">Dezvoltator Web</h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-lg bg-white/10 backdrop-blur-md rounded-2xl md:p-6 p-4 border border-white/20 max-w-3xl mx-auto mb-10 "
          >
            Construiesc website-uri moderne, performante și optimizate SEO, create rapid pentru afaceri care vor o prezență online serioasă. 
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col md:flex-row gap-4 justify-center"
          >
            <Button
              onClick={() => scrollToId("projects", 80, 1200)}
              size="lg"
              className="bg-green-700  text-white font-medium "
            >
              Proiectele mele
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              onClick={() => scrollToId("contact", 80, 1200)}
              variant="outline"
              size="lg"
              className="bg-transparent border-green-600 text-white font-medium "
            >
             Contactează-mă
            </Button>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 "
      >
        <div className="animate-bounce">
          <svg
            className="w-6 h-6 text-green-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            ></path>
          </svg>
        </div>
      </motion.div>
    </section>
  );
}