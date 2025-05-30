// Utility-Focused with Search and User Icon
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, UserCircle, ShoppingBag, Menu } from "lucide-react"
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"

export default function Navbar6() {
  const navLinks = [
    { href: "#", label: "Deals" },
    { href: "#", label: "New Arrivals" },
    { href: "#", label: "Categories" },
    { href: "#", label: "Support" },
  ]
  return (
    <header className="border-b bg-gray-50 dark:bg-gray-900">
      {/* Top bar for secondary info - optional */}
      <div className="bg-gray-100 dark:bg-gray-800 py-1 text-xs text-center text-gray-600 dark:text-gray-400">
        Free shipping on orders over $50!
      </div>
      <div className="container mx-auto px-4 md:px-6 py-3">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-2" prefetch={false}>
            <ShoppingBag className="h-7 w-7 text-purple-600" />
            <span className="text-xl font-bold text-gray-800 dark:text-gray-100">ShopSphere</span>
          </Link>

          <div className="hidden lg:flex flex-1 max-w-md items-center">
            <Input type="search" placeholder="Search products..." className="rounded-r-none focus:border-purple-500" />
            <Button type="submit" size="icon" className="rounded-l-none bg-purple-600 hover:bg-purple-700">
              <Search className="h-5 w-5 text-white" />
            </Button>
          </div>

          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="icon"
              className="hidden sm:inline-flex text-gray-600 dark:text-gray-400 hover:text-purple-600"
            >
              <UserCircle className="h-6 w-6" />
              <span className="sr-only">Account</span>
            </Button>
            <Button variant="ghost" size="icon" className="text-gray-600 dark:text-gray-400 hover:text-purple-600">
              <ShoppingBag className="h-6 w-6" />
              <span className="sr-only">Cart</span>
            </Button>
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="lg:hidden text-gray-600 dark:text-gray-400 hover:text-purple-600"
                >
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent className="bg-gray-50 dark:bg-gray-900">
                <div className="p-4">
                  <Link href="/" className="flex items-center gap-2 mb-6" prefetch={false}>
                    <ShoppingBag className="h-7 w-7 text-purple-600" />
                    <span className="text-xl font-bold">ShopSphere</span>
                  </Link>
                  <div className="flex items-center mb-4">
                    <Input
                      type="search"
                      placeholder="Search products..."
                      className="rounded-r-none focus:border-purple-500"
                    />
                    <Button type="submit" size="icon" className="rounded-l-none bg-purple-600 hover:bg-purple-700">
                      <Search className="h-5 w-5 text-white" />
                    </Button>
                  </div>
                  <nav className="grid gap-3">
                    {navLinks.map((link) => (
                      <Link
                        key={link.label}
                        href={link.href}
                        className="font-medium hover:text-purple-600 py-1"
                        prefetch={false}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </nav>
                  <Button
                    variant="ghost"
                    className="w-full justify-start gap-2 mt-6 text-gray-600 dark:text-gray-400 hover:text-purple-600"
                  >
                    <UserCircle className="h-6 w-6" /> Account
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
      {/* Bottom bar for main navigation */}
      <nav className="hidden lg:flex bg-white dark:bg-gray-850 border-t dark:border-gray-700 py-2">
        <div className="container mx-auto px-4 md:px-6 flex justify-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400"
              prefetch={false}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  )
}
