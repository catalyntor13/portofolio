"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { MountainIcon, MenuIcon } from "lucide-react"
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"

export default function NavBar() {


  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])




  return (
     <header
      className={`fixed top-0 left-0 right-0 z-50 mb-8 transition-all duration-300 ease-in-out ${
        isScrolled ? "bg-gray-900 shadow-md py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto h-16 flex items-center justify-evenly px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2" prefetch={false}>
         <span className={`text-2xl font-bold hover:text-gray-300 ${ isScrolled ? "text-white hover:text-red-500" : " text-white"}  transition-colors`}>Catalin.dev</span>
        </Link>
        <nav className="hidden md:flex gap-6 items-center">
          <Link
            href="#skills"
            className={`text-xl font-bold hover:text-gray-300 ${ isScrolled ? "text-white hover:text-red-500" : " text-white"}  transition-colors`}
            prefetch={false}
          >
            Skills
          </Link>
          <Link
            href="#projects"
            className={`text-xl font-bold hover:text-gray-300 ${ isScrolled ? "text-white hover:text-red-500" : " text-white "}  transition-colors`}
            prefetch={false}
          >
            Projects
          </Link>
          <Link
            href="#contact"
            className={`text-xl font-bold hover:text-gray-300 ${ isScrolled ? "text-white hover:text-red-500" : " text-white"}  transition-colors`}
            prefetch={false}
          >
            Contact
          </Link>
            <Link
            href="#about"
            className={`text-xl font-bold hover:text-gray-300 ${ isScrolled ? "text-white hover:text-red-500" : " text-white"}  transition-colors`}
            prefetch={false}
          >
            About Me
          </Link>
             
          
         
         
        </nav>
        <Sheet>
          <SheetTrigger asChild>
  
              <MenuIcon className="h-8 w-8 cursor-pointer text-white md:hidden" />
     
          </SheetTrigger>
          <SheetContent side="left" className="bg-gray-900 shadow-md [&>button]:text-white [&>button]:border-4  ">
            <div className="grid gap-4 p-4">
              <Link href="/" className="flex items-center gap-2 mb-4" prefetch={false}>
                <MountainIcon className="h-6 w-6 text-white" />
              </Link>
             <Link
            href="#"
            className="text-xl font-bold text-gray-200 hover:text-rose-600  transition-colors"
            prefetch={false}
          >
            Skills
          </Link>
          <Link
            href="#projects"
            className="text-xl font-bold text-gray-200 hover:text-rose-600  transition-colors"
            prefetch={false}
          >
            Projects
          </Link>
          <Link
            href="#contact"
            className="text-xl font-bold text-gray-200 hover:text-rose-600 transition-colors"
            prefetch={false}
          >
            Contact
          </Link>
            <Link
            href="#about"
            className="text-xl font-bold text-gray-200 hover:text-rose-600 transition-colors"
            prefetch={false}
          >
            About Me
          </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
