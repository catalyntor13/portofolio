import Link from "next/link"
import { MountainIcon, Github, Dribbble, Twitter, Youtube } from "lucide-react"

export default function Footer4() {
  return (
    <footer className="bg-gray-950 text-gray-400 py-10">
      <div className="container mx-auto px-4 md:px-6 flex flex-col items-center">
        <Link href="/" className="flex items-center gap-2 mb-6" prefetch={false}>
          <MountainIcon className="h-8 w-8 text-green-400" />
          <span className="text-2xl font-bold text-white">EcoCorp</span>
        </Link>
        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-6 text-sm">
          <Link href="#" className="hover:text-green-300" prefetch={false}>
            Home
          </Link>
          <Link href="#" className="hover:text-green-300" prefetch={false}>
            About
          </Link>
          <Link href="#" className="hover:text-green-300" prefetch={false}>
            Services
          </Link>
          <Link href="#" className="hover:text-green-300" prefetch={false}>
            Portfolio
          </Link>
          <Link href="#" className="hover:text-green-300" prefetch={false}>
            Contact
          </Link>
        </nav>
        <div className="flex gap-5 mb-6">
          <Link href="#" aria-label="Github" className="hover:text-green-300" prefetch={false}>
            <Github className="h-6 w-6" />
          </Link>
          <Link href="#" aria-label="Dribbble" className="hover:text-green-300" prefetch={false}>
            <Dribbble className="h-6 w-6" />
          </Link>
          <Link href="#" aria-label="Twitter" className="hover:text-green-300" prefetch={false}>
            <Twitter className="h-6 w-6" />
          </Link>
          <Link href="#" aria-label="Youtube" className="hover:text-green-300" prefetch={false}>
            <Youtube className="h-6 w-6" />
          </Link>
        </div>
        <p className="text-xs text-gray-500">
          &copy; {new Date().getFullYear()} EcoCorp. Pioneering sustainable solutions.
        </p>
      </div>
    </footer>
  )
}
