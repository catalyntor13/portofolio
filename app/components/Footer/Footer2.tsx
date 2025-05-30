import Link from "next/link"
import { MountainIcon } from "lucide-react"

export default function Footer2() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 py-8 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center mb-4 md:mb-0">
          <MountainIcon className="h-6 w-6 mr-2 text-teal-600 dark:text-teal-500" />
          <span className="text-sm text-gray-700 dark:text-gray-300">
            &copy; {new Date().getFullYear()} Acme Inc. All rights reserved.
          </span>
        </div>
        <nav className="flex gap-4 sm:gap-6">
          <Link
            href="#"
            className="text-sm text-gray-600 hover:text-teal-600 dark:text-gray-400 dark:hover:text-teal-500"
            prefetch={false}
          >
            Terms of Service
          </Link>
          <Link
            href="#"
            className="text-sm text-gray-600 hover:text-teal-600 dark:text-gray-400 dark:hover:text-teal-500"
            prefetch={false}
          >
            Privacy Policy
          </Link>
          <Link
            href="#"
            className="text-sm text-gray-600 hover:text-teal-600 dark:text-gray-400 dark:hover:text-teal-500"
            prefetch={false}
          >
            Contact
          </Link>
        </nav>
      </div>
    </footer>
  )
}
