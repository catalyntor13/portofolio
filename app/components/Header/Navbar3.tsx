import Link from "next/link"
import { MountainIcon, MenuIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"

export default function NavBar3() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-950/80 backdrop-blur-md">
      <div className="container mx-auto h-16 flex items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2" prefetch={false}>
          <MountainIcon className="h-6 w-6 text-rose-600" />
          <span className="font-semibold text-lg text-gray-800 dark:text-gray-100">BrandName</span>
        </Link>
        <nav className="hidden md:flex gap-6 items-center">
          <Link
            href="#"
            className="text-sm font-medium text-gray-600 hover:text-rose-600 dark:text-gray-400 dark:hover:text-rose-500 transition-colors"
            prefetch={false}
          >
            Solutions
          </Link>
          <Link
            href="#"
            className="text-sm font-medium text-gray-600 hover:text-rose-600 dark:text-gray-400 dark:hover:text-rose-500 transition-colors"
            prefetch={false}
          >
            Customers
          </Link>
          <Link
            href="#"
            className="text-sm font-medium text-gray-600 hover:text-rose-600 dark:text-gray-400 dark:hover:text-rose-500 transition-colors"
            prefetch={false}
          >
            Resources
          </Link>
          <Button asChild className="bg-rose-600 hover:bg-rose-700 text-white">
            <Link href="#">Get a Demo</Link>
          </Button>
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden">
              <MenuIcon className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <div className="grid gap-4 p-4">
              <Link href="/" className="flex items-center gap-2 mb-4" prefetch={false}>
                <MountainIcon className="h-6 w-6 text-rose-600" />
                <span className="font-semibold text-lg">BrandName</span>
              </Link>
              <Link href="#" className="text-sm font-medium hover:text-rose-600" prefetch={false}>
                Solutions
              </Link>
              <Link href="#" className="text-sm font-medium hover:text-rose-600" prefetch={false}>
                Customers
              </Link>
              <Link href="#" className="text-sm font-medium hover:text-rose-600" prefetch={false}>
                Resources
              </Link>
              <Button asChild className="w-full bg-rose-600 hover:bg-rose-700 text-white">
                <Link href="#">Get a Demo</Link>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
