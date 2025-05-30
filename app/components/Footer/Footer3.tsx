import Link from "next/link"
import { MountainIcon, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function Footer3() {
  return (
    <footer className="bg-gray-800 text-gray-300 py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4" prefetch={false}>
              <MountainIcon className="h-7 w-7 text-rose-500" />
              <span className="text-xl font-semibold text-white">BrandName</span>
            </Link>
            <p className="text-sm text-gray-400">Crafting digital experiences that matter.</p>
          </div>
          <div>
            <h5 className="font-semibold text-white mb-3">Quick Links</h5>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="hover:text-rose-400" prefetch={false}>
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-rose-400" prefetch={false}>
                  Services
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-rose-400" prefetch={false}>
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-rose-400" prefetch={false}>
                  Careers
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-white mb-3">Resources</h5>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="hover:text-rose-400" prefetch={false}>
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-rose-400" prefetch={false}>
                  Support Center
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-rose-400" prefetch={false}>
                  API Documentation
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-rose-400" prefetch={false}>
                  Sitemap
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-white mb-3">Stay Connected</h5>
            <form className="flex gap-2 mb-4">
              <Input
                type="email"
                placeholder="Your email"
                className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
              />
              <Button type="submit" className="bg-rose-600 hover:bg-rose-700 text-white">
                Subscribe
              </Button>
            </form>
            <div className="flex gap-3">
              <Link href="#" className="text-gray-400 hover:text-rose-400" prefetch={false}>
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-rose-400" prefetch={false}>
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-rose-400" prefetch={false}>
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-rose-400" prefetch={false}>
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} BrandName. All Rights Reserved. Built with passion.</p>
        </div>
      </div>
    </footer>
  )
}
