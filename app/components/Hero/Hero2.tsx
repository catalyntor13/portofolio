import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Hero2() {
  return (
    <section className="w-full py-20 md:py-32 lg:py-40 bg-gradient-to-br from-gray-50 to-slate-100 dark:from-gray-900 dark:to-slate-800">
      <div className="container px-4 md:px-6 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-gray-900 dark:text-gray-50">
            Modern Solutions for a Digital World
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300">
            We craft elegant and effective web experiences that drive growth and engage users. Discover the future of
            digital with us.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-teal-600 hover:bg-teal-700 text-white">
              <Link href="#">Get Started</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-teal-600 text-teal-600 hover:bg-teal-50 dark:border-teal-500 dark:text-teal-500 dark:hover:bg-teal-900/30"
            >
              <Link href="#">Learn More</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
