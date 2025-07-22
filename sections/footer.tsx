"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import {
  Github,
  Linkedin,
  Mail,
  ArrowUp,
} from "lucide-react"
import { Button } from "@/components/ui/button"

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
    { name: "Acasă", href: "#home" },
    { name: "Despre", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Proiecte", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ]

  const socialLinks = [
    {
      name: "GitHub",
      href: "#",
      icon: Github,
      gradient: "from-gray-600 to-gray-800",
      hoverColor: "hover:text-gray-300",
    },
    {
      name: "LinkedIn",
      href: "#",
      icon: Linkedin,
      gradient: "from-blue-600 to-blue-800",
      hoverColor: "hover:text-blue-400",
    },
    {
      name: "Email",
      href: "mailto:torobuisnessro@yahoo.com",
      icon: Mail,
      gradient: "from-green-600 to-emerald-600",
      hoverColor: "hover:text-green-400",
    },
  ]

  const quickContact = [
    {
      icon: Mail,
      text: "torobuisnessro@yahoo.com",
      href: "mailto:torobuisnessro@yahoo.com",
      gradient: "bg-green-500",
    },
   
  ]

  return (
    <footer className="relative bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(34,197,94,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(59,130,246,0.1),transparent_50%)]" />
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-green-500/50 to-transparent" />

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-green-400 rounded-full animate-ping opacity-20" />
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-blue-400 rounded-full animate-ping opacity-20 animation-delay-1000" />
        <div className="absolute top-1/2 left-3/4 w-1 h-1 bg-purple-400 rounded-full animate-ping opacity-20 animation-delay-2000" />
      </div>

      <div className="container px-6 relative z-10">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3  gap-8 py-16">
         

          {/* Navigation Links */}
          <div className="md:col-span-1 md:mx-auto">
            <h4 className="text-lg font-semibold text-white mb-6 relative">
              Navigare
              <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-gradient-to-r from-green-400 to-blue-500 rounded-full" />
            </h4>
            <ul className="space-y-3">
              {navigationLinks.map((link, index) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-green-400 transition-all duration-300 hover:translate-x-1 inline-flex items-center group"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-green-400 transition-all duration-300 mr-0 group-hover:mr-2 rounded-full" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Contact */}
          <div className="md:col-span-1 md:mx-auto">
            <h4 className="text-lg font-semibold text-white mb-6 relative">
              Contact Rapid
              <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-gradient-to-r from-green-400 to-blue-500 rounded-full" />
            </h4>
            <ul className="space-y-4">
              {quickContact.map((contact, index) => {
                const IconComponent = contact.icon
                return (
                  <li key={contact.text}>
                    <Link
                      href={contact.href}
                      className="flex items-center gap-3 text-gray-400 hover:text-gray-200 transition-all duration-300 group"
                      style={{ animationDelay: `${index * 150}ms` }}
                    >
                      <div
                        className={`w-8 h-8 bg-gradient-to-r ${contact.gradient} bg-opacity-20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                      >
                        <IconComponent className="h-4 w-4 text-white group-hover:text-white transition-colors duration-300" />
                      </div>
                      <span className="text-sm group-hover:translate-x-1 transition-transform duration-300">
                        {contact.text}
                      </span>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>

          {/* Social & Newsletter */}
          <div className="md:col-span-1 md:mx-auto">
            <h4 className="text-lg font-semibold text-white mb-6 relative">
              Conectează-te
              <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-gradient-to-r from-green-400 to-blue-500 rounded-full" />
            </h4>
            <p className="text-gray-400 text-sm mb-4">Urmărește-mă pentru actualizări și proiecte noi</p>
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
              <span className="text-gray-400">Disponibil pentru proiecte</span>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800/50 py-8">
          <div className="flex flex-col md:flex-row justify-center items-center gap-4">
            <div className="flex items-center  gap-4 text-sm text-gray-500">
              <p>&copy; {new Date().getFullYear()} Catalin Toro. Toate drepturile rezervate.</p>
              
            </div>

          
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      {showBackToTop && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-50"
          size="icon"
        >
          <ArrowUp className="h-5 w-5" />
        </Button>
      )}
    </footer>
  )
}
