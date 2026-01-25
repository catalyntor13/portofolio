"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import scrollToId from "@/lib/scrollToId";
import { cn } from "@/lib/utils";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detectăm scroll-ul pentru a micșora header-ul ușor
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Projects", href: "projects" },
    { name: "Services", href: "services" },
    { name: "Contact", href: "contact" },
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-4 pointer-events-none" // pointer-events-none pe wrapper ca să poți da click pe laterale
    >
      <div
        className={cn(
          "pointer-events-auto flex items-center justify-between px-6 transition-all duration-300 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl shadow-black/50",
          scrolled ? "w-[90%] md:w-[60%] h-14 bg-slate-950/80" : "w-[95%] md:w-[70%] h-16 bg-slate-950/60"
        )}
      >
        {/* Logo Area */}
        <button
          className="group flex items-center gap-2 cursor-pointer focus:outline-none"
          onClick={() => scrollToId("home", 80, 1200)}
        >
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-500 to-cyan-400 flex items-center justify-center font-bold text-white text-lg shadow-[0_0_15px_rgba(59,130,246,0.5)] group-hover:scale-110 transition-transform">
            P
          </div>
          <span className="font-bold text-lg tracking-tight text-slate-200 group-hover:text-white transition-colors">
            Portofolio
          </span>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => scrollToId(item.href, 80, 1200)}
              className="px-4 cursor-pointer py-2 text-sm font-medium text-slate-400 hover:text-white hover:bg-white/5 rounded-full transition-all duration-300 relative group"
            >
              {item.name}
              {/* Linie fină jos la hover */}
              <span className="absolute bottom-2 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-blue-500 rounded-full transition-all duration-300 group-hover:w-1/2 opacity-0 group-hover:opacity-100" />
            </button>
          ))}
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-slate-300 hover:text-white hover:bg-white/10 rounded-full">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="top" className="w-full h-screen bg-slate-950/95 backdrop-blur-xl border-b border-white/10 p-0">
              <div className="flex flex-col items-center justify-center h-full gap-8">
                <SheetClose className="absolute top-6 right-6 text-slate-400 hover:text-white">

                </SheetClose>
                {navItems.map((item, i) => (
                  <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    key={item.name}
                    onClick={() => {
                      setOpen(false);
                      scrollToId(item.href, 80, 1200);
                    }}
                    className="text-4xl font-bold text-slate-300 hover:text-blue-400 transition-colors tracking-tight"
                  >
                    {item.name}
                  </motion.button>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
}