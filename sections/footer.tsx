"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import {
  Github,
  Instagram,
  ArrowUp,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { FaXTwitter } from "react-icons/fa6";



export default function Footer() {
  const [showBackToTop, setShowBackToTop] = useState(false)




  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const navigationLinks = [

    { name: "Projects", href: "#projects" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ]

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/catalyntor13",
      icon: Github,
      gradient: "from-gray-600 to-gray-800",
      hoverColor: "hover:text-blue-400",
    },
    {
      name: "Twitter",
      href: "https://x.com/@catalintorro",
      icon: FaXTwitter,
      gradient: "from-blue-600 to-blue-800",
      hoverColor: "hover:text-blue-400",
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/catalynn13",
      icon: Instagram,
      gradient: "from-green-600 to-emerald-600",
      hoverColor: "hover:text-blue-400",
    },
  ]


  return (
    <footer className="relative bg-slate-950 border-t border-slate-900 overflow-hidden">
      {/* Background decoration */}

      <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-600/15 rounded-full blur-[140px]" />

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-green-400 rounded-full animate-ping opacity-20" />
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-blue-400 rounded-full animate-ping opacity-20 animation-delay-1000" />
        <div className="absolute top-1/2 left-3/4 w-1 h-1 bg-purple-400 rounded-full animate-ping opacity-20 animation-delay-2000" />
      </div>

      <div className="container px-6 relative z-10">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2  gap-8 py-16">


          {/* Navigation Links */}
          <div className="md:col-span-1 md:mx-auto">
            <h4 className="text-lg font-semibold text-white mb-6 relative">
              Navigation
              <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-full" />
            </h4>
            <ul className="space-y-3">
              {navigationLinks.map((link, index) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-blue-300 transition-all duration-300 hover:translate-x-1 inline-flex items-center group"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-blue-300 transition-all duration-300 mr-0 group-hover:mr-2 rounded-full" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>


          {/* Social & Newsletter */}
          <div className="md:col-span-1 md:mx-auto">
            <h4 className="text-lg font-semibold text-white mb-6 relative">
              Connect
              <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-full" />
            </h4>
            <p className="text-gray-400 text-sm mb-4">Follow me for updates and new projects</p>
            <div className="flex gap-3 mb-6">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon
                return (
                  <Link
                    key={social.name}
                    href={social.href}
                    className="group relative"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="w-10 h-10 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-full flex items-center justify-center hover:border-gray-600/50 transition-all duration-300 hover:scale-110 hover:-translate-y-1">
                      <div
                        className={`absolute inset-0 bg-gradient-to-r ${social.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-full`}
                      />
                      <IconComponent
                        className={`h-5 w-5 text-gray-400 ${social.hoverColor} transition-colors duration-300 relative z-10`}
                      />
                    </div>
                  </Link>
                )
              })}
            </div>

            {/* Status indicator */}
            <div className="flex items-center gap-2 text-sm">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-gray-400">Available for projects</span>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800/50 py-8">
          <div className="flex flex-col md:flex-row justify-center items-center gap-4">
            <div className="flex items-center  gap-4 text-sm text-cyan-400">
              <p>&copy; {new Date().getFullYear()} Catalin Toro. All rights reserved.</p>

            </div>


          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      {showBackToTop && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 hover:from-gray-200 hover:to-blue-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-50"
          size="icon"
        >
          <ArrowUp className="h-5 w-5" />
        </Button>
      )}

    </footer>
  )
}
