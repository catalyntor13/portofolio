import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"

export default function Hero4() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-950">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="space-y-6">
            <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm font-medium text-green-700 dark:bg-green-900 dark:text-green-300">
              New Release
            </div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900 dark:text-gray-50">
              The Ultimate Platform for Collaboration
            </h1>
            <p className="max-w-[600px] text-gray-600 dark:text-gray-400 md:text-xl">
              Streamline your workflow, connect your teams, and achieve more with our intuitive and powerful platform.
            </p>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                Real-time synchronization
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                Advanced analytics
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                Seamless integrations
              </li>
            </ul>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg" className="bg-green-600 hover:bg-green-700 text-white">
                <Link href="#">Sign Up Free</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="ghost"
                className="text-green-600 hover:bg-green-100 dark:text-green-400 dark:hover:bg-green-900"
              >
                <Link href="#">Request a Demo</Link>
              </Button>
            </div>
          </div>
          <Image
            src="/placeholder.svg?width=600&height=600"
            width="600"
            height="600"
            alt="Collaboration Platform"
            className="mx-auto aspect-square overflow-hidden rounded-xl object-cover"
          />
        </div>
      </div>
    </section>
  )
}
