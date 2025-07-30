"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import scrollToId from "@/lib/scrollToId";

export default function Header() {

  const [open, setOpen] = useState(false)


  const navItems = [
    { name: "Skills", href: "skills" },
    { name: "Despre", href: "about" },
    { name: "Servicii", href: "services" },
    { name: "Proiecte", href: "projects" },
    { name: "Contact", href: "contact" },
  ];

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 z-50 w-full backdrop-blur-md"
    >
      <div className="container flex h-16 items-center md:justify-around justify-around mt-5">
          <button className="cursor-pointer" onClick={() => scrollToId("home", 80, 1200)}>
          <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="text-2xl font-bold text-green-500 transition-colors hover:text-green-600"
          >
            Portofolio
          </motion.span>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
            >
               <button
            onClick={() => scrollToId(item.href, 80, 1200)} // 80 = înălțime header
            className="text-lg font-bold transition-colors hover:text-green-500 cursor-pointer"
          >
            {item.name}
          </button>
            </motion.div>
          ))}
        </nav>

        {/* Mobile Navigation */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent 
            side="left" className="bg-gradient-to-b from-black to-green-500 border-none w-[250px]">
            <div className="flex flex-col gap-6 py-15 px-5">
              {navItems.map((item) => (
                <Link onClick={() => setOpen(false)}
                  key={item.name}
                  href={item.href}
                  className="text-lg bg-green-600 text-white p-2 rounded-lg font-medium"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </motion.header>
  );
}