import Link from "next/link"
import { Button } from "@/components/ui/button"
import { PlayCircle } from "lucide-react"

export default function Hero6() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute z-0 w-auto min-w-full min-h-full max-w-none object-cover"
      >
        {/* You would replace this with your actual video source */}
        <source
          src="https://assets.mixkit.co/videos/preview/mixkit-abstract-video-of-a-man-with-headlights-3990-large.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-black/70 z-10" />
      <div className="container px-4 md:px-6 relative z-20 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl text-white">
            Experience the <span className="text-purple-400">Future</span>, Now.
          </h1>
          <p className="text-lg md:text-xl text-gray-200">
            Immersive solutions that captivate and convert. See our technology in action.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild  className="bg-purple-600 hover:bg-purple-700 text-white">
              <Link href="#">
                <PlayCircle className="mr-2 h-6 w-6" />
                Watch Demo
              </Link>
            </Button>
            <Button
              asChild
              
              variant="outline"
              className="border-purple-400 text-purple-300 hover:bg-purple-500/20 hover:text-white"
            >
              <Link href="#">Explore Features</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
