import Link from "next/link"
import { MountainIcon } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-purple-200 py-20">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <Link href="/" className="inline-block mb-6" prefetch={false}>
          <MountainIcon className="h-10 w-10 text-white" />
          <span className="sr-only">Aura Home</span>
        </Link>
        <p className="text-2xl font-light mb-2">
          Let&apos;s build something <span className="font-semibold text-white">beautiful</span> together.
        </p>
        <p className="text-sm text-purple-300 mb-8">
          Get in touch:{" "}
          <Link href="mailto:torobuisnessro@yahoo.com" className="hover:text-white underline">
            torobuisnessro@yahoo.com
          </Link>
        </p>
    
        <p className="text-xs text-purple-400">
          &copy; {new Date().getFullYear()} Catalin Toro. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
