import { Card, CardContent } from "@/components/ui/card"
import { Code } from "lucide-react"
import Image from "next/image"
import Nextjs from '@/public/nextjs-icon-light-background.svg'
import TailwindIcon from '@/public/tailwindcss.svg'
import Motion from '@/public/motion.png'

export default function SkillsSection() {

 const skills = [
    {
      icon: Nextjs,
      title: "Next.js",
      description: "Framework rapid și scalabil pentru web modern, optimizat pentru SEO și performanță",
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-500/10 to-cyan-500/10",
      borderGradient: "from-blue-500/30 to-cyan-500/30",
    },
    {
      icon: TailwindIcon,
      title: "Tailwind CSS",
      description: "UI sistem modern pentru a construi interfețe clare, responsive și accesibile",
      gradient: "from-emerald-500 to-teal-500",
      bgGradient: "from-emerald-500/10 to-teal-500/10",
      borderGradient: "from-emerald-500/30 to-teal-500/30",
    },
    {
      icon: Motion,
      title: "Motion",
      description: "Animații fluide și interactive pentru o experiență captivantă",
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-500/10 to-pink-500/10",
      borderGradient: "from-purple-500/30 to-pink-500/30",
    },
  ]



    return (
         <section
      id="skills"
      className="py-20 bg-gradient-to-br from-green-900 via-gray-800 to-green-500 relative overflow-hidden"
    >
      {/* Background decoration */}
      

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="relative">
              <Code className="h-8 w-8 text-green-400 animate-pulse" />
              <div className="absolute inset-0 h-8 w-8 text-green-400 animate-ping opacity-20">
                <Code className="h-8 w-8" />
              </div>
            </div>
            <h2 className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-white via-teal-300 to-green-500  bg-clip-text text-transparent">
              Skills & Technologies
            </h2>
          
          </div>
         
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skills.map((skill, index) => (
            <Card
              key={skill.title}
              className={`group relative bg-gray-900/50 backdrop-blur-sm border-0 overflow-hidden transition-all duration-500 hover:scale-105 hover:-translate-y-2 cursor-pointer`}
              style={{
                animationDelay: `${index * 150}ms`,
              }}
            >
              {/* Animated border gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-r ${skill.borderGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg`}
              />
              <div className="absolute inset-[1px] bg-gray-900/90 rounded-lg" />

              {/* Background gradient effect */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${skill.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg`}
              />

              <CardContent className="relative p-8 text-center z-10">
                {/* Icon container with enhanced animations */}
                <div className="relative mb-6 mx-auto w-20 h-20">
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${skill.gradient} rounded-full opacity-20 group-hover:opacity-30 transition-opacity duration-500`}
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${skill.gradient} rounded-full blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500 animate-pulse`}
                  />
                  <div className="relative w-full h-full bg-gray-800/50 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <div className="relative w-10 h-10 group-hover:scale-110 transition-transform duration-300">
                      <Image
                        src={skill.icon || "/placeholder.svg"}
                        alt={`${skill.title} logo`}
                        width={40}
                        height={40}
                        className="w-full h-full object-contain  group-hover:brightness-100 group-hover:invert-0 transition-all duration-300"
                      />
                    </div>
                  </div>
                </div>

                {/* Title with gradient */}
                <h3
                  className={`text-2xl font-bold mb-4 bg-gradient-to-r ${skill.gradient} bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300`}
                >
                  {skill.title}
                </h3>

                {/* Description */}
                <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                  {skill.description}
                </p>

                {/* Hover effect indicator */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-transparent via-green-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </CardContent>

              {/* Floating particles effect */}
              <div className="absolute inset-0 overflow-hidden rounded-lg pointer-events-none">
                <div
                  className="absolute top-1/4 left-1/4 w-1 h-1 bg-green-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-500"
                  style={{ animationDelay: "0.5s" }}
                />
                <div
                  className="absolute top-3/4 right-1/4 w-1 h-1 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-500"
                  style={{ animationDelay: "1s" }}
                />
                <div
                  className="absolute top-1/2 right-1/3 w-1 h-1 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-500"
                  style={{ animationDelay: "1.5s" }}
                />
              </div>
            </Card>
          ))}
        </div>

        {/* Bottom decoration */}
        <div className="flex justify-center mt-16">
          <div className="flex space-x-2">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="w-2 h-2 bg-green-400 rounded-full animate-pulse"
                style={{ animationDelay: `${i * 0.3}s` }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
    )
}