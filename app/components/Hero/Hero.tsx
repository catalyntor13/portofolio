"use client"

import { Zap, MessageCircle, ArrowDown, Github, Linkedin, Dribbble, ShieldCheck, User, CodeIcon} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import ContactForm from "../Contact/page"
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog"
import Link from "next/link"
import Image from "next/image"


export default function SunsetOrangeHero() {
  const projects = [
    {
      title: "ActiveBoost",
      description:
        "Full-stack app built with Next.js, Supabase, and Stripe. Helps fitness coaches get more clients and manage subscriptions easily.",
      bgColor: "bg-gradient-to-br from-orange-600 to-red-700",
      textColor: "text-white",
      link: `https://active-fit.vercel.app/``
    },
    {
      title: "IDToro",
      description: "Clean, responsive landing page designed with Tailwind CSS for a tech company offering IT services",
      bgColor: "bg-gradient-to-br from-amber-500 to-yellow-600",
      textColor: "text-white",
       link: `https://idtoro.vercel.app/`
    },
    {
      title: "EcoCorp",
      description: "SaaS template using Next.js, Supabase, and Stripe. Includes auth, protected pages, and payment system—ready to scale.",
      bgColor: "bg-gradient-to-br from-rose-500 to-pink-600",
      textColor: "text-white",
      link: `https://saas-flax-delta.vercel.app/`
    },
  ]

  const skills = [
    {
      icon: "/react.svg",
      title: "React",
    },
    {
      icon: "/nextdotjs.svg",
      title: "Next.js",
    },
    {
      icon: "/tailwindcss.svg",
      title: "Tailwind CSS",
    },
    {
      icon: "/typescript.svg",
      title: "TypeScript",
    },
    {
      icon: "/supabase.svg",
      title: "Supabase",
    
    },
  ]

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-outfit antialiased overflow-x-hidden">

      {/* Hero Section */}
      <section
        id="hero"
        className="min-h-screen flex flex-col justify-center items-center text-center p-8 bg-gradient-to-br from-orange-500 via-red-600 to-slate-800 relative"
      >
      

        <div className="relative z-10 space-y-8 pt-20">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-400 rounded-full blur-xl opacity-40 group-hover:opacity-60 transition-opacity duration-500 animate-pulse" />
            <Image
              src="/profile.jpg"
              width={100}
              height={100}
              alt="Your Name - Creative Avatar"
              className="relative w-37 h-37 md:w-48 md:h-48 object-cover object-top rounded-full mx-auto  shadow-2xl transition-all duration-500 group-hover:scale-105 "
            />

         
          </div>

          <h1 className="text-5xl font-bold tracking-tight">
            <span className="block bg-gradient-to-r from-white to-orange-200 bg-clip-text text-transparent">
              Hi, I am Catalin
            </span>
            <span className="block text-3xl md:text-4xl text-orange-300 font-medium mt-2">
              Front-End Developer
            </span>
          </h1>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 max-w-3xl mx-auto">
            <p className="text-xl md:text-2xl text-orange-100 leading-relaxed">
              I craft unique digital experiences that blend art, design, and technology. Let&apos;s build something
              extraordinary together.
            </p>
          </div>

          <Button
            size="lg"
            className="bg-gradient-to-br from-amber-500 to-yellow-600 text-white hover:scale-105 transition-all duration-300 font-bold px-8 py-4 rounded-xl"
            asChild
          >
            <Link href="#projects">
              Explore My Creations <Zap className="ml-2 h-5 w-5" />
            </Link>
          </Button>
     
            
        </div>

        <div className="pt-10 animate-bounce">
          <ArrowDown className="h-8 w-8 text-orange-300" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 md:py-32 bg-slate-800 scroll-mt-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 flex items-center justify-center gap-3">
            <User className="h-10 w-10 text-orange-400" /> About Me
          </h2>
          <div className="space-y-8">
            <div className="bg-slate-700/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-600/50">
              <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-6">
                I&apos;m passionate about technology and business, with a strong focus on front-end development. I enjoy
                building clean, responsive interfaces and turning ideas into real, functional products.
              </p>
              <p className="text-lg md:text-xl text-slate-300 leading-relaxed">
                Curious by nature, I&apos;m always eager to learn new things, explore emerging tools, and stay up to date
                with the latest trends in tech. Beyond my own growth, I love helping others bring their projects to life
                — whether it&apos;s through collaboration, guidance, or simply sharing what I&apos;ve learned along the way.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 md:py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-900/50 to-slate-900/50 backdrop-blur-3xl" />
        <div className="relative max-w-6xl mx-auto px-6">
         
          <h2 className="text-4xl flex items-center justify-center gap-3 md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-white to-orange-200 bg-clip-text text-transparent">
             <CodeIcon className="h-10 w-10 text-orange-400"/> <span className="text-[17px] md:text-2xl">Skills & Technologies</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {skills.slice(0, 3).map((skill, index) => (
              <Card
                key={index}
                className="group bg-gradient-to-br from-amber-500 to-yellow-600 border  hover:bg-white/20 hover:border-blue-400/50 transition-all duration-500 transform hover:-translate-y-4 hover:shadow-2xl hover:shadow-blue-500/25 rounded-2xl cursor-pointer"
              >
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                    <Image
                      src={skill.icon}
                      width={64}
                      height={64}
                      alt={`${skill.title} logo`}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{skill.title}</h3>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Last 2 cards centered */}
          <div className="flex flex-col md:flex-row justify-center gap-8">
            {skills.slice(3).map((skill, index) => (
              <Card
                key={index + 3}
                className="group bg-gradient-to-br from-amber-500 to-yellow-600 hover:bg-white/20 hover:border-blue-400/50 transition-all duration-500 transform hover:-translate-y-4 hover:shadow-2xl hover:shadow-blue-500/25 rounded-2xl w-full max-w-sm cursor-pointer"
              >
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                    <Image
                      src={skill.icon}
                      width={64}
                      height={64}
                      alt={`${skill.title} logo`}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{skill.title}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 md:py-32 bg-slate-900 scroll-mt-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 flex items-center justify-center gap-3">
            <ShieldCheck className="h-10 w-10 text-orange-400" /> My Projects
          </h2>
          <div className="space-y-16">
            {projects.map((project, index) => (
              <Card
                key={index}
                className={`flex flex-col md:flex-row justify-center  overflow-hidden rounded-2xl cursor-pointer shadow-2xl border-none ${project.bgColor} ${project.textColor}} hover:scale-105 transition-all duration-500`}
              >
                
                <CardContent className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                  <h3 className="text-3xl font-bold mb-4">{project.title}</h3>
                  <p className="text-lg opacity-90 mb-6 leading-relaxed">{project.description}</p>
                  <Button
                    variant="outline"
                    className={`border-2 border-white text-black hover:text-slate-900 transition-all duration-300 self-start rounded-xl font-semibold`}
                    asChild
                  >
                    <a href={project.link}>View Demo</a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 md:py-32 bg-gradient-to-br from-orange-500 via-red-600 to-slate-800 text-white scroll-mt-20"
      >
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 flex items-center justify-center gap-3">
            <MessageCircle className="h-10 w-10" /> Let&apos;s Collaborate
          </h2>
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 mb-10">
            <p className="text-xl md:text-2xl leading-relaxed">
              Got an exciting idea or a project you&apos;d like to discuss? I&apos;m always open to new challenges and creative
              partnerships.
            </p>
          </div>

          <Dialog>
            <DialogTrigger>
              <Button
                size="lg"
                className="bg-white text-orange-600 cursor-pointer hover:bg-orange-50 font-bold text-lg px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Start a Conversation
              
              </Button>
               
          
            </DialogTrigger>
                
            
                <DialogContent>
                  <ContactForm/>
                 </DialogContent>
           
          </Dialog>

          <div className="flex justify-center space-x-6 mt-12">
            <Link
              href="#"
              aria-label="GitHub"
              className="text-orange-300 hover:text-white transition-all duration-300 transform hover:scale-110"
            >
              <Github className="h-8 w-8" />
            </Link>
            <Link
              href="#"
              aria-label="LinkedIn"
              className="text-orange-300 hover:text-white transition-all duration-300 transform hover:scale-110"
            >
              <Linkedin className="h-8 w-8" />
            </Link>
            <Link
              href="#"
              aria-label="Dribbble"
              className="text-orange-300 hover:text-white transition-all duration-300 transform hover:scale-110"
            >
              <Dribbble className="h-8 w-8" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
