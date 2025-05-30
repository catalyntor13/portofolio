"use client"

// Creative & Animated with Split Design
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Aperture, MessageSquare, Settings, LogIn } from "lucide-react"

export default function Navbar2() {
  const navItems = [
    { label: "Gallery", href: "#", icon: Aperture },
    { label: "Community", href: "#", icon: MessageSquare },
    { label: "Settings", href: "#", icon: Settings },
  ]

  return (
    <header className="relative bg-gradient-to-r from-gray-900 via-purple-900 to-pink-800 text-white py-4 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        {/* Decorative background pattern or subtle animation could go here */}
      </div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex items-center justify-between">
          {/* Left Side - Logo & Brand */}
          <Link href="/" className="flex items-center group" prefetch={false}>
            <Aperture className="h-8 w-8 text-pink-400 group-hover:rotate-180 transition-transform duration-500 ease-in-out" />
            <span className="ml-3 text-2xl font-bold tracking-wider">Visionary</span>
          </Link>

          {/* Right Side - Navigation & Actions */}
          <div className="flex items-center gap-2 md:gap-4">
            <nav className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium text-purple-200 hover:bg-white/10 hover:text-white transition-all duration-200 group"
                  prefetch={false}
                >
                  <item.icon className="h-4 w-4 text-pink-400 group-hover:scale-110 transition-transform" />
                  {item.label}
                </Link>
              ))}
            </nav>
            <Button variant="ghost" className="text-purple-200 hover:bg-white/10 hover:text-white group">
              <LogIn className="h-5 w-5 mr-0 md:mr-2 text-pink-400 group-hover:translate-x-1 transition-transform" />
              <span className="hidden md:inline">Login</span>
            </Button>
            <Button className="bg-pink-600 hover:bg-pink-700 text-white shadow-lg hover:shadow-pink-500/50 transition-all duration-300 transform hover:scale-105">
              Join Now
            </Button>
          </div>
        </div>
      </div>
      {/* Animated bottom border - example */}
      <div className="absolute bottom-0 left-0 h-0.5 w-full bg-pink-500 animate-pulse-expand" />
      <style jsx global>{`
        @keyframes pulse-expand {
          0%, 100% { transform: scaleX(0.5); opacity: 0.7; }
          50% { transform: scaleX(1); opacity: 1; }
        }
        .animate-pulse-expand {
          animation: pulse-expand 2.5s infinite ease-in-out;
        }
      `}</style>
    </header>
  )
}
