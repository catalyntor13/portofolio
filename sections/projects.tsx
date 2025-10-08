"use client"

import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import {  Rocket, Code2, Globe } from "lucide-react"
import Image from "next/image"

export default function ProjectsSection() {

   const projects = [
    {
      id: 1,
      title: "IDToro",
      description:
        "Un landing page modern și responsive pentru o companie de servicii IT. Design curat, implementat cu Next.js și Tailwind CSS.",
      image: "/idtoro.png",
      demoUrl: "https://idtoro.vercel.app/",

    },
    {
      id: 2,
      title: "ActiveBoost",
      description:
        "O aplicație web destinată antrenorilor care vor să atragă și să gestioneze clienți. Include sistem de autentificare, formular pentru clienti si integrare Stripe pentru plăți.",
      image: "/activeboost.png",
      demoUrl: "https://active-fit.vercel.app",
    
    },
    {
      id: 3,
      title: "Gradinita Busy Bee",
      description:
        "Landing Page pentru o gradinita locala. Cod curat cu animatii",
      image: "/gradinita.png",
      demoUrl: "https://gradinitabusybee.ro/",

    },

    {
      id: 4,
      title: "Video Editor - Landing Page",
      description:
        "Landing Page pentru un video editor. Include si animatii",
      image: "/editor.png",
      demoUrl: "https://ady-toro.vercel.app/",

    },
    
   
  ]
    return (
        <section
  id="projects"
  className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 relative overflow-hidden scroll-mt-20"
>
  <div className="container mx-auto px-6 relative z-10">
    {/* Header */}
    <div className="text-center mb-16">
      <div className="inline-flex items-center gap-3 mb-4">
        <div className="relative">
          <Rocket className="h-8 w-8 text-green-400 animate-bounce" />
          <div className="absolute inset-0 h-8 w-8 text-green-400 animate-ping opacity-20">
            <Rocket className="h-8 w-8" />
          </div>
        </div>
        <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
          Proiectele{" "}
          <span className="bg-gradient-to-r from-green-400 to-teal-500 bg-clip-text text-transparent">
            Mele
          </span>
        </h2>
      </div>
      <p className="text-gray-400 text-lg max-w-2xl mx-auto">
        O colecție de proiecte demo care demonstrează abilitățile mele tehnice și creativitatea în dezvoltarea web.
      </p>
    </div>

    {/* Cards */}
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
      {projects.map((project) => (
        <motion.div
          key={project.id}
          whileHover={{ scale: 1.03 }}
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        
        >
          <Card className="group relative bg-[#1f2937] border border-white/10  shadow-xl overflow-hidden transition-all hover:shadow-2xl hover:border-white/20">
            <CardContent className="p-0 relative z-10 cursor-pointer">
              {/* Image */}
              <div className="relative overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={500}
                  height={300}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-500 rounded-t-2xl" />
                {/* Buttons */}
                <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                  <Link href={project.demoUrl} target="_blank">
                    <Button
                      size="sm"
                      className="bg-gradient-to-r from-green-400 to-teal-400 text-white px-4 py-2 rounded-md shadow-md hover:scale-110 transition-transform"
                    >
                      <Globe className="mr-2 h-4 w-4" />
                      Demo
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Code2 className="h-5 w-5 text-green-400" />
                  <h3 className="text-lg font-semibold text-white">
                    {project.title}
                  </h3>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {project.description}
                </p>
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