import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowUpRight, MessageCircle } from "lucide-react"

export default function Hero5() {
  return (
    <section className="w-full py-16 md:py-24 lg:py-32 bg-slate-50 dark:bg-slate-900">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          <div className="flex-1 space-y-4 text-center lg:text-left">
            <div className="flex items-center gap-3 justify-center lg:justify-start">
              <Image
                src="/placeholder.svg?width=48&height=48"
                width={48}
                height={48}
                alt="App Logo"
                className="rounded-lg"
              />
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">App Name</h2>
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-gray-900 dark:text-gray-50">
              Revolutionize Your Workflow Today
            </h1>
            <p className="max-w-md text-gray-600 dark:text-gray-400 md:text-lg mx-auto lg:mx-0">
              The essential tool for professionals seeking efficiency and power. Featured on ProductHunt!
            </p>
            <div className="flex flex-col min-[400px]:flex-row gap-3 justify-center lg:justify-start">
              <Button asChild size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
                <Link href="#">
                  Visit Website <ArrowUpRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-orange-500 text-orange-500 hover:bg-orange-50 dark:border-orange-400 dark:text-orange-400 dark:hover:bg-orange-900/30"
              >
                <Link href="#">
                  Join Discussion <MessageCircle className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
          <div className="flex-1 mt-8 lg:mt-0">
            <Image
              src="/placeholder.svg?width=700&height=500"
              width="700"
              height="500"
              alt="App Screenshot"
              className="rounded-xl shadow-2xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
