import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Hero3() {
  return (
    <section className="relative w-full h-[70vh] md:h-[80vh] flex items-center justify-center">
      <Image
        src="/placeholder.svg?width=1920&height=1080"
        alt="Background"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 z-0 opacity-50"
      />
      <div className="absolute inset-0 bg-black/60 z-10" />
      <div className="container px-4 md:px-6 relative z-20 text-center">
        <div className="max-w-2xl mx-auto space-y-4">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-white">
            Innovate. Create. Inspire.
          </h1>
          <p className="text-md md:text-lg text-gray-200">
            Join us on a journey to redefine possibilities and build the next generation of technology.
          </p>
          <Button asChild size="lg" className="bg-rose-600 hover:bg-rose-700 text-white">
            <Link href="#">Discover Our Work</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
