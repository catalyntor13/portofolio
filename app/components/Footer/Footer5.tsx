import Link from "next/link"
import { MountainIcon } from "lucide-react"

export default function Footer5() {
  return (
    <footer className="bg-white dark:bg-slate-900 border-t dark:border-slate-800 py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h4 className="font-semibold text-gray-800 dark:text-gray-100 mb-3">Product</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="#"
                  className="text-gray-600 hover:text-orange-600 dark:text-gray-400 dark:hover:text-orange-500"
                  prefetch={false}
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-600 hover:text-orange-600 dark:text-gray-400 dark:hover:text-orange-500"
                  prefetch={false}
                >
                  Integrations
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-600 hover:text-orange-600 dark:text-gray-400 dark:hover:text-orange-500"
                  prefetch={false}
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-600 hover:text-orange-600 dark:text-gray-400 dark:hover:text-orange-500"
                  prefetch={false}
                >
                  Changelog
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 dark:text-gray-100 mb-3">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="#"
                  className="text-gray-600 hover:text-orange-600 dark:text-gray-400 dark:hover:text-orange-500"
                  prefetch={false}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-600 hover:text-orange-600 dark:text-gray-400 dark:hover:text-orange-500"
                  prefetch={false}
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-600 hover:text-orange-600 dark:text-gray-400 dark:hover:text-orange-500"
                  prefetch={false}
                >
                  Press
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-600 hover:text-orange-600 dark:text-gray-400 dark:hover:text-orange-500"
                  prefetch={false}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 dark:text-gray-100 mb-3">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="#"
                  className="text-gray-600 hover:text-orange-600 dark:text-gray-400 dark:hover:text-orange-500"
                  prefetch={false}
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-600 hover:text-orange-600 dark:text-gray-400 dark:hover:text-orange-500"
                  prefetch={false}
                >
                  Documentation
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-600 hover:text-orange-600 dark:text-gray-400 dark:hover:text-orange-500"
                  prefetch={false}
                >
                  Community
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-600 hover:text-orange-600 dark:text-gray-400 dark:hover:text-orange-500"
                  prefetch={false}
                >
                  Support
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 dark:text-gray-100 mb-3">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="#"
                  className="text-gray-600 hover:text-orange-600 dark:text-gray-400 dark:hover:text-orange-500"
                  prefetch={false}
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-600 hover:text-orange-600 dark:text-gray-400 dark:hover:text-orange-500"
                  prefetch={false}
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-600 hover:text-orange-600 dark:text-gray-400 dark:hover:text-orange-500"
                  prefetch={false}
                >
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-10 pt-8 border-t border-gray-200 dark:border-slate-800 flex flex-col sm:flex-row justify-between items-center">
          <Link href="/" className="flex items-center gap-2 mb-4 sm:mb-0" prefetch={false}>
            <MountainIcon className="h-6 w-6 text-orange-500" />
            <span className="text-sm font-semibold text-gray-700 dark:text-gray-200">InnovateX</span>
          </Link>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            &copy; {new Date().getFullYear()} InnovateX Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
