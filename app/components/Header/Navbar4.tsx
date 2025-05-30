"use client"

// Minimalist & Centered with subtle scroll effect
import Link from "next/link"
import { useState, useEffect } from "react" // For scroll effect
import { Zap } from "lucide-react"

export default function Navbar4() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        isScrolled ? "bg-white dark:bg-gray-900 shadow-md py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center">
          <Link href="/" className="mb-2" prefetch={false}>
            <Zap
              className={`h-8 w-8 transition-colors duration-300 ${
                isScrolled ? "text-blue-600 dark:text-blue-400" : "text-gray-700 dark:text-gray-200"
              }`}
            />
            <span className="sr-only">ElecTech</span>
          </Link>
          <nav className="flex gap-4 sm:gap-6">
            {["Home", "Products", "About", "Contact"].map((item) => (
              <Link
                key={item}
                href="#"
                className={`text-sm font-medium transition-colors duration-300 hover:text-blue-600 dark:hover:text-blue-400 ${
                  isScrolled ? "text-gray-700 dark:text-gray-300" : "text-gray-600 dark:text-gray-300"
                }`}
                prefetch={false}
              >
                {item}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  )
}
