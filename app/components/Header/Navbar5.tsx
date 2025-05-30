// Bold & Asymmetric with prominent CTA
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Rocket, Menu } from "lucide-react"
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"

export default function Navbar5() {
  const navItems = ["Solutions", "Pricing", "Company", "Blog"]
  return (
    <header className="bg-slate-900 dark:bg-black text-white py-4 shadow-lg">
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group" prefetch={false}>
          <Rocket className="h-7 w-7 text-red-500 group-hover:animate-pulse" />
          <span className="text-xl font-bold tracking-tight">LaunchPad</span>
        </Link>

        <nav className="hidden md:flex items-center gap-5">
          {navItems.map((item) => (
            <Link
              key={item}
              href="#"
              className="text-sm font-medium text-slate-300 hover:text-red-400 transition-colors duration-200"
              prefetch={false}
            >
              {item}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Button asChild className="bg-red-600 hover:bg-red-700 text-white hidden sm:inline-flex">
            <Link href="#">Get Started</Link>
          </Button>
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="md:hidden bg-transparent border-slate-700 hover:bg-slate-800"
              >
                <Menu className="h-6 w-6 text-slate-300" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-slate-900 dark:bg-black text-white border-slate-800">
              <div className="grid gap-4 p-6">
                <Link href="/" className="flex items-center gap-2 mb-6" prefetch={false}>
                  <Rocket className="h-7 w-7 text-red-500" />
                  <span className="text-xl font-bold">LaunchPad</span>
                </Link>
                {navItems.map((item) => (
                  <Link
                    key={item}
                    href="#"
                    className="text-md font-medium text-slate-300 hover:text-red-400 transition-colors duration-200 py-2"
                    prefetch={false}
                  >
                    {item}
                  </Link>
                ))}
                <Button asChild className="w-full bg-red-600 hover:bg-red-700 text-white mt-4">
                  <Link href="#">Get Started</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
